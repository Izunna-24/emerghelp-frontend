import React from 'react';
import { useNavigate } from "react-router-dom";
import picture from "../../asset/img/emergency.jpg";

const Hero = () => {
    const navigate = useNavigate();

    const handleRegisterClick = () => {
        navigate('/register');
    };

    return (
        <div className="flex flex-col md:flex-row items-center pt-24 px-4 md:px-20">
            {/* Text Content */}
            <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                <h1 className="font-extrabold text-3xl md:text-5xl leading-tight">
                    Welcome to Emerghelp
                    <span className="block bg-opacity-50 text-red-600 text-xl md:text-3xl mt-2">Health Emergency Help Is At Your Fingertip...</span>
                </h1>
                <p className="text-lg mt-4 text-blue-900">
                    Providing the response you need, when you need it the most.
                </p>
                <button className="mt-6 text-white bg-red-600 rounded-md px-6 py-3 md:px-8 md:py-4"
                        onClick={handleRegisterClick}>
                    Register
                </button>
            </div>

            {/* Image */}
            <div className="md:w-1/2 flex justify-center">
                <img src={picture} alt="Emergency Help" className="w-full h-auto object-cover rounded-lg"/>
            </div>
        </div>
    );
};

export default Hero;
