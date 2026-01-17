import acic from "@/assets/universities/acic.svg";
import axis from "@/assets/universities/axis.svg";
import bundelkhanduni from "@/assets/universities/bundelkhanduni.svg";
import chitkara from "@/assets/universities/chitkara.svg";
import gla from "@/assets/universities/gla.svg";
import gnit from "@/assets/universities/gnit.svg";
import iilm from "@/assets/universities/iilm.svg";
import lpu from "@/assets/universities/lpu.svg";
import mit from "@/assets/universities/mit.svg";
import rama from "@/assets/universities/rama.svg";
import un2 from "@/assets/universities/un2.svg";
import un from "@/assets/universities/un.svg";

const TrustedUniversities = () => {
    const logos = [
        acic,
        axis,
        bundelkhanduni,
        chitkara,
        gla,
        gnit,
        iilm,
        lpu,
        mit,
        rama,
        un2,
        un,
    ];

    return (
        <div className="mt-12 text-center overflow-hidden">
            <h2 className="text-xl md:text-2xl font-bold text-brand-blue-text mb-8">
                Trusted by <span className="text-brand-orange">Universities</span>
            </h2>

            <div className="relative w-full overflow-hidden mask-linear-fade">
                <div className="flex animate-scroll w-max">
                    {/* First copy of logos */}
                    <div className="flex items-center gap-16 shrink-0 mr-16">
                        {logos.map((logo, i) => (
                            <div
                                key={`a-${i}`}
                                className="h-16 w-auto flex items-center justify-center opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 pointer-events-auto"
                            >
                                <img
                                    src={logo}
                                    alt="University Logo"
                                    className="h-full w-auto object-contain max-w-[150px]"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Second copy of logos for seamless loop */}
                    <div className="flex items-center gap-16 shrink-0 mr-16">
                        {logos.map((logo, i) => (
                            <div
                                key={`b-${i}`}
                                className="h-16 w-auto flex items-center justify-center opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 pointer-events-auto"
                            >
                                <img
                                    src={logo}
                                    alt="University Logo"
                                    className="h-full w-auto object-contain max-w-[150px]"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrustedUniversities;
