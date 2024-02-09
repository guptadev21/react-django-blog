import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './blognav.css';

const Navbar = () => {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <nav className="navbar">
            <div className="container">
                <div className="flex">
                    <div className="menu">
                        <NavLink to="/home" exact className={isActive('/home') ? 'active' : ''}>
                            Blogs
                        </NavLink>
                        {/* <NavLink to="/about" className={isActive('/about') ? 'active' : ''}>
                            About
                        </NavLink> */}
                        <NavLink to="/add" exact className={isActive('/add') ? 'active' : ''}>
                            Add Blog
                        </NavLink>
                        <NavLink to="/profile" exact className={isActive('/profile') ? 'active' : ''}>
                            Profile
                        </NavLink>
                    </div>
                </div>
            </div> 
        </nav>
    );
};

export default Navbar;
