import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../images/logo.jpeg";

const Navbar = ()=>{
    return (
      <>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid ">
            <NavLink exact className="navbar-brand" to="/">
              <img
                src={logo}
                alt=""
                width="30"
                height="24"
                className="d-inline-block align-text-top"
              />
              &nbsp;NewsMonkey
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink exact activeClassName="active"  className="nav-link" to="/">
                    General
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact activeClassName="active"  className="nav-link" to="/business">
                    Business
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact activeClassName="active"  className="nav-link" to="/entertainment">
                    Entertainment
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact activeClassName="active"  className="nav-link" to="/health">
                    Health
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact activeClassName="active"  className="nav-link" to="/science">
                    Science
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact activeClassName="active"  className="nav-link" to="/sports">
                    Sports
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact activeClassName="active" className="nav-link" to="/technology">
                    Technology
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }

export default Navbar;
