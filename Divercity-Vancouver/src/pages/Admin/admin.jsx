import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import placeholderImage from '../../assets/placeholder.jpg'; // Updated image path
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase';

const Admin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    const auth = getAuth();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const docRef = doc(db, 'users', user.uid);
      const docSnap = await getDoc(docRef);
      console.log("User signed in: ", user.uid); 

      if (docSnap.exists() && docSnap.data().isAdmin) {
        console.log("User data: ", docSnap.data());
        navigate('/admin/userinfo');
      } else {
        alert("You are not an admin.");
      }
      
      
    } catch (error) {
      console.error("Error signing in with password and email", error);
      alert(error.message);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex h-[550px] w-[1100px] justify-between bg-white rounded-xl overflow-hidden" style={{ boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px' }}>
        <div className="flex flex-col justify-center flex-1 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="w-full max-w-lg mx-auto lg:w-96">
            <div>
              <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Welcome back Admin</h2>
            </div>
            <div className="mt-8">
              <div className="mt-6">
                <form className="space-y-6" onSubmit={handleLogin}>
                  <div>
                    <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                      Email address
                    </label>
                    <div className="mt-1">
                      <Input autoComplete="email" id="email" name="email" placeholder="email" required type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="password">
                      Password
                    </label>
                    <div className="mt-1">
                      <Input
                        autoComplete="current-password"
                        id="password"
                        name="password"
                        placeholder="password"
                        required
                        type="password"
                        value={password} onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <Button type="submit" className="w-full bg-bluee">Login as Admin</Button>
                  </div>
                </form>
                <div className="mt-6 relative">
                  <div aria-hidden="true" className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-3/5 bg-cover bg-center" style={{ backgroundImage: `url(${placeholderImage})` }} />
      </div>
    </div>
  );
};

export default Admin;
