import React, { useState, useEffect } from "react";
import { CardContent, Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import { useParams } from 'react-router-dom';
import { LoadingSpinner } from "../../components/spinner";

export default function MonthlyEventView() {
  const { month } = useParams();
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const monthMap = {
    "January": 1,
    "February": 2,
    "March": 3,
    "April": 4,
    "May": 5,
    "June": 6,
    "July": 7,
    "August": 8,
    "September": 9,
    "October": 10,
    "November": 11,
    "December": 12
  };

  const exploreEvent = (id) => {
    navigate(`/events/explore/event/${id}`);
  };  

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true); // Indicate data is loading
      try {
        const eventsRef = collection(db, 'event');
        const eventSnapshot = await getDocs(eventsRef);
        const eventList = [];
        eventSnapshot.forEach((doc) => {
          eventList.push({ id: doc.id, ...doc.data() });
        });
        const numericMonth = monthMap[month];

        // Filter events by the selected month
        const filteredEvents = eventList.filter(event => {
          if (event.start_datetime) {
            const eventDate = event.start_datetime.toDate();
            return eventDate.getMonth() + 1 === numericMonth;
          } else {
            return false;
          }
        });

        setEvents(filteredEvents);
        setLoading(false); // Data loading is complete
      } catch (error) {
        console.error('Error fetching events: ', error);
        setLoading(false); // Set loading to false even if error occurs
      }
    };

    fetchEvents();
  }, [month]);
  
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">Upcoming Events in {month}</h1>
        {loading ? (
          <LoadingSpinner className="text-bluee h-40 w-40 animate-spin"/>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {events.map((event, index) => {
              return (
                <Card className="w-full" key={index} style={{ marginBottom: '20px' }}>
                  <div className="relative h-80">
                    <img
                      alt={`Event ${index + 1}`}
                      className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
                      src={event.event_image}
                    />
                  </div>
                  <CardContent>
                    <h2 className="text-xl font-semibold mt-2">{event.title}</h2>
                    <p className="text-gray-600 mt-2 line-clamp-3">{event.description}</p>
                    <div className="flex justify-between items-center mt-4">
                      <div className="flex items-center space-x-2 text-gray-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                        <span>{event.start_datetime.toDate().toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5"
                        >
                          <line x1="2" x2="5" y1="12" y2="12" />
                          <line x1="19" x2="22" y1="12" y2="12" />
                          <line x1="12" x2="12" y1="2" y2="5" />
                          <line x1="12" x2="12" y1="19" y2="22" />
                          <circle cx="12" cy="12" r="7" />
                        </svg>
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-6 w-6"
                        >
                          <line x1="12" x2="12" y1="2" y2="22" />
                          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                        </svg>
                        <span>{event.isPremium ? `Paid ($${event.price})` : "Free"}</span>
                      </div>
                      <Button
                        className="bg-blue-500 hover:bg-blue-600 text-white"
                        onClick={() => exploreEvent(event.id)}
                        style={{ marginBottom: '20px' }} // Add margin to the button
                      >
                        Explore
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
