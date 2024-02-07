import React from "react";
import { TEInput, TERipple } from "tw-elements-react";

const signuppage = () => {
  return (
    <section className="mt-10 flex justify-center items-center h-screen">
      {/* Left column container with register information */}
      <div className="w-1/2 px-6">
        <h1 className="text-3xl mb-4">Welcome to Join us today!</h1>
        <div className="mb-4">
          <label className="block mb-2">Name:</label>
          <TEInput type="text" size="lg" className="w-full" />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Email:</label>
          <TEInput type="email" size="lg" className="w-full" />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Password:</label>
          <TEInput type="password" size="lg" className="w-full" />
        </div>
        <TERipple rippleColor="light" className="w-full mb-4">
          <button
            type="button"
            className="bg-primary text-white px-7 py-3 rounded-full uppercase font-medium shadow-md hover:bg-primary-600 focus:outline-none focus:ring focus:ring-primary-400"
          >
            Sign up
          </button>
        </TERipple>
        <p>
          Already have an account?{" "}
          <a href="#!" className="text-primary">
            Login now
          </a>
        </p>
        <button className="mt-4 bg-white text-black px-7 py-3 rounded-full uppercase font-medium shadow-md hover:bg-gray-200 focus:outline-none focus:ring focus:ring-gray-400">
          Sign in with Google
        </button>
      </div>

      {/* Right column container with signup image */}
      <div className="w-1/2">
        <img
          src="src/assets/signuppics/signupImage.jpg"
          alt="Signup Image"
          className="max-w-full h-auto"
        />
      </div>
    </section>
  );
};

export default signuppage;
