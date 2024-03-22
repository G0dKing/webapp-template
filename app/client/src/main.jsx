import React from 'react'
import ReactDOM from 'react-dom/client'
import { Router, Routes, Route } from 'react-router'
import Home from './pages/Home.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
