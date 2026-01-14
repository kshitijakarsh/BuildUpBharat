import { MapPin, Calendar, Clock, Users2, ArrowRight, Heart } from 'lucide-react';
import Button from '../../common/Button';
import { type Tour } from '../../../lib/api/tours';
import { useShowInterest, useRemoveInterest } from '../../../hooks/useTours';

interface TourEnrollmentCardProps {
    tour: Tour;
}

const TourEnrollmentCard = ({ tour }: TourEnrollmentCardProps) => {
    const showInterestMutation = useShowInterest();
    const removeInterestMutation = useRemoveInterest();

    const isInterested = tour.isInterested || false;
    const isLoading = showInterestMutation.isPending || removeInterestMutation.isPending;

    const handleToggleInterest = () => {
        if (isInterested) {
            removeInterestMutation.mutate(tour._id);
        } else {
            showInterestMutation.mutate(tour._id);
        }
    };

    return (
        <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 sticky top-24">
            <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 bg-green-50 text-green-600 text-[10px] font-bold uppercase tracking-wider rounded-full border border-green-100">
                    Enrolment Open
                </span>
            </div>

            <div className="mb-8">
                <span className="text-gray-500 text-sm block mb-1">Pricing</span>
                <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold text-brand-blue-text">₹{tour.price}</span>
                    <span className="text-gray-400 text-sm line-through">₹{tour.price + 1000}</span>
                </div>
            </div>

            <div className="space-y-5 mb-8">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-brand-blue">
                        <MapPin size={20} />
                    </div>
                    <div>
                        <p className="text-[10px] text-gray-500 font-bold uppercase">Location</p>
                        <p className="text-sm font-bold text-gray-800">{tour.location}</p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600">
                        <Calendar size={20} />
                    </div>
                    <div>
                        <p className="text-[10px] text-gray-500 font-bold uppercase">Booking Deadline</p>
                        <p className="text-sm font-bold text-gray-800">{tour.bookingDeadline}</p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-600">
                        <Clock size={20} />
                    </div>
                    <div>
                        <p className="text-[10px] text-gray-500 font-bold uppercase">Duration</p>
                        <p className="text-sm font-bold text-gray-800">{tour.duration}</p>
                    </div>
                </div>

                {tour.interestedUsersCount !== undefined && (
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                            <Users2 size={20} />
                        </div>
                        <div>
                            <p className="text-[10px] text-gray-500 font-bold uppercase">Interests</p>
                            <p className="text-sm font-bold text-gray-800">{tour.interestedUsersCount} people interested</p>
                        </div>
                    </div>
                )}
            </div>

            <div className="space-y-3">
                <Button variant="primary" fullWidth className="py-4 rounded-2xl group">
                    <span className="flex items-center justify-center gap-2">
                        Reserve your spot
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                </Button>
                <button
                    onClick={handleToggleInterest}
                    disabled={isLoading}
                    className={`w-full py-3 border rounded-2xl flex items-center justify-center gap-2 font-bold text-sm transition-colors ${isInterested
                        ? 'bg-brand-orange text-white border-brand-orange'
                        : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                        }`}
                >
                    {isInterested ? 'Remove Interest' : 'Show Interest'}
                    <Heart size={18} fill={isInterested ? "currentColor" : "none"} />
                </button>
            </div>
        </div>
    );
};

export default TourEnrollmentCard;
