import logo from "@/assets/logo.svg"

const TrustedUniversities = () => {
    const logos = [
        logo,
        logo,
        logo,
        logo,
    ];

    return (
        <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-brand-blue-text mb-8">
                Trusted by <span className="text-brand-orange">Universities</span>
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                {logos.map((_, i) => (
                    <div key={i} className="font-serif font-bold text-2xl tracking-widest text-[#1a1a1a] opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer">
                        <img src={logo} alt="" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrustedUniversities;
