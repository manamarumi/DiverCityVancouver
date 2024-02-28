import React, { useState, useEffect } from 'react';
import AdminNavber from "../../components/adminNavber.jsx";
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';

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
      <main className="flex-1 p-5">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-semibold">Edit Events</h2>
        </div>
        <div className='p-5 border border-black rounded-lg'>
          <div className="flex flex-col space-y-4">
            {/* Render Event cards */}
            {events.map(event => (
              <div key={event.id} className="border border-gray-200 rounded-lg p-4">
                <img src={event.event_image} alt={event.title} className="w-full h-32 object-cover mb-4" />
                <h3 className="text-lg font-semibold">{event.title}</h3>
                <p className="text-gray-500 mb-2">Starts: {event.start_datetime.toDate().toLocaleString()}</p>
                <p className="text-gray-500 mb-2">Ends: {event.end_datetime.toDate().toLocaleString()}</p>
                <Link to={`/postevents/${event.id}`}>
                  <button className="bg-bluee text-white py-2 px-4 rounded-lg">Edit</button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
