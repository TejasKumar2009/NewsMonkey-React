import React, {useState} from "react";
import { NavLink, useHistory} from "react-router-dom";

import logo from "../images/logo.jpeg";

const Navbar = (props) => {
  const history = useHistory();
  
  const updateNewsSearch = (e) => {
    e.preventDefault();
    history.push(`/search`)
    props.searchNews.setSearchNews(e.target[0].value)
  }

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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active"
                  className="nav-link"
                  to="/"
                >
                  General
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active"
                  className="nav-link"
                  to="/top-headlines/business"
                >
                  Business
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active"
                  className="nav-link"
                  to="/top-headlines/entertainment"
                >
                  Entertainment
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active"
                  className="nav-link"
                  to="/top-headlines/health"
                >
                  Health
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active"
                  className="nav-link"
                  to="/top-headlines/science"
                >
                  Science
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active"
                  className="nav-link"
                  to="/top-headlines/sports"
                >
                  Sports
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active"
                  className="nav-link"
                  to="/top-headlines/technology"
                >
                  Technology
                </NavLink>
              </li>
            </ul>
            <form onSubmit={updateNewsSearch} className="d-flex">
      <input
      name="q"
        className="form-control me-2"
        type="search"
        placeholder="Search News"
        aria-label="Search"
      />
      <button className="btn btn-outline-danger" type="submit">
        Search
      </button>
    </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;