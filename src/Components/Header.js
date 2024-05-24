import { useState } from "react";
import { LOGO_URL } from "../Utils/Constants";

const Header = () => {

  const [BtnNameReact, SetBtnNameReact] = useState("Log in");

    return (
        <div className="header">
           <div className="logo-container">
             <img className="logo" src={LOGO_URL}/>
           </div>
           <div className="nav-items">
             <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
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