import { User, GraduationCap, MapPin, Shield, ChevronRight, Camera, Mail, Crown } from "lucide-react";
import { useProfile } from "../../hooks/useAuth";
import profileSvg from "../../assets/profile.svg";

interface ProfileSidebarProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

const MENU_ITEMS = [
    { id: 'personal', label: 'Personal Details', icon: User },
    { id: 'educational', label: 'Educational Details', icon: GraduationCap },
    { id: 'location', label: 'Location Details', icon: MapPin },
    { id: 'security', label: 'Security Details', icon: Shield },
];

const ProfileSidebar = ({ activeTab, setActiveTab }: ProfileSidebarProps) => {
    const { data: response } = useProfile();
    const profile = response?.data;
    return (
        <div className="w-full md:w-80 bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm h-fit">
            {/* Top Banner & Profile Image */}
            <div className="relative">
                <div className="h-24 bg-linear-to-r from-brand-blue-start via-brand-orange to-brand-blue-end opacity-90"></div>
                <div className="flex flex-col items-center -mt-12 px-6 pb-6">
                    <div className="relative group">
                        <div className="w-24 h-24 rounded-2xl border-4 border-white shadow-lg overflow-hidden relative">
                            <div className="absolute inset-0 border-2 border-brand-blue-start rounded-xl z-10 pointer-events-none"></div>
                            <img
                                src={profile?.profileImage || profileSvg}
                                alt="User profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <button className="absolute -bottom-2 -right-2 p-1.5 bg-brand-orange text-white rounded-lg shadow-md hover:bg-orange-600 transition-colors z-20">
                            <Camera size={16} />
                        </button>
                    </div>

                    <div className="mt-4 flex items-center gap-2 text-gray-500 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
                        <Mail size={14} className="text-gray-400" />
                        <span className="text-xs font-medium">{profile?.email}</span>
                    </div>

                    <div className="mt-2 flex items-center gap-2 text-white bg-brand-blue px-3 py-1.5 rounded-full border border-brand-blue">
                        <Crown size={14} className="text-yellow-300" />
                        <span className="text-xs font-semibold tracking-wide">{profile?.membership || "Free Plan"}</span>
                    </div>
                </div>
            </div>

            <div className="h-px bg-gray-100 mx-6"></div>

            {/* Navigation Menu */}
            <div className="p-4 flex flex-col gap-2">
                {MENU_ITEMS.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeTab === item.id;

                    return (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            className={`flex items-center justify-between px-4 py-3.5 rounded-xl transition-all duration-200 group ${isActive
                                ? "bg-[#2D3AE4] text-white shadow-md shadow-blue-100"
                                : "text-gray-600 hover:bg-gray-50"
                                }`}
                        >
                            <div className="flex items-center gap-3">
                                <Icon size={20} className={isActive ? "text-white" : "text-gray-400 group-hover:text-gray-600"} />
                                <span className="text-sm font-semibold">{item.label}</span>
                            </div>
                            <ChevronRight size={18} className={isActive ? "text-white/80" : "text-gray-300 group-hover:text-gray-400"} />
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default ProfileSidebar;
