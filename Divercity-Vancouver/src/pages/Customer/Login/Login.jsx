import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import placeholder from '../../../assets/signuppics/signupImage.jpg';

import { Link } from 'react-router-dom';

export default function Login() {

  // State for email and password inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic for handling form submission
    console.log("Login form submitted:", { email, password });
  };

  return (

    <div className="flex min-h-screen bg-gray-100">
      {/* Render the image on the left side */}
      <div className="relative w-0 flex-1 hidden lg:block">
        <img
          alt="Background"
          className="absolute inset-0 h-full w-full object-cover"
          src={placeholder}
          style={{
            aspectRatio: "1070/660",
            objectFit: "cover",
          }}
        />
      </div>

      {/* Render the login form content on the right side */}
      <div className="flex flex-col justify-center flex-1 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="w-full max-w-lg mx-auto lg:w-96">
          <div>
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Welcome back</h2>
          </div>
          <div className="mt-8">
            <div className="mt-6">
              <form action="#" className="space-y-6" method="POST">
                {/* Input fields */}
                <div>
                  <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                    Email address
                  </label>
                  <div className="mt-1">
                    <Input autoComplete="email" id="email" name="email" placeholder="email" required type="email" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700" htmlFor="password">
                    Password
                  </label>
                  <div className="mt-1">
                    <Input
                      autoComplete="current-password"
                      id="password"
                      name="password"
                      placeholder="password"
                      required
                      type="password"
                    />
                  </div>
                </div>

                {/* Forgot password and admin login links */}
                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <Link className="font-medium text-indigo-600 hover:text-indigo-500" href="#">
                      Forgot your password?
                    </Link>
                  </div>
                  <div className="text-sm">
                    <Link className="font-medium text-red-500 hover:text-red-300" to={'/admin'}>
                      Login as Admin
                    </Link>
                  </div>
                </div>

                {/* Login button */}
                <div>
                  <Button className="w-full">Login</Button>
                </div>
              </form>
              {/* Continue with text */}
              <div className="mt-6 relative">
                <div aria-hidden="true" className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
              </div>
              {/* Social login icons */}
              <div className="mt-6 grid grid-cols-2 gap-3">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
