import { useState } from "react";
import ProfileSidebar from "../components/Profile/ProfileSidebar";
import AccountDetailsForm from "../components/Profile/AccountDetailsForm";
import EducationDetailsForm from "../components/Profile/EducationDetailsForm";
import LocationDetailsForm from "../components/Profile/LocationDetailsForm";
import SecurityDetailsForm from "../components/Profile/SecurityDetailsForm";

const ProfilePage = () => {
    const [activeTab, setActiveTab] = useState("personal");

    return (
        <div className="flex flex-col md:flex-row gap-8 items-start">
            <ProfileSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

            {activeTab === "personal" && <AccountDetailsForm />}
            {activeTab === "educational" && <EducationDetailsForm />}
            {activeTab === "location" && <LocationDetailsForm />}
            {activeTab === "security" && <SecurityDetailsForm />}

            {activeTab !== "personal" && activeTab !== "educational" && activeTab !== "location" && activeTab !== "security" && (
                <div className="flex-1 bg-white rounded-[2.5rem] border border-gray-100 p-8 md:p-12 shadow-sm min-h-[500px] flex items-center justify-center">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-gray-400 mb-2">Coming Soon</h2>
                        <p className="text-gray-400">This section is currently under development.</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfilePage;
