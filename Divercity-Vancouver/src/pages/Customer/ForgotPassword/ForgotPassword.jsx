import { Button } from "@/components/ui/button";
import Navbar from "../../../components/navbar";
import { Input } from "@/components/ui/input";
import { useState } from 'react';
import { Link } from "react-router-dom";
import { resetPassword } from "@/firebase";

export default function ChangePassword() { 
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    resetPassword(email)
      .then(() => {       
      })
      .catch((error) => {
        console.error("Error sending password reset email:", error.message);
      });
  };
  
  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex bg-gray-100">
        <div className="flex mt-5 flex-col w-full px-4 bg-gray-100 rounded-lg">
          <div className="mb-6">
            <h1 className="text-xl font-semibold">Forgot Password</h1>
          </div>
          <div className="flex flex-col space-y-4">
            <label
              className="block text-sm font-medium"
              htmlFor="current-password"
            >
              Email
            </label>
            <Input
              id="email"
              placeholder=""
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}            
            />
          </div>
          <div className="flex justify-center space-x-2 mt-6">
            <Link to={"/login"}>
              <Button variant="outline">Cancel</Button>
            </Link>
            <Button onClick={handleResetPassword}>Reset Password</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
