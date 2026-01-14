import { useState } from "react";
import { Lock, Eye, ShieldCheck } from "lucide-react";
import Button from "../common/Button";
import ForgotPasswordModal from "./ForgotPasswordModal";

const SecurityDetailsForm = () => {
    const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);

    return (
        <div className="flex-1 bg-white rounded-[2.5rem] border border-gray-100 p-8 md:p-12 shadow-sm relative overflow-hidden">
            {/* Background Decorative Icon */}
            <div className="absolute right-10 top-6 opacity-[0.03] pointer-events-none">
                <ShieldCheck size={120} className="text-gray-900" />
            </div>

            <div className="flex justify-between items-start mb-10 relative z-10">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2 font-['Outfit']">Security Details</h2>
                    <p className="text-gray-500 font-medium">Update your profile to stay relevant in the Indian ecosystem.</p>
                </div>
            </div>

            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                    <div className="p-2 bg-[#F8F9FF] rounded-lg text-brand-blue-start">
                        <Lock size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Change Password</h3>
                </div>

                <div className="h-px bg-gray-100 w-full mb-10"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                    {/* Current Password */}
                    <div className="space-y-3">
                        <label className="text-xs font-bold text-gray-700 uppercase tracking-wider ml-1">Current Password</label>
                        <div className="relative group">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand-blue-start transition-colors">
                                <Lock size={20} />
                            </div>
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full bg-white border border-gray-200 rounded-2xl py-3.5 pl-12 pr-12 text-gray-700 font-medium focus:ring-1 focus:ring-brand-blue-start/20 focus:border-brand-blue-start outline-none transition-all shadow-sm"
                            />
                            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors">
                                <Eye size={18} />
                            </button>
                        </div>
                        <button
                            onClick={() => setIsForgotPasswordOpen(true)}
                            className="text-sm font-bold text-brand-blue-start hover:underline ml-1"
                        >
                            Forgot Password?
                        </button>
                    </div>

                    <div className="space-y-10">
                        {/* New Password */}
                        <div className="space-y-3">
                            <label className="text-xs font-bold text-gray-700 uppercase tracking-wider ml-1">New Password</label>
                            <div className="relative group">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand-blue-start transition-colors">
                                    <Lock size={20} />
                                </div>
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    className="w-full bg-white border border-gray-200 rounded-2xl py-3.5 pl-12 pr-12 text-gray-700 font-medium focus:ring-1 focus:ring-brand-blue-start/20 focus:border-brand-blue-start outline-none transition-all shadow-sm"
                                />
                                <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors">
                                    <Eye size={18} />
                                </button>
                            </div>
                        </div>

                        {/* Confirm Password */}
                        <div className="space-y-3">
                            <label className="text-xs font-bold text-gray-700 uppercase tracking-wider ml-1">Confirm Password</label>
                            <div className="relative group">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand-blue-start transition-colors">
                                    <Lock size={20} />
                                </div>
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    className="w-full bg-white border border-gray-200 rounded-2xl py-3.5 pl-12 pr-12 text-gray-700 font-medium focus:ring-1 focus:ring-brand-blue-start/20 focus:border-brand-blue-start outline-none transition-all shadow-sm"
                                />
                                <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors">
                                    <Eye size={18} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-12 flex justify-end relative z-10">
                <Button variant="primary" className="bg-[#2D3AE4] hover:bg-blue-700 px-10 py-4 text-lg font-bold rounded-2xl flex items-center gap-3 shadow-lg shadow-blue-100">
                    Update Password
                </Button>
            </div>

            <ForgotPasswordModal
                isOpen={isForgotPasswordOpen}
                onClose={() => setIsForgotPasswordOpen(false)}
            />
        </div>
    );
};

export default SecurityDetailsForm;
