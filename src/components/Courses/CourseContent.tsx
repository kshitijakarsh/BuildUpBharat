import { useState } from "react";
import { Plus, Minus, PlayCircle, FileText } from "lucide-react";

interface Lesson {
    title: string;
    type: 'video' | 'article';
    duration: string;
    isDemo?: boolean;
}

interface Module {
    title: string;
    meta: string;
    lessons?: Lesson[];
}

const mockCurriculum: Module[] = [
    {
        title: "Course Overview",
        meta: "2 Sections • 15 minutes",
        lessons: []
    },
    {
        title: "Definition: Planning for Success",
        meta: "2 Sections • 30 minutes",
        lessons: []
    },
    {
        title: "Definition: Planning for Success Part 02",
        meta: "4 Sections • 84 minutes",
        lessons: []
    },
    {
        title: "Information Architecture: Creating a Solid Foundation",
        meta: "6 Sections • 120 minutes",
        lessons: []
    },
    {
        title: "Information Architecture: Creating a Solid Foundation Part 02",
        meta: "5 Sections • 89 minutes",
        lessons: [
            { title: "Exercise: Turning Information Priority into an IA Model", type: 'video', duration: "6 minutes", isDemo: true },
            { title: "IA Models: Which One's Right for My Site?", type: 'article', duration: "8 minutes" },
            { title: "Hierarchical Tree IA Model", type: 'video', duration: "15 minutes" },
            { title: "Combining IA Models", type: 'video', duration: "20 minutes" },
            { title: "Tools for Creating IA Models", type: 'article', duration: "40 minutes" }
        ]
    },
    {
        title: "Information Architecture: Creating a Solid Foundation Part 03",
        meta: "8 Sections • 180 minutes",
        lessons: []
    },
    {
        title: "Design: Information, Interaction & Interfaces",
        meta: "4 Sections • 60 minutes",
        lessons: []
    },
    {
        title: "Design: Information, Interaction & Interfaces Part 02",
        meta: "2 Sections • 58 minutes",
        lessons: []
    },
    {
        title: "Design: Information, Interaction & Interfaces Part 03",
        meta: "3 Sections • 32 minutes",
        lessons: []
    },
    {
        title: "Launch & Beyond",
        meta: "4 Sections • 84 minutes",
        lessons: []
    }
];

export default function CourseContent() {
    const [expandedModules, setExpandedModules] = useState<number[]>([4]);

    const toggleModule = (index: number) => {
        setExpandedModules(prev =>
            prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    return (
        <div className="px-4 md:px-36 py-12">
            <div className="flex items-center gap-2 mb-8">
                <div className="bg-brand-navy w-12 h-1 rounded-full" />
                <p className="text-brand-navy font-bold uppercase tracking-wider text-sm">Course Content</p>
            </div>

            <div className="space-y-6">
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-6">
                        Our courses are balanced mix of videos & articles
                    </h2>
                    <div className="flex justify-between items-center bg-gray-50 p-4 rounded-xl border border-gray-100">
                        <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-600">
                            <p>10 Lessons</p>

                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                                <p>20 Videos</p>
                            </div>

                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                                <p>20 Articles</p>
                            </div>

                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                                <p>18 Assignments</p>
                            </div>

                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                                <p>24h 32m Completion Time</p>
                            </div>
                        </div>
                        <div>
                            <button className="text-brand-blue font-bold text-sm hover:underline whitespace-nowrap">Expand All Lessons</button>
                        </div>
                    </div>
                </div>

                <div className="border border-gray-100 rounded-xl overflow-hidden">
                    {mockCurriculum.map((module, index) => (
                        <div key={index} className="border-b border-gray-100 last:border-0">
                            <button
                                onClick={() => toggleModule(index)}
                                className={`w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors ${expandedModules.includes(index) ? 'bg-gray-50' : 'bg-white'}`}
                            >
                                <div className="flex items-center gap-4">
                                    {expandedModules.includes(index) ? (
                                        <Minus className="text-gray-400" size={20} />
                                    ) : (
                                        <Plus className="text-gray-400" size={20} />
                                    )}
                                    <span className="text-sm font-medium text-gray-800 text-left">{module.title}</span>
                                </div>
                                <span className="text-gray-500 text-sm">{module.meta}</span>
                            </button>

                            {expandedModules.includes(index) && module.lessons && module.lessons.length > 0 && (
                                <div className="bg-gray-50/50 px-6 py-2">
                                    {module.lessons.map((lesson, lIndex) => (
                                        <div key={lIndex} className="flex items-center justify-between py-4 pl-9 pr-4 hover:bg-gray-100/50 rounded-lg transition-colors cursor-pointer group">
                                            <div className="flex items-center gap-4">
                                                {lesson.type === 'video' ? (
                                                    <PlayCircle size={20} className="text-gray-400 group-hover:text-brand-blue transition-colors" />
                                                ) : (
                                                    <FileText size={20} className="text-gray-400 group-hover:text-brand-blue transition-colors" />
                                                )}
                                                <span className="text-gray-700 font-medium group-hover:text-brand-blue transition-colors">
                                                    {lesson.title}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                {lesson.isDemo && (
                                                    <a href="#" className="text-brand-blue font-bold text-sm underline opacity-100 hover:opacity-80">
                                                        Watch Demo
                                                    </a>
                                                )}
                                                <span className="text-gray-500 text-sm">{lesson.duration}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}