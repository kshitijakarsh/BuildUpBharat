import * as React from "react";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

type ButtonVariant = "primary" | "outline" | "secondary";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    fullWidth?: boolean;
}

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const baseStyles =
    "inline-flex items-center justify-center whitespace-nowrap rounded-full shadow-lg transition-all active:scale-95";

const sizeStyles: Record<ButtonSize, string> = {
    sm: "px-4 py-2 text-xs md:text-sm",
    md: "px-6 py-2.5 md:px-8 md:py-3 text-sm md:text-base",
    lg: "px-8 py-3 md:px-10 md:py-4 text-base md:text-lg",
};

const variantStyles: Record<ButtonVariant, string> = {
    primary:
        "bg-brand-orange-deep text-white font-medium hover:bg-brand-orange",
    outline:
        "border border-white/40 text-white font-normal md:font-medium hover:bg-white/10",
    secondary:
        "bg-white border border-gray-200 text-gray-900 font-medium hover:bg-gray-50",
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            variant = "primary",
            size = "md",
            fullWidth = false,
            className,
            children,
            ...props
        },
        ref
    ) => {
        return (
            <button
                ref={ref}
                className={cn(
                    baseStyles,
                    sizeStyles[size],
                    variantStyles[variant],
                    fullWidth && "w-full",
                    className
                )}
                {...props}
            >
                {children}
            </button>
        );
    }
);

export default Button;