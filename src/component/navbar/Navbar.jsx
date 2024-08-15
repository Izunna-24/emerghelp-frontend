import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import logo from "../../asset/img/newlogo.png";



const Navbar = () => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleBecomeAMedicClick = () => {
        navigate('/becomeAMedic');
    };

    const handleLoginClick = () => {
        navigate('/login');
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };


    return (
        <div className='flex justify-between items-center p-4 bg-white'>
            <div className='flex items-center mb-5'>
                <img src={logo} alt="Main logo" className="h-20 w-50" />
                {/*<p className='text-lg font-bold text-white'>Emerghelp</p>*/}
            </div>
            <div className='hidden md:flex space-x-6 text-lg'>
                <div className='hover:text-black-600 cursor-pointer text-black'>Home</div>
                <div className='hover:text-black-600 cursor-pointer text-black'>Order Medic</div>

                <div className='hover:text-black-600 cursor-pointer text-black'>Accept Order</div>
                <div className='hover:text-black-600 cursor-pointer text-black'>Payment</div>
                <div className='hover:text-black-600 cursor-pointer text-black'>About us</div>
                <div className='hover:text-black-600 cursor-pointer text-black'>Response Team</div>
            </div>
            <div className='flex items-center space-x-4'>
                <button
                    className='bg-blue-900 text-white px-4 py-2 rounded-3xl hover:bg-red-600'
                    onClick={handleLoginClick}
                >
                    Login
                </button>
                <button
                    className='bg-blue-900 text-white px-4 py-2 rounded-3xl hover:bg-red-600'
                    onClick={handleBecomeAMedicClick}
                >
                    Become A Medic
                </button>
                <button className='md:hidden' onClick={toggleMenu}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                    </svg>
                </button>


            </div>
            {menuOpen &&(
                <ul className='md:hidden absolute top-16 left-0 w-full bg-white shadow-md text-lg'>
                    <div className='hover:text-black-600 cursor-pointer p-4 text-black'>Home</div>
                    <div className='hover:text-black-600 cursor-pointer p-4 text-black'>Order Medic</div>
                    <div className='hover:text-black-600 cursor-pointer p-4 text-black'>Accept Order</div>
                    <div className='hover:text-black-600 cursor-pointer p-4 text-black'>Payment</div>
                    <div className='hover:text-black-600 cursor-pointer p-4 text-black'>About us</div>
                    <div className='hover:text-black-600 cursor-pointer p-4 text-black'>Response Team</div>
                </ul>
            )}
        </div>
    );
}

export default Navbar;
