import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

const Login = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-red-100 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
            <div className="bg-white p-6 md:p-12 rounded-xl shadow-2xl max-w-md md:max-w-lg w-full transform hover:scale-105 transition duration-500">
                <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">Welcome Back!</h1>
                <p className="text-center text-gray-600 mb-6 md:mb-10">Log in by entering your details below</p>
                <input
                    type="text"
                    placeholder="Email"
                    className="w-full p-3 mb-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-600 transition duration-300 hover:border-red-400"
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-3 mb-6 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-600 transition duration-300 hover:border-red-400"
                />
                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white py-3 rounded-md font-semibold hover:bg-gradient-to-r hover:from-red-700 hover:via-red-800 hover:to-red-900 focus:outline-none focus:ring-2 focus:ring-red-600 transition duration-300"
                >
                    Log In
                </button>
                <div className="mt-6 md:mt-8">
                    <a href="/" className="text-red-600 hover:underline flex items-center justify-center transition duration-300 hover:text-red-700">
                        <FaArrowLeft className="mr-2" />
                        Back
                    </a>
                </div>
                <div className="text-center mt-8 md:mt-10">
                    <p className="text-red-600 font-bold">Don't have an account?
                        <a href="/signUp" className="text-red-600 hover:underline ml-1 transition duration-300 hover:text-red-700">Sign Up</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;
