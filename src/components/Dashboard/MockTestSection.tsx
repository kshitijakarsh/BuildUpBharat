import { ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Button from '../common/Button';
import ComingSoonPlaceholder from '../common/ComingSoonPlaceholder';

const MockTestCard = ({ title, questions, duration, icon }: any) => (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 flex flex-col items-center text-center transition-all h-full group">
        <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-4 p-3 shadow-inner">
            <img src={icon} alt="" className="w-full h-full object-contain" />
        </div>
        <h3 className="font-bold text-gray-900 text-lg mb-1">{title}</h3>
        <p className="text-xs text-gray-500 font-medium mb-6">
            {questions} Questions <span className="mx-1">•</span> ({duration})
        </p>

        <Button variant="outline" className="w-full rounded-full border-gray-200 text-gray-600 hover:text-brand-orange hover:border-brand-orange hover:bg-orange-50 font-semibold text-sm py-2">
            Start Test
        </Button>
    </div>
);

const MockTestSection = () => {
    // Empty array as requested
    const tests: any[] = [];

    return (
        <div className="mt-12 relative">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-brand-blue-text border-l-4 border-brand-blue-text pl-3 leading-none">
                    Mock Test
                </h2>
                <a href="#" className="text-sm font-semibold text-blue-500 hover:text-blue-600 underline underline-offset-4">View All</a>
            </div>

            <div className="relative min-h-[300px] rounded-3xl overflow-hidden border border-gray-100 bg-gray-50/50">
                {tests.length > 0 ? (
                    <div className="relative group p-6">
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={24}
                            slidesPerView={1}
                            centeredSlides={true}
                            navigation={{
                                nextEl: ".mock-next",
                                prevEl: ".mock-prev",
                            }}
                            breakpoints={{
                                640: { slidesPerView: 2, centeredSlides: false },
                                768: { slidesPerView: 3, centeredSlides: false },
                                1024: { slidesPerView: 4, centeredSlides: false },
                            }}
                            className="pb-4 px-12 md:px-2"
                        >
                            {tests.map((test, i) => (
                                <SwiperSlide key={i}>
                                    <MockTestCard {...test} />
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <button className="mock-prev absolute -left-1 md:-left-5 top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-10 md:h-10 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center opacity-100 group-hover:opacity-100 transition-all cursor-pointer disabled:opacity-0">
                            <ChevronRight size={20} className="rotate-180 text-gray-600" />
                        </button>
                        <button className="mock-next absolute -right-1 md:-right-5 top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-10 md:h-10 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center opacity-100 group-hover:opacity-100 transition-all cursor-pointer disabled:opacity-0">
                            <ChevronRight size={20} className="text-gray-600" />
                        </button>
                    </div>
                ) : (
                    <ComingSoonPlaceholder
                        message="We are working on adding new tests."
                    />
                )}
            </div>
        </div>
    );
};

export default MockTestSection;
