import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage/homepage';
import Admin from './pages/Admin/admin';
import Adminpage from './pages/Admin/adminpage';
import Postevents from './pages/Admin/postevents';
import Editevents from './pages/Admin/editevents';
import Postnews from './pages/Admin/postnews';
import Editnews from './pages/Admin/editnews';
import Signuppage from './pages/Customer/Signuppage/signuppage';
import Loginpage from './pages/Customer/Login/Login';
import MonthlyCalendar from './pages/MonthlyCalendar/monthlyCalendar';
import Calendar from './pages/Calendar/calendar';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/signup" element={<Signuppage />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/calendar/monthlycalendar" element={<MonthlyCalendar />} />
          <Route path="/events" element={<Homepage />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/userinfo" element={<Adminpage />} />
          <Route path="/admin/postevent" element={<Postevents />} />
          <Route path="/admin/editevent" element={<Editevents />} />
          <Route path="/admin/postnews" element={<Postnews />} />
          <Route path="/admin/editnews" element={<Editnews />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
