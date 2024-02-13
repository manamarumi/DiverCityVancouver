
import React from 'react'
import { CardHeader, CardContent, Card } from "../../components/ui/card"
import { Button } from '../../components/ui/button';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar';

export default function MonthlyCalendar() {
  return (
    <div>
    <Navbar/>
    <div className="max-w-5xl mx-auto p-8">
      <div className="flex items-center space-x-4 mb-10">
        <Link to={'/calendar'} >
        <ArrowLeftIcon className="text-blue-500 h-6 w-6" />
        </Link>
        <h1 className="text-3xl font-bold">Upcoming Events in July</h1>
      </div>
      <div className="grid grid-cols-1 gap-6">
        <Card className="w-full">
          <div className="flex">
            <CardHeader>
              <img
                alt="Canada day celebration"
                className="rounded-l-lg"
                height="300"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "500/300",
                  objectFit: "cover",
                }}
                width="300"
              />
            </CardHeader>
            <CardContent>
              <h2 className="text-xl font-semibold mb-2">Canada day, July 1.</h2>
              <p className="text-gray-600 mb-4">
                The Canada Day event returned with in-person concerts and celebrations in 2022. However, the event was
                different from what it was before the pandemic. There were no fireworks that year and there weren't any
                either in 2023 as Vancouver's annual July 1st pyrotechnic show has now been permanently cancelled.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <ClockIcon className="h-5 w-5 text-gray-500" />
                  <span>11:00 AM - 1:00 PM, July 1st, 2024</span>
                </div>
                <div className="flex items-center space-x-2">
                  <LocateIcon className="h-5 w-5 text-gray-500" />
                  <span>Georgia & Broughton, 1234 Georgia St</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CurrencyIcon className="h-5 w-5 text-gray-500" />
                  <span>Free</span>
                </div>
                <Button className="bg-blue-500 hover:bg-blue-600 text-white">Explore</Button>
              </div>
            </CardContent>
          </div>
        </Card>
        <Card className="w-full">
          <div className="flex">
            <CardHeader>
              <img
                alt="Taiwanese Cultural Festival"
                className="rounded-l-lg"
                height="300"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "500/300",
                  objectFit: "cover",
                }}
                width="300"
              />
            </CardHeader>
            <CardContent>
              <h2 className="text-xl font-semibold mb-2">Taiwanese Cultural Festival, July 1 - 3.</h2>
              <p className="text-gray-600 mb-4">
                The fifth annual Taiwanese Canadian Cultural Festival took place in downtown Vancouver on the Canada Day
                weekend and the first week of July. In 2023 the festival ran from June 30th until July 8th. The exact
                dates for the festival in 2024 are to be confirmed.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <ClockIcon className="h-5 w-5 text-gray-500" />
                  <span>11:00 AM - 1:00 PM, July 1st, 2024</span>
                </div>
                <div className="flex items-center space-x-2">
                  <LocateIcon className="h-5 w-5 text-gray-500" />
                  <span>Georgia & Broughton, 1234 Georgia St</span>
                </div>
                <Button className="bg-blue-500 hover:bg-blue-600 text-white">Explore</Button>
              </div>
            </CardContent>
          </div>
        </Card>
        <Card className="w-full">
          <div className="flex">
            <CardHeader>
              <img
                alt="Honda Celebration of lights"
                className="rounded-l-lg"
                height="400"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "500/300",
                  objectFit: "cover",
                }}
                width="300"
              />
            </CardHeader>
            <CardContent>
              <h2 className="text-xl font-semibold mb-2">Honda Celebration of lights, July 4.</h2>
              <p className="text-gray-600 mb-4">
                The fifth annual Taiwanese Canadian Cultural Festival took place in downtown Vancouver on the Canada Day
                weekend and the first week of July. In 2023 the festival ran from June 30th until July 8th. The exact
                dates for the festival in 2024 are to be confirmed.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <ClockIcon className="h-5 w-5 text-gray-500" />
                  <span>11:00 AM - 1:00 PM, July 1st, 2024</span>
                </div>
                <div className="flex items-center space-x-2">
                  <LocateIcon className="h-5 w-5 text-gray-500" />
                  <span>Georgia & Broughton, 1234 Georgia St</span>
                </div>
                <Button className="bg-blue-500 hover:bg-blue-600 text-white">Explore</Button>
              </div>
            </CardContent>
          </div>
        </Card>
      </div>
    </div> 
    </div>
  )
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
  )
}


function ClockIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}


function CurrencyIcon(props) {
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
      <circle cx="12" cy="12" r="8" />
      <line x1="3" x2="6" y1="3" y2="6" />
      <line x1="21" x2="18" y1="3" y2="6" />
      <line x1="3" x2="6" y1="21" y2="18" />
      <line x1="21" x2="18" y1="21" y2="18" />
    </svg>
  )
}


function LocateIcon(props) {
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
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  )
}
