import React, { useState, useEffect } from 'react';
import AdminNavber from "../../components/adminNavber.jsx";
import { Button } from "../../components/ui/button.jsx";
import { Input } from "../../components/ui/input.jsx";
import { Textarea } from "../../components/ui/textarea.jsx";
import { Switch } from "../../components/ui/switch.jsx";
import { Label } from "../../components/ui/label.jsx";
import { Link, useParams } from 'react-router-dom';
import { doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../../firebase';

export default function Editeventsdata() {
  const { id } = useParams();
  const [eventName, setEventName] = useState('');
  const [eventDetails, setEventDetails] = useState('');
  const [eventStart, setEventStart] = useState('');
  const [eventEnd, setEventEnd] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [eventCost, setEventCost] = useState('');
  const [isPremium, setIsPremium] = useState(false);
  const [eventImage, setEventImage] = useState(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [deleteSuccess, setDeleteSuccess] = useState(false);

  useEffect(() => {
    async function fetchEventData() {
      try {
        const eventDoc = await getDoc(doc(db, 'event', id));
        if (eventDoc.exists()) {
          const eventData = eventDoc.data();
          setEventName(eventData.title);
          setEventDetails(eventData.description);
          setEventStart(eventData.start_datetime.toDate().toISOString().slice(0, 16));
          setEventEnd(eventData.end_datetime.toDate().toISOString().slice(0, 16));
          setEventLocation(eventData.location);
          setEventCost(eventData.price);
          setIsPremium(eventData.isPremium);
          setEventImage(eventData.event_image);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching event data: ", error);
      }
    }

    fetchEventData();
  }, [id]);

  const handleUpdate = async () => {
    const updatedEventData = {
      title: eventName,
      description: eventDetails,
      start_datetime: new Date(eventStart),
      end_datetime: new Date(eventEnd),
      location: eventLocation,
      price: eventCost,
      isPremium: isPremium,
      event_image: eventImage,
    };

    try {
      await updateDoc(doc(db, 'event', id), updatedEventData);
      setUploadSuccess(true);
      setTimeout(() => {
        setUploadSuccess(false);
        window.location.href = '/admin/editevent'; // Redirect to editevents page
      }, 1000);
    } catch (error) {
      console.error("Error updating event data: ", error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteDoc(doc(db, 'event', id));
      setDeleteSuccess(true);
      setTimeout(() => {
        setDeleteSuccess(false);
        window.location.href = '/admin/editevent'; // Redirect to editevents page
      }, 1000);
    } catch (error) {
      console.error("Error deleting event data: ", error);
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setEventImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleImageRemove = () => {
    setEventImage(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <AdminNavber />
      <main className="flex-1 p-5">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-semibold">Edit Event</h2>
          <Link to={'/'}>
            <Button className="bg-bluee rounded-lg shadow-lg h-13">
              <div className="flex items-center justify-center">
                <Signout />
                <p>Sign Out</p>
              </div>
            </Button>
          </Link>
        </div>
        <div className='p-5 border border-black rounded-lg'>
          <div className="flex flex-col space-y-4">
            {uploadSuccess && (
              <div className="flex items-center justify-center h-16">
                <p className="text-green-500 text-2xl">Update successful</p>
              </div>
            )}
            {deleteSuccess && (
              <div className="flex items-center justify-center h-16">
                <p className="text-red-500 text-2xl">Event deleted successfully</p>
              </div>
            )}
            <div className="relative flex flex-col items-center justify-center border-dashed border-2 rounded-lg h-96 mb-6">
              {eventImage ? (
                <img src={eventImage} alt="Uploaded Event" className="h-full w-full object-fit rounded-lg" />
              ) : (
                <>
                  <label htmlFor="upload-photo" className="cursor-pointer flex flex-col items-center justify-center">
                    <input type="file" id="upload-photo" name="upload-photo" accept="image/*" onChange={handleImageUpload} className="hidden" />
                    <PlusIcon className="h-24 w-24 text-gray-400 mb-2 cursor-pointer" />
                    <p className="text-gray-400">Click to add picture</p>
                  </label>
                </>
              )}
              {eventImage && (
                <button onClick={handleImageRemove} className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-lg">Remove</button>
              )}
            </div>
            <Input placeholder="Event name" value={eventName} onChange={(e) => setEventName(e.target.value)} />
            <Textarea placeholder="Event details" value={eventDetails} onChange={(e) => setEventDetails(e.target.value)} />
            <div className="grid grid-cols-1 grid-cols-5 gap-4">
              <Input type="datetime-local" className="flex-grow" value={eventStart} onChange={(e) => setEventStart(e.target.value)} />
              <Input type="datetime-local" className="flex-grow" value={eventEnd} onChange={(e) => setEventEnd(e.target.value)} />
              <Input className="flex-grow" placeholder="Event location" value={eventLocation} onChange={(e) => setEventLocation(e.target.value)} />
              <Input className="flex-grow" placeholder="Event cost" value={eventCost} onChange={(e) => setEventCost(e.target.value)} />
              <div className="flex flex-col items-center flex-grow">
                <Switch id="event-premium" checked={isPremium} onCheckedChange={setIsPremium} />
                <Label className="ml-2" htmlFor="event-premium">
                  Is this event premium?
                </Label>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4">              
              <Button variant="outline" className="py-4 px-20" onClick={handleUpdate}>Update</Button>
              <Button variant="outline" className="py-4 px-20" onClick={handleDelete}>Delete</Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
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

function PlusIcon(props) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}
