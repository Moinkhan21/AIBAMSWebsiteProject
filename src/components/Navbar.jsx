import React, { useRef } from "react";
import "../Styles/Navbar.css";
import { Link, useLocation } from "react-router-dom";
import imgLogo from "../assets/logo-white-removebg-preview.png";

function Header() {
  const headerRef = useRef(null);
  const location = useLocation();
  const Home = location.pathname === "/";

  return (
    <nav 
      ref={headerRef} 
      className="primary-menu"
      style={{
        backgroundColor: Home ? "#000000" : "transparent",
        borderBottom: Home ? "1px solid #a3a3a3" : "none"
      }}
    >
      <div id="logoHeader" className="w-70">
        <a href="/">
          <img src={imgLogo} alt="" />
        </a>
      </div>
      <ul className="menu-container one-page-menu">
        <li className="menu-item">
          <Link 
            className={`menu-link link-116 `}
            to="/"
          >
            <div>Home</div>
          </Link>
        </li>
        <li className="menu-item">
          <Link 
            className={`menu-link link-116 ${location.pathname === "/aboutus" ? "!text-yellow-400" : ""}`}
            to="/aboutus"
          >
            <div>About us</div>
          </Link>
        </li>
        <li className="menu-item">
          <Link 
            className={`menu-link link-116 ${location.pathname === "/fusionsuite" ? "!text-yellow-400" : ""}`}
            to="/fusionsuite"
          >
            <div>Fusion suite</div>
          </Link>
        </li>
        <li className="menu-item">
          <Link 
            className={`menu-link link-116 ${location.pathname === "/pricing" ? "!text-yellow-400" : ""}`}
            to="/pricing"
          >
            <div>Pricing</div>
          </Link>
        </li>
        <li className="menu-item">
          <Link 
            className={`menu-link link-116 ${location.pathname === "/careers" ? "!text-yellow-400" : ""}`}
            to="/careers"
          >
            <div>Careers</div>
          </Link>
        </li>
        <li className="menu-item">
          <Link 
            className={`menu-link link-116 ${location.pathname === "/contact" ? "!text-yellow-400" : ""}`}
            to="/contact"
          >
            <div>Contact</div>
          </Link>
        </li>
      </ul>
      <button type="button" className="Login-button">
        <span>Login</span>
      </button>
    </nav>
  );
}

export default Header;