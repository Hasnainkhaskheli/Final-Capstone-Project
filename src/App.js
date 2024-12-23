import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HeaderSection from "./components/HeaderSection/HeaderSection";
import { HeroSection } from "./components/HeroSection/HeroSection";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import AccountPage from "./components/auth/Account";

function App() {
  return (
    <Router>
      <HeaderSection />

      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account" element={<AccountPage />} />
      </Routes>
    </Router>
  );
}

export default App;
