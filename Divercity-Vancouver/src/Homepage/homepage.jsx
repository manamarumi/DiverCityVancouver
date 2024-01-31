import React from 'react';
import { Input } from "../@/components/ui/input"
import { Button } from "../@/components/ui/button"
import placeholderImage from "../assets/homepage_background.jpg";
import { CalendarIcon, EventIcon, HomeIcon, SearchIcon } from "./Icon.jsx";

export default function Homepage() {
  return (
    <div className="bg-[url('/placeholder.svg?height=465&width=749')] bg-cover bg-center">
      <nav className="bg-bluee backdrop-blur-md py-4">
        <div className="container mx-auto flex items-center justify-between px-4">
          <div className="flex items-center space-x-4 justify-center w-full">
            <Button className="text-white px-4 py-2 rounded-md">
              <div>
                <div className="flex items-center justify-center">
                  <HomeIcon />
                </div>
                <p>Home</p>
              </div>
            </Button>
            <Button className="text-white px-4 py-2 rounded-md">
              <div>
                <div className="flex items-center justify-center">
                  <CalendarIcon />
                </div>
                <p>Calendar</p>
              </div>
            </Button>
            <Button className="text-white px-4 py-2 rounded-md">
              <div>
                <div className="flex items-center justify-center">
                  <EventIcon />
                </div>
                <p>Events</p>
              </div>
            </Button>
            <div className="relative flex-grow">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
              <Input
                className="w-full pl-10 pr-4 py-2 border rounded-full bg-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search"
                type="search"
              />
            </div>
          </div>
          <div className="flex items-center space-x-4 ml-10">
            <Button className="text-white px-4 py-2">Sign Up</Button>
            <Button className="text-white px-4 py-2">Login</Button>
          </div>
        </div>
      </nav>
      <div className="text-center py-20 relative">
        <img src={placeholderImage} alt="Placeholder" className="mx-auto" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-5xl font-bold text-gray-800">DiverCity Vancouver</h1>
          <p className="text-xl text-gray-900 mt-4">The platform for Vancouver events</p>
          <Button className="mt-8 bg-bluee text-white px-6 py-3 rounded-lg shadow-lg">Join DiverCity!</Button>
        </div>
      </div>
    </div>
  )
}




