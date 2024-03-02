import { Button } from "@/components/ui/button";
import Navbar from "../../components/navbar";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ChangePassword() {
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

        <div className="flex flex-col w-full px-4 bg-gray-100 rounded-lg">
          <div className="mb-6">
            <h1 className="text-xl font-semibold">Change Password</h1>
          </div>
          <div className="flex flex-col space-y-4">
            <label
              className="block text-sm font-medium"
              htmlFor="current-password"
            >
              Current Password
            </label>
            <Input
              id="current-password"
              placeholder=""
              type="password"
            />
            <label className="block text-sm font-medium" htmlFor="new-password">
              New Password
            </label>
            <Input id="new-password" placeholder="" type="password" />
            <label
              className="block text-sm font-medium"
              htmlFor="confirm-password"
            >
              Confirm Password
            </label>
            <Input
              id="confirm-password"
              placeholder=""
              type="password"
            />
          </div>
          <div className="flex justify-center space-x-2 mt-6">
            <Button variant="outline">Cancel</Button>
            <Button variant="outline"> OK</Button>
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
