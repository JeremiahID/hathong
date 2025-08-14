import React from "react";
import hamburger from '../Utilities/hamburger.svg'



function Header(){
    return(
        <div className="header flex bg-secondary p-2 ">
            {/* Hambuger icon */}
            <div className="hambuger">
                <button className="">
                    <img src={hamburger} alt="hamburger icon"  />
                </button>
            </div>

            {/* Logo */}
            <div className="logo">
                <a  href="/" target="_self" class=""> HA THONG </a>
            </div>

            {/* Cart */}
            <div className="cart-icon">

            </div>


        </div>
    )
};


export default Header;