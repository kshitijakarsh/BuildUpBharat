import React from "react";
import { Telescope, Target, ChartNoAxesCombined } from "lucide-react";
import ValueCard from "./ValueCard";
import SectionHeader from "../../common/SectionHeader";

const About: React.FC = () => {
    const values = [
        {
            title: "Vision",
            description: "To create a future-ready youth ecosystem in India where students develop entrepreneurial thinking, leadership ability, and practical life skills.",
            icon: <Telescope />,
            iconBg: "bg-brand-blue"
        },
        {
            title: "Mission",
            description: "To bridge the gap between education and real-world opportunities through community learning, guidance, collaboration, and experience-based programs.",
            icon: <Target />,
            iconBg: "bg-brand-blue"
        },
        {
            title: "Impact",
            description: "Building a strong network of motivated learners, innovators, and young leaders across India who are prepared for careers, startups, and personal growth.",
            icon: <ChartNoAxesCombined />,
            iconBg: "bg-brand-blue"
        }
    ];

    return (
        <section id="about" className="relative w-full py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">

                <SectionHeader bgText="About Us">
                    <span className="text-brand-navy">About</span> Build<span className="text-brand-orange-deep">Up</span> Bharat
                </SectionHeader>

                {/* Description */}
                <div className="max-w-3xl mx-auto text-center mb-24">
                    <p className="text-gray-600 text-sm md:text-lg font-normal leading-relaxed">
                        Build Up Bharat is a national initiative that empowers students and young
                        aspiring entrepreneurs by providing growth-oriented learning, networking,
                        career exposure, mentorship opportunities, and startup-ready skills.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-10 lg:gap-16 max-w-7xl mx-auto items-stretch mt-10">
                    {values.map((value, index) => (
                        <ValueCard
                            key={index}
                            title={value.title}
                            description={value.description}
                            icon={value.icon}
                            iconBg={value.iconBg}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
