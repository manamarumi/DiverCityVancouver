import React from 'react';
import { Button } from "../../components/ui/button.jsx";
import { Input } from "../../components/ui/input.jsx";
import { CalendarIcon, EventIcon, HomeIcon, SearchIcon } from "./Icon.jsx";
import { Link } from 'react-router-dom';



export default function Calendar() {
    return (
        <div>
        <nav className="bg-bluee py-4">
        <div className="container mx-auto flex items-center justify-between px-4">
          <div className="flex items-center space-x-4 justify-center w-full">
            <Link to={'/'}>
              <Button variant="homepage" className="rounded-lg shadow-lg h-13">
                <div>
                  <div className="flex items-center justify-center">
                    <HomeIcon />
                  </div>
                  <p className="text-white">Home</p>
                </div>
              </Button>
            </Link>
            <Link to={'/calendar'}>
              <Button variant="homepage" className="rounded-lg shadow-lg h-13">
                <div>
                  <div className="flex items-center justify-center">
                    <CalendarIcon />
                  </div>
                  <p className="text-white">Calendar</p>
                </div>
              </Button>
            </Link>
            <Link to={'/events'}>
              <Button variant="homepage" className="rounded-lg shadow-lg h-13">
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
              <Button variant="homepage" className="w-24 h-10 px-2 text-l text-white rounded-lg shadow-lg">Sign Up</Button>
            </Link>
            <Link to={'/login'}>
              <Button variant="homepage" className="text-l text-white rounded-lg shadow-lg">Login</Button>
            </Link>
          </div>
        </div>
      </nav>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold text-center mb-10">Monthly Event Calendar</h1>
        <div className="grid grid-cols-4 gap-6">
          <a className="block rounded-lg shadow-lg bg-white overflow-hidden" href="#">
            <img
              alt="January Event"
              className="w-full"
              height="200"
              src="../src/assets/monthlycalendarpics/january.jpeg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            <div className="p-4 text-center">
              <p className="text-lg font-semibold">January</p>
            </div>
          </a>
          <a className="block rounded-lg shadow-lg bg-white overflow-hidden" href="#">
            <img
              alt="February Event"
              className="w-full"
              height="200"
              src="../src/assets/monthlycalendarpics/february.jpg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            <div className="p-4 text-center">
              <p className="text-lg font-semibold">February</p>
            </div>
          </a>
          <a className="block rounded-lg shadow-lg bg-white overflow-hidden" href="#">
            <img
              alt="March Event"
              className="w-full"
              height="200"
              src="../src/assets/monthlycalendarpics/march.jpg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            <div className="p-4 text-center">
              <p className="text-lg font-semibold">March</p>
            </div>
          </a>
          <a className="block rounded-lg shadow-lg bg-white overflow-hidden" href="#">
            <img
              alt="April Event"
              className="w-full"
              height="200"
              src="../src/assets/monthlycalendarpics/april.jpg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            <div className="p-4 text-center">
              <p className="text-lg font-semibold">April</p>
            </div>
          </a>
          <a className="block rounded-lg shadow-lg bg-white overflow-hidden" href="#">
            <img
              alt="May Event"
              className="w-full"
              height="200"
              src="../src/assets/monthlycalendarpics/may2.jpg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            <div className="p-4 text-center">
              <p className="text-lg font-semibold">May</p>
            </div>
          </a>
          <a className="block rounded-lg shadow-lg bg-white overflow-hidden" href="#">
            <img
              alt="June Event"
              className="w-full"
              height="200"
              src="../src/assets/monthlycalendarpics/june.jpg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            <div className="p-4 text-center">
              <p className="text-lg font-semibold">June</p>
            </div>
          </a>
          <a className="block rounded-lg shadow-lg bg-white overflow-hidden" href="#">
            <img
              alt="July Event"
              className="w-full"
              height="200"
              src="../src/assets/monthlycalendarpics/july.jpg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            <div className="p-4 text-center">
              <p className="text-lg font-semibold">July</p>
            </div>
          </a>
          <a className="block rounded-lg shadow-lg bg-white overflow-hidden" href="#">
            <img
              alt="August Event"
              className="w-full"
              height="200"
              src="../src/assets/monthlycalendarpics/aug.jpeg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            <div className="p-4 text-center">
              <p className="text-lg font-semibold">August</p>
            </div>
          </a>
          <a className="block rounded-lg shadow-lg bg-white overflow-hidden" href="#">
            <img
              alt="September Event"
              className="w-full"
              height="200"
              src="../src/assets/monthlycalendarpics/sept.jpeg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            <div className="p-4 text-center">
              <p className="text-lg font-semibold">September</p>
            </div>
          </a>
          <a className="block rounded-lg shadow-lg bg-white overflow-hidden" href="#">
            <img
              alt="October Event"
              className="w-full"
              height="200"
              src={"../src/assets/monthlycalendarpics/oct.jpg"}
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            <div className="p-4 text-center">
              <p className="text-lg font-semibold">October</p>
            </div>
          </a>
          <a className="block rounded-lg shadow-lg bg-white overflow-hidden" href="#">
            <img
              alt="November Event"
              className="w-full"
              height="200"
              src="../src/assets/monthlycalendarpics/november.jpeg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            <div className="p-4 text-center">
              <p className="text-lg font-semibold">November</p>
            </div>
          </a>
          <a className="block rounded-lg shadow-lg bg-white overflow-hidden" href="#">
            <img
              alt="December Event"
              className="w-full"
              height="200"
              src="../src/assets/monthlycalendarpics/dec.jpg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            <div className="p-4 text-center">
              <p className="text-lg font-semibold">December</p>
            </div>
          </a>
        </div>
      </div>
      </div>
    )
  }