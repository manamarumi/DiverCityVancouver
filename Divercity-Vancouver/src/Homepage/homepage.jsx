import { Input } from "../@/components/ui/input"
import { Button } from "../@/components/ui/button"
import placeholderImage from "../assets/homepage_background.jpg";

export default function Component() {
  return (
    <div className="bg-[url('/placeholder.svg?height=465&width=749')] bg-cover bg-center">
      <nav className="bg-bluee backdrop-blur-md py-4">
        <div className="container mx-auto flex items-center justify-between px-4">
          <div className="flex items-center space-x-4 justify-center w-full">
            <Button className="text-white px-4 py-2 rounded-md">
              <div>
                <div className="flex items-center justify-center">
                  <HomeIcon />
                </div>
                <p>Home</p>
              </div>
            </Button>
            <Button className="text-white px-4 py-2 rounded-md">
              <div>
                <div className="flex items-center justify-center">
                  <CalendarIcon />
                </div>
                <p>Calendar</p>
              </div>
            </Button>
            <Button className="text-white px-4 py-2 rounded-md">
              <div>
                <div className="flex items-center justify-center">
                  <EventIcon />
                </div>
                <p>Events</p>
              </div>
            </Button>
            <div className="relative flex-grow">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
              <Input
                className="w-full pl-10 pr-4 py-2 border rounded-full bg-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search"
                type="search"
              />
            </div>
          </div>
          <div className="flex items-center space-x-4 ml-10">
            <Button className="text-white px-4 py-2">Sign Up</Button>
            <Button className="text-white px-4 py-2">Login</Button>
          </div>
        </div>
      </nav>
      <div className="text-center py-20 relative">
        <img src={placeholderImage} alt="Placeholder" className="mx-auto" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-5xl font-bold text-gray-800">DiverCity Vancouver</h1>
          <p className="text-xl text-gray-900 mt-4">The platform for Vancouver events</p>
          <Button className="mt-8 bg-bluee text-white px-6 py-3 rounded-lg shadow-lg">Join DiverCity!</Button>
        </div>
      </div>
    </div>
  )
}

function CalendarIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M3 9H21M7 3V5M17 3V5M6 12H8M11 12H13M16 12H18M6 15H8M11 15H13M16 15H18M6 18H8M11 18H13M16 18H18M6.2 21H17.8C18.9201 
    21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903
     5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 
     3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"/>
    </svg>
  )
}

function EventIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" width="24" height="24" fill="white" stroke="#FFFFFF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <g>
        <g>
          <path d="M147.554,170.746L0,512l341.254-147.555L147.554,170.746z M64.137,447.863l15.725-36.368l4.468,27.637L64.137,447.863z M115.968,425.451L104.5,354.515l33.476-77.419l20.979,129.768L115.968,425.451z M190.592,393.184l-25.484-157.628l54.86,54.86    l13.61,84.181L190.592,393.184z M260.345,330.793l22.502,22.502l-17.631,7.623L260.345,330.793z" />
        </g>
      </g>
      <g>
        <g>
          <rect x="272.366" y="174.788" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -41.5341 282.7197)" />
        </g>
      </g>
      <g>
        <g>
          <path d="M346.792,253.384c-23.406,5.333-44.55,16.926-61.15,33.526l23.628,23.628c27.241-27.242,65.939-31.318,92.204-23.272 l9.787-31.951C391.197,249.17,368.3,248.483,346.792,253.384z" />
        </g>
      </g>
      <g>
        <g>
          <path d="M256.683,100.738l-31.951,9.787c8.046,26.266,3.971,64.962-23.27,92.204l23.628,23.628 c16.6-16.599,28.193-37.745,33.524-61.15C263.516,143.698,262.83,120.803,256.683,100.738z" />
        </g>
      </g>
      <g>
        <g>
          <polygon points="446.625,105.212 415.881,96.119 406.788,65.375 383.541,87.454 352.369,79.956 359.867,111.128 337.788,134.374 368.532,143.468 377.626,174.211 400.872,152.133 432.044,159.63 424.546,128.459   " />
        </g>
      </g>
      <g>
        <g>
          <polygon points="512,267.991 481.256,258.899 472.163,228.154 448.916,250.233 417.745,242.736 425.242,273.908 403.164,297.154 433.907,306.247 443.001,336.99 466.248,314.913 497.419,322.41 489.921,291.238   " />
        </g>
      </g>
      <g>
        <g>
          <polygon points="283.846,39.837 253.101,30.744 244.009,0 220.762,22.079 189.59,14.581 197.087,45.752 175.008,68.999 205.753,78.093 214.845,108.836 238.092,86.758 269.264,94.255 261.767,63.084   " />
        </g>
      </g>
    </svg>
  )
}


function HomeIcon(props) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="gray"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}



