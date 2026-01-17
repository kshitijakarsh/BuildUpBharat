
import dashboard from '../../assets/dashboard.svg';
import Button from '../common/Button';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';
import { useProfile } from '../../hooks/useAuth';
import { calculateProfileCompletion } from '../../utils/profileCompletion';


const WelcomeBanner = () => {
    const navigate = useNavigate();
    const { data: response } = useProfile();
    const profile = response?.data;
    const { overallPercentage } = calculateProfileCompletion(profile);
    const shouldShowCompleteProfile = overallPercentage < 100 && overallPercentage > 0;

    return (
        <div className="px-0 md:px-4 py-4 md:py-8 flex items-center justify-between relative overflow-hidden bg-brand-pale-blue/20 rounded-3xl mx-4 my-2">
            <div className="flex-1 z-10 min-w-0 pr-2">
                <h1 className="text-lg md:text-3xl font-bold text-brand-blue-text mb-1 md:mb-2 leading-tight">
                    Welcome back, <br className="hidden md:block" />
                    {useAuthStore((state) => state.user?.fullName)}
                </h1>
                <p className="text-gray-600 mb-3 md:mb-6 mt-1 md:mt-4 text-xs md:text-base leading-relaxed max-w-[90%]">
                    Ready to continue your journey? Let's keep learning <br className="hidden md:block" /> and building your future.
                </p>
                <div className="space-y-4">
                    {shouldShowCompleteProfile && (
                        <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden max-w-96 border border-gray-200">
                            <div
                                className={`h-full rounded-full ${overallPercentage > 50 ? "bg-green-500" : "bg-brand-orange"}`}
                                style={{ width: `${overallPercentage}%` }}
                            />
                        </div>
                    )}
                    <div className="flex items-center gap-3">
                        <Button variant="primary" className="py-2 px-4 text-xs md:text-base md:py-3 md:px-6">
                            Improve Now
                        </Button>
                        {shouldShowCompleteProfile && (
                            <Button
                                variant="outline"
                                className="py-2 px-4 text-xs md:text-base md:py-3 md:px-6 text-brand-blue-text border-brand-blue-text"
                                onClick={() => navigate('/profile')}
                            >
                                Complete Profile
                            </Button>
                        )}
                    </div>
                </div>
            </div>

            <div className="w-1/3 md:w-1/2 max-w-[300px] flex items-center justify-end">
                <img src={dashboard} alt="Welcome" className="w-full h-auto object-contain" />
            </div>
        </div>
    );
};

export default WelcomeBanner;
