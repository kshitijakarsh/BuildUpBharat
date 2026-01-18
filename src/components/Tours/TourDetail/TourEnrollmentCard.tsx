import { useState } from 'react';
import { Calendar, Users2, ArrowRight, Heart, Eye, X, ChevronUp } from 'lucide-react';
import Button from '../../common/Button';
import { type Tour } from '../../../lib/api/tours';
import { useShowInterest, useRemoveInterest } from '../../../hooks/useTours';

interface TourEnrollmentCardProps {
    tour: Tour;
}

const TourEnrollmentCard = ({ tour }: TourEnrollmentCardProps) => {
    const showInterestMutation = useShowInterest();
    const removeInterestMutation = useRemoveInterest();
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const isInterested = tour.isInterested || false;
    const isLoading = showInterestMutation.isPending || removeInterestMutation.isPending;

    const handleToggleInterest = () => {
        if (isInterested) {
            removeInterestMutation.mutate(tour.id);
        } else {
            showInterestMutation.mutate(tour.id);
        }
    };

    const CardContent = ({ className = "" }: { className?: string }) => (
        <div className={`bg-white rounded-3xl p-5 shadow-xl border border-gray-100 ${className}`}>
            {/* Header Pill */}
            <div className="mb-5">
                <span className="px-3 py-1.5 bg-green-100 text-green-700 text-[9px] font-bold uppercase tracking-wider rounded-full">
                    Enrolement Open
                </span>
            </div>

            {/* Pricing */}
            <div className="mb-6">
                <span className="text-gray-500 text-xs font-bold block mb-1 tracking-wide uppercase font-nunito">Pricing</span>
                <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold text-brand-navy">₹{tour.price}</span>
                    <span className="text-gray-500 text-xs font-bold font-nunito">/all-in</span>
                </div>
            </div>

            {/* Info Grid */}
            <div className="space-y-4 mb-6">
                {/* Registration */}
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl border border-blue-600/20 bg-blue-50/50 flex items-center justify-center text-blue-600">
                        <Users2 size={18} className="stroke-[1.5]" />
                    </div>
                    <div>
                        <p className="text-gray-500 text-xs font-bold mb-0.5">Registration</p>
                        <p className="text-lg font-extrabold text-brand-navy">{tour.interestedUsersCount || 0}</p>
                    </div>
                </div>

                {/* Registration Deadline */}
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl border border-blue-600/20 bg-blue-50/50 flex items-center justify-center text-blue-600">
                        <Calendar size={18} className="stroke-[1.5]" />
                    </div>
                    <div>
                        <p className="text-gray-500 text-xs font-bold mb-0.5">Registration Deadline</p>
                        <p className="text-lg font-extrabold text-brand-navy">
                            {new Date(tour.bookingDeadline).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "2-digit" })}
                        </p>
                    </div>
                </div>

                {/* Impressions (Using mock or API data if available) */}
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl border border-blue-600/20 bg-blue-50/50 flex items-center justify-center text-blue-600">
                        <Eye size={18} className="stroke-[1.5]" />
                    </div>
                    <div>
                        <p className="text-gray-500 text-xs font-bold mb-0.5">Impressions</p>
                        <p className="text-lg font-extrabold text-brand-navy">{tour.impressions || 42}</p>
                    </div>
                </div>

                {/* Availability (Mock data for now as per design) */}
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl border border-blue-600/20 bg-blue-50/50 flex items-center justify-center text-blue-600">
                        <Users2 size={18} className="stroke-[1.5]" />
                    </div>
                    <div>
                        <p className="text-gray-500 text-xs font-bold mb-0.5">Availability</p>
                        <p className="text-lg font-extrabold text-brand-navy">Only 12 slot left</p>
                    </div>
                </div>
            </div>

            {/* Buttons */}
            <div className="space-y-3">
                <Button variant="primary" fullWidth className="py-3 rounded-full bg-brand-orange hover:bg-brand-orange-deep group shadow-none">
                    <span className="flex items-center justify-center gap-2 text-white font-bold text-base">
                        Reserve your spot
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform stroke-3" />
                    </span>
                </Button>
                <button
                    onClick={handleToggleInterest}
                    disabled={isLoading}
                    className="w-full py-3 border border-gray-200 rounded-full flex items-center justify-center gap-2 font-bold text-brand-navy hover:bg-gray-50 transition-colors bg-white text-sm"
                >
                    {isInterested ? 'Remove Interest' : 'Show Interest'}
                    <Heart size={18} className="stroke-[2.5]" fill={isInterested ? "currentColor" : "none"} />
                </button>
            </div>
        </div>
    );

    return (
        <>
            {/* Desktop View */}
            <div className="hidden lg:block">
                <CardContent />
            </div>

            {/* Mobile View */}
            <div className="lg:hidden">
                <div className="fixed bottom-0 left-0 right-0 z-50">
                    <div className="flex justify-center -mb-4 relative z-10 pointer-events-none">
                    </div>

                    <div className="bg-white border-t border-gray-200">
                        <button
                            onClick={() => setIsMobileOpen(true)}
                            className="w-full flex items-center justify-center gap-1 pt-2 pb-1 text-gray-500 text-xs font-medium tracking-wider hover:text-brand-navy transition-colors"
                        >
                            Show More <ChevronUp size={14} className="stroke-3" />
                        </button>

                        <div className="p-4 pt-1 flex items-center justify-between gap-4">
                            <div>
                                <span className="text-gray-500 text-xs font-bold uppercase tracking-wide font-nunito">Total Price</span>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-2xl font-extrabold text-brand-navy">₹{tour.price}</span>
                                    <span className="text-gray-500 text-xs font-bold font-nunito">/all-in</span>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsMobileOpen(true)}
                                className="bg-brand-orange text-white px-6 py-3 rounded-full font-bold text-sm shadow-md active:scale-95 transition-transform"
                            >
                                Reserve Spot
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Modal */}
                {isMobileOpen && (
                    <div className="fixed inset-0 z-60 flex items-end justify-center">
                        <div
                            className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
                            onClick={() => setIsMobileOpen(false)}
                        ></div>
                        <div className="relative bg-white w-full rounded-t-[32px] overflow-y-auto animate-slide-up">
                            <button
                                onClick={() => setIsMobileOpen(false)}
                                className="absolute top-6 right-6 p-2 bg-gray-100 rounded-full text-gray-500 hover:bg-gray-200"
                            >
                                <X size={20} />
                            </button>

                            <CardContent className="shadow-none border-none p-0" />
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default TourEnrollmentCard;
