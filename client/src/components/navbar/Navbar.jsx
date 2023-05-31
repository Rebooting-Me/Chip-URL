import { Link } from "react-router-dom";
import Logo from "./../../assets/Logo.svg";
import Power from "./../../assets/power.svg";
import "./Navbar.css";

const Navbar = ({ isAuthenticated }) => {
  return (
    <nav className="navbar">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingRight: "30px",
        }}
      >
        <Link to="/">
          <img
            className="navbar-logo"
            style={{ width: "12rem", display: "block" }}
            src={Logo}
            alt="brand-logo"
          />
        </Link>
        <ul style={{ display: "flex", gap: "2em", listStyle: "none" }}>
          {!isAuthenticated && (
            <li>
              <Link
                to="/signup"
                className="nav-links"
                style={{ color: "#FF5E3A" }}
              >
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
            <Link to="/contact" className="nav-links">
              Contact
            </Link>
          </li>
          {isAuthenticated && (
            <li>
              <Link to="/logout" className="nav-links">
                <img style={{ width: "1.5em" }} src={Power} alt="logout-icon" />
              </Link>
            </li>
          )}
        </ul>
      </div>

      <div
        style={{
          maxWidth: "100%",
          border: "0.2em solid rgba(0, 0, 0, 0.2)",
          margin: "0",
        }}
      ></div>
    </nav>
  );
};

export default Navbar;
