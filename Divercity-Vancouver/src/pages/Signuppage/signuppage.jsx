import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import signupImage from '../../assets/signuppics/signupImage.jpg';

const Signuppage = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex h-[500px] w-[900px] justify-between bg-white">
        <div className="flex w-1/2 flex-col items-center justify-center space-y-4 px-12">
          <h1 className="text-2xl font-bold" style={{ color: '#4654A3' }}>Welcome to Join us today!</h1>
          <form className="w-full space-y-4">
            <div>
              <label className="block text-sm font-medium" htmlFor="name">
                Name:
              </label>
              <Input className="w-full" id="name" placeholder="Your name" type="text" />
            </div>
            <div>
              <label className="block text-sm font-medium" htmlFor="email">
                Email:
              </label>
              <Input className="w-full" id="email" placeholder="Your email" type="email" />
            </div>
            <div>
              <label className="block text-sm font-medium" htmlFor="password">
                Password:
              </label>
              <Input className="w-full" id="password" placeholder="Your password" type="password" />
            </div>
            <Button className="w-full" style={{ backgroundColor: '#4654A3' }}>Sign up</Button>
          </form>
          <p className="text-sm">
            Already have an account?
            <Link to="/login" className="text-blue-600">Login now</Link>
          </p>
          <Button className="w-full" variant="outline" style={{ borderColor: '#4654A3', color: '#4654A3' }}>
            Sign in with Google
          </Button>
        </div>
        <div
          className="w-1/2 bg-cover bg-center"
          style={{
            backgroundImage: `url(${signupImage})`,
          }}
        />
      </div>
    </div>
  );
};

export default Signuppage;
