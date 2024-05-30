import { useState } from "react";
import { LOGO_URL } from "../Utils/Constants";
import { Link } from "react-router-dom";

const Header = () => {

  const [BtnNameReact, SetBtnNameReact] = useState("Log in");

    return (
        <div className="header">
           <div className="logo-container">
             <img className="logo" src={LOGO_URL}/>
           </div>
           <div className="nav-items">
             <ul>
                <li><Link to="/">Home</Link></li>
                <li>
                  <Link to="/About">About Us</Link>
                </li>
                <li><Link to="/Contact">Contact Us</Link>
                </li>
                <li>Cart</li>
                <button className="Login" onClick={() => {
                  BtnNameReact=="Log in" ? SetBtnNameReact("Log out")
                  : SetBtnNameReact("Log in");
                 }}
                 >{BtnNameReact}
                  </button>
             </ul>
           </div>
        </div>
    );
};

export default Header;