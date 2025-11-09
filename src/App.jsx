import React from "react";
import { HashRouter as Router, Routes, Route, HashRouter } from "react-router-dom";
import PublicRoutes from "./routes/PublicRoutes";
import AuthRoutes from "./routes/AuthRoutes";

function App() {
  return (
    <Router>
      <HashRouter>
        {/* Auth Pages */}
        <Route path="/*" element={<AuthRoutes />} />

        {/* Public Pages */}
        <Route path="/app/*" element={<PublicRoutes />} />
      </HashRouter>
    </Router>
  );
}

export default App;
