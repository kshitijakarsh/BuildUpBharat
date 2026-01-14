import React, { useState, useEffect } from "react";
import { Mail, Send, X, Key, Lock, Eye, EyeOff, Check } from "lucide-react";
import Button from "../common/Button";

interface ForgotPasswordModalProps {
    isOpen: boolean;
    onClose: () => void;
}

type ModalStep = "recovery" | "otp" | "reset" | "success";

const ForgotPasswordModal: React.FC<ForgotPasswordModalProps> = ({ isOpen, onClose }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [step, setStep] = useState<ModalStep>("recovery");
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            setStep("recovery"); // Reset to first step when opened
            document.body.style.overflow = "hidden";
        } else {
            const timer = setTimeout(() => setIsVisible(false), 300);
            document.body.style.overflow = "unset";
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    if (!isVisible && !isOpen) return null;

    const handleSendCode = () => setStep("otp");
    const handleVerifyOTP = () => setStep("reset");
    const handleResetPassword = () => setStep("success");
    const handleGoToDashboard = () => {
        onClose();
    };

    return (
        <div className={`fixed inset-0 z-100 flex items-center justify-center p-4 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
            {/* Backdrop */}
            <div className="fixed inset-0 bg-white/60 backdrop-blur-md" onClick={onClose} />

            {/* Modal Content */}
            <div className={`relative w-full max-w-md bg-white rounded-3xl border border-gray-100 p-6 md:p-8 shadow-2xl shadow-blue-100 transform transition-all duration-300 ${isOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-10"}`}>
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute right-5 top-5 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-full transition-all"
                >
                    <X size={20} />
                </button>

                <div className="flex flex-col items-center text-center">
                    {step === "recovery" && (
                        <>
                            <div className="w-16 h-16 md:w-20 md:h-20 bg-[#F0F3FF] rounded-3xl flex items-center justify-center mb-6">
                                <Mail size={32} className="text-[#3D4EE1]" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-brand-blue-text mb-3">Recovery</h2>
                            <p className="text-sm md:text-base font-semibold text-gray-400 max-w-[280px] leading-relaxed mb-8">
                                Verify your registered email to reset your credentials.
                            </p>
                            <div className="w-full space-y-2 text-left mb-8">
                                <label className="text-[10px] md:text-xs font-bold text-gray-700 uppercase tracking-wider ml-1">Email Address</label>
                                <div className="relative group">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#3D4EE1] transition-colors">
                                        <Mail size={18} />
                                    </div>
                                    <input
                                        type="email"
                                        placeholder="example@gmail.com"
                                        className="w-full bg-white border border-gray-200 rounded-2xl py-3 pl-12 pr-6 text-gray-700 text-sm md:text-base font-medium focus:ring-1 focus:ring-[#3D4EE1]/20 focus:border-[#3D4EE1] outline-none transition-all shadow-sm"
                                    />
                                </div>
                            </div>
                            <Button
                                variant="primary"
                                onClick={handleSendCode}
                                className="w-full bg-[#3D4EE1] hover:bg-[#2D3AE4] py-4 text-lg font-bold rounded-xl flex items-center justify-center gap-3 shadow-lg shadow-blue-200 font-nunito"
                            >
                                Send Code
                                <Send size={20} className="rotate-[-10deg]" />
                            </Button>
                        </>
                    )}

                    {step === "otp" && (
                        <>
                            <div className="w-16 h-16 md:w-20 md:h-20 bg-[#F0F3FF] rounded-3xl flex items-center justify-center mb-6">
                                <Key size={32} className="text-[#3D4EE1]" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-brand-blue-text mb-3">Verify OTP</h2>
                            <p className="text-sm md:text-base font-semibold text-gray-400 max-w-[320px] leading-relaxed mb-8">
                                A 6-digit code has been sent to your inbox.
                            </p>
                            <div className="flex justify-between w-full gap-2 mb-8 px-2 md:px-4">
                                {[...Array(6)].map((_, i) => (
                                    <input
                                        key={i}
                                        type="text"
                                        maxLength={1}
                                        className="w-10 h-12 md:w-12 md:h-14 text-center text-xl font-bold text-gray-700 border border-[#3D4EE1]/40 rounded-2xl focus:border-[#3D4EE1] focus:ring-1 focus:ring-[#3D4EE1]/20 outline-none transition-all"
                                    />
                                ))}
                            </div>
                            <Button
                                variant="primary"
                                onClick={handleVerifyOTP}
                                className="w-full bg-[#3D4EE1] hover:bg-[#2D3AE4] py-4 text-lg font-bold rounded-xl shadow-lg shadow-blue-200 mb-4 font-nunito"
                            >
                                Confirm OTP
                            </Button>
                            <button className="text-sm font-bold text-gray-400 hover:text-gray-600 transition-colors">
                                Resend Code
                            </button>
                        </>
                    )}

                    {step === "reset" && (
                        <>
                            <div className="w-16 h-16 md:w-20 md:h-20 bg-[#F0F3FF] rounded-3xl flex items-center justify-center mb-6">
                                <Lock size={32} className="text-[#3D4EE1]" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-brand-blue-text mb-3">Set Password</h2>
                            <p className="text-sm md:text-base font-semibold text-gray-400 max-w-[320px] leading-relaxed mb-8">
                                Ensure your new password is secure.
                            </p>

                            <div className="w-full space-y-4 mb-8">
                                {/* New Password */}
                                <div className="space-y-2 text-left">
                                    <label className="text-[10px] md:text-xs font-bold text-gray-700 uppercase tracking-wider ml-1">New Password</label>
                                    <div className="relative group">
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#3D4EE1] transition-colors">
                                            <Lock size={18} />
                                        </div>
                                        <input
                                            type={showNewPassword ? "text" : "password"}
                                            placeholder="••••••••"
                                            className="w-full bg-white border border-gray-200 rounded-2xl py-3 pl-12 pr-10 text-gray-700 text-sm md:text-base font-medium focus:ring-1 focus:ring-[#3D4EE1]/20 focus:border-[#3D4EE1] outline-none transition-all shadow-sm"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowNewPassword(!showNewPassword)}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                        >
                                            {showNewPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                        </button>
                                    </div>
                                </div>

                                {/* Confirm Password */}
                                <div className="space-y-2 text-left">
                                    <label className="text-[10px] md:text-xs font-bold text-gray-700 uppercase tracking-wider ml-1">Confirm Password</label>
                                    <div className="relative group">
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#3D4EE1] transition-colors">
                                            <Lock size={18} />
                                        </div>
                                        <input
                                            type={showConfirmPassword ? "text" : "password"}
                                            placeholder="••••••••"
                                            className="w-full bg-white border border-gray-200 rounded-2xl py-3 pl-12 pr-10 text-gray-700 text-sm md:text-base font-medium focus:ring-1 focus:ring-[#3D4EE1]/20 focus:border-[#3D4EE1] outline-none transition-all shadow-sm"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                        >
                                            {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <Button
                                variant="primary"
                                onClick={handleResetPassword}
                                className="w-full bg-[#3D4EE1] hover:bg-[#2D3AE4] py-4 text-lg font-bold rounded-xl shadow-lg shadow-blue-200 font-nunito"
                            >
                                Reset Now
                            </Button>
                        </>
                    )}

                    {step === "success" && (
                        <>
                            <div className="flex items-center justify-center mb-6">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#32D74B] rounded-full flex items-center justify-center">
                                    <Check size={24} className="text-white" />
                                </div>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-brand-blue-text mb-3">All Set</h2>
                            <p className="text-sm md:text-base font-medium text-gray-400 mb-8">
                                Your password has been successfully updated. Securely redirected to your profile dashboard.
                            </p>

                            <Button
                                variant="primary"
                                onClick={handleGoToDashboard}
                                className="w-full bg-[#32D74B] hover:bg-[#32D74B] py-4 text-lg font-bold rounded-xl font-nunito  flex items-center justify-center"
                            >
                                Go to Login
                            </Button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ForgotPasswordModal;
