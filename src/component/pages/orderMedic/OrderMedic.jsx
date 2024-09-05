import React, { useState } from 'react';
import logo from "../../../asset/img/newlogo.png"; // Ensure this logo has a transparent background

const OrderMedicPage = () => {
    const [formData, setFormData] = useState({
        patientName: '',
        location: '',
        emergencyDescription: '',
        contactNumber: '',
        prescriptionFile: null,
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, prescriptionFile: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            console.log('Emergency Medic Order submitted:', formData);
            setIsSubmitting(false);
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-red-100 flex items-center justify-center py-4 px-4">
            <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white rounded-xl shadow-lg overflow-hidden">
                {/* Photo Section */}
                <div className="md:w-1/2 flex items-center justify-center p-4 md:p-8 bg-gradient-to-r from-blue-100 via-white to-blue-100">
                    <img
                        src={logo}
                        alt="Your Company Logo"
                        className="w-full h-auto object-contain rounded-lg animate-pulse"
                        style={{ backgroundColor: 'transparent' }} // Ensure logo's background is transparent
                    />
                </div>

                {/* Form Section */}
                <div className="md:w-1/2 flex flex-col justify-center p-6 md:p-8">
                    <div className="uppercase tracking-wide text-sm text-red-600 font-bold mb-2">Emergency Services</div>
                    <h2 className="text-2xl md:text-3xl leading-tight font-extrabold text-gray-900 mb-4">Request a Medic</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="patientName" className="block text-sm font-medium text-gray-700">Patient Name</label>
                            <input type="text" name="patientName" id="patientName" required
                                   className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-600 focus:border-red-600 transition duration-300"
                                   onChange={handleInputChange} />
                        </div>
                        <div>
                            <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
                            <input type="text" name="location" id="location" required
                                   className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-600 focus:border-red-600 transition duration-300"
                                   onChange={handleInputChange} />
                        </div>
                        <div>
                            <label htmlFor="emergencyDescription" className="block text-sm font-medium text-gray-700">Emergency Description</label>
                            <textarea name="emergencyDescription" id="emergencyDescription" rows="3" required
                                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-600 focus:border-red-600 transition duration-300"
                                      onChange={handleInputChange}></textarea>
                        </div>
                        <div>
                            <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">Contact Number</label>
                            <input type="tel" name="contactNumber" id="contactNumber" required
                                   className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-600 focus:border-red-600 transition duration-300"
                                   onChange={handleInputChange} />
                        </div>
                        <div>
                            <label htmlFor="prescriptionFile" className="block text-sm font-medium text-gray-700">Upload Any Relevant Documents (Optional)</label>
                            <input type="file" name="prescriptionFile" id="prescriptionFile"
                                   className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100 transition duration-300"
                                   onChange={handleFileChange} />
                        </div>
                        <div>
                            <button type="submit"
                                    className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-red-600 via-red-700 to-red-800 hover:from-red-700 hover:via-red-800 hover:to-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 transition duration-300 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                                    disabled={isSubmitting}>
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Searching for Medic...
                                    </>
                                ) : 'Request Emergency Medic'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default OrderMedicPage;
