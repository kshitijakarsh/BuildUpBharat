import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "outline";
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
    variant = "primary",
    children,
    className = "",
    ...props
}) => {
    const btnBase = "px-4 py-2.5 md:px-8 md:py-4 rounded-full text-sm md:text-base transition-all shadow-lg active:scale-95 whitespace-nowrap";

    const variants = {
        primary: "bg-brand-orange-deep hover:bg-brand-orange text-white font-medium",
        outline: "border border-white/40 hover:bg-white/10 text-white font-normal md:font-medium"
    };

    return (
        <button
            className={`${btnBase} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
