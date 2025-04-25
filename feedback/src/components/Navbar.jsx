import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../App"; // Import DarkModeContext
import { FaMoon, FaSun } from "react-icons/fa";

const navItems = [
  { name: "Add Feedback", path: "/" },
  { name: "View Feedbacks", path: "/viewfeedback" },
];

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useContext(DarkModeContext); // Access dark mode state and toggle function

  return (
    <nav
      className={`navbar navbar-expand-lg ${isDarkMode ? "navbar-dark bg-dark" : "navbar-dark bg-primary"}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Feedback App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto">
            {navItems.map((item, index) => (
              <Link
                key={index}
                className="nav-link"
                to={item.path}
                style={{ color: "#fff", padding: "10px 20px" }}
              >
                {item.name}
              </Link>
            ))}
            {/* Theme toggle button */}
            <button onClick={toggleTheme} className="btn btn-outline-light ms-3">
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
