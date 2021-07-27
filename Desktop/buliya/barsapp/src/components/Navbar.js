 import React from "react";
 import { Link, BrowserRouter as Router } from "react-router-dom";
 import logo from "../logo.png";
// FONTAWESOME IMPORTS

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons"
 const Navbar = () => {
     return (
         <Router>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
              <div className="container">
                <Link className="navbar-brand" to="#"> <img className="logo" src={ logo } alt="logo..." /> </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={ faBars } style={{color: "#fff"}} />
                    </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="#">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Services</Link>
                         </li>
                         <li className="nav-item">
                            <Link className="nav-link" to="#">how work</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Contacts</Link>
                        </li>
                    </ul>
                </div>

              </div>
            </nav>
        </Router>
     );
 };
 
 export default Navbar
 