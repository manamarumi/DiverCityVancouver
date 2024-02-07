import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage/homepage';

import Calendar from './pages/Homepage/Calendar/calendar';
import Adminpage from './pages/Admin/adminpage';
import Postevents from './pages/Admin/postevents'; 
import Editevents from './pages/Admin/editevents'; 
import Postnews from './pages/Admin/postnews'; 
import Editnews from './pages/Admin/editnews'; 
import Signuppage from './pages/Customer/Signuppage/signuppage'; 
import Loginpage from './pages/Customer/Login/Login';

import Calendar from './pages/Calendar/calendar';
import Adminpage from './pages/Admin/adminpage';

import Postevents from './pages/Admin/postevents'; // Corrected import
import Editevents from './pages/Admin/editevents'; // Corrected import
import Postnews from './pages/Admin/postnews'; // Corrected import
import Editnews from './pages/Admin/editnews'; // Corrected import
import Signuppage from './pages/Signuppage/signuppage'; // Corrected import

import Login from './pages/Customer/Login/Login';



function App() {
  return (
    <div>
      <Router>

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Loginpage />} />


        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Homepage />} />

          <Route path="/signup" element={<Signuppage />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/events" element={<Homepage />} />
          <Route path="/admin" element={<Adminpage />} />
          <Route path="/admin/postevent" element={<Postevents />} />
          <Route path="/admin/editevent" element={<Editevents />} />
          <Route path="/admin/postnews" element={<Postnews />} />
          <Route path="/admin/editnews" element={<Editnews />} />

        </Routes>  

        </Routes>

  

      </Router>
    </div>
  );
}

export default App;
