import React from "react";
import worldIcon from '../assets/icons/icon-world.svg'

export default function Navbar(){
    return(
        <nav className="main-nav">
            <img src={worldIcon} className="nav-icon"/>
            <p>Where is Fahim?</p>
        </nav>
    )
    
}