import React, { useContext } from "react";
import "../styles/NavBar.css";
import { ThemeContext } from "../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";
import Logo from "../assets/to-do-logo.png";

function NavBar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="navbar-container">
      <div className="navbar-leftside">
        <a  href="#home">
          <img src={Logo} id="logo" alt="to-do-list-logo" />
        </a>
      </div>
      <div className="navbar-rightside">
        <ul className="navbar-links"></ul>
        <button id="toggle-btn" onClick={toggleTheme}>
          {theme === "light" ? (
            <FaMoon color="black" fontSize={20} />
          ) : (
            <FaSun color="white" fontSize={20} />
          )}
        </button>
      </div>
    </div>
  );
}

export default NavBar;
