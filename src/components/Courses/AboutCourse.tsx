import type { LucideIcon } from "lucide-react";
import { MonitorPlay, Users, BookOpen, Trophy, ChevronDown, Download } from "lucide-react";

interface CourseBullet {
    icon: LucideIcon;
    title: string;
    description: string;
}

const courseBullets: CourseBullet[] = [
    {
        icon: MonitorPlay,
        title: "Authentic Certificate",
        description: "Earn a Certificate upon completion"
    },
    {
        icon: Users,
        title: "Online Classes",
        description: "Start instantly and learn at your own"
    },
    {
        icon: BookOpen,
        title: "Life Time Accessibility",
        description: "Set and maintain flexible deadlines."
    },
    {
        icon: Trophy,
        title: "Beginner Level",
        description: "No prior experience required."
    },
    {
        icon: Trophy,
        title: "Subtiteles Support",
        description: "English, Hindi & Marathi"
    }
];

export default function AboutCourse() {

    return (
        <div className="px-4 md:px-36 py-12">
            <div className="flex items-center gap-2 mb-8">
                <div className="bg-brand-navy w-12 h-1 rounded-full" />
                <p className="text-brand-navy font-bold uppercase tracking-wider text-sm">About Course</p>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
                <div className="lg:col-span-8 flex flex-col justify-between h-full space-y-6">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-6">
                            Covers pretty much everything you need to know about UX
                        </h2>

                        <div className="space-y-4 text-gray-600 leading-relaxed">
                            <p className="font-semibold text-gray-900">Details:</p>
                            <p>
                                This course will teach you everything you need to know about UX, including design, content, and coding. And you'll learn from the ground up, so it doesn't matter how much experience you have when you start.
                            </p>
                            <p>
                                You'll be exposed to principles and strategies, but, more importantly, you'll learn how to actually apply these abstract concepts by coding three different websites for three very different audiences.
                            </p>
                        </div>
                    </div>

                    <button className="w-full bg-linear-to-b from-gray-50 to-gray-200 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer">
                        <span className="text-brand-blue font-bold text-sm">Read More</span>
                        <ChevronDown size={14} className="text-brand-blue" />
                    </button>
                </div>

                <div className="flex flex-col justify-between gap-6 h-full bg-gray-50/50 rounded-2xl lg:col-span-4">
                    <div className="flex flex-col gap-6">
                        {courseBullets.map((bullet, index) => (
                            <div key={index} className="flex gap-4 items-start">
                                <div className="shrink-0 bg-linear-to-b from-icon-gradient-start to-icon-gradient-end p-2.5 rounded-lg shadow-sm">
                                    <bullet.icon size={20} className="text-white" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-sm mb-0.5">{bullet.title}</h4>
                                    <p className="text-xs text-gray-600 leading-snug">
                                        {bullet.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div>
                        <button className="bg-white py-1 px-4 w-full text-xs flex gap-2 items-center justify-center border border-brand-navy"><Download /> Download Syllabus</button>
                    </div>
                </div>
            </div>
        </div>
    );
}