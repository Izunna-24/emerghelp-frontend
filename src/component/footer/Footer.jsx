import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../../asset/img/newlogo.png"
import send from "../../asset/img/send1.png";
// import {} from 'react-icons/fa';

const Footer = () => {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <div className='w-full bg-red-600 text-white py-5 px-40'>
            <div className='container mx-auto px-4'>
                <div className='flex flex-col md:flex-row justify-between items-center'>
                       <div className='mb-4 md:mb-0' style={{marginLeft: "-100px"}}>
                        <img src={logo}  className="h-16 w-16" />
                        <p className='text-bold'>© 2024 Emerghelp. All rights reserved.</p>
                       </div>
                    <div style={{display: "flex", gap: "80px"}}>
                        <div className='grid-cols-3 text-bold'
                             style={{display: "flex", justifyContent: "space-evenly", flexDirection: "column"}}>
                            <div className='hover:text-white cursor-pointer' onClick={() => handleNavigate('/')}>Home
                            </div>
                            <div className='hover:text-black cursor-pointer text-bold'
                                 onClick={() => handleNavigate('/get-help')}>Get Help
                            </div>
                            <div className='hover:text-black cursor-pointer'
                                 onClick={() => handleNavigate('/community')}>Community
                            </div>
                            <div className='hover:text-black cursor-pointer'
                                 onClick={() => handleNavigate('/blog')}>Blog
                            </div>
                            <div className='hover:text-black cursor-pointer'
                                 onClick={() => handleNavigate('/about-us')}>About Us
                            </div>
                            <div className='hover:text-black cursor-pointer'
                                 onClick={() => handleNavigate('/contact-us')}>Contact Us
                            </div>
                        </div>
                        <div className='grid-cols-3 text-bold'
                             style={{display: "flex", justifyContent: "space-evenly", flexDirection: "column"}}>
                            <div className='hover:text-black cursor-pointer'
                                 onClick={() => handleNavigate('/Support')}>Support
                            </div>
                            <div className='hover:text-black cursor-pointer'
                                 onClick={() => handleNavigate('/Help Center')}>Help Center
                            </div>
                            <div className='hover:text-black cursor-pointer'
                                 onClick={() => handleNavigate('/Terms Of Service')}>Terms Of Service
                            </div>
                            <div className='hover:text-black cursor-pointer'
                                 onClick={() => handleNavigate('/Privacy Policy')}>Privacy Policy
                            </div>
                            <div className='hover:text-black cursor-pointer'
                                 onClick={() => handleNavigate('/Medical Practitioner')}>Medical Practitioner
                            </div>
                            <div className='hover:text-black cursor-pointer'
                                 onClick={() => handleNavigate('/Testimonials')}>Testimonials
                            </div>
                        </div>

                        <div
                            className="bg-red-600 border border-white rounded-md p-2 text-white flex items-center space-x-2 h-7 w-35 ">
                            <p className='email cursor-pointer'  onClick={() => handleNavigate('/email')}>>
                                your email address
                            </p>
                            <img src={send} alt="Send icon" className="h-6 w-6"/>
                        </div>


                    </div>
                </div>

            </div>
            {/*</div>*/}
        </div>
    );
};

export default Footer;
