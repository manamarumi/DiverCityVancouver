import React, { useState, useEffect} from "react";
import { CardHeader, CardContent, Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar";
import canadaday from "../../assets/monthlycalendarpics/canadaday.jpg";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import { useParams } from 'react-router-dom';



export default function MonthlyEventView() {  
  const { month } = useParams();
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();
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
      try {
        const eventsRef = collection(db, 'event'); // Reference to the 'events' collection
        const eventSnapshot = await getDocs(eventsRef); // Fetch documents from the collection
        
        const eventList = []; // Array to hold the events

        eventSnapshot.forEach((doc) => {
          // Extract data from each document and add it to the eventList array
          eventList.push({ id: doc.id, ...doc.data() });
        });
        const numericMonth = monthMap[month];
        console.log(numericMonth)
   

        // Filter events by the selected month
        const filteredEvents = eventList.filter(event => {

          if (event.start_datetime) {

            const eventDate = event.start_datetime.toDate();
            return eventDate.getMonth() + 1 === numericMonth;
            
          } else {
            return false;
          }
        });
        // Set the filtered events state
        setEvents(filteredEvents);
      } catch (error) {
        console.error('Error fetching events: ', error);
      }
    };

    fetchEvents();
  }, [month]);


  return (
    <div>
      <Navbar />
      <div className="max-w-5xl mx-auto p-8">
        <div className="flex items-center space-x-4 mb-10">
          <Link to={"/calendar"}>
            <ArrowLeftIcon className="text-blue-500 h-6 w-6" />
          </Link>
          <h1 className="text-3xl font-bold">Upcoming Events in {month}</h1>
        </div>
        <div className="grid grid-cols-1 gap-6">
          {events.map((event, index) => {
            return (
              <Card className="w-full" key={index} display = "flex">
                
                
                <img
  alt={`Event ${index + 1}`}
  className="w-full rounded-t-lg"
  height="200"
  src={event.event_image}
  style={{
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  }}
  width="300"
/>





                  <CardContent>
                    <h2 className="text-xl font-semibold mt-2">
                      {event.title}
                    </h2>
                    <p className="text-gray-600 mt-2">{event.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <ClockIcon className="h-5 w-5 text-gray-500" />
                        <span>{event.start_datetime.toDate().toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <LocateIcon className="h-5 w-5 text-gray-500" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CurrencyIcon className="h-5 w-5 text-gray-500" />
                        <span>{event.isPremium ? "Paid" : "Free"}</span>
                      </div>
                      <Button
                        className="bg-blue-500 hover:bg-blue-600 text-white"
                        onClick={() => exploreEvent(event.id)}
                      >
                        Explore
                      </Button>
                    </div>
                  </CardContent>
             
              </Card>
            );
          })}
        </div>
      </div>
    </div>
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

function CurrencyIcon(props) {
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
      <circle cx="12" cy="12" r="8" />
      <line x1="3" x2="6" y1="3" y2="6" />
      <line x1="21" x2="18" y1="3" y2="6" />
      <line x1="3" x2="6" y1="21" y2="18" />
      <line x1="21" x2="18" y1="21" y2="18" />
    </svg>
  );
}

function LocateIcon(props) {
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
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  );
}