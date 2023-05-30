import { BrowserRouter, Router, Route, Routes, Link } from "react-router-dom";
import Logo from "./../../assets/Logo.svg";
import Power from "./../../assets/power.svg";
import "./Navbar.css";

const Navbar = ({ isAuthenticated }) => {
  return (
    <nav className="navbar">
      <BrowserRouter>
        <div className="navbar-container" style={{display: 'flex', justifyContent: 'space-between', paddingRight: '30px'}}>
          <Link to="/" className="navbar-logo">
            <img style={{ width: "12rem" }} src={Logo} alt="brand-logo" />
          </Link>
          <ul style={{display: 'flex', gap: '2em', listStyle: 'none' }}>
            {!isAuthenticated && (
              <li>
                <Link to="/signup" className="nav-links" style={{color: '#FF5E3A'}}>
                  Sign Up
                </Link>
              </li>
            )}
            {!isAuthenticated && (
              <li>
                <Link to="/login" className="nav-links">
                  Login
                </Link>
              </li>
            )}
            
            <li>
              <Link to="/contact" className="nav-links">Contact</Link>
            </li>
            {isAuthenticated && (
              <li>
                <Link to="/logout" className="nav-links">
                  <img style={{width: '1.5em'}} src={Power} alt="logout-icon" />
                </Link>
              </li>
            )}
          </ul>
        </div>
      </BrowserRouter>
    </nav>
  );
};

export default Navbar;
