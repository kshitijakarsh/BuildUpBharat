import { Link } from 'react-router-dom';
import { ChevronRight, MapPin, ArrowLeft } from 'lucide-react';
import TourEnrollmentCard from '../components/Tours/TourDetail/TourEnrollmentCard';
import TourItinerary from '../components/Tours/TourDetail/TourItinerary';
import SafetyBanner from '../components/Tours/TourDetail/SafetyBanner';
import FAQSection from '../components/Tours/FAQSection';

const TourDetailPage = () => {

    return (
        <div className=" min-h-screen">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-sm text-gray-400">
                <Link to="/tours" className="flex items-center gap-2 hover:text-brand-blue transition-colors">
                    <ArrowLeft size={16} />
                    Tours
                </Link>
                <ChevronRight size={14} />
                <span className="text-gray-800 font-medium">Varanasi Tour</span>
            </div>

            <div className='w-full h-px bg-gray-500 my-4'></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Main Content Area */}
                <div className="lg:col-span-8 space-y-12">
                    {/* Hero Section */}
                    <section className="space-y-8">
                        <div className="relative rounded-[40px] overflow-hidden group shadow-2xl">
                            {/* Orange/Red Shadow Glow */}
                            <div className="absolute inset-0 bg-brand-orange/20 mix-blend-overlay pointer-events-none group-hover:bg-brand-orange/30 transition-colors duration-500"></div>

                            <img
                                src="https://images.unsplash.com/photo-1561059488-916d69792237?q=80&w=2000&auto=format&fit=crop"
                                alt="Varanasi Tour"
                                className="w-full h-[300px] md:h-[450px] object-cover"
                            />

                            <div className="absolute top-6 left-6">
                                <span className="bg-white/90 backdrop-blur-md text-brand-blue px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">
                                    Educational Tour
                                </span>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h1 className="text-4xl md:text-5xl font-black text-[#1E1E1E] leading-[1.1]">
                                Varanasi Cultural Heritage
                            </h1>

                            <div className="flex items-center gap-2 text-gray-500 font-bold">
                                <MapPin size={20} className="text-brand-orange" />
                                <span>Northern India</span>
                            </div>

                            <p className="text-sm md:text-lg italic text-[#666666] leading-relaxed border-l-4 border-brand-orange-light pl-6 py-1">
                                "One of the most transformative experiences for students seeking to understand Bharat's cultural and technological pulse."
                            </p>

                            <div className="text-gray-600 space-y-4 text-sm md:text-base leading-relaxed">
                                <p>
                                    A deep dive into the spiritual capital of India, this program offers an immersive journey through Varanasi's timeless heritage, living traditions, and sacred landscapes. Witness ancient rituals along the ghats, explore centuries-old craft and weaving communities, and engage with the stories that shape the city's cultural identity.
                                </p>
                                <p>
                                    More than just sightseeing, this tour functions as a thoughtfully curated learning experience — blending field exploration, expert interactions, and reflective discussions to spark curiosity, build meaningful connections, and inspire cultural appreciation among India's brightest young minds.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Program Highlights */}
                    <section className="space-y-6 bg-blue-50/30 rounded-[32px] p-8 border border-blue-100/50">
                        <h2 className="text-3xl font-extrabold text-brand-blue-text border-l-4 border-brand-blue pl-4">
                            Program Highlights
                        </h2>
                        <ul className="grid grid-cols-1 gap-4">
                            {[
                                "Guided walks through Varanasi's historic ghats and heritage neighborhoods",
                                "Interactive workshops with local historians and cultural practitioners",
                                "Visit to Sarnath — birthplace of one of Buddhism's earliest teachings",
                                "Hands-on exposure to traditional crafts, music, and regional cuisine",
                                "Evening Ganga Aarti experience and reflection sessions"
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-3 text-gray-700 font-medium">
                                    <span className="text-brand-orange text-xl mt-[-2px]">•</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Itinerary */}
                    <TourItinerary />

                    {/* Safety Banner */}
                    <SafetyBanner />

                    {/* FAQ */}
                    <div className="pt-12">
                        <h2 className="text-3xl font-extrabold text-brand-blue-text border-l-4 border-brand-blue pl-4 mb-8">
                            Frequently Asked Questions
                        </h2>
                        <FAQSection />
                    </div>
                </div>

                {/* Sidebar - Enrollment Card */}
                <div className="lg:col-span-4 relative">
                    <TourEnrollmentCard />
                </div>
            </div>
        </div>
    );
};

export default TourDetailPage;
