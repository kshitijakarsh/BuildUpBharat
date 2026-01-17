import {
    Briefcase,
    MonitorPlay,
    BookOpen,
    Users,
    Trophy
} from 'lucide-react';

const QuickAccessItem = ({ icon: Icon, label, color }: { icon: any, label: string, color: string }) => (
    <div className="bg-white px-2 py-4 rounded-xl shadow-lg transition-shadow flex flex-col items-center justify-center gap-3 cursor-pointer border border-gray-50">
        <div className={`p-3 rounded-lg ${color}`}>
            <Icon size={24} className="text-white" />
        </div>
        <span className="text-sm font-semibold text-gray-700">{label}</span>
    </div>
);

const QuickAccessHub = () => {
    return (
        <div className="mt-8 px-4 md:px-0">
            <h2 className="text-xl md:text-2xl font-bold text-brand-blue-text mb-4 border-l-4 border-brand-blue-text pl-3 leading-none">Quick Access Hub</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                <QuickAccessItem icon={Briefcase} label="Internship" color="bg-cyan-400" />
                <QuickAccessItem icon={Briefcase} label="Jobs" color="bg-orange-400" />
                <QuickAccessItem icon={MonitorPlay} label="Mock Test" color="bg-indigo-500" />
                <QuickAccessItem icon={BookOpen} label="Courses" color="bg-green-400" />
                <QuickAccessItem icon={Users} label="Mentorship" color="bg-blue-800" />
                <QuickAccessItem icon={Trophy} label="Quiz Zone" color="bg-red-400" />
            </div>
        </div>
    );
};

export default QuickAccessHub;
