
import Hero from "../components/LandingPage/Hero/Hero";
import About from "../components/LandingPage/AboutUs/About";
import Benefits from "../components/LandingPage/BenefitsOfJoining/Benefits";
import WhatYouGet from "../components/LandingPage/WhatYouGet/WhatYouGet";
import HiringOpportunities from "../components/LandingPage/HiringOpportunities/HiringOpportunities";
import Feedbacks from "../components/LandingPage/Feedbacks/Feedbacks";
import JoinCommunity from "../components/LandingPage/JoinCommunity/JoinCommunity";

const HomePage = () => {
    return (
        <>
            <Hero />
            <About />
            <Benefits />
            <WhatYouGet />
            <JoinCommunity />
            <HiringOpportunities />
            <Feedbacks />
        </>
    );
};

export default HomePage;
