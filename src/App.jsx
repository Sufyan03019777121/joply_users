import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicRoutes from "./routes/PublicRoutes";
import AuthRoutes from "./routes/AuthRoutes";

function App() {
  return (
    <Router>
      <Routes>
        {/* Auth Pages */}
        <Route path="/*" element={<AuthRoutes />} />

        {/* Public Pages */}
        <Route path="/app/*" element={<PublicRoutes />} />
      </Routes>
    </Router>
  );
}

export default App;
