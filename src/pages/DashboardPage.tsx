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
        { logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/150px-Google_%22G%22_Logo.svg.png", role: "Software Engineer Intern", company: "Google", location: "Bangalore / Remote" },
        { logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png", role: "3D Design Internship", company: "Amazon Technology", location: "Gurugram / Remote" },
        { logo: "https://jivo.chat/images/logo-dark-original.png", role: "Product Design", company: "Jivo", location: "Mumbai / Remote" }, // Placeholder logo for Jivo
        { logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png", role: "UX Researcher", company: "Microsoft", location: "Hyderabad / Remote" },
    ];

    const jobs = [
        { logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/150px-Google_%22G%22_Logo.svg.png", role: "Flutter Developer", company: "Google", location: "Bangalore / Remote" },
        { logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Scho_Tech_profile.jpg/220px-Scho_Tech_profile.jpg", role: "Frontend Developer", company: "Scho Tech Private Limited", location: "Bangalore / Office" }, // Placeholder
        { logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Deloitte.svg/1200px-Deloitte.svg.png", role: "Audit Assistant", company: "Deloitte", location: "Mumbai / Office" },
        { logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png", role: "Data Scientist", company: "Meta", location: "Gurugram / Hybrid" },
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

            <div className="pt-10 border-t border-gray-100 mt-10">
                <Footer />
            </div>
        </div>
    );
};

export default DashboardPage;
