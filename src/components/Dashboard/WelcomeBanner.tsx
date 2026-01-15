
import dashboard from '../../assets/dashboard.svg';
import Button from '../common/Button';
import { useAuthStore } from '../../store/authStore';

const WelcomeBanner = () => {
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
                <Button variant="primary" className="py-2 px-4 text-xs md:text-base md:py-3 md:px-6">
                    Improve Now
                </Button>
            </div>

            <div className="w-1/3 md:w-1/2 max-w-[300px] flex items-center justify-end">
                <img src={dashboard} alt="Welcome" className="w-full h-auto object-contain" />
            </div>
        </div>
    );
};

export default WelcomeBanner;
