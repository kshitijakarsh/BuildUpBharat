import React from "react";
import { Award, Bus, ChartNoAxesColumn, Check, Network } from "lucide-react";
import girlSvg from "@/assets/girl.svg";

export const HeroVisuals: React.FC = () => {
    return (
        <div className="hidden lg:flex lg:w-1/2 relative justify-end items-center h-full">
            <div className="relative w-full max-w-2xl">
                <img
                    src={girlSvg}
                    alt="Happy Student"
                    className="w-full relative z-10 drop-shadow-2xl"
                    fetchPriority="high"
                />

                <VisualBadge
                    className="top-[30%] -left-10 bg-white/90"
                    icon={<Award className="w-5 h-5 text-white" />}
                    iconBg="bg-trusted-cyan"
                    label="Trusted by students"
                    subLabel="across India"
                />

                <VisualBadge
                    className="top-[60%] -right-10 md:-right-20 bg-white/90"
                    icon={<Network className="w-5 h-5 text-white" />}
                    iconBg="bg-brand-orange"
                    label="Entrepreneur community"
                    subLabel="network"
                />

                <VisualBadge
                    className="bottom-20 left-10 md:left-20 bg-white/90"
                    icon={<Bus className="w-5 h-5 text-white" />}
                    iconBg="bg-tours-blue"
                    label="Educational Tours &"
                    subLabel="Event Visits"
                />

                <div className="absolute top-[30%] right-[10%] z-10 bg-urgent-red p-2 rounded-lg shadow-lg">
                    <div className="w-8 h-8 flex items-center justify-center font-bold bg-white rounded-sm p-1">
                        <ChartNoAxesColumn className="text-red-400" strokeWidth={4} />
                    </div>
                </div>

                <div className="absolute bottom-[45%] -right-2 z-10 bg-green-400 rounded-full p-1 shadow-md">
                    <Check className="w-4 h-4 text-white" strokeWidth={4} />
                </div>
            </div>
        </div>
    );
};

interface VisualBadgeProps {
    className: string;
    icon: React.ReactNode;
    iconBg: string;
    label: string;
    subLabel: string;
}

const VisualBadge: React.FC<VisualBadgeProps> = ({ className, icon, iconBg, label, subLabel }) => (
    <div className={`absolute z-30 rounded-2xl px-4 py-3 flex items-center gap-3 text-black ${className}`}>
        <div className={`${iconBg} p-2 rounded-lg`}>
            {icon}
        </div>
        <div>
            <span className="text-xs font-medium">{label}</span>
            <span className="block text-xs opacity-70">{subLabel}</span>
        </div>
    </div>
);
