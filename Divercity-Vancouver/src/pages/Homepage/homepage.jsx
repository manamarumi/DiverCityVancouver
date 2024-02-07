import React from 'react';
import { Input } from  "../../components/ui/input";
import { Button } from "../../components/ui/button";
import backgroundImage from "../../assets/homepage_background.jpg";
import homepageIcon from "../../assets/homepage_icon.png";
import { CalendarIcon, EventIcon, HomeIcon, SearchIcon } from "../../components/homepageIcon.jsx";
import { Link } from 'react-router-dom';



export default function Homepage() {
  return (
    <div>
      <nav className="bg-bluee py-4">
        <div className="container mx-auto flex items-center justify-between px-4">
          <div className="flex items-center space-x-4 justify-center w-full">
            <Link to={'/'}>
              <Button className="bg-bluee rounded-lg shadow-lg h-13">
                <div>
                  <div className="flex items-center justify-center">
                    <HomeIcon />
                  </div>
                  <p className="text-white">Home</p>
                </div>
              </Button>
            </Link>
            <Link to={'/calendar'}>
              <Button className="bg-bluee rounded-lg shadow-lg h-13">
                <div>
                  <div className="flex items-center justify-center">
                    <CalendarIcon />
                  </div>
                  <p className="text-white">Calendar</p>
                </div>
              </Button>
            </Link>
            <Link to={'/events'}>
              <Button className="bg-bluee rounded-lg shadow-lg h-13">
                <div>
                  <div className="flex items-center justify-center">
                    <EventIcon />
                  </div>
                  <p className="text-white">Events</p>
                </div>
              </Button>
            </Link>
            <div className="relative flex-grow">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
              <Input
                className="w-full pl-10 pr-4 py-2 border rounded-full bg-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search"
                type="search"
              />
            </div>
          </div>
          <div className="flex items-center space-x-4 ml-5">
            <Link to={'/signup'}>
              <Button className="bg-bluee w-24 h-10 px-2 text-l text-white rounded-lg shadow-lg">Sign Up</Button>
            </Link>
            <Link to={'/login'}>
              <Button className="bg-bluee text-l text-white rounded-lg shadow-lg">Login</Button>
            </Link>
          </div>
        </div>
      </nav>
      <div className="text-center relative">
        <img src={backgroundImage} alt="Placeholder" className="mx-auto w-full" />      
        <img src={homepageIcon} alt="Placeholder" className="bg-transparent mx-auto w-full max-w-250 absolute top-20 left-1/2 transform -translate-x-1/2" style={{ width: '100%', maxWidth: '250px' }} />      
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">                  
          <h1 className="text-7xl font-bold text-gray-800">DiverCity Vancouver</h1>
          <p className="text-3xl text-gray-900 mt-4">The platform for Vancouver events</p>          
          <Link to={'/signup'}>
            <Button className="mt-16 bg-bluee text-l text-white px-20 py-2 rounded-lg shadow-lg">Join DiverCity!</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}




