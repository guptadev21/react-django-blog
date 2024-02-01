import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './navbar/blognav.js';
import Content from './pages/content.js';
import Profile from './pages/profile.js';
import AddBlog from './pages/addbog.js';

function App() {
  return (
    <Router>
      <div className="h-screen bg-[#ffffff]">
        <Navbar />
        <Routes>
          <Route path="/home" element={<Content />}/>
          {/* Add other routes here */}
          <Route path="/profile" element={<Profile />}/>
          <Route path="/add" element={<AddBlog />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
