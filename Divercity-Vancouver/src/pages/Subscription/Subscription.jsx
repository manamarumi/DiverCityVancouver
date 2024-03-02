import Navbar from "../../components/navbar";
import { Link } from "react-router-dom";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { AvatarImage, Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";


export default function Subscription() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex bg-gray-100">
      <nav className="w-64 px-8 py-4 bg-white border-r">
          <div className="flex flex-col space-y-8">
            <div className="space-y-2">
              <Link to={"/userprofile"}
                className="flex items-center space-x-2 text-gray-700 hover:text-black-900"
                href="#"
              >
                <UserIcon className="text-gray-400" />
                <span>Profile</span>
              </Link>

              <Link to={"/subscription"}
                className="flex items-center space-x-2 text-gray-700 hover:text-black-900"
                href="#">
                <MailboxIcon className="text-gray-400" />
                <span>Subscription</span>
              </Link>

              <Link to={"/changepassword"}
                className="flex items-center space-x-2 text-gray-700 hover:text-black-900"
                href="#">
                <LockIcon className="text-gray-400" />
                <span>Password</span>
              </Link>

            </div>
          </div>
        </nav>

        <div className=" items-center justify-center min-h-screen bg-gray-100 p-4">
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-3xl">
            <h1 className="text-3xl font-bold text-center mb-4">
              DiverCity Vanouver
            </h1>
            <h2 className="text-xl text-center mb-2">
              Thank you for Supporting Us
            </h2>
            <p className="text-center mb-6">
              Your donations help us to keep the event calendar up to date and
              accessible to everyone. Plus, you get exclusive benefits with
              being a subscriber!
            </p>
            <div className="bg-gray-200 p-4 rounded-lg mb-4">
              <h3 className="text-lg text-center font-semibold">
                You are currently subscribed!
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>Free Account</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-lg mb-2">$0/month</p>
                  <p className="text-center">All basic features</p>
                </CardContent>
              </Card>
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>Subscriber</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-lg mb-2">$1.99/month</p>
                  <p className="text-center">Bookmarks</p>
                  <p className="text-center">Premium Events</p>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center space-x-4">
              <Button className="w-1/2" variant="outline">
                Change Subscription
              </Button>
              <Button className="w-1/2">Subscribe Now</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LockIcon(props) {
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
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function LogOutIcon(props) {
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
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>
  );
}

function MailboxIcon(props) {
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
      <path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z" />
      <polyline points="15,9 18,9 18,11" />
      <path d="M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2v0" />
      <line x1="6" x2="7" y1="10" y2="10" />
    </svg>
  );
}

function UserIcon(props) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
