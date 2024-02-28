import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Homepage from './pages/Homepage/homepage';
import UserLoginhomepage from './pages/Homepage/userLoginhomepage';
import Admin from './pages/Admin/admin';
import Adminpage from './pages/Admin/adminpage';
import Postevents from './pages/Admin/postevents';
import Editevents from './pages/Admin/editevents';
import Postnews from './pages/Admin/postnews';
import Editnews from './pages/Admin/editnews';
import Signuppage from './pages/Customer/Signuppage/signuppage';
import Loginpage from './pages/Customer/Login/Login';
import MonthlyEventView from './pages/MonthlyEventView/MonthlyEventView';
import Calendar from './pages/Calendar/calendar';
import UserDetails from './pages/Admin/userdetails';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import ExploreEvent from './pages/ExploreEvent/ExploreEvent';
import ExploreNews from './pages/ExploreNews/ExploreNews';
import Profile from './pages/Customer/Profile/profile';

function App() {

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      localStorage.setItem('userid', JSON.stringify(uid));
      // ...
    } else {
      // User is signed out
      // ...
      localStorage.removeItem('user');
    }
  });

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Loginpage />} />
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
          <Route path="/admin/postnews" element={<Postnews />} />
          <Route path="/admin/editnews" element={<Editnews />} />
          <Route path="/news/explore/news" element={<ExploreNews/>} />
          <Route path="/events/explore/:id" element={<ExploreEvent/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;