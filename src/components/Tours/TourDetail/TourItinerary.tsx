const ITINERARY_DATA = [
    {
        day: 1,
        title: "Arrival & Cultural Immersion",
        description: "Arrival & Ganga Aarti at Dashashwamedh Ghat. Our private guides will ensure you get the best narratives and historical context often missed by regular tourists."
    },
    {
        day: 2,
        title: "Heritage Exploration",
        description: "Early morning boat ride & Temple tour. Our private guides will ensure you get the best narratives and historical context often missed by regular tourists."
    },
    {
        day: 3,
        title: "The Legacy Continues",
        description: "Sarnath Excursion & Weaver village visit. Our private guides will ensure you get the best narratives and historical context often missed by regular tourists."
    }
];

const TourItinerary = () => {
    return (
        <div className="space-y-8">
            <h2 className="text-3xl font-extrabold text-brand-blue-text border-l-4 border-brand-blue pl-4 mb-10">
                Day Itinerary
            </h2>

            <div className="relative pl-8 space-y-12">
                {/* Vertical Line */}
                <div className="absolute left-[11px] top-2 bottom-2 w-1 bg-brand-blue/20 rounded-full"></div>

                {ITINERARY_DATA.map((item) => (
                    <div key={item.day} className="relative group">
                        {/* Dot */}
                        <div className="absolute -left-[30px] top-1.5 w-[22px] h-[22px] rounded-full border-4 border-brand-blue bg-white z-10 transition-transform group-hover:scale-125"></div>

                        <div className="bg-[#F8F9FF] border border-[#E9EFFF] rounded-3xl p-6 hover:shadow-lg transition-all duration-300">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-bold text-[#1E1E1E]">{item.title}</h3>
                                <span className="text-brand-blue font-extrabold text-sm uppercase">Day {item.day}</span>
                            </div>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TourItinerary;
