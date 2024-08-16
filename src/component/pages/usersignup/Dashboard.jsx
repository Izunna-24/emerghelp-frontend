import React from 'react';
import { FaHome, FaUser, FaBell, FaMoneyBill, FaPhone, FaSms, FaHistory, FaHandsHelping } from 'react-icons/fa';

function Dashboard() {
    return (
        <div className="flex min-h-screen bg-gray-100">
            <aside className="w-64 bg-red-600 text-white hidden lg:block">
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
                            <a href="/payment" className="flex items-center text-lg">
                                <span className="mr-2 text-xl"><FaMoneyBill /></span> Payment
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

            <div className="flex-grow ml-0">
                <header className="bg-white shadow p-4 flex flex-col sm:flex-row justify-between items-center">
                    <div>
                        <h1 className="text-xl font-semibold">Jumoke Joseph </h1>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-4 sm:mt-0">
                        <button className="text-gray-600 hover:text-gray-900 transition duration-300">
                            <FaBell />
                        </button>
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full sm:w-auto p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600 transition duration-300"
                        />
                        <div className="bg-white p-1 rounded-sm">
                            <h2 className="text-lg font-semibold">Language</h2>
                            <select
                                className="max-w-sm rounded-lg border-gray-300 focus:ring-2 focus:ring-red-600 transition duration-300">
                                <option>English</option>
                                <option>Spanish</option>
                                <option>French</option>
                            </select>
                        </div>
                    </div>
                </header>

                <div className="p-6 bg-gray-100">
                    <div className="flex flex-col sm:flex-row gap-6">
                        <div className="bg-white p-6 rounded-lg shadow w-full sm:w-1/2 lg:w-1/4 transition-transform duration-300 hover:scale-105">
                            <h2 className="text-lg font-semibold">Upcoming Appointments</h2>
                            <p className="mt-2 text-3xl font-bold">2</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow w-full sm:w-1/2 lg:w-1/4 transition-transform duration-300 hover:scale-105">
                            <h2 className="text-lg font-semibold">Medications Due</h2>
                            <p className="mt-2 text-3xl font-bold">3</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow w-full sm:w-1/2 lg:w-1/4 transition-transform duration-300 hover:scale-105">
                            <h2 className="text-lg font-semibold">Health Monitoring</h2>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow w-full sm:w-1/2 lg:w-1/4 transition-transform duration-300 hover:scale-105">
                            <h2 className="text-lg font-semibold">Emergency Calls</h2>
                            <p className="mt-2 text-3xl font-bold">5</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow flex flex-col sm:flex-row justify-between">
                    <div>
                        <h2 className="text-lg font-bold">Recent Activity</h2>
                        <ul className="mt-4 space-y-3">
                            <li className="text-gray-700 text-xl">Called Dr. Smith - 2 hours ago</li>
                            <li className="text-gray-700 text-xl">Medication Reminder - 4 hours ago</li>
                            <li className="text-gray-700 text-xl">Logged in - 1 day ago</li>
                        </ul>
                    </div>
                </div>
                <div className="fixed bottom-4 right-4">
                    <button className="bg-red-600 text-white p-4 rounded-full shadow-lg hover:bg-red-700 transition-transform duration-300 hover:scale-105">
                        Call Doctor
                    </button>
                </div>

                <div className="bg-white p-2 shadow mt-6">
                    <h2 className="text-lg font-bold">Feedback</h2>
                    <form className="mt-2">
                        <textarea
                            placeholder="Enter your feedback here..."
                            className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600 transition duration-300"
                        ></textarea>
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
