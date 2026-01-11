import React from "react";
import SectionHeader from "../../common/SectionHeader";
import BenefitItem from "./BenefitItem";
import CareerGrowth from '@/assets/benefits/CareerGrowth.svg'
import NetworkingOpportunities from '@/assets/benefits/NetworkingOpportunities.svg'
import MentorshipSupport from '@/assets/benefits/MentorshipSupport.svg'
import Funding from '@/assets/benefits/Funding.svg'

const Benefits: React.FC = () => {
    return (
        <section id="benefits" className="relative w-full py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <SectionHeader bgText="Benefits">
                    <span className="text-brand-navy">Benefits of Joining</span> Build<span className="text-brand-orange-deep">Up</span> Bharat
                </SectionHeader>

                <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
                    <p className="text-gray-600 text-sm md:text-lg font-normal leading-relaxed">
                        Gain real-world exposure, develop future-ready skills, and unlock opportunities through community learning, mentorship, networking, and growth-focused programs.
                    </p>
                </div>

                <div className="flex flex-col items-center justify-center gap-10 md:gap-10 max-w-6xl mx-auto">
                    <BenefitItem
                        title="Career Growth"
                        description="Develop essential career, leadership, and professional skills through learning programs, workshops, and real-world exposure."
                        imageSrc={CareerGrowth}
                        imageAlign="left"
                    />

                    <BenefitItem
                        title="Networking Opportunities"
                        description="Connect with motivated students, peers, and like-minded youth across India through community-driven engagement."
                        imageSrc={NetworkingOpportunities}
                        imageAlign="right"
                    />

                    <BenefitItem
                        title="Mentorship Support"
                        description="Get guidance, insights, and direction from mentors and experienced professionals to help shape your personal and professional journey."
                        imageSrc={MentorshipSupport}
                        imageAlign="left"
                    />

                    <BenefitItem
                        title="Funding & Startup Exposure"
                        description="Access information, awareness, and opportunities related to startup growth, innovation programs, and entrepreneurial initiatives."
                        imageSrc={Funding}
                        imageAlign="right"
                    />
                </div>
            </div>
        </section>
    );
}

export default Benefits;