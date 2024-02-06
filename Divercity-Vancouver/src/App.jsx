import React from 'react';
import {BrowserRouter  as Router, Routes, Route} from 'react-router-dom';
import Homepage from './pages/Homepage/homepage';
import Adminpage from './pages/Admin/adminpage';
import Postevents from './pages/Admin/adminpage';
import Editevents from './pages/Admin/adminpage';
import Postnews from './pages/Admin/adminpage';
import Editnews from './pages/Admin/adminpage';


function App() {
  return (
    <div>
      <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            {/* <Route path="/login" element={<Homepage />} />
            <Route path="/signup" element={<Homepage />} />
            <Route path="/calendar" element={<Homepage />} />
            <Route path="/events" element={<Homepage />} /> */}
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