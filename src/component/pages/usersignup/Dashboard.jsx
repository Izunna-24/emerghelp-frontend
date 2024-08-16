import React, { useState } from 'react';
import { FaHome, FaUser, FaBell, FaPhone, FaSms, FaHistory, FaHandsHelping } from 'react-icons/fa';

function Dashboard() {
    // Dummy data for demo
    const [appointments, setAppointments] = useState(2);
    const [medicationsDue, setMedicationsDue] = useState(3);
    const [emergencyCalls, setEmergencyCalls] = useState(5);
    const [recentActivity, setRecentActivity] = useState([
        { id: 1, text: 'Called Dr. Smith - 2 hours ago' },
        { id: 2, text: 'Medication Reminder - 4 hours ago' },
        { id: 3, text: 'Logged in - 1 day ago' },
    ]);
    const [feedback, setFeedback] = useState("");

    // Handle adding a new appointment
    const addAppointment = () => {
        setAppointments(appointments + 1);
        setRecentActivity([{ id: recentActivity.length + 1, text: 'Added a new appointment' }, ...recentActivity]);
    };

    // Handle adding new medications
    const addMedication = () => {
        setMedicationsDue(medicationsDue + 1);
        setRecentActivity([{ id: recentActivity.length + 1, text: 'Added a new medication' }, ...recentActivity]);
    };

    // Handle logging a new emergency call
    const addEmergencyCall = () => {
        setEmergencyCalls(emergencyCalls + 1);
        setRecentActivity([{ id: recentActivity.length + 1, text: 'Emergency call logged' }, ...recentActivity]);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (feedback.trim()) {
            setRecentActivity([{ id: recentActivity.length + 1, text: `Feedback: ${feedback}` }, ...recentActivity]);
            setFeedback("");
        }
    };

    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
            <aside className="w-full lg:w-64 bg-red-600 text-white p-4">
                <nav>
                    <ul>
                        <li className="p-4 hover:bg-gray-700">
                            <a href="/dashboard" className="flex items-center text-lg">
                                <span className="mr-2 text-xl"><FaHome /></span> Dashboard
                            </a>
                        </li>
                        <li className="p-4 hover:bg-gray-700">
                            <a href="/profile" className="flex items-center text-lg">
                                <span className="mr-2 text-xl"><FaUser /></span> Profile
                            </a>
                        </li>
                        <li className="p-4 hover:bg-gray-700">
                            <a href="/orderMedic" className="flex items-center text-lg">
                                <span className="mr-2 text-xl"><FaPhone /></span> Order Medic
                            </a>
                        </li>
                        <li className="p-4 hover:bg-gray-700">
                            <a href="/messageMedic" className="flex items-center text-lg">
                                <span className="mr-2 text-xl"><FaSms /></span> Message Medic
                            </a>
                        </li>
                        <li className="p-4 hover:bg-gray-700">
                            <a href="/emergencyHistory" className="flex items-center text-lg">
                                <span className="mr-2 text-xl"><FaHistory /></span> Emergency History
                            </a>
                        </li>
                    </ul>
                </nav>
            </aside>

            <div className="flex-grow p-6 bg-gray-100">
                <header className="bg-white shadow p-4 flex justify-between items-center">
                    <h1 className="text-xl font-semibold">Jumoke Joseph</h1>
                    <button className="text-gray-600 hover:text-gray-900 transition duration-300">
                        <FaBell />
                    </button>
                </header>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow transition-transform duration-500 hover:scale-110">
                        <h2 className="text-lg font-semibold">Upcoming Appointments</h2>
                        <p className="mt-2 text-3xl font-bold">{appointments}</p>
                        <button onClick={addAppointment} className="mt-4 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300">
                            Add Appointment
                        </button>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow transition-transform duration-500 hover:scale-110">
                        <h2 className="text-lg font-semibold">Medications Due</h2>
                        <p className="mt-2 text-3xl font-bold">{medicationsDue}</p>
                        <button onClick={addMedication} className="mt-4 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300">
                            Add Medication
                        </button>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow transition-transform duration-500 hover:scale-110">
                        <h2 className="text-lg font-semibold">Emergency Calls</h2>
                        <p className="mt-2 text-3xl font-bold">{emergencyCalls}</p>
                        <button onClick={addEmergencyCall} className="mt-4 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300">
                            Log Emergency Call
                        </button>
                    </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow mt-6">
                    <h2 className="text-lg font-bold">Recent Activity</h2>
                    <ul className="mt-4 space-y-3">
                        {recentActivity.map((activity) => (
                            <li key={activity.id} className="text-gray-700 text-xl">{activity.text}</li>
                        ))}
                    </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow mt-6">
                    <h2 className="text-lg font-bold">Feedback</h2>
                    <form onSubmit={handleSubmit} className="mt-4">
                        <textarea
                            value={feedback}
                            onChange={(e) => setFeedback(e.target.value)}
                            placeholder="Enter your feedback here..."
                            className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600 transition duration-300"
                        />
                        <button
                            type="submit"
                            className="mt-4 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
