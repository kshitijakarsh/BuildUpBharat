import { ShieldCheck, CheckCircle2 } from 'lucide-react';

const SafetyBanner = () => {
    return (
        <div className="bg-brand-navy rounded-[32px] p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -translate-y-12 translate-x-12"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-brand-orange/10 rounded-full blur-2xl translate-y-8 -translate-x-8"></div>

            <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-green-500/10 rounded-3xl flex items-center justify-center shrink-0 border border-green-500/20">
                    <ShieldCheck size={48} className="text-green-400" />
                </div>

                <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-white mb-3">Safety & Supervision</h3>
                    <p className="text-blue-100/70 text-sm leading-relaxed mb-6">
                        Our programs prioritize student wellbeing through:
                    </p>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            "24/7 faculty supervision",
                            "Verified accommodations",
                            "Pre-trip orientation",
                            "Emergency support protocols"
                        ].map((item) => (
                            <li key={item} className="flex items-center gap-3 text-white/90 text-sm font-medium">
                                <CheckCircle2 size={18} className="text-green-400 shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 opacity-10">
                    <ShieldCheck size={120} className="text-white" />
                </div>
            </div>
        </div>
    );
};

export default SafetyBanner;
