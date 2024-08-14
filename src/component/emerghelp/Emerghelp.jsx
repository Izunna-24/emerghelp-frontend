import React from 'react';
import { FaHouse } from "react-icons/fa6";
import { FaRoad } from "react-icons/fa6";

export const icon = [
    {
        icon: <FaHouse style={{color:"red"}} />,
        title: "Home",
        text: "When health emergencies hit home, every second counts. Whether it’s a sudden injury or a flare-up of a chronic condition."

    },
    {
        icon: <FaRoad style={{color:"red"}} />,
        title: "On The Road",
        text: "When you’re on the move, health emergencies can strike unexpectedly. Whether you're commuting, traveling, or simply out and about."
    },
    {
        icon: <FaHouse style={{color:"red"}} />,
        title: "At The Office",
        text: "When a health emergency strikes at work, Whether it’s a sudden illness or an accident."
    },
];

const MemberSection = () => {
    return (
        <div className="p-6">
            <h6 className="font-bold text-center mb-8 text-3xl">Who is Emerghelp for?</h6>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {icon.map((value, index) => (
                    <div key={index} className="flex flex-col items-center text-center">
                        <div className="mb-4 w-32 h-32 flex items-center justify-center text-6xl">
                            {value.icon}
                        </div>
                        <h2 className="text-xl font-bold mb-2">{value.title}</h2>
                        <p className="w-3/4 sm:w-1/1">{value.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MemberSection;
