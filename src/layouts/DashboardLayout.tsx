import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Sidebar from "../components/Dashboard/Sidebar";

const DashboardLayout = () => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />

            <div className="flex flex-1 relative">
                <aside
                    className={`hidden md:block border-r border-gray-100 bg-white transition-all duration-300 relative z-10 ${isSidebarCollapsed ? 'w-20' : 'w-64'}`}
                >
                    <div className="sticky top-0 overflow-visible">
                        <Sidebar
                            isCollapsed={isSidebarCollapsed}
                            onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
                        />
                    </div>
                </aside>
                <main className="flex-1 p-0 md:px-8 overflow-y-auto w-full">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
