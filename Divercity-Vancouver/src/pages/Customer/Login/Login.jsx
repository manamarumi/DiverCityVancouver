import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, signInWithPopup , GoogleAuthProvider } from "firebase/auth";
import { auth } from '../../../firebase';

import placeholder from '../../../assets/signuppics/signupImage.jpg';
import googleIcon from '../../../assets/signuppics/googleIcon.png';

export default function Loginpage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        if (user) {
          // Redirect to home page or wherever you want
          navigate('/');
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorMessage);
        // Handle errors here
      });
  };

  const handleLoginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        navigate('/');
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex h-[550px] w-[1100px] bg-white rounded-xl overflow-hidden shadow-md">
        <div className="flex w-3/5">
          <img src={placeholder} alt="Background" className="w-full h-auto object-cover" />
        </div>
        <div className="flex flex-col justify-center w-2/5 p-8">
          <h1 className="text-2xl font-bold text-center mb-4" style={{ color: '#4654A3' }}>Welcome back</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Your email"
                autoComplete="email"
                value={email}
                onChange={handleEmailChange}
                className="mt-1 w-full"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Your password"
                autoComplete="current-password"
                value={password}
                onChange={handlePasswordChange}
                className="mt-1 w-full"
                required
              />
            </div>
            <div className="flex justify-between items-center">
              <div className="text-sm">
                <Link to="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </Link>
              </div>
              <div className="text-sm">
                <Link to="/admin" className="font-medium text-red-500 hover:text-red-300">
                  Login as Admin
                </Link>
              </div>
            </div>
            <Button type="submit" className="w-full bg-indigo-500 text-white hover:bg-indigo-600" style={{ backgroundColor: '#4654A3' }}>
              Login
            </Button>
          </form>
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">Or sign in with:</p>
            <Button onClick={handleLoginWithGoogle} className="w-full border border-gray-400 text-gray-800 font-semibold py-2 rounded-xl" style={{ backgroundColor: 'white', color: '#4654A3' }}>
              <img src={googleIcon} alt="Google Icon" className="w-6 h-6 mr-2" />
              Login with Google
            </Button>
          </div>
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Don't have an account? <Link to="/signup" className="text-blue-600">Sign up now</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
