import React from "react";
import {MENU} from "../App.js"
import "./header.css"
import { NavLink } from "react-router-dom";

const Header = () => {
    return(
        <div className="header">
            {MENU.map((menuItem) => (
                <NavLink to={menuItem.path} className="headers">
                    {menuItem.title}
                </NavLink>
            ))}
        </div>
    )
}

export default Header;