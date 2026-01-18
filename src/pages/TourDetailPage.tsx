import { Link, useParams } from 'react-router-dom';
import { ChevronRight, MapPin, ArrowLeft } from 'lucide-react';
import { useTour } from '../hooks/useTours';
import TourEnrollmentCard from '../components/Tours/TourDetail/TourEnrollmentCard';
import TourItinerary from '../components/Tours/TourDetail/TourItinerary';
import SafetyBanner from '../components/Tours/TourDetail/SafetyBanner';
import ToursFAQ from '../components/Tours/ToursFAQ';

const TourDetailPage = () => {
    const { id } = useParams<{ id: string }>();
    const { data: response, isLoading, isError, error } = useTour(id || '');

    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-[60vh]">
                <div className="w-16 h-16 border-4 border-brand-orange border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    if (isError || !response?.data) {
        return (
            <div className="max-w-xl mx-auto py-20 text-center space-y-6">
                <div className="bg-red-50 text-red-600 p-6 rounded-3xl border border-red-100 italic font-medium">
                    {isError ? `Error: ${(error as any)?.message || 'Failed to load tour details'}` : 'Tour not found'}
                </div>
                <Link to="/tours" className="inline-flex items-center gap-2 text-brand-blue font-bold hover:underline">
                    <ArrowLeft size={18} />
                    Back to all tours
                </Link>
            </div>
        );
    }

    const tour = response.data;

    return (
        <div className="px-4 md:px-0 relative">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-sm text-gray-400">
                <Link to="/tours" className="flex items-center gap-2 hover:text-brand-blue transition-colors">
                    <ArrowLeft size={16} />
                    Tours
                </Link>
                <ChevronRight size={14} />
                <span className="text-gray-800 font-medium">{tour.title}</span>
            </div>

            <div className='w-full h-px bg-gray-500 my-4'></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 h-screen">
                <div className="lg:col-span-8 overflow-y-auto pr-2 space-y-12 no-scrollbar pb-24">
                    <section className="space-y-8">
                        <div className="relative rounded-4xl shadow-md overflow-hidden group">
                            {/* <div className="absolute inset-0 bg-brand-orange/20 mix-blend-overlay pointer-events-none group-hover:bg-brand-orange/30 transition-colors duration-500"></div> */}

                            <img
                                src={tour.image}
                                alt={tour.title}
                                className="w-full h-80 md:h-112.5 object-cover"
                            />

                            <div className="absolute top-6 left-6">
                                <span className="bg-white/90 backdrop-blur-md text-brand-blue px-6 py-2 rounded-full text-xs font-medium tracking-normal shadow-lg">
                                    {tour.category}
                                </span>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h1 className="text-4xl md:text-5xl font-bold text-[#1E1E1E] leading-[1.1]">
                                {tour.title}
                            </h1>

                            <div className="flex items-center gap-2 text-gray-500 font-bold">
                                <MapPin size={20} className="text-brand-orange" />
                                <span>{tour.location}</span>
                            </div>

                            <p className="text-sm md:text-lg italic text-[#666666] leading-relaxed border-l-4 border-brand-orange-light pl-6 py-1">
                                "{tour.tagline}"
                            </p>

                            <div className="text-gray-600 space-y-4 text-sm md:text-base leading-relaxed whitespace-pre-wrap">
                                {tour.description}
                            </div>
                        </div>
                    </section>

                    <section className="space-y-6 rounded-4xl py-6 md:py-8">
                        <h2 className="text-3xl font-extrabold text-brand-blue-text border-l-4 border-brand-blue pl-4">
                            Program Highlights
                        </h2>

                        <ul className="grid grid-cols-1 gap-4">
                            {tour.highlights.map((item) => (
                                <li
                                    key={item}
                                    className="flex items-start gap-3 text-gray-700 font-medium"
                                >
                                    <span className="text-brand-orange text-xl mt-0.5">•</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </section>

                    <TourItinerary data={tour.itinerary} />

                    <SafetyBanner />

                    <section className="pt-12">
                        <h2 className="text-3xl font-extrabold text-brand-blue-text border-l-4 border-brand-blue pl-4 mb-8">
                            Frequently Asked Questions
                        </h2>
                        <ToursFAQ compact />
                    </section>

                </div>

                <div className="lg:col-span-4 hidden lg:block">
                    <div className="sticky top-6">
                        <TourEnrollmentCard tour={tour} />
                    </div>
                </div>

            </div>

            {/* Render Enrollment Card for Mobile (It handles its own visibility) */}
            <div className="lg:hidden">
                <TourEnrollmentCard tour={tour} />
            </div>

        </div>
    );
};

export default TourDetailPage;
