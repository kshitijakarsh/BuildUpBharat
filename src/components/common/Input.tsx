import React, { forwardRef } from 'react'
import { type LucideIcon } from 'lucide-react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    title: string
    icon: LucideIcon
    error?: string
    rightElement?: React.ReactNode
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ title, icon: Icon, error, rightElement, className, ...props }, ref) => {
        return (
            <div className="group">
                <label className="text-xs md:text-sm font-medium text-gray-700 block mb-1 ml-1">
                    {title}
                </label>
                <div className="relative flex items-center">
                    <div className="absolute left-0 top-0 bottom-0 w-12 md:w-14 bg-brand-accent-blue rounded-l-full flex items-center justify-center text-white shadow-md z-10">
                        <Icon size={18} className="md:w-5 md:h-5" />
                    </div>
                    <input
                        ref={ref}
                        className={`w-full pl-16 md:pl-18 ${rightElement ? 'pr-12' : 'pr-4'} py-2.5 md:py-3.5 rounded-full border ${error ? 'border-red-500' : 'border-brand-highlight/30'
                            } bg-white text-sm md:text-base text-gray-800 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-highlight/20 focus:border-brand-highlight transition-all shadow-sm ${className}`}
                        {...props}
                    />
                    {rightElement && (
                        <div className="absolute right-4">
                            {rightElement}
                        </div>
                    )}
                </div>
                {error && (
                    <p className="text-red-500 text-[10px] md:text-xs ml-4 mt-0.5">
                        {error}
                    </p>
                )}
            </div>
        )
    }
)

Input.displayName = 'Input'

export default Input
