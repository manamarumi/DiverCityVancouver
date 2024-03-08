import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Homepage from './pages/Homepage/homepage';
import Admin from './pages/Admin/admin';
import Adminpage from './pages/Admin/adminpage';
import Postevents from './pages/Admin/postevents';
import Editevents from './pages/Admin/editevents';
import Editeventsdata from './pages/Admin/editeventsdata';
import Postnews from './pages/Admin/postnews';
import Editnews from './pages/Admin/editnews';
import Editnewsdata from './pages/Admin/editnewsdata';
import Signuppage from './pages/Customer/Signuppage/signuppage';
import Loginpage from './pages/Customer/Login/Login';
import ForgotPassword from './pages/Customer/ForgotPassword/ForgotPassword';
import MonthlyEventView from './pages/MonthlyEventView/MonthlyEventView';
import Calendar from './pages/Calendar/calendar';
import UserDetails from './pages/Admin/userdetails';
import ExploreEvent from './pages/ExploreEvent/ExploreEvent';
import ExploreNews from './pages/ExploreNews/ExploreNews';
import Profile from './pages/Customer/Profile/profile';
import UserProfile from './pages/UserProfile/UserProfile';
import EditUserProfile from './pages/EditUserProfile/EditUserProfile';
import ChangePassword from './pages/ChangePassword/ChangePassword';
import Subscription from './pages/Subscription/Subscription';
import ProtectedRoutes from '@/components/ProtectedRoutes'; // Import ProtectedRoutes component
import { Navigate } from 'react-router-dom'; // Import Navigate

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
      if (user) {
        localStorage.setItem('userid', JSON.stringify(user.uid));
      } else {
        localStorage.removeItem('userid');
      }
    });

    return () => unsubscribe();
  }, [auth]);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <Loginpage />} />
          <Route path="/signup" element={<Signuppage />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/events" element={<MonthlyEventView />} />
          <Route path="/events/:month" element={<MonthlyEventView />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/userinfo" element={<Adminpage />} />
          <Route path="/admin/userdetails/:username" element={<UserDetails />} />
          <Route path="/admin/postevent" element={<Postevents />} />
          <Route path="/admin/editevent" element={<Editevents />} />
          <Route path="/admin/editevent/:id" element={<Editeventsdata />} />
          <Route path="/admin/postnews" element={<Postnews />} />
          <Route path="/admin/editnews" element={<Editnews />} />
          <Route path="/admin/editnews/:id" element={<Editnewsdata/>} />
          <Route path="/news/explore/news" element={<ExploreNews/>} />
          <Route path="/events/explore/:id" element={<ExploreEvent/>} />
          <Route path="/userprofile" element={<UserProfile/>} />
          <Route path="/edituserprofile" element={<EditUserProfile/>} />
          <Route path="/changepassword" element={<ChangePassword/>} />
          <Route path="/subscription" element={<Subscription/>} />
          <Route path="/forgotpassword" element={<ForgotPassword/>} />
          {/* Protected routes */}
          <Route element={<ProtectedRoutes auth={isAuthenticated} />}>
            {/* Add protected routes here */}
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
