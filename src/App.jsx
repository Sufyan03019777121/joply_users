import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import AuthRoutes from "./routes/AuthRoutes";
import PublicRoutes from "./routes/PublicRoutes";

function App() {
  return (
    <Router>
      <Routes>
        {/* Auth Routes */}
        <Route path="/*" element={<AuthRoutes />} />

        {/* Public Routes */}
        <Route path="/home/*" element={<PublicRoutes />} />
      </Routes>
    </Router>
  );
}

export default App;
