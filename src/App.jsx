import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./auth/login/Login";
import AuthRoutes from "./routes/AuthRoutes";
import PublicRoutes from "./routes/PublicRoutes";

function App() {
  return (
    <Router>
      <Routes>
        {/* Auth Pages */}
        <Route path="/login/*" element={<Login />} />
        <Route path="/signup/*" element={<AuthRoutes />} />

        {/* Public Pages */}
        <Route path="/*" element={<PublicRoutes />} />
      </Routes>
    </Router>
  );
}

export default App;
