import React from "react";
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <div>
            <div className="ui massive inverted segment">
                <div className="ui inverted secondary pointing menu">
                    <div className="right menu">
                        <NavLink className="yellow item" to='/'>HOME</NavLink>
                        <NavLink className="yellow item" to='/services'>SERVICES</NavLink>
                        <NavLink className="yellow item" to='/contact'>CONTACT US</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;
