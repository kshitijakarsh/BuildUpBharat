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
            <div className={`relative w-full max-w-lg bg-white rounded-[3rem] border border-gray-100 p-10 md:p-14 shadow-2xl shadow-blue-100 transform transition-all duration-300 ${isOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-10"}`}>
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute right-8 top-8 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-full transition-all"
                >
                    <X size={24} />
                </button>

                <div className="flex flex-col items-center text-center">
                    {step === "recovery" && (
                        <>
                            <div className="w-24 h-24 bg-[#F0F3FF] rounded-4xl flex items-center justify-center mb-8">
                                <Mail size={42} className="text-[#3D4EE1]" />
                            </div>
                            <h2 className="text-5xl font-extrabold text-brand-blue-text mb-4">Recovery</h2>
                            <p className="text-xl font-semibold text-gray-400 max-w-[280px] leading-relaxed mb-10">
                                Verify your registered email to reset your credentials.
                            </p>
                            <div className="w-full space-y-3 text-left mb-10">
                                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">Email Address</label>
                                <div className="relative group">
                                    <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#3D4EE1] transition-colors">
                                        <Mail size={22} />
                                    </div>
                                    <input
                                        type="email"
                                        defaultValue="aryansharma009@gmail.com"
                                        className="w-full bg-white border border-gray-200 rounded-3xl py-4 pl-14 pr-6 text-gray-700 text-lg font-medium focus:ring-1 focus:ring-[#3D4EE1]/20 focus:border-[#3D4EE1] outline-none transition-all shadow-sm"
                                    />
                                </div>
                            </div>
                            <Button
                                variant="primary"
                                onClick={handleSendCode}
                                className="w-full bg-[#3D4EE1] hover:bg-[#2D3AE4] py-5 text-xl font-bold rounded-2xl flex items-center justify-center gap-3 shadow-lg shadow-blue-200 font-['Inter']"
                            >
                                Send Code
                                <Send size={24} className="rotate-[-10deg]" />
                            </Button>
                        </>
                    )}

                    {step === "otp" && (
                        <>
                            <div className="w-24 h-24 bg-[#F0F3FF] rounded-4xl flex items-center justify-center mb-8">
                                <Key size={42} className="text-[#3D4EE1]" />
                            </div>
                            <h2 className="text-5xl font-extrabold text-brand-blue-text mb-4">Verify OTP</h2>
                            <p className="text-xl font-semibold text-gray-400 max-w-[320px] leading-relaxed mb-12">
                                A 6-digit code has been sent to your inbox.
                            </p>
                            <div className="flex justify-between w-full gap-2 mb-12">
                                {[...Array(6)].map((_, i) => (
                                    <input
                                        key={i}
                                        type="text"
                                        maxLength={1}
                                        className="w-12 h-14 md:w-14 md:h-16 text-center text-2xl font-bold text-gray-700 border border-[#3D4EE1]/40 rounded-2xl focus:border-[#3D4EE1] focus:ring-1 focus:ring-[#3D4EE1]/20 outline-none transition-all"
                                    />
                                ))}
                            </div>
                            <Button
                                variant="primary"
                                onClick={handleVerifyOTP}
                                className="w-full bg-[#3D4EE1] hover:bg-[#2D3AE4] py-5 text-xl font-bold rounded-2xl shadow-lg shadow-blue-200 mb-6 font-['Inter']"
                            >
                                Confirm OTP
                            </Button>
                            <button className="text-lg font-bold text-gray-400 hover:text-gray-600 transition-colors">
                                Resend Code
                            </button>
                        </>
                    )}

                    {step === "reset" && (
                        <>
                            <div className="w-24 h-24 bg-[#F0F3FF] rounded-4xl flex items-center justify-center mb-8">
                                <Lock size={42} className="text-[#3D4EE1]" />
                            </div>
                            <h2 className="text-5xl font-extrabold text-brand-blue-text mb-4">Set Password</h2>
                            <p className="text-xl font-semibold text-gray-400 max-w-[320px] leading-relaxed mb-10">
                                Ensure your new password is secure.
                            </p>

                            <div className="w-full space-y-8 mb-10">
                                {/* New Password */}
                                <div className="space-y-3 text-left">
                                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">New Password</label>
                                    <div className="relative group">
                                        <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#3D4EE1] transition-colors">
                                            <Lock size={22} />
                                        </div>
                                        <input
                                            type={showNewPassword ? "text" : "password"}
                                            placeholder="••••••••"
                                            className="w-full bg-white border border-gray-200 rounded-3xl py-4 pl-14 pr-12 text-gray-700 text-lg font-medium focus:ring-1 focus:ring-[#3D4EE1]/20 focus:border-[#3D4EE1] outline-none transition-all shadow-sm"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowNewPassword(!showNewPassword)}
                                            className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                        >
                                            {showNewPassword ? <EyeOff size={22} /> : <Eye size={22} />}
                                        </button>
                                    </div>
                                </div>

                                {/* Confirm Password */}
                                <div className="space-y-3 text-left">
                                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">Confirm Password</label>
                                    <div className="relative group">
                                        <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#3D4EE1] transition-colors">
                                            <Lock size={22} />
                                        </div>
                                        <input
                                            type={showConfirmPassword ? "text" : "password"}
                                            placeholder="••••••••"
                                            className="w-full bg-white border border-gray-200 rounded-3xl py-4 pl-14 pr-12 text-gray-700 text-lg font-medium focus:ring-1 focus:ring-[#3D4EE1]/20 focus:border-[#3D4EE1] outline-none transition-all shadow-sm"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                            className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                        >
                                            {showConfirmPassword ? <EyeOff size={22} /> : <Eye size={22} />}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <Button
                                variant="primary"
                                onClick={handleResetPassword}
                                className="w-full bg-[#3D4EE1] hover:bg-[#2D3AE4] py-5 text-xl font-bold rounded-2xl shadow-lg shadow-blue-200 font-['Inter']"
                            >
                                Reset Now
                            </Button>
                        </>
                    )}

                    {step === "success" && (
                        <>
                            <div className="w-24 h-24 bg-[#EFFFEE] rounded-4xl flex items-center justify-center mb-8">
                                <div className="w-14 h-14 bg-[#32D74B] rounded-full flex items-center justify-center shadow-lg shadow-green-100">
                                    <Check size={32} className="text-white" />
                                </div>
                            </div>
                            <h2 className="text-5xl font-extrabold text-brand-blue-text mb-4">All Set</h2>
                            <p className="text-xl font-semibold text-gray-400 max-w-[320px] leading-relaxed mb-10">
                                Your password has been successfully updated. Securely redirected to your profile dashboard.
                            </p>

                            <Button
                                variant="primary"
                                onClick={handleGoToDashboard}
                                className="w-full bg-[#32D74B] hover:bg-[#28B23E] py-5 text-xl font-bold rounded-2xl shadow-lg shadow-green-200 font-['Inter'] flex items-center justify-center"
                            >
                                Go to Dashboard
                            </Button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ForgotPasswordModal;
