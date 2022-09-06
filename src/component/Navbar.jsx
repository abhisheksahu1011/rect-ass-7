import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nv">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="nav">
            <Link className="link" aria-current="page" to="/Home">
              Home
            </Link>
            <Link className="link" to="/Students">
              Students
            </Link>
            <Link className="link" to="/Contact">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
