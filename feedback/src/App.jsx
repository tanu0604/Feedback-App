import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddFeedback from "./components/AddFeedback";
import ViewFeedback from "./components/ViewFeedback";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css"
// Context for dark mode
export const DarkModeContext = React.createContext();

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle between dark and light theme
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode", !isDarkMode);
  };

  useEffect(() => {
    // Initialize dark mode from localStorage
    const savedMode = localStorage.getItem("dark-mode") === "true";
    setIsDarkMode(savedMode);
    document.body.classList.toggle("dark-mode", savedMode);
  }, []);

  useEffect(() => {
    // Save dark mode preference to localStorage
    localStorage.setItem("dark-mode", isDarkMode);
  }, [isDarkMode]);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<AddFeedback />} />
          <Route path="/viewfeedback" element={<ViewFeedback />} />
        </Routes>
        <Footer />
        <ToastContainer />
      </Router>
    </DarkModeContext.Provider>
  );
};

export default App;
