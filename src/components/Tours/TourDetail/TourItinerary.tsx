import { type ItineraryItem } from '../../../lib/api/tours';

interface TourItineraryProps {
    data: ItineraryItem[];
}

const TourItinerary = ({ data }: TourItineraryProps) => {
    return (
        <div className="space-y-8">
            <h2 className="text-3xl font-extrabold text-brand-blue-text border-l-4 border-brand-blue pl-4 mb-10">
                Day Itinerary
            </h2>

            <div className="relative pl-8 space-y-12">
                <div className="absolute left-3 top-2 bottom-2 w-1 bg-brand-blue rounded-full"></div>

                {data.map((item) => (
                    <div key={item.day} className="relative group">
                        <div className="absolute -left-7.5 top-16 w-[22px] h-[22px] rounded-full border-4 border-brand-blue bg-white z-10 transition-transform group-hover:scale-125"></div>

                        <div className="bg-white border border-[#E9EFFF] rounded-3xl p-6 transition-all duration-300">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-bold text-[#1E1E1E]">{item.title}</h3>
                                <span className="text-brand-blue font-extrabold text-sm uppercase">Day {item.day}</span>
                            </div>
                            <p className="text-gray-500 text-sm leading-relaxed whitespace-pre-wrap">
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
