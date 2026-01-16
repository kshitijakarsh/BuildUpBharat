import { useState } from "react";

export default function Tabs() {
    const [active, setActive] = useState(1);

    const tabs = [
        { id: 1, label: "All Recommendation" },
        { id: 2, label: "Adobe Illustrator" },
        { id: 3, label: "Abode Photoshop" },
        { id: 4, label: "UI Design" },
        { id: 5, label: "Web Programming" },
        { id: 6, label: "Mobile Programming" },
        { id: 7, label: "Backend Development" },
        { id: 8, label: "Vue JS" },

    ];

    return (
        <div className="flex flex-wrap gap-2 py-6">
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => setActive(tab.id)}
                    className={`px-4 py-2 rounded-md text-xs ${active === tab.id ? "bg-white text-brand-blue border border-brand-blue" : "border border-gray-400 text-gray-700"
                        }`}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
}