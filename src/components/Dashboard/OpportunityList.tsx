import { ChevronRight, MapPin } from 'lucide-react';
import ComingSoonPlaceholder from '../common/ComingSoonPlaceholder';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

interface OpportunityCardProps {
    logo: string;
    role: string;
    company: string;
    location: string;
}

const OpportunityCard = ({ logo, role, company, location }: OpportunityCardProps) => (
    <div className="bg-white p-5 rounded-2xl border border-gray-100 flex items-center gap-4 transition-shadow cursor-pointer group/card h-full">
        {/* Logo */}
        <div className="w-12 h-12 rounded-full border border-gray-50 bg-white flex items-center justify-center shrink-0 p-2 shadow-sm">
            <img src={logo} alt={company} className="w-full h-full object-contain" />
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
            <h4 className="font-bold text-gray-900 leading-tight truncate">{role}</h4>
            <p className="text-sm text-gray-600 truncate mt-0.5">{company}</p>
            <div className="flex items-center gap-1 mt-2 text-xs text-gray-400">
                <MapPin size={12} />
                <span className="truncate">{location}</span>
            </div>
        </div>

        {/* Action */}
        <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover/card:bg-brand-orange group-hover/card:border-brand-orange group-hover/card:text-white transition-all">
            <ChevronRight size={16} />
        </button>
    </div>
);

interface OpportunityListProps {
    title: string;
    items: OpportunityCardProps[];
    id: string; // unique id for navigation
}

const OpportunityList = ({ title, items: _, id }: OpportunityListProps) => {
    // Force empty array as requested
    const displayItems: OpportunityCardProps[] = [];

    const nextClass = `opp-next-${id}`;
    const prevClass = `opp-prev-${id}`;

    return (
        <div className="mt-10 px-4 md:px-0 relative">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl md:text-2xl font-bold text-brand-blue-text border-l-4 border-brand-blue-text pl-3 leading-none">
                    {title}
                </h2>
                <a href="#" className="text-sm font-semibold text-blue-500 hover:text-blue-600 underline underline-offset-4">View All</a>
            </div>

            <div className="relative min-h-[200px] rounded-3xl overflow-hidden border border-gray-100 bg-gray-50/50">
                {displayItems.length > 0 ? (
                    <div className="relative group p-6">
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={24}
                            slidesPerView={1}
                            centeredSlides={true}
                            navigation={{
                                nextEl: `.${nextClass}`,
                                prevEl: `.${prevClass}`,
                            }}
                            breakpoints={{
                                640: { slidesPerView: 1.5, centeredSlides: false },
                                768: { slidesPerView: 2, centeredSlides: false },
                                1024: { slidesPerView: 2.5, centeredSlides: false },
                            }}
                            className="pb-4 px-12 md:px-0"
                        >
                            {displayItems.map((item, i) => (
                                <SwiperSlide key={i} className="h-auto">
                                    <OpportunityCard {...item} />
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Navigation Buttons */}
                        <button className={`${prevClass} absolute -left-1 md:-left-5 top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-10 md:h-10 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center opacity-100 group-hover:opacity-100 transition-all cursor-pointer disabled:opacity-0`}>
                            <ChevronRight size={20} className="rotate-180 text-gray-600" />
                        </button>
                        <button className={`${nextClass} absolute -right-1 md:-right-5 top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-10 md:h-10 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center opacity-100 group-hover:opacity-100 transition-all cursor-pointer disabled:opacity-0`}>
                            <ChevronRight size={20} className="text-gray-600" />
                        </button>
                    </div>
                ) : (
                    <ComingSoonPlaceholder
                        message="We are working on adding new opportunities."
                    />
                )}
            </div>
        </div>
    );
};

export default OpportunityList;
