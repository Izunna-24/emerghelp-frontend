import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();

    // State to store form input values
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [gender, setGender] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSetProfileClick = () => {
        // Check if all fields are filled before proceeding
        if (firstName && lastName && gender && phoneNumber && email && password) {
            setSubmitted(true);
            navigate('/dashboard');
        } else {
            alert("Please fill in all the fields before submitting!");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg w-full max-w-md md:max-w-lg transition-transform transform hover:scale-105 duration-300">
                <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">Set Your Profile</h1>

                <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 transition duration-300"
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 transition duration-300"
                />
                <div className="w-full mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 transition duration-300">
                    <select
                        id="Gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        className="w-full p-3 bg-white border-none rounded-lg focus:outline-none"
                    >
                        <option value="" disabled>Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Undefined">Undefined</option>

                    </select>
                </div>
                <input
                    type="number"
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 transition duration-300"
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 transition duration-300"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 transition duration-300"
                />
                <button
                    type="button"
                    className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300"
                    onClick={handleSetProfileClick}
                >
                    Set Profile
                </button>

                {submitted && (
                    <div className="mt-4 bg-green-100 text-green-800 p-4 rounded-lg">
                        Profile successfully submitted!
                    </div>
                )}

                <div className="mt-6 text-center">
                    <a href="/" className="text-red-600 hover:underline flex items-center justify-center transition duration-300">
                        <FaArrowLeft className="mr-2" />
                        Back
                    </a>
                </div>
                <div className="text-center mt-6">
                    <p className="text-red-600 font-bold">Already have an account?
                        <a href="/dashboard" className="text-red-600 hover:underline ml-1 transition duration-300">Dashboard</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Register;
