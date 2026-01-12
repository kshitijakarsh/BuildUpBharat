import { ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Button from '../common/Button';

const MockTestCard = ({ title, questions, duration, icon }: any) => (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 flex flex-col items-center text-center shadow-sm hover:shadow-lg transition-all h-full group">
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
    const tests = [
        {
            title: "IIT - JEE",
            questions: "75",
            duration: "30 min",
            icon: "https://upload.wikimedia.org/wikipedia/en/thumb/4/49/IIT_Bombay_color_logo.png/220px-IIT_Bombay_color_logo.png"
        },
        {
            title: "NEET",
            questions: "75",
            duration: "30 min",
            icon: "https://img.jagranjosh.com/imported/images/E/Articles/NEET-UG-2024-Expected-Percentile.jpg"
        },
        {
            title: "SSC GD",
            questions: "75",
            duration: "30 min",
            icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/SSC_Logo_2020.png/900px-SSC_Logo_2020.png"
        },
        {
            title: "UPSC",
            questions: "100",
            duration: "60 min",
            icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Emblem_of_India.svg/383px-Emblem_of_India.svg.png"
        }
    ];

    return (
        <div className="mt-12 relative">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-brand-blue-text border-l-4 border-brand-blue-text pl-3 leading-none">
                    Mock Test
                </h2>
                <a href="#" className="text-sm font-semibold text-blue-500 hover:text-blue-600 underline underline-offset-4">View All</a>
            </div>

            <div className="relative group">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={24}
                    slidesPerView={1.1}
                    navigation={{
                        nextEl: ".mock-next",
                        prevEl: ".mock-prev",
                    }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 }, // 4 cards on desktop
                    }}
                    className="pb-4 px-2"
                >
                    {tests.map((test, i) => (
                        <SwiperSlide key={i}>
                            <MockTestCard {...test} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Navigation Buttons - Reused style */}
                <button className="mock-prev absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all cursor-pointer disabled:opacity-0">
                    <ChevronRight size={20} className="rotate-180 text-gray-600" />
                </button>
                <button className="mock-next absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all cursor-pointer disabled:opacity-0">
                    <ChevronRight size={20} className="text-gray-600" />
                </button>
            </div>
        </div>
    );
};

export default MockTestSection;
