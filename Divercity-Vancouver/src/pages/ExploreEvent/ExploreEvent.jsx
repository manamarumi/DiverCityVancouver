import React, { useState, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/navbar";
import { doc, getDoc, updateDoc, increment, arrayUnion, arrayRemove } from "firebase/firestore";
import { db } from "../../firebase";

export default function ExploreEvent() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const eventRef = useRef(null);

  useEffect(() => {
    const getEvent = async () => {
      eventRef.current = doc(db, "event", id); // Store eventRef in useRef
      const eventDoc = await getDoc(eventRef.current);
      if (eventDoc.exists()) {
        const eventData = eventDoc.data();
        setEvent({ id: eventDoc.id, ...eventData });
        setLikes(eventData.likes || 0);
        // Check if event is bookmarked by the current user
        // Assuming user ID is stored in localStorage
        const userId = JSON.parse(localStorage.getItem('userid'));
        if (userId) {
          const userDocRef = doc(db, "users", userId);
          const userDoc = await getDoc(userDocRef);
          if (userDoc.exists()) {
            const userData = userDoc.data();
            setIsBookmarked(userData.bookmarkedEvents.includes(id));
            setIsLiked(userData.likedEvents.includes(id)); // Check if the user has liked this event
          }
        }
      } else {
        // Handle event not found
        console.log("Event not found");
      }
    };

    getEvent();

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [id]);

  const handleLike = async () => {
    const userId = JSON.parse(localStorage.getItem('userid'));
    const userRef = doc(db, "users", userId);
    const eventRef = doc(db, "event", id);

    // Check if the user has already liked the event
    if (!isLiked) {
      // If the user hasn't liked the event, update the likes count and add the user's ID to the event's likedBy array
      setLikes(prevLikes => prevLikes + 1);
      setIsLiked(true);

      // Update the like count in the Firestore event document
      await updateDoc(eventRef, {
        likes: increment(1),
        likedBy: arrayUnion(userId) // Store the user ID who liked the event
      });

      // Add the event ID to the user's likedEvents array in Firestore
      await updateDoc(userRef, {
        likedEvents: arrayUnion(id),
        [`likedEvents.${id}`]: true // Store the liked event ID with a true value
      });
    } else {
      // If the user has already liked the event, unlike the event and decrement the likes count
      setLikes(prevLikes => prevLikes - 1);
      setIsLiked(false);

      // Update the like count in the Firestore event document
      await updateDoc(eventRef, {
        likes: increment(-1),
        likedBy: arrayRemove(userId) // Remove the user ID who unliked the event
      });

      // Remove the event ID from the user's likedEvents array in Firestore
      await updateDoc(userRef, {
        likedEvents: arrayRemove(id),
        [`likedEvents.${id}`]: false // Store the liked event ID with a false value
      });
    }
  };



  const handleBookmark = async () => {
    setIsBookmarked(!isBookmarked);
    const userId = JSON.parse(localStorage.getItem('userid'));
    const userRef = doc(db, "users", userId);
    if (isBookmarked) {
      await updateDoc(userRef, {
        bookmarkedEvents: arrayRemove(id)
      });
    } else {
      await updateDoc(userRef, {
        bookmarkedEvents: arrayUnion(id)
      });
    }
  };

  if (!event) {
    return <div>Loading...</div>; // You can display a loader while fetching the event
  }

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-4">
          <Link to={"/"}>
            <ArrowLeftIcon className="mt-3 text-blue-500 h-6 w-6" />
          </Link>
        </div>
        <div className="my-6">
          <img
            alt="Event"
            className="rounded-lg w-full"
            src={event.event_image}
            style={{
              aspectRatio: "1343/300",
              objectFit: "cover",
              height: windowWidth >= 768 ? "80vh" : "auto" // Adjust the height based on window width
            }}
          />
          <h1 className="text-4xl font-bold mt-6">{event.title}</h1>
          <p className="mt-2 text-lg">{event.description}</p>
          <div className="flex justify-between items-center mt-6">
            <div className="flex items-center">
              <ClockIcon className="text-gray-500 h-6 w-6" />
              <p className="ml-2">{event.start_datetime.toDate().toLocaleString()}</p>
            </div>
            <div className="flex items-center">
              <MapPinIcon className="text-gray-500 h-6 w-6" />
              <p className="ml-2">{event.location}</p>
            </div>
            <div className="flex items-center">
              <DollarSignIcon className="text-gray-500 h-6 w-6" />
              <p className="ml-2">{event.isPremium ? `Paid ($${event.price})` : "Free"}</p>
            </div>
            <div className="flex items-center">
              <button className="p-2" onClick={handleLike}>
                <HeartIcon className={`h-6 w-6 ${isLiked ? 'text-red-500' : 'text-gray-500'}`} />
              </button>
              <span className="ml-1">{likes}</span>
            </div>
            <div className="flex items-center">
              <button className="p-2" onClick={handleBookmark}>
                <BookmarkIcon className={`h-6 w-6 ${isBookmarked ? 'text-yellow-500' : 'text-gray-500'}`} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function BookmarkIcon(props) {
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
      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
    </svg>
  );
}

function ClockIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function DollarSignIcon(props) {
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
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

function HeartIcon(props) {
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
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function MapPinIcon(props) {
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
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ArrowLeftIcon(props) {
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
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
}

export { BookmarkIcon, ClockIcon, DollarSignIcon, HeartIcon, MapPinIcon };

