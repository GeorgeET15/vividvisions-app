import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const login = () => {
    navigate("/signup");
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logo-text">Vivid Visions</span>
      </div>
      <ul className="nav-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a
            onClick={() => scrollToSection("services-section")}
            style={{ cursor: "pointer" }}
          >
            Services
          </a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <button className="nav-button" onClick={login}>
            Log In
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
