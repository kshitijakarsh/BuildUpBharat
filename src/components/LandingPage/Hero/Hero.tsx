import React from "react";
import rightSvg from "@/assets/right.svg";
import Button from "../../common/Button";
import { HeroVisuals } from "./HeroVisuals";

const Hero: React.FC = () => {
    return (
        <section id="home" className="relative w-full flex flex-col items-center justify-center overflow-hidden bg-linear-to-br from-brand-blue-start to-brand-blue-end text-white px-6 pb-10 pt-20 md:pt-0">
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10 w-full">

                <div className="flex flex-col space-y-8 lg:w-1/2">
                    <header className="space-y-4">
                        <h1 className="text-2xl md:text-5xl leading-tight font-nunito font-extrabold max-w-2xl">
                            <span className="text-brand-orange">Empowering</span> Students &
                            Young Entrepreneurs <br />
                            Across India
                        </h1>

                        <p className="text-xs md:text-xl text-white/90 max-w-xl font-light leading-relaxed">
                            A national platform helping students learn, grow, connect, and explore career & startup opportunities through community, mentorship, and skills-based programs.
                        </p>
                    </header>

                    <nav className="flex flex-row gap-3">
                        <Button variant="primary">
                            Register Now
                        </Button>
                        <Button variant="outline">
                            Explore Benefits
                        </Button>
                    </nav>
                </div>

                <div className="lg:hidden w-full flex justify-center items-center">
                    <img
                        src={rightSvg}
                        alt="BuildUp Bharat Mobile"
                        className="w-full max-w-[800px] drop-shadow-xl"
                        fetchPriority="high"
                    />
                </div>

                <HeroVisuals />
            </div>

            <BottomCurve />
        </section>
    );
};

const BottomCurve: React.FC = () => (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0">
        <svg
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            className="relative block w-full h-[30px] md:h-[100px] lg:h-[120px] z-20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M0,0 C480,120 960,120 1440,0 L1440,120 L0,120 Z" />
        </svg>
    </div>
);

export default Hero;
