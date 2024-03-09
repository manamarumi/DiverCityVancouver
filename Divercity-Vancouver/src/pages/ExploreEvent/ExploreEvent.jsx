import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/navbar";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

export default function ExploreEvent() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const getEvent = async () => {
      const eventRef = doc(db, "event", id);
      const eventDoc = await getDoc(eventRef);
      if (eventDoc.exists()) {
        setEvent({ id: eventDoc.id, ...eventDoc.data() });
      } else {
        // Handle event not found
        console.log("Event not found");
      }
    };

    getEvent();
  }, [id]);

  if (!event) {
    return <div>Loading...</div>; // You can display a loader while fetching the event
  }

  return (
    <div>
      <Navbar />
      <div key={event.id} className="max-w-7xl mx-auto">
        <div className="flex items-center space-x-4">
          <Link to={"/events"}>
            <ArrowLeftIcon className="text-blue-500 h-6 w-6" />
          </Link>
        </div>
        <div className="my-6">
          <img
            alt="Event"
            className="rounded-lg"
            height="300"
            src={event.event_image}
            style={{
              aspectRatio: "1343/300",
              objectFit: "cover",
            }}
            width="1343"
          />
          <h1 className="text-4xl font-bold">{event.title}</h1>
          <p className="mt-4 text-lg">{event.description}</p>
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
            <p className="ml-2">{event.isPremium ? "Paid" : "Free"}</p>
          </div>
          <div className="flex items-center">
            <button className="p-2">
              <BookmarkIcon className="h-6 w-6" />
            </button>
          </div>
          <div className="flex items-center">
            <button className="p-2">
              <HeartIcon className="h-6 w-6" />
            </button>
            <span className="ml-1">72</span>
          </div>
        </div>
        </div>
      </div>
    </div>
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