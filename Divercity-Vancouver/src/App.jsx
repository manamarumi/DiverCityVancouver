import React from 'react';
import {BrowserRouter  as Router, Routes, Route} from 'react-router-dom';
import Homepage from './Components/Homepage/homepage.jsx';
import Adminpage from './Components/Admin/adminpage.jsx';


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
            <Route path="/admin/postevent" element={<Adminpage />} />
            {/* <Route path="/admin/editevent" element={<Adminpage />} />
            <Route path="/admin/postnews" element={<Adminpage />} />   
            <Route path="/admin/editnews" element={<Adminpage />} />        */}
          </Routes>
      </Router>
    </div>
  );
}

export default App;