import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../App"; // Import the DarkModeContext

const Footer = () => {
  const { isDarkMode } = useContext(DarkModeContext); // Access dark mode state

  return (
    <footer
      className={`footer py-4 mt-5 ${isDarkMode ? "bg-dark text-light" : "bg-primary text-light"}`}
    >
      <div className="container text-center">
        <div className="d-flex justify-content-center">
          <p className="me-4">© Tanushree Paul</p>
          <p className="me-4">
            <Link
              to="/"
              className={`footer-link ${isDarkMode ? "text-light" : "text-light"} text-decoration-none`}
            >
              Add Feedback
            </Link>
          </p>
          <p>
            <Link
              to="/viewfeedback"
              className={`footer-link ${isDarkMode ? "text-light" : "text-light"} text-decoration-none`}
            >
              View Feedbacks
            </Link>
          </p>
        </div>
        <div className="mt-3">
          <p>
            Email:{" "}
            <a
              href="mailto:tanushreepaul2004@gmail.com"
              className={`text-light text-decoration-none ${isDarkMode ? "text-light" : "text-light"}`}
            >
              tanushreepaul2004@gmail.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a
              href="tel:+1234567890"
              className={`text-light text-decoration-none ${isDarkMode ? "text-light" : "text-light"}`}
            >
              +916204008345
            </a>
          </p>
          <p>
            Portfolio:{" "}
            <a
              href="https://tanushreepaul.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-light text-decoration-none ${isDarkMode ? "text-light" : "text-light"}`}
            >
              tanushreepaul.netlify.app
            </a>
          </p>
        </div>
        <div className="mt-4 text-muted" style={{ fontSize: "0.8rem" }}>
          <p>Designed by Tanushree Paul</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
