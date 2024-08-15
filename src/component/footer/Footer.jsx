import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../../asset/img/newlogo.png";
import send from "../../asset/img/send1.png";

const Footer = () => {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <div className='w-full bg-red-600 text-white py-5 px-4 md:px-20'>
            <div className='container mx-auto'>
                <div className='flex flex-col md:flex-row justify-between items-center'>
                    <div className='flex flex-col items-center md:items-start mb-6 md:mb-0'>
                        <img src={logo} alt="Logo" className="h-12 w-12 md:h-16 md:w-16 mb-2"/>
                        <p className='text-sm md:text-base font-bold text-center md:text-left'>
                            © 2024 Emerghelp. All rights reserved.
                        </p>
                    </div>


                    <div className='flex flex-col md:flex-row md:space-x-16 mb-6 md:mb-0'>
                        <div className='flex flex-col space-y-4 text-center md:text-left'>
                            <div className='hover:text-white cursor-pointer' onClick={() => handleNavigate('/')}>Home
                            </div>
                            <div className='hover:text-white cursor-pointer'
                                 onClick={() => handleNavigate('/get-help')}>Get Help
                            </div>
                            <div className='hover:text-white cursor-pointer'
                                 onClick={() => handleNavigate('/community')}>Community
                            </div>
                            <div className='hover:text-white cursor-pointer'
                                 onClick={() => handleNavigate('/blog')}>Blog
                            </div>
                            <div className='hover:text-white cursor-pointer'
                                 onClick={() => handleNavigate('/aboutUs')}>About Us
                            </div>
                            <div className='hover:text-white cursor-pointer'
                                 onClick={() => handleNavigate('/responseTeam')}>Response Team
                            </div>
                        </div>
                        <div className='flex flex-col space-y-4 text-center md:text-left mt-4 md:mt-0'>
                            <div className='hover:text-white cursor-pointer'
                                 onClick={() => handleNavigate('/Support')}>Support
                            </div>
                            <div className='hover:text-white cursor-pointer'
                                 onClick={() => handleNavigate('/Help Center')}>Help Center
                            </div>
                            <div className='hover:text-white cursor-pointer'
                                 onClick={() => handleNavigate('/Terms Of Service')}>Terms Of Service
                            </div>
                            <div className='hover:text-white cursor-pointer'
                                 onClick={() => handleNavigate('/Privacy Policy')}>Privacy Policy
                            </div>
                            <div className='hover:text-white cursor-pointer'
                                 onClick={() => handleNavigate('/Medical Practitioner')}>Medical Practitioner
                            </div>
                            <div className='hover:text-white cursor-pointer'
                                 onClick={() => handleNavigate('/Testimonials')}>Testimonials
                            </div>
                        </div>
                    </div>


                    <div className='flex items-center justify-center md:justify-start mt-6 md:mt-0'>
                        <div
                            className="bg-red-700 border border-white rounded-md p-2 text-white flex items-center space-x-2">
                            <p className='text-sm cursor-pointer' onClick={() => handleNavigate('/email')}>your email
                                address</p>
                            <img src={send} alt="Send icon" className="h-6 w-6"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
