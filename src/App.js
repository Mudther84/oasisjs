import React from 'react';
//import ReactDOM from "react-dom/client";
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './pages2/fixed_navbar';
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/Navbar" element={<Navbar />} />
          {/*<Route path="/news" element={<News />} />
          <Route path="/menu" element={<Menu />} />*/}
        </Routes>
      </Router>
    </div>
  );
}
export default App;