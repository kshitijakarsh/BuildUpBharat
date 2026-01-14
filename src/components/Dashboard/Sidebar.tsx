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
    Map
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface SidebarProps {
    isCollapsed: boolean;
    onToggle: () => void;
}

const SidebarItem = ({
    icon: Icon,
    label,
    href,
    active = false,
    isCollapsed
}: {
    icon: any,
    label: string,
    href: string,
    active?: boolean,
    isCollapsed: boolean
}) => (
    <Link
        to={href}
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
    </Link>
);

const Sidebar = ({ isCollapsed, onToggle }: SidebarProps) => {
    const location = useLocation();

    const items = [
        { icon: LayoutDashboard, label: "Explore", href: "/dashboard" },
        { icon: BookOpen, label: "Courses", href: "/courses" },
        { icon: Briefcase, label: "Career Hub", href: "/career" },
        { icon: MonitorPlay, label: "Mock Test", href: "/mock-test" },
        { icon: Map, label: "Tours", href: "/tours" },
        { icon: GraduationCap, label: "Mentorship", href: "/mentorship" },
        { icon: Trophy, label: "Quiz Zone", href: "/quiz" },
        { icon: Calendar, label: "Events", href: "/events" },
        { icon: Users, label: "Workshops", href: "/workshops" },
        { icon: Trophy, label: "Success Stories", href: "/stories" },
        { icon: HelpCircle, label: "Help Desk", href: "/help" },
    ];

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
                {items.map((item) => (
                    <SidebarItem
                        key={item.label}
                        icon={item.icon}
                        label={item.label}
                        href={item.href}
                        active={location.pathname === item.href}
                        isCollapsed={isCollapsed}
                    />
                ))}
            </div>

            <div className={`p-2 border-t border-gray-100 space-y-1 ${isCollapsed ? '' : 'px-4'}`}>
                <SidebarItem icon={Settings} label="Settings" href="/settings" active={location.pathname === '/settings'} isCollapsed={isCollapsed} />
                <SidebarItem icon={LogOut} label="Logout" href="/logout" isCollapsed={isCollapsed} />
            </div>
        </div>
    );
};

export default Sidebar;
