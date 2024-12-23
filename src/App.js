import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderSection from './components/HeaderSection/HeaderSection';
import { HeroSection, StaticBanner } from './components/HeroSection/HeroSection';
import Register from './components/auth/Register';
import Login from './components/auth/Login';


function App() {
  return (
    <Router>
      <HeaderSection />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
       
        {/* <Route path="/static-banner" element={<StaticBanner />} /> */}
      </Routes>
      <StaticBanner />
    </Router>
  );
}

export default App;
