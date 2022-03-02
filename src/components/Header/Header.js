import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <NavLink to="/home"
                activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                }}
            >Home</NavLink>
            <NavLink to="/friends"
                activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                }}
            >Friends</NavLink>
            <NavLink to="/about"
                activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                }}
            >About</NavLink>
        </div>
    );
};

export default Header;