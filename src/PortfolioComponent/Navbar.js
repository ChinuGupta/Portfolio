import React from "react";
import "../index.css";
import "../App.css";
// import MainComponent from "./MainComponent";
import {Link} from "react-router-dom";

export default function Navbar(props) {
  return (<>
    <div className="container side1">
      <nav className={`navbar navbar-light navbar-expand-lg `}>
        <div className="container-fluid">

          <button onClick={props.functio} className={`ModeSelector`}>
            <i className="fa fa-moon"></i>
          </button>

          <Link   className="navbar-brand" to="/">
            <span className="name"></span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item mx-3  my-1">
                <Link   className="nav-link" to="/">
                  {" "}
                  <i className="fa fa-home  item_space" /> Home
                </Link>
              </li>
              <li className="nav-item mx-3 my-1 ">
                <Link   className="nav-link" to="/about">
                  {" "}
                  <i className="fa fa-user item_space" /> About
                </Link>
              </li>
              <li className="nav-item mx-3  my-1">
                <Link   className="nav-link" to="/skills">
                  {" "}
                  <i className="fa-solid fa-braille item_space" /> Skills
                </Link>
              </li>
              <li className="nav-item mx-3  my-1">
                <Link   className="nav-link" to="/projects">
                  {" "}
                  <i className="fa-solid fa-code-commit item_space" /> Projects
                </Link>
              </li>
              <li className="nav-item mx-3 my-1 ">
                <Link   className="nav-link" to="/contact">
                  {" "}
                  <i className="fa-regular fa-address-book item_space" />{" "}
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
    </div>
    </>
  );
}
