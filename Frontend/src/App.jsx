import { HashRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from './pages/Home.jsx';
import Testing from './pages/Testing.jsx';
import Contact from './pages/Contact.jsx';
import Search from './pages/Search.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Testing" element={<Testing />} />
      </Routes>
    </Router>
  );
}

export default App;
