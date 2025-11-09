import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Profile from "../pages/profile/Profile";

const About = () => <h2 style={{ textAlign: "center", marginTop: 40 }}>ℹ️ About Us</h2>;
const Services = () => <h2 style={{ textAlign: "center", marginTop: 40 }}>🛠 Our Services</h2>;
const Contact = () => <h2 style={{ textAlign: "center", marginTop: 40 }}>📞 Contact Us</h2>;
const Jobs = () => <h2 style={{ textAlign: "center", marginTop: 40 }}>💼 Job View</h2>;
const RegisterJob = () => <h2 style={{ textAlign: "center", marginTop: 40 }}>📝 Register for Job</h2>;

const Settings = () => <h2 style={{ textAlign: "center", marginTop: 40 }}>⚙️ Settings</h2>;

function PublicRoutes() {
  return (
    <div>
      <Routes>
        
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/register-job" element={<RegisterJob />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default PublicRoutes;
