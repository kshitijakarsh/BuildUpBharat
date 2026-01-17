import { useState } from "react";
import Button from "../common/Button";

export default function CourseHeader() {
    const [activeTab, setActiveTab] = useState("Course Content");

    const tabs = [
        "About Course",
        "Course Content",
        "About Publisher",
        "Success Stories",
        "FAQs"
    ];

    return (
        <div className="bg-white w-full sticky top-0 z-40 border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-2 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4 overflow-x-auto no-scrollbar">
                    {tabs.map((tab) => (
                        <a
                            key={tab}
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                setActiveTab(tab);
                            }}
                            className={`whitespace-nowrap py-4 text-sm font-medium border-b-2 transition-colors ${activeTab === tab
                                    ? "border-brand-navy text-brand-navy font-bold"
                                    : "border-transparent text-gray-500 hover:text-brand-navy hover:border-brand-navy/30"
                                }`}
                        >
                            {tab}
                        </a>
                    ))}
                </div>
                <div className="hidden md:flex gap-2 shrink-0">
                    <Button variant="outline" className="text-brand-navy border-brand-navy hover:bg-brand-navy/5">Watch Demo</Button>
                    <Button>Watch Live</Button>
                </div>
            </div>
        </div>
    );
}