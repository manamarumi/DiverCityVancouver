import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import signupImage from '../../assets/signuppics/signupImage.jpg';
import googleIcon from '../../assets/signuppics/googleIcon.png'; // Import the Google icon image

const Signuppage = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex h-[550px] w-[1100px] justify-between bg-white rounded-xl overflow-hidden" style={{ boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px' }}>
        <div className="flex w-2/5">
          <div className="border-r border-gray-200 w-full flex flex-col items-center justify-center space-y-4 px-12 py-8">
            <h1 className="text-2xl font-bold" style={{ color: '#4654A3' }}>Welcome to Join us today!</h1>
            <form className="w-full space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="name">
                  Name:
                </label>
                <Input className="w-full" id="name" placeholder="Your name" type="text" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                  Email:
                </label>
                <Input className="w-full" id="email" placeholder="Your email" type="email" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="password">
                  Password:
                </label>
                <Input className="w-full" id="password" placeholder="Your password" type="password" />
              </div>
              <Button className="w-full" style={{ backgroundColor: '#4654A3' }}>Sign up</Button>
            </form>
            <p className="text-sm text-gray-600">
              Already have an account? <Link to="/login" className="text-blue-600">Login now</Link>
            </p>
            <Button className="w-full border border-gray-400 text-gray-800 font-semibold py-2 rounded-xl" style={{ backgroundColor: 'white', color: '#4654A3' }}>
              <img src={googleIcon} alt="Google Icon" className="w-6 h-6 mr-2" /> {/* Add the Google icon */}
              Sign in with Google
            </Button>
          </div>
        </div>
        <div className="w-3/5 bg-cover bg-center" style={{ backgroundImage: `url(${signupImage})` }} />
      </div>
    </div>
  );
};

export default Signuppage;
