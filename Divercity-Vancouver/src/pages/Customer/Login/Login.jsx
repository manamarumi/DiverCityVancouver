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
	@@ -19,8 +23,46 @@ export default function Loginpage() {

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
	@@ -80,6 +122,18 @@ export default function Loginpage() {
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