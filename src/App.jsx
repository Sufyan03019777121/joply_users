// App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/navbar/Navebar";
import Login from "./auth/login/Login";
import AuthRoutes from "./routes/AuthRoutes";
import PublicRoutes from "./routes/PublicRoutes";
import Signup from "./auth/signup/Signup";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <Router basename="/">
      {token && <Navbar setToken={setToken} />} 
      <Routes>
        {!token ? (
          <>
            <Route path="/login/*" element={<Login setToken={setToken} />} />
            <Route path="/signup/*" element={<Signup setToken={setToken} />} />
            <Route path="/*" element={<Navigate to="/login" />} />
          </>
        ) : (
          <>
            <Route path="/*" element={<PublicRoutes />} />
            <Route path="/*" element={<Navigate to="/home" />} />
           
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
