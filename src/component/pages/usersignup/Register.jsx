import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();

    const handleRegisterClick = () => {
        navigate('/setProfile');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 bg-cover p-4">
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg w-full max-w-md md:max-w-lg transition-transform transform hover:scale-105 duration-300">
                <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">Welcome!</h1>
                <p className="text-center text-gray-600 mb-6 md:mb-8">Fill in the details below</p>
                <input
                    type="text"
                    placeholder="Email"
                    className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 transition duration-300"
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 transition duration-300"
                />
                <button
                    type="submit"
                    className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300"
                    onClick={handleRegisterClick}
                >
                    Register
                </button>
                <div className="mt-6 text-center">
                    <a href="/" className="text-red-600 hover:underline flex items-center justify-center transition duration-300">
                        <FaArrowLeft className="mr-2" />
                        Back
                    </a>
                </div>
                <div className="text-center mt-6">
                    <p className="text-red-600 font-bold">Already have an account?
                        <a href="/login" className="text-red-600 hover:underline ml-1 transition duration-300">Login</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Register;
