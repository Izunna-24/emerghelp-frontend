import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import {useNavigate} from "react-router-dom";

const SetProfile = () => {
    const navigate = useNavigate();

    const handleSetProfileClick = () => {

        navigate('/dashboard');
    };
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 bg-cover">
            <div className="absolute bg-white p-12 rounded-lg shadow-lg w-lg max-w-lg">
                <h1 className="text-3xl font-bold text-center mb-8">Set your profile</h1>
                {/*<p className="text-center text-gray-600 mb-10">Fill the details below</p>*/}
                <input
                    type="text"
                    placeholder="FirstName"
                    className="w-full p-4 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                <input
                    type="text"
                    placeholder="LastName"
                    className="w-full p-4 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                <div className="w-full p-4 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600">
                    <select
                        id="Gender">
                        <option value="" disabled selected>Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>

                </div>
                {/*<input*/}
                {/*    type="text"*/}
                {/*    placeholder="PhoneNumber"*/}
                {/*    className="w-full p-4 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"*/}
                {/*/>*/}

                <input
                    type="number"
                    placeholder="PhoneNumber"
                    className="w-full p-4 mb-8 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-4 mb-8 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-4 mb-8 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    className="w-full p-4 mb-8 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                />


                <button
                    type="submit"
                    className="w-full bg-red-600 text-white py-4 rounded-lg font-semibold hover:bg-red-600 "
                    onClick={handleSetProfileClick}
                >
                    Set Profile
                </button>
                <div className="mb-8">
                    <a href="/" className="text-red-600 hover:underline flex items-center">
                        <FaArrowLeft className="mr-2"/>
                        Back
                    </a>
                </div>
                <div className="text-center mt-10">
                    <p className="text-red-600 font-bold">Already have an account?
                        <a href="/Login" className="text-red-600 hover:underline ml-1">Login</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SetProfile;
