import React from "react";
import type { ReactElement } from "react";

interface ValueCardProps {
    title: string;
    description: string;
    icon: ReactElement<{ size?: number; strokeWidth?: number }>;
    iconBg?: string;
}

const ValueCard: React.FC<ValueCardProps> = ({
    title,
    description,
    icon,
    iconBg = "bg-brand-blue",
}) => {
    return (
        <div className="relative bg-white rounded-b-4xl py-8 px-4 pt-16 shadow-md flex flex-col items-center text-center group">
            <div
                className={`absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 ${iconBg} rounded-full flex items-center justify-center shadow-lg`}
            >
                <div className="text-white">
                    {React.cloneElement(icon, {
                        size: 32,
                        strokeWidth: 2,
                    })}
                </div>
            </div>

            <h3 className="text-xl mb-6 uppercase">{title}</h3>

            <p className="text-gray-500 leading-relaxed text-xs md:text-base font-light">
                {description}
            </p>
        </div>
    );
};

export default ValueCard;
