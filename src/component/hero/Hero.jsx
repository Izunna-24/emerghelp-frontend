// import React from 'react';
import picture from "../../asset/img/emergency.jpg";

import React from 'react';
import {useNavigate} from "react-router-dom";

const Hero = () => {
    const navigate = useNavigate();

    const handleRegisterClick = () => {
        navigate('/register');
    };
    return (
        <div className="flex justify-around items-center pt-24">
            <div>
                <h1 className=" font-extrabold text-5xl">
                    Welcome to Emerghelp
                    <span className="block bg-opacity-50 text-red-600 text-3xl">Health Emergency Help Is At Your Finger Tip...</span>
                </h1>
                <p className="text-lg mt-4 blue-900">
                    Providing the response you need, when you need it the most.                </p>
                <button className="mt-6 text-white bg-red-600 rounded-md px-8 py-3"
                    onClick={handleRegisterClick}>
                    Register
                </button>
            </div>
            <img src={picture} alt="" className="w-auto image-hero h-auto"/>
        </div>
    );
};



export default Hero;
