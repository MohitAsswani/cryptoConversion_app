import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid d-inline d-lg-flex">
                    <Link to="#" className="navbar-brand">
                    <img src="../img/ioscript-logo.png" alt="" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-center justify-content-md-end" id="navbarText">
                    <ul className="nav justify-content-center justify-content-md-end">
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/" >Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/crypto">Convert</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" href="#">Contact Us</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
