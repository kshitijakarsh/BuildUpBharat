import { Check, Crown } from 'lucide-react';
import Button from '../common/Button';

const ProBanner = () => {
    return (
        <div className="mt-4 md:mt-8 rounded-2xl md:rounded-4xl bg-linear-to-t from-brand-blue-text to-brand-accent-blue p-3 md:p-12 relative overflow-hidden text-white flex flex-row items-center justify-between gap-1 md:gap-8 mx-4 md:mx-0">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="z-10 flex-1 min-w-0">
                <h2 className="text-sm md:text-4xl font-bold mb-2 md:mb-6 leading-tight">Unlock Pro Features!</h2>
                <ul className="space-y-1 md:space-y-4 mb-2 md:mb-8">
                    {[
                        "Full access to all courses & programs",
                        "Workshops & skill-based sessions",
                        "Community networking & discussions",
                        "Lifetime platform access"
                    ].map((item, i) => (
                        <li key={i} className="flex items-start gap-1.5 md:gap-3">
                            <div className="bg-brand-orange rounded-full w-3 h-3 md:w-5 md:h-5 flex items-center justify-center shrink-0 mt-0.5 md:mt-0">
                                <Check className="w-2 h-2 md:w-3.5 md:h-3.5 text-white" strokeWidth={3} />
                            </div>
                            <span className="text-[10px] md:text-base opacity-90 leading-tight">{item}</span>
                        </li>
                    ))}
                </ul>

            </div>

            {/* Illustrative Icon */}
            <div className="z-10 relative shrink-0 flex flex-col items-center gap-2 md:gap-6">
                <div className="w-16 h-16 md:w-48 md:h-48 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 rotate-12">
                    <div className="relative">
                        <Crown className="w-8 h-8 md:w-20 md:h-20 text-white drop-shadow-lg" />
                        <div className="absolute -top-1 -right-2 md:-top-2 md:-right-4 text-brand-orange animate-pulse text-xs md:text-2xl">✦</div>
                        <div className="absolute bottom-1 -left-2 md:bottom-2 md:-left-4 text-brand-orange animate-pulse text-[8px] md:text-xl">✦</div>
                    </div>
                </div>
                <Button className="bg-brand-orange hover:bg-white hover:text-brand-orange text-white px-3 py-1.5 text-[10px] md:text-base md:px-8 md:py-3 rounded-full font-bold transition-all shadow-lg shadow-black/20 whitespace-nowrap">
                    Check the Plans
                </Button>
            </div>
        </div>
    );
};

export default ProBanner;
