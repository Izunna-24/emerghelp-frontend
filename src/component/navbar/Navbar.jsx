import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import logo from "../../asset/img/newlogo.png";

const Navbar = () => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleBecomeAMedicClick = () => {
        navigate('/setMedicProfile');
    };


    const handleAboutUsClick = () => {

        navigate('/aboutUs');
    };

    const handleResponseTeamClick = () => {

        navigate('/responseTeam');
    };
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
            <div className="flex justify-between  p-4 max-w-10xl mx-auto">
                <div className="flex items-center">
                    <img src={logo} alt="Main logo" style={{height: '100px', width: 'auto'}}/>
                </div>

                <div className="flex  items-center space-x-10">
                    <div className="hover:text-black-600 cursor-pointer text-black">Home</div>
                    <div className="hover:text-black-600 cursor-pointer text-black">Accept Order</div>
                    <div className="hover:text-black-600 cursor-pointer text-black">Order Medic</div>
                    <div className="hover:text-black-600 cursor-pointer text-black">Payment</div>
                    <div className="hover:text-black-600 cursor-pointer text-black" onClick={handleAboutUsClick}>About
                        us
                    </div>
                    <div className="hover:text-black-600 cursor-pointer text-black"
                         onClick={handleResponseTeamClick}>Response Team
                    </div>

                    <button
                        className='bg-blue-900 text-white px-4 rounded-3xl hover:bg-red-600'
                        onClick={handleBecomeAMedicClick}
                    >
                        Become A Medic
                    </button>
                </div>
            </div>


            <div className='flex items-center space-x-4'>

                <button className='md:hidden' onClick={toggleMenu}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"

                         xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                    </svg>
                </button>
            </div>


            {
                menuOpen && (
                    <div className="md:hidden bg-white shadow-md absolute top-16 left-0 w-full z-20">
                        <ul className="space-y-2 py-2 text-lg">
                            <li className="hover:bg-gray-100 cursor-pointer px-4 py-2 text-black">Home</li>
                            <li className="hover:bg-gray-100 cursor-pointer px-4 py-2 text-black">Order Medic</li>
                            <li className="hover:bg-gray-100 cursor-pointer px-4 py-2 text-black">Accept Order</li>
                            <li className="hover:bg-gray-100 cursor-pointer px-4 py-2 text-black">Payment</li>
                            <li className="hover:bg-gray-100 cursor-pointer px-4 py-2 text-black">About Us</li>
                            <li className="hover:bg-gray-100 cursor-pointer px-4 py-2 text-black">Response Team</li>

                            <li className="px-4 py-2">
                                <button
                                    className="bg-blue-900 text-white w-full py-2 rounded-3xl hover:bg-red-600 transition"
                                    onClick={handleBecomeAMedicClick}
                                >
                                    Become A Medic
                                </button>
                            </li>
                        </ul>
                    </div>
                )}
        </nav>
    );
};

export default Navbar;