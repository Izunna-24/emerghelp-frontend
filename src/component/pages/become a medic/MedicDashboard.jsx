import React from 'react';
import { FaHome, FaUser, FaBell, FaMoneyBill, FaPhone, FaSms, FaHistory, FaHandsHelping } from 'react-icons/fa';

function MedicDashboard() {
    return (
        <div className="flex min-h-screen flex-col md:flex-row">
            {/* Sidebar */}
            <aside className="w-full md:w-64 bg-red-600 text-white p-4 md:p-6">
                <nav>
                    <ul>
                        <li className="p-4 hover:bg-gray-700">
                            <a href="/dashboard" className="flex items-center text-lg">
                                <span className="mr-2 text-xl"><FaHome /></span> Dashboard
                            </a>
                        </li>
                        <div className="w-24 h-24 bg-gray-300 rounded-full mb-4 mx-auto"></div>
                        <h1 className="text-xl font-bold text-center">Funke Alaps</h1>
                        <p className="text-black text-center">Doctor</p>
                        <li className="p-4 hover:bg-gray-700">
                            <a href="/profile" className="flex items-center text-lg">
                                <span className="mr-2 text-xl"><FaUser /></span> Profile
                            </a>
                        </li>
                        <li className="p-4 hover:bg-gray-700">
                            <a href="/payment" className="flex items-center text-lg">
                                <span className="mr-2 text-xl"><FaMoneyBill /></span> Payment
                            </a>
                        </li>
                        <li className="p-4 hover:bg-gray-700">
                            <a href="/accept-request" className="flex items-center text-lg">
                                <span className="mr-2 text-xl"><FaPhone /></span> Accept Request
                            </a>
                        </li>
                        <li className="p-4 hover:bg-gray-700">
                            <a href="/messageMedic" className="flex items-center text-lg">
                                <span className="mr-2 text-xl"><FaSms /></span> Message Patient
                            </a>
                        </li>
                        <li className="p-4 hover:bg-gray-700">
                            <a href="/emmergencyHistory" className="flex items-center text-lg">
                                <span className="mr-2 text-xl"><FaHistory /></span> Emergency History
                            </a>
                        </li>
                        <li className="p-4 hover:bg-gray-700">
                            <a href="/support" className="flex items-center text-lg">
                                <span className="mr-2 text-xl"><FaHandsHelping /></span> Support
                            </a>
                        </li>
                    </ul>
                </nav>
            </aside>

            {/* Main Content */}
            <div className="flex flex-col flex-grow">
                <header className="bg-white shadow p-4 flex flex-col md:flex-row justify-between items-center">
                    <div>
                        <h1 className="text-xl font-semibold">Jumoke Joseph</h1>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center mt-4 md:mt-0 space-y-4 md:space-y-0 md:space-x-4">
                        <button className="text-gray-600 hover:text-gray-900">
                            <FaBell />
                        </button>
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full md:w-auto p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
                        />
                        <div className="bg-white p-1 rounded-sm">
                            <h2 className="text-lg font-semibold">Language</h2>
                            <select className="w-full max-w-xs rounded-lg border-gray-300 focus:ring-2 focus:ring-red-600">
                                <option>English</option>
                                <option>Spanish</option>
                                <option>French</option>
                            </select>
                        </div>
                    </div>
                </header>

                <div className="p-6 bg-gray-100">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h2 className="text-lg font-semibold">Upcoming Appointments</h2>
                            <p className="mt-2 text-3xl font-bold">2</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h2 className="text-lg font-semibold">Medications Due</h2>
                            <p className="mt-2 text-3xl font-bold">3</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h2 className="text-lg font-semibold">Health Monitoring</h2>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h2 className="text-lg font-semibold">Emergency Calls</h2>
                            <p className="mt-2 text-3xl font-bold">5</p>
                        </div>
                    </div>
                </div>

                <div className="p-4 bg-white shadow rounded-lg">
                    <h2 className="text-lg font-bold">Recent Activity</h2>
                    <ul className="mt-4 space-y-3">
                        <li className="text-gray-700 text-sm md:text-base">Called Dr. Smith - 2 hours ago</li>
                        <li className="text-gray-700 text-sm md:text-base">Medication Reminder - 4 hours ago</li>
                        <li className="text-gray-700 text-sm md:text-base">Logged in - 1 day ago</li>
                    </ul>
                </div>

                <div className="fixed bottom-4 right-4">
                    <button className="bg-red-600 text-white p-4 rounded-full shadow-lg hover:bg-red-700">
                        Call Patient
                    </button>
                </div>

                <div className="bg-white p-4 shadow rounded-lg mt-6">
                    <h2 className="text-lg font-bold">Patient Record</h2>
                    <form className="mt-2">
                        <textarea
                            placeholder="Enter your feedback here..."
                            className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
                        ></textarea>
                        <button
                            type="submit"
                            className="mt-4 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default MedicDashboard;
