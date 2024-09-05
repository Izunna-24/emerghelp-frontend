import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

const SetMedicProfile = () => {
    const navigate = useNavigate();

    // State to manage form inputs
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [specialization, setSpecialization] = useState("");
    const [licenseNumber, setLicenseNumber] = useState("");
    const [password, setPassword] = useState("");
    const [submitted, setSubmitted] = useState(false);

    // Handle form submission
    const handleSetMedicProfileClick = () => {
        if (firstName && lastName && phoneNumber && email && gender && specialization && licenseNumber && password) {
            setSubmitted(true);
            navigate('/medicDashboard');
        } else {
            alert("Please fill in all the fields before submitting!");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 md:p-12 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">Welcome!</h1>
                <p className="text-center text-gray-600 mb-6 md:mb-10">Want to be a part of us?</p>

                <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                <input
                    type="text"
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                <div className="w-full mb-4">
                    <select
                        id="Gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    >
                        <option value="" disabled>Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
                <div className="w-full mb-4">
                    <select
                        id="specialization"
                        value={specialization}
                        onChange={(e) => setSpecialization(e.target.value)}
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    >
                        <option value="" disabled>Select Specialization</option>
                        <option value="cardiology">Cardiology</option>
                        <option value="neurology">Neurology</option>
                        <option value="orthopedics">Orthopedics</option>
                        <option value="pediatrics">Pediatrics</option>
                        <option value="nurse">Nurse</option>
                        <option value="labscientist">Lab Scientist</option>
                        <option value="paramedics">Para Medic</option>
                        <option value="optometrist">Optometrist</option>
                    </select>
                </div>
                <input
                    type="text"
                    placeholder="License Number"
                    value={licenseNumber}
                    onChange={(e) => setLicenseNumber(e.target.value)}
                    className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                <button
                    type="submit"
                    className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700"
                    onClick={handleSetMedicProfileClick}
                >
                    Become A Medic
                </button>

                {submitted && (
                    <div className="mt-4 bg-green-100 text-green-800 p-4 rounded-lg">
                        Medic profile successfully submitted!
                    </div>
                )}

                <div className="mt-6 text-center">
                    <a href="/" className="text-red-600 hover:underline flex items-center justify-center">
                        <FaArrowLeft className="mr-2" />
                        Back
                    </a>
                </div>
            </div>
        </div>
    );
}

export default SetMedicProfile;
