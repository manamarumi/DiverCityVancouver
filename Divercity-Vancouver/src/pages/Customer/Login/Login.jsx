import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from '../../../firebase';

import placeholder from '../../../assets/placeholder.jpg';
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
        const errorMessage = error.message;
        console.error(errorMessage);
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex h-[550px] w-[1100px] justify-between bg-white rounded-xl overflow-hidden" style={{ boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px' }}>
        <div className="w-3/5 bg-cover bg-center" style={{ backgroundImage: `url(${placeholder})` }} />
        <div className="flex w-2/5">
          <div className="border-r border-gray-200 w-full flex flex-col items-center justify-center space-y-4 px-12 py-8">
            <h1 className="text-2xl font-bold text-center mb-4" style={{ color: '#4654A3' }}>Welcome back</h1>
            <form onSubmit={handleSubmit} className="w-full space-y-4">
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
                required
                className="w-full"
              />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                required
                className="w-full"
              />
              <Button type="submit" className="w-full" style={{ backgroundColor: '#4654A3' }}>
                Login
              </Button>
            </form>
            <div className="text-center mt-4">
              <p className="text-sm text-gray-600">other way to login:</p>
            </div>
            <div className="flex items-center justify-between w-full">
              <Button onClick={handleLoginWithGoogle} className="border border-gray-400 text-gray-800 font-semibold py-2 rounded-xl flex items-center" style={{ backgroundColor: 'white', color: '#4654A3' }}>
                <img src={googleIcon} alt="Google Icon" className="w-6 h-6 mr-2" />
                Login with Google
              </Button>
              <Link to="/admin" className="text-red-600 font-semibold flex items-center">
                <span style={{ borderBottom: '2px solid transparent' }}>Log in as Admin</span>
              </Link>
            </div>
            <div className="text-center mt-4">
              <p className="text-sm text-gray-600">
                Don't have an account? <Link to="/signup" className="text-blue-600">Sign up now</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
