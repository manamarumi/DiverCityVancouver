import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import AdminNavber from "../../components/adminNavber.jsx";
import { Button } from "../../components/ui/button.jsx";
import { Input } from "../../components/ui/input.jsx";

export default function Editevents() {
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchEventsFromFirestore();
  }, []);

  const fetchEventsFromFirestore = async () => {
    try {
      const eventsSnapshot = await getDocs(collection(db, 'event'));
      const eventsData = eventsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      // Sort events by start date
      eventsData.sort((a, b) => new Date(a.start_datetime.toDate()) - new Date(b.start_datetime.toDate()));
      setEvents(eventsData);
    } catch (error) {
      console.error('Error fetching events: ', error);
    }
  };

  const handleSearch = async () => {
    try {
      if (!searchTerm.trim()) {
        // If the search term is empty, fetch all events
        fetchEventsFromFirestore();
        return;
      }

      // Convert search term to lowercase for case-insensitive search
      const searchTermLowerCase = searchTerm.toLowerCase();

      // Fetch events where title or description contains the search term
      const eventsSnapshot = await getDocs(collection(db, 'event'));
      const searchData = eventsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        .filter(event => {
          return event.title.toLowerCase().includes(searchTermLowerCase) || event.description.toLowerCase().includes(searchTermLowerCase);
        });

      // Sort search results by start date
      searchData.sort((a, b) => new Date(a.start_datetime.toDate()) - new Date(b.start_datetime.toDate()));

      setEvents(searchData);
    } catch (error) {
      console.error('Error searching events: ', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <AdminNavber />
      <main className="flex-1 p-5">
        <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-semibold">Edit Events</h2>

        <Link to={'/'}>
            <Button className="bg-bluee rounded-lg shadow-lg h-13">
              <div>
                <div className="flex items-center justify-center">
                  <Signout />
                </div>
                <p>Homepage</p>
              </div>
            </Button>
          </Link>
        </div>
        <div className="my-6 flex">
          <Input
            type="text"
            placeholder="Search title or description"
            className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          
          <Button onClick={handleSearch} className="ml-2 px-4 py-2 bg-bluee text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Search</Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Render Event cards */}
          {events.map(event => (
            <div key={event.id} className="border text-card-foreground bg-white rounded-md shadow">
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                <img
                  src={event.event_image}
                  alt={event.title}
                  className="mb-4 w-full"
                  style={{ aspectRatio: '16 / 9', objectFit: 'cover' }}
                />
                <div className="flex justify-between items-center">
                  <p className="text-sm">{formatDateRange(event.start_datetime.toDate(), event.end_datetime.toDate())}</p>
                  <div>
                    <Link to={`/admin/editevent/${event.id}`}>
                      <Button className="inline-flex items-center justify-center bg-bluee text-white rounded-md text-sm font-medium px-3 py-1 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 hover:bg-blue-600">
                        Edit
                      </Button>
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

function formatDateRange(startDate, endDate) {
  const startDateFormat = startDate.toLocaleDateString();
  const endDateFormat = endDate.toLocaleDateString();
  return `${startDateFormat} - ${endDateFormat}`;
}


function Signout(props) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      height="24"
      width="24"
      {...props}
    >
      <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z" />
      <path d="M10.828.122A.5.5 0 0111 .5V1h.5A1.5 1.5 0 0113 2.5V15h1.5a.5.5 0 010 1h-13a.5.5 0 010-1H3V1.5a.5.5 0 01.43-.495l7-1a.5.5 0 01.398.117zM11.5 2H11v13h1V2.5a.5.5 0 00-.5-.5zM4 1.934V15h6V1.077l-6 .857z" />
    </svg>
  );
}