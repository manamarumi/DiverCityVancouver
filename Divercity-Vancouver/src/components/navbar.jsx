import React, { useEffect, useState } from 'react'
import { Input } from  "./ui/input";
import { Button } from "./ui/button";
import { NavLink, useLocation, Link } from 'react-router-dom';
import { CalendarIcon, EventIcon, HomeIcon, ProfileIcon, SearchIcon } from "./homepageIcon.jsx";
import { getAuth, signOut } from "firebase/auth";

export default function Navbar() {

  const location = useLocation();
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const userId = localStorage.getItem('userid');
    setUserId(userId);
  }, [])
  
  const handleSignOut = () => {
    signOut(getAuth())
      .then(() => {
        // Sign-out successful.
        localStorage.removeItem('userid'); // Remove user ID from local storage
        setUserId(null); // Update state to reflect sign-out
        window.location.reload();
      })
      .catch((error) => {
        // An error happened.
        console.error('Sign-out error:', error);
      });
  };
  


  return (
    <nav className="bg-bluee py-4">
    <div className="container mx-auto flex items-center justify-between px-4">
      <div className="flex items-center space-x-4 justify-center w-full">
        <NavLink to={'/'}>
          <Button className={`bg-bluee rounded-lg shadow-lg h-13 ${location.pathname === '/' ? 'bg-primary' : ''}`}>
            <div>
              <div className="flex items-center justify-center">
                <HomeIcon />
              </div>
              <p className="text-white">Home</p>
            </div>
          </Button>
        </NavLink>
        <NavLink to={'/calendar'}>
          <Button className={`bg-bluee rounded-lg shadow-lg h-13 ${location.pathname === '/calendar' ? 'bg-primary' : ''}`}>
            <div>
              <div className="flex items-center justify-center">
                <CalendarIcon />
              </div>
              <p className="text-white">Calendar</p>
            </div>
          </Button>
        </NavLink>
        <NavLink to={'/events'}>
          <Button className={`bg-bluee rounded-lg shadow-lg h-13 ${location.pathname === '/events' ? 'bg-primary' : ''}`}>
            <div>
              <div className="flex items-center justify-center">
                <EventIcon />
              </div>
              <p className="text-white">Events</p>
            </div>
          </Button>
        </NavLink>
        <div className="relative flex-grow">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
          <Input
            className="w-full pl-10 pr-4 py-2 border rounded-full bg-white focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search"
            type="search"
          />
        </div>
      </div>

      {
        !userId ? <div className="flex items-center space-x-4 ml-5">
        <Link to={'/signup'}>
          <Button className="bg-bluee w-24 h-10 px-2 text-l text-white rounded-lg shadow-lg">Sign Up</Button>
        </Link>
        <Link to={'/login'}>
          <Button className="bg-bluee text-l text-white rounded-lg shadow-lg">Login</Button>
        </Link>
      </div> : 
      // <ProfileIcon /> 
        <Button onClick={handleSignOut}>Sign out</Button>

      }
      
    </div>
  </nav>
  )
}
