

import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);
    const [token, setToken] = useState(true);

    return (
        <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-gray-400">
            <img
                onClick={() => navigate('/')}
                className="w-15 h-24 cursor-pointer"
                src={assets.logo}
                alt=""
            />
           
            <ul className="hidden md:flex text-center items-center gap-6 font-medium">
                <NavLink to="/" className="relative group">
                    <li className="py-1">HOME</li>
                    <hr className="absolute left-1/2 transform -translate-x-1/2 bottom-0 border-none bg-Ccolor h-0.5 w-3/5 opacity-0 group-hover:opacity-100 transition" />
                </NavLink>

                <NavLink to="/doctors" className="relative group">
                    <li className="py-1">ALL DOCTORS</li>
                    <hr className="absolute left-1/2 transform -translate-x-1/2 bottom-0 border-none bg-Ccolor h-0.5 w-3/5 opacity-0 group-hover:opacity-100 transition" />
                </NavLink>

                <NavLink to="/about" className="relative group">
                    <li className="py-1">ABOUT</li>
                    <hr className="absolute left-1/2 transform -translate-x-1/2 bottom-0 border-none bg-Ccolor h-0.5 w-3/5 opacity-0 group-hover:opacity-100 transition" />
                </NavLink>

                <NavLink to="/contact" className="relative group">
                    <li className="py-1">CONTACT</li>
                    <hr className="absolute left-1/2 transform -translate-x-1/2 bottom-0 border-none bg-Ccolor h-0.5 w-3/5 opacity-0 group-hover:opacity-100 transition" />
                </NavLink>
            </ul>

            
            <div className="flex items-center gap-4">
                {token ? (
                    <div className="flex items-center gap-2 cursor-pointer group relative">
                        <img className="w-9 rounded-full" src={assets.profile_pic} alt="profile_pic" />
                        <img className="w-2.5" src={assets.dropdown_icon} alt="dropdown_icon" />
                        <div className="absolute top-full right-0 pt-2 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
                            <div className="text-center min-w-max bg-stone-100 flex flex-col gap-4 p-4 rounded-lg shadow-lg">
                                <p
                                    onClick={() => navigate('/my-profile')}
                                    className="hover:text-black cursor-pointer"
                                >
                                    My Profile
                                </p>
                                <p
                                    onClick={() => navigate('/my-appointment')}
                                    className="hover:text-black cursor-pointer"
                                >
                                    My Appointment
                                </p>
                                <p
                                    onClick={() => setToken(false)}
                                    className="hover:text-black cursor-pointer"
                                >
                                    Logout
                                </p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <button
                        onClick={() => navigate('/login')}
                        className="bg-Ccolor text-center text-white px-8 py-3 rounded-full md:block"
                    >
                        Create Account
                    </button>
                )}

               
                <img
                    onClick={() => setShowMenu(!showMenu)}
                    className="w-6 md:hidden cursor-pointer"
                    src={assets.menu_icon}
                    alt="menu icon"
                />
            </div>

           
            <div
                className={`fixed inset-0 z-20 bg-white transform transition-all duration-300 ${
                    showMenu ? 'translate-x-0' : 'translate-x-full'
                } md:hidden`}
            >
                <div className="flex justify-between items-center p-4">
                    <img className="w-20 h-20 ml-16" src={assets.logo} alt="Logo" />
                    <img
                        onClick={() => setShowMenu(false)}
                        className="w-6 mr-24 cursor-pointer"
                        src={assets.cross_icon}
                        alt="Close menu"
                    />
                </div>
                <ul className="flex flex-col items-center space-y-4 mt-8 font-medium">
                    <NavLink to="/" onClick={() => setShowMenu(false)} >
                        <p className="text-gray-700">HOME</p>
                    </NavLink>
                    <NavLink to="/doctors" onClick={() => setShowMenu(false)} >
                       <p className="text-gray-700"> ALL DOCTORS</p>
                    </NavLink>
                    <NavLink to="/about" onClick={() => setShowMenu(false)} >
                        <p className="text-gray-700">ABOUT</p>
                    </NavLink>
                    <NavLink to="/contact" onClick={() => setShowMenu(false)} >
                        <p className="text-gray-700">CONTACT</p>
                    </NavLink>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
