import React from 'react'

//supabse...



//pages...

import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Login from './pages/login/login';
import Signup from './pages/signup/Signup';
import MyUploads from './pages/getmyuploads/Myuploads'
import AllUploads from './pages/Alluploads/Alluploads'
import Admin from './pages/admin/Admin'
import Upload from './pages/upload/upload'
import Vote from './pages/vote/Vote'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Vote />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/myuploads" element={<MyUploads />} />
        <Route path="/alluploads" element={<AllUploads />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </Router>
  );
};

export default App;
