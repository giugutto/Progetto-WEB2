import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomNavbar from './components/Navbar';
import Home from './components/Home';
import Users from './components/Users';
import Posts from './components/Posts';
import About from './components/About';
import Indirizzi from './components/Indirizzi';

const App = () => {
  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/about" element={<About />} />
        <Route path="/indirizzi" element={<Indirizzi />} />
      </Routes>
    </Router>
  );
};

export default App;
