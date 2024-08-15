import React from 'react';
import { FaHouse, FaRoad } from "react-icons/fa6";

export const icon = [
    {
        icon: <FaHouse style={{ color: "red" }} />,
        title: "Home",
        text: "When health emergencies hit home, every second counts. Whether it’s a sudden injury or a flare-up of a chronic condition."
    },
    {
        icon: <FaRoad style={{ color: "red" }} />,
        title: "On The Road",
        text: "When you’re on the move, health emergencies can strike unexpectedly. Whether you're commuting, traveling, or simply out and about."
    },
    {
        icon: <FaHouse style={{ color: "red" }} />,
        title: "At The Office",
        text: "When a health emergency strikes at work, Whether it’s a sudden illness or an accident."
    },
];

const MemberSection = () => {
    return (
        <div className="p-6 md:p-12">
            <h6 className="font-bold text-center mb-8 text-2xl md:text-3xl">Who is Emerghelp for?</h6>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {icon.map((value, index) => (
                    <div key={index} className="flex flex-col items-center text-center p-4 border rounded-lg shadow-lg bg-white">
                        <div className="mb-4 w-24 h-24 flex items-center justify-center text-4xl md:text-6xl">
                            {value.icon}
                        </div>
                        <h2 className="text-lg md:text-xl font-bold mb-2">{value.title}</h2>
                        <p className="text-sm md:text-base px-4">{value.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MemberSection;
