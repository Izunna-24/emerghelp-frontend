import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const incomingOrder = {
    description: '13 years old male having seizure',
    location: '314, Sabo Yaba',
    distance: 10, // Distance from medic in km
    coordinates: [6.506125, 3.377417] // Patient's coordinates
};

const AcceptOrderPage = () => {
    const [order, setOrder] = useState(incomingOrder);
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [medicPosition, setMedicPosition] = useState([6.504015, 3.372335]);

    useEffect(() => {
        // Simulate live medic movement towards the patient
        const interval = setInterval(() => {
            setMedicPosition((prevPosition) => [
                prevPosition[0] + 0.00001,
                prevPosition[1] + 0.00001
            ]);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const handleAcceptOrder = () => {
        setLoading(true);
        setTimeout(() => {
            setResponse({
                success: true,
                message: 'Order accepted successfully!'
            });
            setLoading(false);
        }, 1000);
    };

    const handleRejectOrder = () => {
        setLoading(true);
        setTimeout(() => {
            setResponse({
                success: false,
                message: 'Order rejected.'
            });
            setLoading(false);
        }, 1000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 via-red-100 to-gray-200 flex flex-col lg:flex-row items-center justify-center p-6">
            <div className="w-full lg:w-1/2 p-6">
                <motion.div
                    className="bg-red-500 text-white p-8 rounded-lg shadow-lg"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-3xl font-bold mb-4">Emergency Order</h1>
                    <motion.div
                        className="bg-red-400 text-white p-6 rounded-lg shadow-lg mb-4"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
                    >
                        <p className="text-lg font-semibold">Order Details</p>
                        <p className="text-sm mb-2">Description: {order.description}</p>
                        <p className="text-sm mb-2">Location: {order.location}</p>
                        <p className="text-sm mb-4">Distance: {order.distance} km</p>
                    </motion.div>
                    <div className="flex flex-col sm:flex-row justify-between">
                        <button
                            onClick={handleAcceptOrder}
                            className="bg-white text-red-600 py-2 px-4 rounded-md hover:bg-red-100 transition mb-2 sm:mb-0 sm:mr-2"
                        >
                            {loading ? 'Accepting...' : 'Accept'}
                        </button>
                        <button
                            onClick={handleRejectOrder}
                            className="bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 transition"
                        >
                            {loading ? 'Rejecting...' : 'Reject'}
                        </button>
                    </div>
                    {response && (
                        <motion.div
                            className={`mt-4 p-4 rounded-md ${response.success ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {response.message}
                        </motion.div>
                    )}
                </motion.div>
            </div>
            <div className="w-full lg:w-1/2 h-96">
                <MapContainer center={order.coordinates} zoom={13} style={{ height: '100%', width: '100%' }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={medicPosition} icon={L.icon({ iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png', iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34] })}>
                        <Popup>Medic is on the way</Popup>
                    </Marker>
                    <Marker position={order.coordinates} icon={L.icon({ iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png', iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34] })}>
                        <Popup>Patient's Location</Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    );
};

export default AcceptOrderPage;
