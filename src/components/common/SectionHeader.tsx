import React from "react";

interface SectionHeaderProps {
    bgText: string;
    children: React.ReactNode;
    className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
    bgText,
    children,
    className = "mb-10 md:mb-15"
}) => {
    return (
        <div className={`relative text-center ${className}`}>
            <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl sm:text-3xl md:text-5xl lg:text-9xl font-extrabold text-black/6 whitespace-nowrap select-none -z-10 uppercase">
                {bgText}
            </h2>
            <h3 className="text-base sm:text-xl md:text-3xl lg:text-5xl font-nunito font-extrabold text-brand-blue whitespace-nowrap">
                {children}
            </h3>
        </div>
    );
};

export default SectionHeader;
