import { Users, Calendar, Eye, Users2, ArrowRight, Heart } from 'lucide-react';
import Button from '../../common/Button';

const TourEnrollmentCard = () => {
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
                    <span className="text-4xl font-extrabold text-brand-blue-text">₹7200</span>
                    <span className="text-gray-400 text-sm">/all-in</span>
                </div>
            </div>

            <div className="space-y-5 mb-8">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-brand-blue">
                        <Users size={20} />
                    </div>
                    <div>
                        <p className="text-[10px] text-gray-500 font-bold uppercase">Registration</p>
                        <p className="text-sm font-bold text-gray-800">22</p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600">
                        <Calendar size={20} />
                    </div>
                    <div>
                        <p className="text-[10px] text-gray-500 font-bold uppercase">Registration Deadline</p>
                        <p className="text-sm font-bold text-gray-800">07 Feb 26</p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-600">
                        <Eye size={20} />
                    </div>
                    <div>
                        <p className="text-[10px] text-gray-500 font-bold uppercase">Impressions</p>
                        <p className="text-sm font-bold text-gray-800">254</p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                        <Users2 size={20} />
                    </div>
                    <div>
                        <p className="text-[10px] text-gray-500 font-bold uppercase">Availability</p>
                        <p className="text-sm font-bold text-gray-800">Only 12 slot left</p>
                    </div>
                </div>
            </div>

            <div className="space-y-3">
                <Button variant="primary" fullWidth className="py-4 rounded-2xl group">
                    <span className="flex items-center justify-center gap-2">
                        Reserve your spot
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                </Button>
                <button className="w-full py-3 border border-gray-200 rounded-2xl flex items-center justify-center gap-2 text-gray-600 font-bold text-sm hover:bg-gray-50 transition-colors">
                    Show Interest
                    <Heart size={18} />
                </button>
            </div>
        </div>
    );
};

export default TourEnrollmentCard;
