import { Globe, MapPin, Building2, Home, Save } from "lucide-react";
import Button from "../common/Button";

const LocationDetailsForm = () => {
    return (
        <div className="flex-1 bg-white rounded-[2.5rem] border border-gray-100 p-8 md:p-12 shadow-sm relative overflow-hidden">
            {/* Background Decorative Icon */}
            <div className="absolute right-10 top-6 opacity-[0.03] pointer-events-none">
                <MapPin size={120} className="text-gray-900" />
            </div>

            <div className="flex justify-between items-start mb-10 relative z-10">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2 font-['Outfit']">Location Details</h2>
                    <p className="text-gray-500 font-medium">Update your profile to stay relevant in the Indian ecosystem.</p>
                </div>
            </div>

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
                                defaultValue="India"
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
                                defaultValue="Delhi NCR"
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
                                defaultValue="Noida"
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
                                defaultValue="110092"
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
                            defaultValue="A-Block, Near Cross River Mall, Noida, Delhi, Pin Code: 110092"
                            className="w-full bg-white border border-[#2D3AE4]/30 rounded-full py-3.5 pl-12 pr-4 text-gray-700 font-medium focus:ring-1 focus:ring-brand-blue-start/20 focus:border-brand-blue-start outline-none transition-all shadow-sm"
                        />
                    </div>
                </div>
            </div>

            <div className="mt-12 flex justify-end relative z-10">
                <Button variant="primary" className="bg-[#2D3AE4] hover:bg-blue-700 px-8 py-3.5 flex items-center gap-3 shadow-lg shadow-blue-100">
                    <Save size={20} />
                    Save Changes
                </Button>
            </div>
        </div>
    );
};

export default LocationDetailsForm;
