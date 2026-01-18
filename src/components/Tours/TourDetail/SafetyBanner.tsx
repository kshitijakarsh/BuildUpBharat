import { ShieldCheck } from 'lucide-react';

const SafetyBanner = () => {
    return (
        <div className="bg-brand-navy rounded-3xl md:rounded-4xl p-6 md:p-10 relative overflow-hidden shadow-lg">
            <div className="absolute top-4 right-4 opacity-10 rotate-12">
                <ShieldCheck size={80} className="text-white fill-white/20" />
            </div>
            <div className="absolute bottom-[-10px] left-[40%] opacity-5 -rotate-12">
                <ShieldCheck size={60} className="text-white fill-white/20" />
            </div>


            <div className="relative flex flex-row items-start gap-4 md:gap-12 z-10">
                <div className="shrink-0 relative">
                    <svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-xl w-14 h-auto md:w-[120px] md:h-[140px]">
                        <path d="M60 130C60 130 10 105 10 40V20L60 0V130Z" fill="#00D26A" />
                        <path d="M60 130C60 130 110 105 110 40V20L60 0V130Z" fill="#25A85C" />

                        {/* White Circle */}
                        <circle cx="60" cy="55" r="25" fill="#E8F5E9" />

                        {/* Checkmark */}
                        <path d="M48 55L56 63L72 47" stroke="#9CA3AF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>

                <div className="flex-1 text-left pt-1 md:pt-2">
                    <h3 className="text-lg md:text-3xl font-bold text-white mb-1.5 md:mb-2 tracking-wide font-nunito leading-tight">Safety & Supervision</h3>
                    <p className="text-white text-[10px] md:text-lg font-medium font-nunito mb-2.5 md:mb-6 leading-snug">
                        Our programs prioritize student wellbeing through:
                    </p>

                    <ul className="space-y-1.5 md:space-y-3">
                        {[
                            "24/7 faculty supervision",
                            "Verified accommodations and transport partners",
                            "Pre-trip orientation and emergency support protocols"
                        ].map((item) => (
                            <li key={item} className="flex items-start gap-2 md:gap-3 text-white text-[9px] md:text-base font-bold font-nunito justify-start text-left leading-tight">
                                <div className="mt-1 md:mt-1.5 w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-white shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SafetyBanner;
