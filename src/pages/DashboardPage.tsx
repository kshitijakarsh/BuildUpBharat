import { useRef } from 'react';
import WelcomeBanner from '../components/Dashboard/WelcomeBanner';
import QuickAccessHub from '../components/Dashboard/QuickAccessHub';
import FeaturedSection from '../components/Dashboard/FeaturedSection';
import ProBanner from '../components/Dashboard/ProBanner';
import TrustedUniversities from '../components/Dashboard/TrustedUniversities';
import OpportunityList from '../components/Dashboard/OpportunityList';
import MockTestSection from '../components/Dashboard/MockTestSection';
import SuccessStats from '../components/Dashboard/SuccessStats';
// import MembershipModal from '../components/Dashboard/MembershipModal';
import logo from "@/assets/logo.svg"

const DashboardPage = () => {
    const featuredRef = useRef<HTMLDivElement>(null);

    const handleExploreClick = () => {
        featuredRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    // const [isMembershipModalOpen, setIsMembershipModalOpen] = useState(false);

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setIsMembershipModalOpen(true);
    //     }, 1000);
    //     return () => clearTimeout(timer);
    // }, []);

    const internships = [
        { logo: logo, role: "Software Engineer Intern", company: "BuildUp Bharat", location: "Noida" },
        { logo: logo, role: "Software Engineer Intern", company: "BuildUp Bharat", location: "Noida" },
        { logo: logo, role: "Software Engineer Intern", company: "BuildUp Bharat", location: "Noida" },
        { logo: logo, role: "Software Engineer Intern", company: "BuildUp Bharat", location: "Noida" },
        { logo: logo, role: "Software Engineer Intern", company: "BuildUp Bharat", location: "Noida" },

    ];

    const jobs = [
        { logo: logo, role: "Software Engineer Intern", company: "BuildUp Bharat", location: "Noida" },
        { logo: logo, role: "Software Engineer Intern", company: "BuildUp Bharat", location: "Noida" },
        { logo: logo, role: "Software Engineer Intern", company: "BuildUp Bharat", location: "Noida" },
        { logo: logo, role: "Software Engineer Intern", company: "BuildUp Bharat", location: "Noida" },
        { logo: logo, role: "Software Engineer Intern", company: "BuildUp Bharat", location: "Noida" },
    ];

    return (
        <div className="space-y-6">
            {/* <MembershipModal isOpen={isMembershipModalOpen} onClose={() => setIsMembershipModalOpen(false)} /> */}

            <WelcomeBanner onExploreClick={handleExploreClick} />
            <QuickAccessHub />
            <div ref={featuredRef}>
                <FeaturedSection />
            </div>

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
        </div>
    );
};

export default DashboardPage;
