import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import AdminNavber from "../../components/adminNavber.jsx";

export default function Editevents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEventsFromFirestore();
  }, []);

  const fetchEventsFromFirestore = async () => {
    try {
      const eventsSnapshot = await getDocs(collection(db, 'event'));
      const eventsData = eventsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setEvents(eventsData);
    } catch (error) {
      console.error('Error fetching events: ', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <AdminNavber />
      <main className="flex-1 p-10">
        <h1 className="text-3xl font-semibold mb-6">Edit Events</h1>
        <div className="mb-8">
          <input
            className="flex h-10 border border-input bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full p-4 rounded-md"
            placeholder="Search Event title or contents"
            type="text"
          />
        </div>
        <div className="grid grid-cols-3 gap-6">
          {/* Render Event cards */}
          {events.map(event => (
            <div key={event.id} className="border text-card-foreground bg-white p-4 rounded-md shadow" data-v0-t="card">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">{event.title}</h3>
              </div>
              <div className="p-6">
                <img
                  src={event.event_image}
                  alt={event.title}
                  className="mb-4"
                  width="500"
                  height="300"
                  style={{ aspectRatio: '500 / 300', objectFit: 'cover' }}
                />
                <div className="flex justify-between">
                  <div>
                    <p className="text-sm">Starts date: {event.start_datetime.toDate().toLocaleString()}</p>
                    <p className="text-sm">End date: {event.end_datetime.toDate().toLocaleString()}</p>
                  </div>
                  <div>
                    <Link to={`/postevents/${event.id}`}>
                      <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-4654A3 hover:text-white h-10 px-4 py-2">
                        Edit
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
