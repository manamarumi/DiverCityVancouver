import Navbar from '../../../components/navbar';
import { Button } from "@/components/ui/button"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { CardContent, Card } from "@/components/ui/card"

export default function Profile() {
  return (
    <div>
    <Navbar/>
    <div className="bg-gray-100 min-h-screen">
      <div className="flex">
        <div className="w-64 h-screen bg-white p-5">
        <nav className="flex flex-row flex-col">
            <a className="flex py-2 text-sm font-medium text-gray-900 hover:text-gray-700">
                <div>
                <ProfileIcon className="mr-3 h-5 w-5 text-gray-400" />
                <span className='font-semibold'>
                Profile
                </span>
                </div>
                </a>
            <a className="flex py-2 text-sm font-medium text-gray-900 hover:text-gray-700">
                <div>
                <SubscriptIcon className="mr-3 h-5 w-5 text-gray-400" />
                <span className='font-semibold'>
                Subscription
                </span>
                </div>
                </a>
            <a className="flex py-2 text-sm font-medium text-gray-900 hover:text-gray-700">
                <div>
                <ChangePasswordIcon className="mr-3 h-5 w-5 text-gray-400" />
                <span className='font-semibold'>
                Change Password
                </span>
                </div>
                </a>
            <a className="flex py-2 text-sm font-medium text-gray-900 hover:text-gray-700">
                <div>
                <SignOutIcon className="mr-3 h-5 w-5 text-gray-400" />
                <span className='font-semibold'>
                Sign Out
                </span>
                </div>
                </a>
            </nav>
        </div>
        <div className="flex-1 p-10">     
         <h2 className="text-2xl font-semibold mb-6">Your Profile</h2>    
          <Card className="w-full mb-10">            
            <CardContent>
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage alt="User" src="/placeholder.svg?height=80&width=80" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="font-bold text-lg mt-5 mb-1">User Name</div>
                  <p className="text-gray-600 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </p>
                  <Button className="mb-4" variant="outline">
                    Edit Profile
                  </Button>
                  <div className="flex items-center">
                    <span className="mr-2">Subscribed</span>
                    <CheckIcon className="text-green-500" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <div>
            <h2 className="text-2xl font-semibold mb-6">Bookmarked Events</h2>
            <div className="grid grid-cols-3 gap-6">
              <Card className="w-full">
                <CardContent>
                  <div className="font-bold text-lg mt-5 mb-4">Event Name</div>
                  <p className="text-gray-600 mb-4">Time: January 1, 2024</p>
                  <p className="text-gray-600 mb-4">Location: Event Location</p>
                  <Button variant="outline">View</Button>
                </CardContent>
              </Card>
              <Card className="w-full">
                <CardContent>
                  <div className="font-bold text-lg mt-5 mb-4">Event Name</div>
                  <p className="text-gray-600 mb-4">Time: January 4, 2024</p>
                  <p className="text-gray-600 mb-4">Location: Event Location</p>
                  <Button variant="outline">View</Button>
                </CardContent>
              </Card>
              <Card className="w-full">
                <CardContent>
                  <div className="font-bold text-lg mt-5 mb-4">Event Name</div>
                  <p className="text-gray-600 mb-4">Time: February 8, 2024</p>
                  <p className="text-gray-600 mb-4">Location: Event Location</p>
                  <Button variant="outline">View</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}


function CheckIcon(props) {
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
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}


function ProfileIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

  
  function SubscriptIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="14" x="2" y="5" rx="2" />
        <line x1="2" x2="22" y1="10" y2="10" />
      </svg>
    )
  }
  

  
  function ChangePasswordIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    )
  }
  
  
  function SignOutIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
        <polyline points="16 17 21 12 16 7" />
        <line x1="21" x2="9" y1="12" y2="12" />
      </svg>
    )
  }
  
  
