import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/home">
          {props.title}
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
            </li>
          </ul>
          <div className="d-flex">
            { <div className="bg-primary rounded mx-2" style={{height:'30px', width:'30px', cursor:'pointer'}} onClick={()=>{props.toggleMode('primary')}}></div>}
            { <div className="bg-danger rounded mx-2" style={{height:'30px', width:'30px', cursor:'pointer'}} onClick={()=>{props.toggleMode('danger')}}></div>}
            { <div className="bg-success rounded mx-2" style={{height:'30px', width:'30px', cursor:'pointer'}} onClick={()=>{props.toggleMode('success')}}></div>}
            { <div className="bg-warning rounded mx-2" style={{height:'30px', width:'30px', cursor:'pointer'}} onClick={()=>{props.toggleMode('warning')}}></div>}
          </div>
          <div
            className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"
              }`}
          >
            <input
              className="form-check-input"
              // onClick={props.toggleMode}
              onClick={() => {
                props.toggleMode(null)}}
              type="checkbox"
              // role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Dark & Light Mode
            </label>
          </div>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </form> */}
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired, //propTypes is used to specify the type of the props, title: PropTypes.string.isRequired to specify the string type of the title prop
  aboutText: PropTypes.string.isRequired,
}; // PropTypes.string.isRequired to specify the string type of the aboutText prop or any other prop}

// isRequired is used to make the prop mandatory

Navbar.defaultProps = { title: "Set title here", aboutText: "aboutText here" }; // default props
