import { Heart, ChevronRight, ChevronLeft } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

interface FeaturedCardProps {
    image: string;
    tags: string[];
}

const FeaturedCard = ({ image, tags }: FeaturedCardProps) => {
    return (
        <div className="flex flex-col gap-3 group cursor-pointer ">
            {/* Image */}
            <div className="rounded-[2.5rem] overflow-hidden relative shadow-md hover:shadow-xl transition-all duration-300 aspect-4/5">
                <img
                    src={image}
                    alt="Featured Event"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-2">
                <div className="flex items-center gap-3 flex-wrap">
                    {tags.map((tag, i) => (
                        <span
                            key={i}
                            className="px-5 py-1.5 rounded-full border border-gray-300 text-sm font-medium text-gray-600 bg-gray-50"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <button className="text-gray-400 hover:text-red-500 transition-colors">
                    <Heart size={22} />
                </button>
            </div>
        </div>
    );
};

const FeaturedSection = () => {
    const cards = [
        {
            image:
                "https://images.unsplash.com/photo-1667312939934-60fc3bfa4ec0?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            tags: ["Online", "Free"],
        },
        {
            image:
                "https://images.unsplash.com/photo-1667312939934-60fc3bfa4ec0?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            tags: ["Online", "Paid"],
        },
        {
            image:
                "https://images.unsplash.com/photo-1667312939934-60fc3bfa4ec0?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            tags: ["Offline", "Free"],
        },
        {
            image:
                "https://images.unsplash.com/photo-1667312939934-60fc3bfa4ec0?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            tags: ["Offline", "Paid"],
        },
    ];

    return (
        <div className="mt-8 px-4 md:px-0 relative">
            <h2 className="text-xl md:text-2xl font-bold text-brand-blue-text mb-6 border-l-4 border-brand-blue-text pl-3 leading-none">
                Featured
            </h2>

            <div className="relative">
                {/* Custom arrows */}
                <button className="featured-prev absolute -left-2 md:-left-6 top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-12 md:h-12 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center hover:scale-110 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed text-gray-600">
                    <ChevronLeft size={20} className="md:w-[22px] md:h-[22px]" />
                </button>

                <button className="featured-next absolute -right-2 md:-right-6 top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-12 md:h-12 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center hover:scale-110 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed text-gray-600">
                    <ChevronRight size={20} className="md:w-[22px] md:h-[22px]" />
                </button>

                {/* Swiper */}
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={32}
                    slidesPerView={1}
                    navigation={{
                        nextEl: ".featured-next",
                        prevEl: ".featured-prev",
                    }}
                    breakpoints={{
                        640: { slidesPerView: 1.5 },
                        768: { slidesPerView: 2.2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="pb-10 px-12 md:px-0"
                >
                    {cards.map((card, i) => (
                        <SwiperSlide key={i}>
                            <FeaturedCard {...card} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default FeaturedSection;
