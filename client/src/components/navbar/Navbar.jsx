import { BrowserRouter, Router, Route, Routes, Link } from "react-router-dom";
import Logo from "./../../assets/Logo.svg";

// create a Navbar component that conditionally renders the links based on the user's authentication status (logged in or not)

const Navbar = ({ isAuthenticated }) => {
  return (
    <nav className="navbar">
      <BrowserRouter>
        <div className="navbar-container" style={{display: 'flex', justifyContent: 'space-between', paddingRight: '30px'}}>
          <Link to="/" className="navbar-logo">
            <img style={{ width: "12rem" }} src={Logo} alt="brand-logo" />
          </Link>
          <ul className="nav-menu" style={{display: 'flex', gap: '1em'}}>
            <li className="nav-item">
              <Link to="/" className="nav-links">
                Home
              </Link>
            </li>
            {/* {isAuthenticated && (
                <li className="nav-item">
                <Link to="/dashboard" className="nav-links">
                    Dashboard
                </Link>
                </li>
            )} */}
            {!isAuthenticated && (
              <li className="nav-item">
                <Link to="/login" className="nav-links">
                  Login
                </Link>
              </li>
            )}
            {!isAuthenticated && (
              <li className="nav-item">
                <Link to="/signup" className="nav-links">
                  Sign Up
                </Link>
              </li>
            )}
            {isAuthenticated && (
              <li className="nav-item">
                <Link to="/logout" className="nav-links">
                  Logout
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
