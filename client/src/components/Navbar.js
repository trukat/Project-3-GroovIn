import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const Navbar = (props) => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  window.addEventListener("resize", showButton);
  let links = (info) => {
    if (info.props) {
      return (
        <nav className="navbar">
          <div className="navbar-container">
            <Link to="/" className="navbar-logo">
              GroovIn
              <i className="fas fa-record-vinyl" />
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? "fas fa-record-vinyl" : "fas fa-bars"} />
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <>
                <Link to="/Profile" className="nav-links">
                  Profile
                </Link>
                <Link onClick={props.logout} to="/" className="nav-links">
                  Logout
                </Link>
              </>
            </ul>
          </div>
        </nav>
      );
    } else {
      return (
        <nav className="navbar">
          <div className="navbar-container">
            <Link to="/" className="navbar-logo">
              GrooveIn
              <i className="fas fa-record-vinyl" />
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? "fas fa-record-vinyl" : "fas fa-bars"} />
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <Link to="/login" className="nav-links">
                login
              </Link>
              <Link to="/register" className="nav-links">
                register
              </Link>
            </ul>
          </div>
        </nav>
      );
    }
  };
  return (
    <div>
      <nav>{links(props)}</nav>
    </div>
  );
};

export default Navbar;
