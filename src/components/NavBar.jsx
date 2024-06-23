import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useState } from "react"; // Remove this line if not used
import { useNavigate } from "react-router-dom";

export default class NavBar extends Component {
  

  render() {
    

    let { mode, toggleMode } = this.props;
    let myStyle;
    if (mode === "dark") {
      myStyle = {
        backgroundColor: "#000814",
        color: "white",
      };
    } else {
      myStyle = {
        backgroundColor: "white",
        color: "black",
      };
    }

    return (
      <div style={myStyle}>
        <nav
          className={`navbar text-center navbar-expand-lg navbar-${mode} bg-${
            mode === "dark" ? "dark" : "light"
          }`}
        >
          <div className="container-fluid">
            <Link className="navbar-brand" to={"/"}>
              News-App
            </Link>
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
                  <Link className="nav-link active" to={"/business"}>
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to={"/entertainment"}>
                    Entertainment
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link active" to={"/health"}>
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to={"/science"}>
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to={"/sports"}>
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to={"/technology"}>
                    Technology
                  </Link>
                </li>
                
              </ul>

              <div className="form-check form-switch sticky-top text-center">
                <input
                  onClick={toggleMode}
                  className="form-check-input "
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
                
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
