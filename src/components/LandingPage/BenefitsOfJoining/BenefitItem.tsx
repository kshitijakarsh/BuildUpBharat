import React from "react";

interface BenefitItemProps {
    title: string;
    description: string;
    imageSrc: string;
    imageAlign?: "left" | "right";
    accentColor?: string;
}

const BenefitItem: React.FC<BenefitItemProps> = ({
    title,
    description,
    imageSrc,
    imageAlign = "left",
    accentColor = "bg-brand-orange-light",
}) => {
    const isLeft = imageAlign === "left";

    return (
        <div
            className={`flex flex-col ${isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center justify-center gap-10 lg:gap-14 py-8`}
        >
            <div className="w-full max-w-sm lg:max-w-none lg:w-[35%] relative flex justify-center">
                <div
                    className={`absolute -top-4 -left-4 w-16 h-16 bg-brand-blue rounded-[12px] -z-10 hidden lg:block ${isLeft ? "" : "lg:-right-2 lg:left-auto"
                        }`}
                />

                <div className="bg-white rounded-3xl shadow-sm p-2 md:p-4 relative z-10 w-full">
                    <img
                        src={imageSrc}
                        alt={title}
                        className="w-full h-auto object-contain"
                    />
                </div>
            </div>

            {/* Text */}
            <div className="w-full lg:w-[40%] flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="relative mb-4 inline-block">
                    <div
                        className={`absolute -top-2 -left-3 w-8 h-8 ${accentColor} rounded-full opacity-80 -z-10`}
                    />
                    <div className="absolute top-0 -right-2 w-2 h-2 bg-brand-cyan-bright rounded-full" />

                    <h3 className="text-xl md:text-2xl lg:text-3xl font-nunito font-extrabold text-brand-navy">
                        {title}
                    </h3>
                </div>

                <p className="text-gray-500 text-xs md:text-sm lg:text-base font-normal leading-relaxed max-w-md">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default BenefitItem;
