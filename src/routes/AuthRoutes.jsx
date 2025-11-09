import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../auth/login/Login";
import Signup from "../auth/signup/Signup";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default AuthRoutes;
