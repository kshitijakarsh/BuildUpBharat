import { ChevronDown } from "lucide-react";

const ToursHeader = () => {
    return (
        <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-2">
                    <h1 className="text-4xl md:text-5xl font-bold text-brand-blue-text font-sans">
                        Exploring Bharat
                    </h1>
                    <p className="text-brand-gray-light text-lg font-nunito">
                        Curated educational journeys across India for future leaders.
                    </p>
                </div>

                <div className="flex items-center gap-4">
                    <button className="bg-brand-orange hover:bg-brand-orange-deep text-white px-6 py-2.5 rounded-full font-semibold transition-colors duration-200">
                        All Destinations
                    </button>

                    <div className="relative">
                        <button className="flex items-center gap-2 border border-gray-200 rounded-full px-6 py-2.5 bg-white text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                            <span className="font-nunito">All Categories</span>
                            <ChevronDown className="w-4 h-4 text-gray-400" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="py-2 border-b border-gray-500 w-full" />
        </div>
    );
};

export default ToursHeader;
