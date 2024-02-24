import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar";

export default function ExploreNews() {
  return (
    <div>
      <Navbar />
      <div key="1" className="max-w-7xl mx-auto">
        <div className="flex items-center space-x-4">
        <Link to={'/home'} >
        <ArrowLeftIcon className="text-blue-500 h-6 w-6" />
        </Link>
        </div>
        <div className="my-6">
          <img
            alt="Event"
            className="rounded-lg"
            height="300"
            src="/placeholder.svg"
            style={{
              aspectRatio: "1343/300",
              objectFit: "cover",
            }}
            width="1343"
          />
        </div>
        <h1 className="text-4xl font-bold">Canada Cup, Vancouver</h1>
        <p className="mt-4 text-lg">
          The Canada Cup International Softball Championship is operated by the
          Canadian Amateur Sport Society, a registered not-for-profit society
          dedicated to advocating and encouraging the development of the sport
          of softball by staging a first class, family oriented elite
          international fastpitch event.
        </p>
        <div className="flex flex-wrap items-center gap-4 mt-6">
          <button className="p-2">
            <BookmarkIcon className="h-6 w-6" />
          </button>
          <button className="p-2">
            <HeartIcon className="h-6 w-6" />
          </button>
          <span>72</span>
        </div>
      </div>
    </div>
  );
}

function BookmarkIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
    </svg>
  );
}

function ArrowLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
}

function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

