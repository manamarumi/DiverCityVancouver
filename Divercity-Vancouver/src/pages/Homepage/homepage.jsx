import React, { useEffect, useState } from 'react'
import backgroundImage from "../../assets/homepage_background.jpg";
import homepageIcon from "../../assets/homepage_icon.png";
import { NavLink, useLocation, Link } from 'react-router-dom';
import Navbar from '../../components/navbar';
import { Button } from '../../components/ui/button';


export default function Homepage() {

  const location = useLocation();
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const userId = localStorage.getItem('userid');
    setUserId(userId);
  }, [])
  

  return (
    <div>
      <Navbar/>
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
            {
              !userId ?
            <Link to={'/signup'}>
              <Button className="mt-16 bg-bluee text-l text-white px-20 py-2 rounded-lg shadow-lg">
                Join DiverCity!
              </Button>
            </Link>:<Link to={'/events'}>
              <Button className="mt-16 bg-bluee text-l text-white px-20 py-2 rounded-lg shadow-lg">
                Explore DiverCity!
              </Button>
            </Link>              
            }
            

          </div>
        </div>
      </div>
      </div>
      )
}