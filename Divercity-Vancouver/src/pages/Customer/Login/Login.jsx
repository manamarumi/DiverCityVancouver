import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

import placeholder from '../../../assets/signuppics/signupImage.jpg';

export default function Loginpage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login form submitted:", { email, password });
    // Add logic for handling form submission
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex h-[550px] w-[1100px] bg-white rounded-xl overflow-hidden shadow-md">
        <div className="flex w-3/5">
          <img src={placeholder} alt="Background" className="w-full h-auto object-cover" />
        </div>
        <div className="flex flex-col justify-center w-2/5 p-8">
          <h1 className="text-2xl font-bold text-center mb-4" style={{ color: '#4654A3' }}>Welcome back</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Your email"
                autoComplete="email"
                value={email}
                onChange={handleEmailChange}
                className="mt-1 w-full"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Your password"
                autoComplete="current-password"
                value={password}
                onChange={handlePasswordChange}
                className="mt-1 w-full"
                required
              />
            </div>
            <div className="flex justify-between items-center">
              <div className="text-sm">
                <Link to="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </Link>
              </div>
              <div className="text-sm">
                <Link to="/admin" className="font-medium text-red-500 hover:text-red-300">
                  Login as Admin
                </Link>
              </div>
            </div>
            <Button type="submit" className="w-full bg-indigo-500 text-white hover:bg-indigo-600" style={{ backgroundColor: '#4654A3' }}>
              Login
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
