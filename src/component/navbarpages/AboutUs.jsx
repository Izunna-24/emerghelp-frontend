import React, { useState } from 'react';

const AboutUs = () => {


    return (
        <div className="bg-gray-100 min-h-screen p-8">
            <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="bg-red-600 text-white text-center py-12">
                    <h1 className="text-3xl md:text-5xl font-bold">About Us</h1>
                    <p className="mt-4 text-lg">Dedicated to providing the best healthcare services</p>
                </div>

                <div className="p-8">

                    <section className="mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Our Mission</h2>
                        <p className="mt-4 text-gray-600">
                            Our mission is to improve the health and well-being of our patients by providing
                            high-quality healthcare services. We strive to offer personalized care with compassion and
                            respect, ensuring that every patient feels valued and supported.
                        </p>
                    </section>


                    <section className="mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Meet Our Team</h2>
                        <p className="mt-4 text-gray-600">
                            Our team is composed of highly skilled professionals who are passionate about
                            healthcare. From doctors to support staff, every member of our team is dedicated to
                            providing
                            the best care possible.
                        </p>
                        <div className="flex flex-wrap mt-6 -mx-4">
                            <div className="w-full md:w-1/3 px-4 mb-6">
                                <div className="bg-gray-200 p-4 rounded-lg shadow-lg">
                                    <img src="https://img.freepik.com/free-photo/medium-shot-smiley-doctor-with-coat_23-2148814212.jpg?size=626&ext=jpg&ga=GA1.2.1122754596.1723043454&semt=ais_hybrid" alt="Team Member 1"
                                         className="rounded-full w-24 h-24 mx-auto mb-4"/>
                                    <h3 className="text-xl font-bold text-center">Dr. Jane</h3>
                                    <p className="text-gray-600 text-center">Cardiologist</p>
                                </div>
                            </div>
                            <div className="w-full md:w-1/3 px-4 mb-6">
                                <div className="bg-gray-200 p-4 rounded-lg shadow-lg">
                                    <img src="https://img.freepik.com/premium-photo/young-african-american-female-doctor-with-braided-hair-wearing-white-medical-coat-smiling_1164587-3080.jpg?size=626&ext=jpg&ga=GA1.2.1122754596.1723043454&semt=ais_hybrid" alt="Team Member 2"
                                         className="rounded-full w-24 h-24 mx-auto mb-4"/>
                                    <h3 className="text-xl font-bold text-center">Dr. Angel</h3>
                                    <p className="text-gray-600 text-center">Neurologist</p>
                                </div>
                            </div>
                            <div className="w-full md:w-1/3 px-4 mb-6">
                                <div className="bg-gray-200 p-4 rounded-lg shadow-lg">
                                    <img src="https://img.freepik.com/premium-photo/man-white-lab-coat-is-smiling-with-his-arms-crossed_182633-516.jpg?size=626&ext=jpg&ga=GA1.1.1122754596.1723043454&semt=ais_hybrid" alt="Team Member 3"
                                         className="rounded-full w-24 h-24 mx-auto mb-4"/>
                                    <h3 className="text-xl font-bold text-center">Dr. Izuchukwu</h3>
                                    <p className="text-gray-600 text-center">Orthopedic Surgeon</p>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Our Values</h2>
                        <ul className="mt-4 space-y-4 text-gray-600">
                            <li className="flex items-center">
                        <span className="bg-red-600 text-white p-2 rounded-full mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M13 10V3L4 14h7v7l9-11h-7z"/>
                            </svg>
                        </span>
                                <span>Compassionate Care</span>
                            </li>
                            <li className="flex items-center">
                        <span className="bg-red-600 text-white p-2 rounded-full mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M5 13l4 4L19 7"/>
                            </svg>
                        </span>
                                <span>Excellence in Service</span>
                            </li>
                            <li className="flex items-center">
                        <span className="bg-red-600 text-white p-2 rounded-full mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M12 4v16m8-8H4"/>
                            </svg>
                        </span>
                                <span>Integrity and Trust</span>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>


    );
}

export default AboutUs;
