import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { doc, getDoc, arrayRemove, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { AvatarImage, Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "../../components/navbar";

// Define UserProfile component
export default function UserProfile() {
  // State to hold the list of bookmarked events
  const [bookmarkedEvents, setBookmarkedEvents] = useState([]);
  const [userData, setUserData] = useState(null);
  const [isSubscribed, setIsSubscribed] = useState(false);
  // Fetch bookmarked events from Firestore on component mount
  useEffect(() => {
    // Function to fetch bookmarked events for the current user
    const fetchBookmarkedEvents = async () => {
      const userId = JSON.parse(localStorage.getItem('userid'));
      const userRef = doc(db, "users", userId);
      const userDoc = await getDoc(userRef);
      if (userDoc.exists()) {
        const userData = userDoc.data();
        setBookmarkedEvents(userData.bookmarkedEvents || []);
        setUserData(userData);
        setIsSubscribed(userData.isSubscribed || false);
      }
    };

    // Call fetch function
    fetchBookmarkedEvents();
  }, []);

  // Return loading indicator if user data is not yet loaded
  if (!userData) {
    return <div>Loading...</div>;
  }

  // Function to handle unbookmarking an event
  const handleUnbookmark = async (eventId) => {
    const userId = JSON.parse(localStorage.getItem('userid'));
    const userRef = doc(db, "users", userId);
    // Remove event ID from bookmarkedEvents array
    await updateDoc(userRef, {
      bookmarkedEvents: arrayRemove(eventId)
    });
    // Update bookmarkedEvents state
    setBookmarkedEvents(bookmarkedEvents.filter(id => id !== eventId));
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex bg-gray-100">
        <nav className="w-64 px-8 py-4 bg-white border-r">
          <div className="flex flex-col space-y-8">
            <div className="space-y-2">
              <Link to={"/userprofile"} className="flex items-center space-x-2 text-gray-700 hover:text-black-900" href="#">
                <UserIcon className="text-gray-400" />
                <span>Profile</span>
              </Link>
              <Link to={"/subscription"} className="flex items-center space-x-2 text-gray-700 hover:text-black-900" href="#">
                <MailboxIcon className="text-gray-400" />
                <span>Subscription</span>
              </Link>
              <Link to={"/changepassword"} className="flex items-center space-x-2 text-gray-700 hover:text-black-900" href="#">
                <LockIcon className="text-gray-400" />
                <span>Password</span>
              </Link>
            </div>
          </div>
        </nav>
        <div className="flex-1 px-16 py-8">
          <div className="flex flex-col space-y-8">
            <Card className="w-full">  
            <CardHeader>
                <CardTitle>{userData.name}</CardTitle>
              </CardHeader>
              <CardContent>               
                <div className="flex space-x-4 items-center">
                  <Avatar className="mt-3" style={{ width: '100px', height: '100px' }}>
                    <AvatarImage alt="Profile picture" src={userData.image} />
                  </Avatar>
                  <div className="flex flex-col">
                    <div>
                      <h3 className="text-lg font-semibold mt-3">{userData.email}</h3>
                      <p className="text-sm text-gray-600 mt-3">
                       {userData.description}
                      </p>
                    </div>
                    <div className="flex items-center mt-4 space-x-4">
                      <Link to={"/edituserprofile"}>
                        <Button className="bg-blue-500 text-white">
                          Edit Profile
                        </Button>
                      </Link>
                      <Badge variant="secondary">{isSubscribed ? "Subscribed" : "Unsubscribed"}</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div>
              <h2 className="text-xl font-semibold mb-4">Bookmarked Events</h2>
              <div className="grid grid-cols-3 gap-4">
                {/* Map over bookmarkedEvents and display each event */}
                {bookmarkedEvents.map(eventId => (
                  <EventCard key={eventId} eventId={eventId} handleUnbookmark={handleUnbookmark} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// EventCard component to display individual bookmarked event
function EventCard({ eventId, handleUnbookmark }) {
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const getEvent = async () => {
      const eventRef = doc(db, "event", eventId);
      const eventDoc = await getDoc(eventRef);
      if (eventDoc.exists()) {
        const eventData = eventDoc.data();
        setEvent({ id: eventDoc.id, ...eventData });
      }
    };

    getEvent();
  }, [eventId]);

  if (!event) {
    return null; // You can render a loading indicator here
  }

  // Function to format date range
  const formatDateRange = (startDateTime, endDateTime) => {
    const startDate = startDateTime.toDate().toLocaleDateString();
    const endDate = endDateTime.toDate().toLocaleDateString();
    return `${startDate} - ${endDate}`;
  };

  return (
    <Card className="mt-4">
      <CardContent>
        <h3 className="text-lg font-semibold mt-2">{event.title}</h3>
        <img
          alt={event.title}
          src={event.event_image}
          className="w-full h-40 object-cover rounded"
        />
        <p className="text-sm text-gray-700">Date: {formatDateRange(event.start_datetime, event.end_datetime)}</p>
        <p className="text-sm text-gray-700">Location: {event.location}</p>
        <div className="flex justify-between items-center mt-4">
          <Link to={`/events/explore/event/${eventId}`} className="text-blue-500 hover:underline">View</Link>
          <button onClick={() => handleUnbookmark(eventId)} className="text-red-500">Unbookmark</button>
        </div>
      </CardContent>
    </Card>
  );
}


// Icon components (unchanged)
function LockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function LogOutIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>
  );
}

function MailboxIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z" />
      <polyline points="15,9 18,9 18,11" />
      <path d="M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2v0" />
      <line x1="6" x2="7" y1="10" y2="10" />
    </svg>
  );
}

function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}