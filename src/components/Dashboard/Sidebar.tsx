import {
    BookOpen,
    Briefcase,
    MonitorPlay,
    LogOut,
    Settings,
    LayoutDashboard,
    GraduationCap,
    Trophy,
    Users,
    Calendar,
    HelpCircle,
    ChevronLeft,
    ChevronRight,
} from 'lucide-react';

interface SidebarProps {
    isCollapsed: boolean;
    onToggle: () => void;
}

const SidebarItem = ({ icon: Icon, label, active = false, isCollapsed }: { icon: any, label: string, active?: boolean, isCollapsed: boolean }) => (
    <div
        className={`flex items-center ${isCollapsed ? 'justify-center px-2' : 'gap-3 px-4'} py-3 rounded-full cursor-pointer transition-all duration-300 group relative ${active ? 'bg-brand-navy text-white' : 'text-gray-500 hover:bg-gray-100'}`}
    >
        <Icon size={20} className="shrink-0" />
        {/* Tooltip for collapsed state */}
        {isCollapsed && (
            <div className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50 transition-opacity">
                {label}
            </div>
        )}
        <span className={`font-medium text-sm whitespace-nowrap overflow-hidden transition-all duration-300 ${isCollapsed ? 'w-0 opacity-0' : 'w-auto opacity-100'}`}>
            {label}
        </span>
    </div>
);

const Sidebar = ({ isCollapsed, onToggle }: SidebarProps) => {
    return (
        <div className="h-full flex flex-col relative transition-all duration-300">
            {/* Toggle Button */}
            <button
                onClick={onToggle}
                className="absolute -right-3 top-3 bg-white border border-gray-200 text-gray-500 rounded-full p-2 shadow-md hover:bg-gray-50 hover:text-brand-blue-text transition-colors z-50 md:flex hidden items-center justify-center"
            >
                {isCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
            </button>

            <div className="flex-1 overflow-y-auto px-2 py-2 space-y-1">
                <SidebarItem icon={LayoutDashboard} label="Explore" active isCollapsed={isCollapsed} />
                <SidebarItem icon={BookOpen} label="Courses" isCollapsed={isCollapsed} />
                <SidebarItem icon={Briefcase} label="Career Hub" isCollapsed={isCollapsed} />
                <SidebarItem icon={MonitorPlay} label="Mock Test" isCollapsed={isCollapsed} />
                <SidebarItem icon={Users} label="Tours" isCollapsed={isCollapsed} />
                <SidebarItem icon={GraduationCap} label="Mentorship" isCollapsed={isCollapsed} />
                <SidebarItem icon={Trophy} label="Quiz Zone" isCollapsed={isCollapsed} />
                <SidebarItem icon={Calendar} label="Events" isCollapsed={isCollapsed} />
                <SidebarItem icon={Users} label="Workshops" isCollapsed={isCollapsed} />
                <SidebarItem icon={Trophy} label="Success Stories" isCollapsed={isCollapsed} />
                <SidebarItem icon={HelpCircle} label="Help Desk" isCollapsed={isCollapsed} />
            </div>

            <div className={`p-2 border-t border-gray-100 space-y-1 ${isCollapsed ? '' : 'px-4'}`}>
                <SidebarItem icon={Settings} label="Settings" isCollapsed={isCollapsed} />
                <SidebarItem icon={LogOut} label="Logout" isCollapsed={isCollapsed} />
            </div>
        </div>
    );
};

export default Sidebar;
