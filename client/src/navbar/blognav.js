import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './blognav.css';

const Navbar = () => {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <nav className="bg-blue-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <NavLink to="/home" exact className={`text-black-300 px-3 py-2 rounded-md text-sm font-medium ${isActive('/home') ? 'bg-blue-700 text-white' : 'hover:bg-blue-700 hover:text-white'}`}>
                                    Blogs
                                </NavLink>
                                {/* <NavLink to="/about" className={`text-black-300 px-3 py-2 rounded-md text-sm font-medium ${isActive('/about') ? 'bg-blue-700 text-white' : 'hover:bg-blue-700 hover:text-white'}`}>
                                    About
                                </NavLink> */}
                                <NavLink to="/add-blog" className={`text-black-300 px-3 py-2 rounded-md text-sm font-medium ${isActive('/add-blog') ? 'bg-blue-700 text-white' : 'hover:bg-blue-700 hover:text-white'}`}>
                                    Add Blog
                                </NavLink>
                                <NavLink to="/profile" className={`text-black-300 px-3 py-2 rounded-md text-sm font-medium ${isActive('/contact') ? 'bg-blue-700 text-white' : 'hover:bg-blue-700 hover:text-white'}`}>
                                    Profile
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
