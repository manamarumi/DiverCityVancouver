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
  !userId ? (
    <div className="flex items-center space-x-4 ml-5">
      <Link to={'/signup'}>
        <Button className="bg-bluee w-24 h-10 px-2 text-l text-white rounded-lg shadow-lg">Sign Up</Button>
      </Link>
      <Link to={'/login'}>
        <Button className="bg-bluee text-l text-white rounded-lg shadow-lg">Login</Button>
      </Link>
    </div>
  ) : (
    <>


      {/* <Link
        to={"/userprofile"}
        className="flex items-left space-x-2 text-white-700 hover:text-white-900"
        href="#"
      >
        <UserIcon className="text-grey-400" />
      </Link> */}


      <NavLink to={'/userprofile'}>
          <Button className={`bg-bluee rounded-lg shadow-lg h-13 ${location.pathname === '/userprofile' ? 'bg-primary' : ''}`}>
            <div>
              <div className="flex items-center justify-center">
                <UserIcon />
              </div>
              <p className="text-white">Profile</p>
            </div>
          </Button>
        </NavLink>


        <NavLink to={'/'}>
          <Button onClick={handleSignOut} className={`bg-bluee rounded-lg shadow-lg h-13 ${location.pathname === '/' ? 'bg-primary' : ''}`}>
            <div>
              <div className="flex items-center justify-center">
                <Signout />
              </div>
              <p className="text-white">Sign out</p>
            </div>
          </Button>
        </NavLink>

    </>
  )
}
      
    </div>
  </nav>
  )
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
