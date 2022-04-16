import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css';
import logo from '../../../asset/logo.png';
// import { Container, Nav, Navbar, NavDropdown, NavLink } from "react-bootstrap";

const Header = () => {
    return (
        <div className="container mt-2">
          <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <NavLink to="/navbar" >
                  <img className="logo link" src={logo} alt="logo"  /> 
                  <span className=" title">Medical Informatics</span>
                 
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav nav-responsive ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "link" )} aria-current="page" >
                      Home
                    </NavLink>
                  </li>
                
                  <li className="nav-item">
                    <NavLink to="/blog" className={({ isActive }) => (isActive ? "active-link" : "link" )}>Blog</NavLink>
                  </li>
       
                  <li className="nav-item">
                    <NavLink to="/about" className={({ isActive }) => (isActive ? "active-link" : "link" )}>About Me</NavLink>
                  </li>
                </ul>
               
              </div>
            </div>
          </nav>
        </div>
      );
};

export default Header;
