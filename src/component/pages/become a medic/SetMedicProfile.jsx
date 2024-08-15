import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

const SetMedicProfile = () => {
    const navigate = useNavigate();
    const handleSetMedicProfileClick = () => {
        navigate('/medicDashboard');
    };
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 md:p-12 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">Welcome!</h1>
                <p className="text-center text-gray-600 mb-6 md:mb-10">You are almost there!</p>
                <input
                    type="text"
                    placeholder="First Name"
                    className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                <input
                    type="text"
                    placeholder="Email"
                    className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                <div className="w-full mb-4">
                    <select
                        id="Gender"
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    >
                        <option value="" disabled selected>Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
                <div className="w-full mb-4">
                    <select
                        id="specialization"
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    >
                        <option value="" disabled selected>Select Specialization</option>
                        <option value="cardiology">Cardiology</option>
                        <option value="neurology">Neurology</option>
                        <option value="orthopedics">Orthopedics</option>
                        <option value="pediatrics">Pediatrics</option>
                    </select>
                </div>
                <input
                    type="text"
                    placeholder="License Number"
                    className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    className="w-full p-3 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                <button
                    type="submit"
                    className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700"
                    onClick={handleSetMedicProfileClick}
                >
                    Set Profile
                </button>
                <div className="mt-6 text-center">
                    <a href="/" className="text-red-600 hover:underline flex items-center justify-center">
                        <FaArrowLeft className="mr-2" />
                        Back
                    </a>
                </div>
                <div className="text-center mt-8">
                    <p className="text-red-600 font-bold">Already have an account?
                        <a href="/login" className="text-red-600 hover:underline ml-1">Login</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SetMedicProfile;
