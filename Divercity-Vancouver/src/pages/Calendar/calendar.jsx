import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar';

export default function Calendar() {
    return (
        <div>
      <Navbar/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold text-center mb-10">Monthly Event Calendar</h1>
        <div className="grid grid-cols-4 gap-6">          
          <Link to={'/events/January'}>
          <a className="block rounded-lg shadow-lg bg-white overflow-hidden" href="#">
            <img
              alt="January Event"
              className="w-full"
              height="200"
              src="monthlycalendarpics/january.jpeg"
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
          </Link>
          <Link to={'/events/February'}>
          <a className="block rounded-lg shadow-lg bg-white overflow-hidden" href="#">
            <img
              alt="February Event"
              className="w-full"
              height="200"
              src="monthlycalendarpics/february.jpg"
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
          </Link>

          <Link to={'/events/March'}>
          <a className="block rounded-lg shadow-lg bg-white overflow-hidden" href="#">
            <img
              alt="March Event"
              className="w-full"
              height="200"
              src="monthlycalendarpics/march.jpg"
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
          </Link>

          <Link to={'/events/April'}>
          <a className="block rounded-lg shadow-lg bg-white overflow-hidden" href="#">
            <img
              alt="April Event"
              className="w-full"
              height="200"
              src="monthlycalendarpics/april.jpg"
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
          </Link>

          <Link to={'/events/May'}>
          <a className="block rounded-lg shadow-lg bg-white overflow-hidden" href="#">
            <img
              alt="May Event"
              className="w-full"
              height="200"
              src="monthlycalendarpics/may2.jpg"
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
          </Link>


          <Link to={'/events/June'}>

          <a className="block rounded-lg shadow-lg bg-white overflow-hidden" href="#">
            <img
              alt="June Event"
              className="w-full"
              height="200"
              src="monthlycalendarpics/june.jpg"
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
          </Link>

          <Link to={'/events/July'}>

          <a className="block rounded-lg shadow-lg bg-white overflow-hidden" href="#">
            <img
              alt="July Event"
              className="w-full"
              height="200"
              src="monthlycalendarpics/july.jpg"
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
          </Link>

          <Link to={'/events/August'}>
          <a className="block rounded-lg shadow-lg bg-white overflow-hidden" href="#">
            <img
              alt="August Event"
              className="w-full"
              height="200"
              src="monthlycalendarpics/aug.jpeg"
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
          </Link>

          <Link to={'/events/September'}>
          <a className="block rounded-lg shadow-lg bg-white overflow-hidden" href="#">
            <img
              alt="September Event"
              className="w-full"
              height="200"
              src="monthlycalendarpics/sept.jpeg"
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
          </Link>

          <Link to={'/events/October'}>
          <a className="block rounded-lg shadow-lg bg-white overflow-hidden" href="#">
            <img
              alt="October Event"
              className="w-full"
              height="200"
              src={"monthlycalendarpics/oct.jpg"}
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
          </Link>

          <Link to={'/events/November'}>
          <a className="block rounded-lg shadow-lg bg-white overflow-hidden" href="#">
            <img
              alt="November Event"
              className="w-full"
              height="200"
              src="monthlycalendarpics/november.jpeg"
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
          </Link>

          <Link to={'/events/December'}>
          <a className="block rounded-lg shadow-lg bg-white overflow-hidden" href="#">
            <img
              alt="December Event"
              className="w-full"
              height="200"
              src="monthlycalendarpics/dec.jpg"
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
          </Link>
        </div>
      </div>
      </div>
    )
  }
