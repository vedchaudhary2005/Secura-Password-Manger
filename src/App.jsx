import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Manager from "./components/Manager";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <Navbar />
      
      {/* ✅ Routes start here */}
      <Routes>
        {/* Home → Manager page */}
        <Route
          path="/"
          element={
            <>
              <Manager />
               <Footer/>           
            </>
          }
        />
        
        {/* About page */}
        <Route path="/about" element={<About />} />
        
        {/* Contact page */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
