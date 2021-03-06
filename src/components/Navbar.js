import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo.png";

function Navbar({ cart }) {
  return (
    <nav className="navbar navbar-light navbar-expand-lg bg-light">
      <div className="container">
        <Link to={"/"}>
          {" "}
          <img className="navbar-brand logo" src={Logo} alt="" />
        </Link>
        <button
          className="navbar-toggler dark"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto d-flex">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/Shop">
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/Admin">
                Admin
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/Cart">
                Cart ({cart.length})
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
