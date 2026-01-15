import { useState, useEffect } from "react";
import { User as UserIcon, Mail, Phone, Briefcase, Plus, Save, Ban, Loader2 } from "lucide-react";
import Button from "../common/Button";
import { useProfile } from "../../hooks/useAuth";
import { useUpdateUser } from "../../hooks/useUsers";

// const INTERESTS = [
//     "UI/UX Design",
//     "Web Development",
//     "AI/ML",
//     "Product Management",
// ];

const AccountDetailsForm = () => {
    const { data: response, isLoading: isProfileLoading } = useProfile();
    const updateUserMutation = useUpdateUser();

    const [fullName, setFullName] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const profile = response?.data;

    useEffect(() => {
        if (profile) {
            setFullName(profile.fullName);
            setMobileNumber(profile.mobileNumber);
        }
    }, [profile]);

    const handleSave = () => {
        if (!profile) return;

        updateUserMutation.mutate(
            {
                id: profile._id || profile.id!,
                data: { fullName, mobileNumber }
            },
            {
                onSuccess: () => {
                    setSuccessMessage("Account details updated successfully!");
                    setTimeout(() => setSuccessMessage(""), 3000);
                }
            }
        );
    };

    if (isProfileLoading) {
        return (
            <div className="flex-1 bg-white rounded-[2.5rem] border border-gray-100 p-8 md:p-12 shadow-sm flex items-center justify-center min-h-[400px]">
                <Loader2 className="w-10 h-10 text-brand-blue animate-spin" />
            </div>
        );
    }

    return (
        <div className="flex-1 bg-white rounded-[2.5rem] border border-gray-100 p-8 md:p-12 shadow-sm">
            <div className="flex justify-between items-start mb-10">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Account Details</h2>
                    <p className="text-gray-500 font-medium">Update your profile to stay relevant in the Indian ecosystem.</p>
                </div>
                <div className="hidden md:flex w-16 h-16 rounded-2xl items-center justify-center">
                    <UserIcon size={42} className="text-gray-200" />
                </div>
            </div>

            {successMessage && (
                <div className="mb-6 p-4 bg-green-50 border border-green-100 text-green-600 rounded-2xl font-medium animate-in fade-in slide-in-from-top-2">
                    {successMessage}
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                {/* Full Name */}
                <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider ml-1">Full Name</label>
                    <div className="relative group">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand-blue-start transition-colors">
                            <UserIcon size={20} />
                        </div>
                        <input
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="w-full bg-white border border-gray-200 rounded-2xl py-3.5 pl-12 pr-4 text-gray-700 font-medium focus:ring-1 focus:ring-brand-blue-start/20 focus:border-brand-blue-start outline-none transition-all"
                        />
                    </div>
                </div>

                {/* Email Address */}
                <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider ml-1">Email Address</label>
                    <div className="relative group opacity-60">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                            <Mail size={20} />
                        </div>
                        <input
                            type="email"
                            disabled
                            value={profile?.email || "-"}
                            className="w-full bg-white border border-gray-200 rounded-2xl py-3.5 pl-12 pr-12 text-gray-400 font-medium cursor-not-allowed outline-none"
                        />
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-red-400">
                            <Ban size={18} />
                        </div>
                    </div>
                </div>

                {/* Mobile Number */}
                <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider ml-1">Mobile Number</label>
                    <div className="relative group">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand-blue-start transition-colors">
                            <Phone size={20} />
                        </div>
                        <input
                            type="tel"
                            value={mobileNumber}
                            onChange={(e) => setMobileNumber(e.target.value)}
                            className="w-full bg-white border border-gray-200 rounded-2xl py-3.5 pl-12 pr-4 text-gray-700 font-medium focus:ring-1 focus:ring-brand-blue-start/20 focus:border-brand-blue-start outline-none transition-all"
                        />
                    </div>
                </div>

                {/* Current Role */}
                <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider ml-1">Current Role</label>
                    <div className="relative group opacity-60">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                            <Briefcase size={20} />
                        </div>
                        <input
                            type="text"
                            disabled
                            value={!profile?.role ? "-" : (profile.role === 'admin' ? "Administrator" : "User")}
                            className="w-full bg-white border border-gray-200 rounded-2xl py-3.5 pl-12 pr-4 text-gray-400 font-medium cursor-not-allowed outline-none"
                        />
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-red-400">
                            <Ban size={18} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Interests */}
            <div className="mt-10 space-y-4">
                <label className="text-xs font-bold text-gray-700 uppercase tracking-wider ml-1">Interest</label>
                <div className="flex flex-wrap gap-3">
                    {/* {INTERESTS.map((interest) => (
                        <div
                            key={interest}
                            className="px-5 py-2 rounded-full border border-blue-200 text-[#3D4EE1] font-semibold text-xs transition-colors hover:bg-blue-50 cursor-pointer"
                        >
                            {interest}
                        </div>
                    ))} */}
                    <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-gray-400 font-semibold text-xs hover:bg-gray-50 transition-colors">
                        <Plus size={14} />
                        Add Interest
                    </button>
                </div>
            </div>

            <div className="mt-12 flex justify-end">
                <Button
                    onClick={handleSave}
                    disabled={updateUserMutation.isPending}
                    variant="primary"
                    className="bg-[#2D3AE4] hover:bg-blue-700 px-8 py-3.5 flex items-center gap-3 shadow-lg shadow-blue-100 disabled:opacity-70"
                >
                    {updateUserMutation.isPending ? (
                        <Loader2 size={20} className="animate-spin" />
                    ) : (
                        <Save size={20} />
                    )}
                    {updateUserMutation.isPending ? "Saving..." : "Save Changes"}
                </Button>
            </div>
        </div>
    );
};

export default AccountDetailsForm;
