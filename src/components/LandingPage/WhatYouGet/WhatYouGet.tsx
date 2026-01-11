import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import tours from "@assets/whatyouget/tours.svg";

import "swiper/swiper-bundle.css";

import SectionHeader from "../../common/SectionHeader";
import WhatYouGetCard from "./WhatYouGetCard";

interface WhatYouGetItem {
    title: string;
    description: string;
    imageSrc: string;
}

const SWIPER_CONFIG = {
    spaceBetween: 30,
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        clickable: true,
    },
} as const;

const WHAT_YOU_GET_DATA: WhatYouGetItem[] = [
    {
        title: "Tours & Industry Exposure",
        description:
            "Opportunities for students to participate in exposure visits, industry tours, learning trips, and event participation — helping them experience real-world environments beyond the classroom.",
        imageSrc: tours,
    },
    {
        title: "Courses",
        description:
            "Learn through structured programs covering communication, entrepreneurship, leadership, etc. Includes live Zoom sessions, activity-based learning, and downloadable certificates.",
        imageSrc: tours,
    },
    {
        title: "Jobs & Internships",
        description:
            "Access updated internship and opportunity listings where students can apply based on role, sector, and interest areas — helping them gain exposure and experience.",
        imageSrc: tours,
    },
    {
        title: "Events & Startup Updates",
        description:
            "Stay updated with information about startup events, entrepreneurship news, awareness programs, and innovation-driven event participation.",
        imageSrc: tours,
    },
    {
        title: "Mentors & Guidance",
        description:
            "Seek guidance and direction from experienced professionals and industry mentors to help shape your personal and professional growth journey.",
        imageSrc: tours,
    },
    {
        title: "Workshops & Skill Sessions",
        description:
            "Participate in specialized hands-on workshops and skill-building sessions designed to bridge the gap between classroom learning and industry requirements.",
        imageSrc: tours,
    },
    {
        title: "Quiz Competitions",
        description:
            "Test your knowledge and sharpen your cognitive skills through regular quiz competitions covering various domains, aptitude, and general awareness.",
        imageSrc: tours,
    },
    {
        title: "Query Support & Helpdesk",
        description:
            "Get prompt assistance regarding course registrations, certificates, program details, and general queries through our dedicated support helpdesk.",
        imageSrc: tours,
    },
];


const WhatYouGet = () => {
    return (
        <section
            id="what-you-get"
            className="relative w-full overflow-hidden bg-white py-24"
        >
            <div className="container relative z-10 mx-auto px-6">
                <SectionHeader bgText="WHAT YOU GET" className="mb-10 md:mb-20">
                    <span className="text-brand-navy">You Get Inside</span>{" "}
                    Build<span className="text-brand-orange">Up</span> Bharat
                </SectionHeader>

                <div className="relative mx-auto max-w-5xl px-0 md:px-4 lg:px-12">
                    <div
                        className="absolute -top-4 -z-10 hidden h-20 w-20 rounded-2xl bg-brand-orange lg:block"
                        aria-hidden="true"
                    />

                    <div
                        className="absolute bottom-1 right-1 -z-10 hidden h-20 w-24 rounded-2xl bg-brand-blue-end lg:block"
                        aria-hidden="true"
                    />

                    <Swiper
                        modules={[Autoplay]}
                        {...SWIPER_CONFIG}
                        className="pb-16"
                    >
                        {WHAT_YOU_GET_DATA.map((item) => (
                            <SwiperSlide key={item.title}>
                                <div className="py-4">
                                    <WhatYouGetCard {...item} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default WhatYouGet;
