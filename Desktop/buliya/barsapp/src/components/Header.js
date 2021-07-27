import React from "react";
import Typed from "react-typed";
import { Link, BrowserRouter as Router } from "react-router-dom";

const Header = () => {
    return (
        <Router>
            <div className="header-wrapper">
                <div className="main-info">
                    <h1>Web development and websites promotions</h1>
                    <Typed 
                        className="typed-text"
                        strings={["Engraving and Plaques", "Branded Vehicles and tents", "Signages", "Large format printing"]}
                        typeSpeed={50}
                        backSpeed={70}
                        loop
                    />
                    <Link to="#" className="btn-main-offer">Contact me</Link>
                </div>
            </div>
        </Router>
    )
}

export default Header;
