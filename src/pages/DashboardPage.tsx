import { useState, useEffect } from 'react';
import WelcomeBanner from '../components/Dashboard/WelcomeBanner';
import QuickAccessHub from '../components/Dashboard/QuickAccessHub';
import FeaturedSection from '../components/Dashboard/FeaturedSection';
import ProBanner from '../components/Dashboard/ProBanner';
import TrustedUniversities from '../components/Dashboard/TrustedUniversities';
import OpportunityList from '../components/Dashboard/OpportunityList';
import MockTestSection from '../components/Dashboard/MockTestSection';
import SuccessStats from '../components/Dashboard/SuccessStats';
import Footer from '../components/common/Footer';
import MembershipModal from '../components/Dashboard/MembershipModal';
import logo from "@/assets/logo.svg"

const DashboardPage = () => {
    const [isMembershipModalOpen, setIsMembershipModalOpen] = useState(false);

    useEffect(() => {
        // Show modal briefly after mount
        const timer = setTimeout(() => {
            setIsMembershipModalOpen(true);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    const internships = [
        {logo : logo, role: "Software Engineer Intern", company: "BuildUp Bharat", location: "Noida" },
        {logo : logo, role: "Software Engineer Intern", company: "BuildUp Bharat", location: "Noida" },
        {logo : logo, role: "Software Engineer Intern", company: "BuildUp Bharat", location: "Noida" },
        {logo : logo, role: "Software Engineer Intern", company: "BuildUp Bharat", location: "Noida" },
        {logo : logo, role: "Software Engineer Intern", company: "BuildUp Bharat", location: "Noida" },
        
    ];

    const jobs = [
        {logo : logo, role: "Software Engineer Intern", company: "BuildUp Bharat", location: "Noida" },
        {logo : logo, role: "Software Engineer Intern", company: "BuildUp Bharat", location: "Noida" },
        {logo : logo, role: "Software Engineer Intern", company: "BuildUp Bharat", location: "Noida" },
        {logo : logo, role: "Software Engineer Intern", company: "BuildUp Bharat", location: "Noida" },
        {logo : logo, role: "Software Engineer Intern", company: "BuildUp Bharat", location: "Noida" },
    ];

    return (
        <div className="max-w-7xl mx-auto space-y-6">
            <MembershipModal isOpen={isMembershipModalOpen} onClose={() => setIsMembershipModalOpen(false)} />

            <WelcomeBanner />
            <QuickAccessHub />
            <FeaturedSection />

            <div className='w-full h-px bg-gray-500'></div>

            <ProBanner />
            <TrustedUniversities />

            {/* Opportunity Sections */}
            <div className="space-y-4">
                <OpportunityList title="Internship" items={internships} id="internship" />
                <OpportunityList title="Jobs Opportunities" items={jobs} id="jobs" />
            </div>

            <MockTestSection />
            <SuccessStats />

            <div className="border-t border-gray-100">
                <Footer />
            </div>
        </div>
    );
};

export default DashboardPage;
