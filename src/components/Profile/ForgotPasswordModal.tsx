import React, { useState, useEffect } from "react";
import { Mail, Send, X, Key, Lock, Eye, EyeOff, Check } from "lucide-react";
import Button from "../common/Button";
import { useForgotPassword, useVerifyOtp, useResetPassword } from "../../hooks/useAuth";

interface ForgotPasswordModalProps {
    isOpen: boolean;
    onClose: () => void;
}

type ModalStep = "recovery" | "otp" | "reset" | "success";

const ForgotPasswordModal: React.FC<ForgotPasswordModalProps> = ({ isOpen, onClose }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [step, setStep] = useState<ModalStep>("recovery");
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const forgotPasswordMutation = useForgotPassword();
    const verifyOtpMutation = useVerifyOtp();
    const resetPasswordMutation = useResetPassword();

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            setStep("recovery"); // Reset to first step when opened
            setEmail("");
            setOtp(new Array(6).fill(""));
            setPassword("");
            setConfirmPassword("");
            document.body.style.overflow = "hidden";
        } else {
            const timer = setTimeout(() => setIsVisible(false), 300);
            document.body.style.overflow = "unset";
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    if (!isVisible && !isOpen) return null;

    const handleSendCode = () => {
        if (!email) return;
        forgotPasswordMutation.mutate({ email }, {
            onSuccess: () => setStep("otp")
        });
    };

    const handleVerifyOTP = () => {
        const otpString = otp.join("");
        if (otpString.length !== 6) return;
        verifyOtpMutation.mutate({ email, otp: otpString }, {
            onSuccess: () => setStep("reset")
        });
    };

    const handleResetPassword = () => {
        const otpString = otp.join("");
        if (!password || !confirmPassword) return;
        // The API expects 'newPassword' but we have 'password' state. Mapping correctly:
        resetPasswordMutation.mutate({ email, otp: otpString, newPassword: password, confirmPassword }, {
            onSuccess: () => setStep("success")
        });
    };
    const handleGoToDashboard = () => {
        onClose();
    };

    const handleOtpChange = (element: HTMLInputElement, index: number) => {
        if (isNaN(Number(element.value))) return;

        const newOtp = [...otp];
        newOtp[index] = element.value;
        setOtp(newOtp);

        // Focus next input
        if (element.value && element.nextSibling) {
            (element.nextSibling as HTMLInputElement).focus();
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            const prevInput = (e.target as HTMLInputElement).previousSibling as HTMLInputElement;
            if (prevInput) {
                prevInput.focus();
            }
        }
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
                            <div className="w-16 h-16 md:w-20 md:h-20 bg-brand-alice-blue rounded-3xl flex items-center justify-center mb-6">
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
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full bg-white border border-gray-200 rounded-2xl py-3 pl-12 pr-6 text-gray-700 text-sm md:text-base font-medium focus:ring-1 focus:ring-[#3D4EE1]/20 focus:border-[#3D4EE1] outline-none transition-all shadow-sm"
                                    />
                                </div>
                            </div>
                            <Button
                                variant="primary"
                                onClick={handleSendCode}
                                disabled={forgotPasswordMutation.isPending}
                                className="w-full bg-[#3D4EE1] hover:bg-[#2D3AE4] py-4 text-lg font-bold rounded-xl flex items-center justify-center gap-3 shadow-lg shadow-blue-200 font-nunito disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {forgotPasswordMutation.isPending ? "Sending..." : "Send Code"}
                                {!forgotPasswordMutation.isPending && <Send size={20} className="rotate-[-10deg]" />}
                            </Button>
                        </>
                    )}

                    {step === "otp" && (
                        <>
                            <div className="w-16 h-16 md:w-20 md:h-20 bg-brand-alice-blue rounded-3xl flex items-center justify-center mb-6">
                                <Key size={32} className="text-[#3D4EE1]" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-brand-blue-text mb-3">Verify OTP</h2>
                            <p className="text-sm md:text-base font-semibold text-gray-400 max-w-[320px] leading-relaxed mb-8">
                                A 6-digit code has been sent to your inbox.
                            </p>
                            <div className="flex justify-between w-full gap-2 mb-8 px-2 md:px-4">
                                {otp.map((data, index) => (
                                    <input
                                        key={index}
                                        type="text"
                                        maxLength={1}
                                        value={data}
                                        onChange={(e) => handleOtpChange(e.target, index)}
                                        onKeyDown={(e) => handleKeyDown(e, index)}
                                        className="w-10 h-12 md:w-12 md:h-14 text-center text-xl font-bold text-gray-700 border border-[#3D4EE1]/40 rounded-2xl focus:border-[#3D4EE1] focus:ring-1 focus:ring-[#3D4EE1]/20 outline-none transition-all"
                                    />
                                ))}
                            </div>
                            <Button
                                variant="primary"
                                onClick={handleVerifyOTP}
                                disabled={verifyOtpMutation.isPending}
                                className="w-full bg-[#3D4EE1] hover:bg-[#2D3AE4] py-4 text-lg font-bold rounded-xl shadow-lg shadow-blue-200 mb-4 font-nunito disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {verifyOtpMutation.isPending ? "Verifying..." : "Confirm OTP"}
                            </Button>
                            <button
                                onClick={handleSendCode}
                                disabled={forgotPasswordMutation.isPending}
                                className="text-sm font-bold text-gray-400 hover:text-gray-600 transition-colors disabled:opacity-70"
                            >
                                {forgotPasswordMutation.isPending ? "Resending..." : "Resend Code"}
                            </button>
                        </>
                    )}

                    {step === "reset" && (
                        <>
                            <div className="w-16 h-16 md:w-20 md:h-20 bg-brand-alice-blue rounded-3xl flex items-center justify-center mb-6">
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
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
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
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
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
                                disabled={resetPasswordMutation.isPending}
                                className="w-full bg-[#3D4EE1] hover:bg-[#2D3AE4] py-4 text-lg font-bold rounded-xl shadow-lg shadow-blue-200 font-nunito disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {resetPasswordMutation.isPending ? "Resetting..." : "Reset Now"}
                            </Button>
                        </>
                    )}

                    {step === "success" && (
                        <>
                            <div className="flex items-center justify-center mb-6">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-success rounded-full flex items-center justify-center">
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
                                className="w-full bg-brand-success hover:bg-brand-success py-4 text-lg font-bold rounded-xl font-nunito  flex items-center justify-center"
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
