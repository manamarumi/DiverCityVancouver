import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage/homepage';
import Calendar from './pages/Calendar/calendar';
import Adminpage from './pages/Admin/adminpage';
import Postevents from './pages/Admin/postevents'; // Corrected import
import Editevents from './pages/Admin/editevents'; // Corrected import
import Postnews from './pages/Admin/postnews'; // Corrected import
import Editnews from './pages/Admin/editnews'; // Corrected import
import Signuppage from './pages/Signuppage/signuppage'; // Corrected import

function App() {
  return (
    <div>
      <Router>
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
      </Router>
    </div>
  );
}

export default App;
