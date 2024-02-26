import React from 'react';
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Link } from 'react-router-dom';
import { CalendarIcon, EventIcon, HomeIcon, SearchIcon, ProfileIcon, HeartIcon } from "../../components/homepageIcon.jsx";
import backgroundImage from "../../assets/homepage_background.jpg";
import homepageIcon from "../../assets/homepage_icon.png";
import { Card, CardContent } from '../../components/ui/card';

export default function userLoginHomepage() {
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
            <Link to={'/profile'}>
              <Button className="bg-bluee rounded-lg shadow-lg h-13">
                <div className="flex flex-col items-center justify-center">
                  <ProfileIcon className="h-6 w-6" /> {/* Adjusted size */}
                  <p className="text-white">Profile</p>
                </div>
              </Button>
            </Link>
          </div>
        </div>
      </nav>
      <div className="relative h-screen bg-cover bg-center flex justify-center items-center">
        <img className="absolute inset-0 h-full w-full object-cover" src={backgroundImage} alt="Background Image" />
        <div className="flex flex-col text-center items-center justify-center z-10">
          <img className="w-64 h-64 mr-8" src={homepageIcon} alt="Left Image" />
          <div className="flex flex-col justify-center items-center text-white">
            <h1 className="text-7xl font-bold text-gray-800">
              DiverCity Vancouver
            </h1>
            <p className="text-3xl text-gray-900 mt-4">
              The platform for Vancouver events
            </p>
            <Link to={'/events'}>
              <Button className="mt-16 bg-bluee text-l text-white px-20 py-2 rounded-lg shadow-lg">
                Explore DiverCity!
              </Button>
            </Link>
          </div>
        </div>
      </div>      
      <main className="p-4">
        <h2 className="text-3xl font-bold text-center mb-6">Trending News</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="w-full">
            <img
              alt="News 1"
              className="w-full rounded-t-lg"
              height="200"
              src="../../src/assets/monthlycalendarpics/dec.jpg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            <CardContent>
              <h3 className="font-bold">News - Title 1</h3>
              <p className="text-gray-600">"Neque porro quisquam est, qui dolorem ipsum quia."</p>
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center">
                  <HeartIcon className="h-6 w-6 text-pink-500" />
                  <span className="ml-1">72</span>
                </div>
                <Button variant="ghost">Read more</Button>
              </div>
            </CardContent>
          </Card>
          <Card className="w-full">
            <img
              alt="News 2"
              className="w-full rounded-t-lg"
              height="200"
              src="../../src/assets/monthlycalendarpics/aug.jpeg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            <CardContent>
              <h3 className="font-bold">News - Title 2</h3>
              <p className="text-gray-600">"Neque porro quisquam est, qui dolorem ipsum quia."</p>
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center">
                  <HeartIcon className="h-6 w-6 text-pink-500" />
                  <span className="ml-1">72</span>
                </div>
                <Button variant="ghost">Read more</Button>
              </div>
            </CardContent>
          </Card>
          <Card className="w-full">
            <img
              alt="News 3"
              className="w-full rounded-t-lg"
              height="200"
              src="../../src/assets/monthlycalendarpics/april.jpg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            <CardContent>
              <h3 className="font-bold">News - Title 3</h3>
              <p className="text-gray-600">"Neque porro quisquam est, qui dolorem ipsum quia."</p>
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center">
                  <HeartIcon className="h-6 w-6 text-pink-500" />
                  <span className="ml-1">72</span>
                </div>
                <Button variant="ghost">Read more</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <main className="p-4">
        <h2 className="text-3xl font-bold text-center mb-6">Most Liked Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="w-full">
            <img 
              alt="News 1"
              className="w-full rounded-t-lg"
              height="200"
              src="../../src/assets/monthlycalendarpics/january.jpeg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            <CardContent>
              <h3 className="font-bold">Events - Title 1</h3>
              <p className="text-gray-600">"Neque porro quisquam est, qui dolorem ipsum quia."</p>
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center">
                  <HeartIcon className="h-6 w-6 text-pink-500" />
                  <span className="ml-1">72</span>
                </div>
                <Button variant="ghost">Read more</Button>
              </div>
            </CardContent>
          </Card>
          <Card className="w-full">
            <img
              alt="News 2"
              className="w-full rounded-t-lg"
              height="200"
              src="../../src/assets/monthlycalendarpics/february.jpg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            <CardContent>
              <h3 className="font-bold">Events - Title 2</h3>
              <p className="text-gray-600">" Neque porro quisquam est, qui dolorem ipsum quia."</p>
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center">
                  <HeartIcon className="h-6 w-6 text-pink-500" />
                  <span className="ml-1">72</span>
                </div>
                <Button variant="ghost">Read more</Button>
              </div>
            </CardContent>
          </Card>
          <Card className="w-full">
            <img
              alt="News 3"
              className="w-full rounded-t-lg"
              height="200"
              src="../../src/assets/monthlycalendarpics/march.jpg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            <CardContent>
              <h3 className="font-bold">Events - Title 3</h3>
              <p className="text-gray-600">"Neque porro quisquam est, qui dolorem ipsum quia."</p>
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center">
                  <HeartIcon className="h-6 w-6 text-pink-500" />
                  <span className="ml-1">72</span>
                </div>
                <Button variant="ghost">Read more</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

