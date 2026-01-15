import { useState, useEffect } from "react";
import { Globe, MapPin, Building2, Home, Save, Loader2 } from "lucide-react";
import Button from "../common/Button";
import { useProfile } from "../../hooks/useAuth";
import { useUpdateUser } from "../../hooks/useUsers";

const LocationDetailsForm = () => {
    const { data: response, isLoading: isProfileLoading } = useProfile();
    const updateUserMutation = useUpdateUser();
    const profile = response?.data;

    const [country, setCountry] = useState("-");
    const [state, setState] = useState("-");
    const [city, setCity] = useState("-");
    const [pinCode, setPinCode] = useState("-");
    const [address, setAddress] = useState("-");
    const [successMessage, setSuccessMessage] = useState("");

    useEffect(() => {
        if (profile?.location) {
            setCountry(profile.location.country || "-");
            setState(profile.location.state || "-");
            setCity(profile.location.city || "-");
            setPinCode(profile.location.pinCode || "-");
            setAddress(profile.location.address || "-");
        }
    }, [profile]);

    const handleSave = () => {
        if (!profile) return;

        updateUserMutation.mutate(
            {
                id: profile._id,
                data: {
                    location: {
                        country: country === "-" ? "" : country,
                        state: state === "-" ? "" : state,
                        city: city === "-" ? "" : city,
                        pinCode: pinCode === "-" ? "" : pinCode,
                        address: address === "-" ? "" : address,
                    }
                }
            },
            {
                onSuccess: () => {
                    setSuccessMessage("Location details updated successfully!");
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
        <div className="flex-1 bg-white rounded-[2.5rem] border border-gray-100 p-8 md:p-12 shadow-sm relative overflow-hidden">
            {/* Background Decorative Icon */}
            <div className="absolute right-10 top-6 opacity-[0.03] pointer-events-none">
                <MapPin size={120} className="text-gray-900" />
            </div>

            <div className="flex justify-between items-start mb-10 relative z-10">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2 ">Location Details</h2>
                    <p className="text-gray-500 font-medium">Update your profile to stay relevant in the Indian ecosystem.</p>
                </div>
            </div>

            {successMessage && (
                <div className="mb-6 p-4 bg-green-50 border border-green-100 text-green-600 rounded-2xl font-medium animate-in fade-in slide-in-from-top-2 relative z-10">
                    {successMessage}
                </div>
            )}

            <div className="space-y-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                    {/* Country */}
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-700 uppercase tracking-wider ml-1">Country</label>
                        <div className="relative group">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand-blue-start transition-colors">
                                <Globe size={20} />
                            </div>
                            <input
                                type="text"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                className="w-full bg-white border border-[#2D3AE4]/30 rounded-full py-3.5 pl-12 pr-4 text-gray-700 font-medium focus:ring-1 focus:ring-brand-blue-start/20 focus:border-brand-blue-start outline-none transition-all shadow-sm"
                            />
                        </div>
                    </div>

                    {/* State/Region */}
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-700 uppercase tracking-wider ml-1">State/Region</label>
                        <div className="relative group">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand-blue-start transition-colors">
                                <MapPin size={20} />
                            </div>
                            <input
                                type="text"
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                                className="w-full bg-white border border-[#2D3AE4]/30 rounded-full py-3.5 pl-12 pr-4 text-gray-700 font-medium focus:ring-1 focus:ring-brand-blue-start/20 focus:border-brand-blue-start outline-none transition-all shadow-sm"
                            />
                        </div>
                    </div>

                    {/* City */}
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-700 uppercase tracking-wider ml-1">City</label>
                        <div className="relative group">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand-blue-start transition-colors">
                                <Building2 size={20} />
                            </div>
                            <input
                                type="text"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                className="w-full bg-white border border-[#2D3AE4]/30 rounded-full py-3.5 pl-12 pr-4 text-gray-700 font-medium focus:ring-1 focus:ring-brand-blue-start/20 focus:border-brand-blue-start outline-none transition-all shadow-sm"
                            />
                        </div>
                    </div>

                    {/* Pin Code */}
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-700 uppercase tracking-wider ml-1">Pin Code</label>
                        <div className="relative group">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand-blue-start transition-colors">
                                <MapPin size={20} />
                            </div>
                            <input
                                type="text"
                                value={pinCode}
                                onChange={(e) => setPinCode(e.target.value)}
                                className="w-full bg-white border border-[#2D3AE4]/30 rounded-full py-3.5 pl-12 pr-4 text-gray-700 font-medium focus:ring-1 focus:ring-brand-blue-start/20 focus:border-brand-blue-start outline-none transition-all shadow-sm"
                            />
                        </div>
                    </div>
                </div>

                {/* Full Address */}
                <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider ml-1">Full Address</label>
                    <div className="relative group">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand-blue-start transition-colors">
                            <Home size={20} />
                        </div>
                        <input
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="w-full bg-white border border-[#2D3AE4]/30 rounded-full py-3.5 pl-12 pr-4 text-gray-700 font-medium focus:ring-1 focus:ring-brand-blue-start/20 focus:border-brand-blue-start outline-none transition-all shadow-sm"
                        />
                    </div>
                </div>
            </div>

            <div className="mt-12 flex justify-end relative z-10">
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

export default LocationDetailsForm;
