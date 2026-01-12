const TrustedUniversities = () => {
    // Placeholder logos - repetitively used to match the design mock pattern
    const logos = Array(5).fill({
        name: "Alisa",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png" // Using Google as placeholder, or text if preferred. 
        // Design shows text logo "Alisa". Let's simulate text logos if no asset.
    });

    return (
        <div className="mt-12 text-center">
            <h3 className="text-xl font-bold text-brand-blue-text mb-8">
                Trusted by <span className="text-brand-orange">Universities</span>
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                {/* 
                   Ideally we use SVGs here. 
                   For now, listing text/simple placeholders to match the layout. 
                */}
                {logos.map((_, i) => (
                    <div key={i} className="font-serif font-bold text-2xl tracking-widest text-[#1a1a1a]">
                        Alisa <span className="text-[0.5rem] tracking-normal font-sans uppercase block text-center">Boutique</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrustedUniversities;
