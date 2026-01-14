import { useState } from "react";
import { Menu, X, Search, Bell } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.svg";
import Button from "./Button";

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Benefits', href: '#benefits' },
  { name: 'Why Join Us', href: '#what-you-get' },
  { name: 'Community', href: '#community' },
  { name: 'Opportunities', href: '#opportunities' },
  { name: 'Success Stories', href: '#feedbacks' },
];

const Logo = () => (
  <Link to="/" className="flex items-center text-brand-orange shrink-0">
    <img src={logo} alt="Build Up Bharat" className="h-10 md:h-12 w-auto" />
  </Link>
);

const NavLink = ({
  name,
  href,
  onClick,
  mobile = false
}: {
  name: string;
  href: string;
  onClick?: () => void;
  mobile?: boolean
}) => (
  <a
    href={href}
    onClick={onClick}
    className={mobile
      ? "text-lg font-medium transition-colors hover:text-brand-orange text-gray-600"
      : "text-sm font-medium transition-colors relative pb-1 text-gray-600 hover:text-brand-orange"
    }
  >
    {name}
  </a>
);

const LandingNavbar = ({
  isMenuOpen,
  toggleMenu
}: {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}) => (
  <>
    <nav className="flex items-center justify-between px-4 md:px-8 py-4 bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="flex items-center gap-4">
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-600"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} className="text-brand-orange" /> : <Menu size={24} className="text-brand-orange" />}
        </button>
        <Logo />
      </div>

      <div className="hidden md:flex items-center space-x-8">
        {NAV_LINKS.map((link) => (
          <NavLink key={link.name} {...link} />
        ))}
      </div>

      <div>
        <Link to="/register">
          <Button variant="primary" size="sm">
            Register
          </Button>
        </Link>
      </div>
    </nav>

    {/* Mobile Menu Drawer */}
    <div
      className={`fixed inset-0 z-60 md:hidden transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
    >
      <div
        className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={toggleMenu}
      />
      <aside className="relative w-72 h-full bg-white shadow-xl flex flex-col p-6">
        <div className="flex items-center justify-between mb-8">
          <Logo />
          <button onClick={toggleMenu} className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-600">
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col space-y-6">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.name} {...link} onClick={toggleMenu} mobile />
          ))}
        </div>
        <div className="mt-auto pt-8 border-t border-gray-100">
          <Link to="/register" onClick={toggleMenu}>
            <Button variant="primary" fullWidth>
              Register Now
            </Button>
          </Link>
        </div>
      </aside>
    </div>
  </>
);

import Sidebar from "../Dashboard/Sidebar";

const DashboardNavbar = ({
  isMenuOpen,
  toggleMenu
}: {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}) => (
  <>
    <nav className="flex items-center justify-between px-4 md:px-12 py-4 bg-white border-b border-gray-100 sticky top-0 z-50 gap-6">
      <div className="flex items-center gap-4">
        <button
          onClick={toggleMenu}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-600"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} className="text-brand-orange" /> : <Menu size={24} className="text-brand-orange" />}
        </button>
        <Logo />
      </div>

      {/* Search Bar */}
      <div className="hidden md:flex flex-1 max-w-2xl items-center relative group">
        <input
          type="text"
          placeholder="Search of companies, internship, jobs..."
          className="w-full bg-[#F2F2F2] border-none rounded-full py-2.5 px-6 pr-12 text-sm text-gray-600 placeholder:text-gray-400 focus:ring-1 focus:ring-brand-blue/20 outline-none transition-all group-hover:bg-[#EBEBEB]"
        />
        <Search className="absolute right-5 w-5 h-5 text-gray-400 group-hover:text-gray-500 transition-colors" />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2 md:gap-8">
        <button className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
          <Search className="w-6 h-6" />
        </button>

        <div className="relative p-2 cursor-pointer hover:bg-gray-50 rounded-full transition-colors">
          <Bell className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
          <span className="absolute top-2.5 right-2.5 w-2 h-2 md:w-2.5 md:h-2.5 bg-[#FF6B6B] border-2 border-white rounded-full"></span>
        </div>

        <div className="hidden md:block h-10 w-px bg-gray-200"></div>

        {/* User Profile */}
        <Link to="/profile" className="flex items-center gap-0 sm:gap-3 bg-transparent sm:bg-[#F8F9FF] border-none sm:border-[#E9EFFF] rounded-full sm:pl-5 cursor-pointer hover:border-brand-blue/30 transition-all">
          <span className="text-sm font-semibold text-brand-blue-text whitespace-nowrap hidden sm:block">
            Aryan Sharma
          </span>
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden border-2 border-brand-blue-start">
            <img
              src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&auto=format&fit=crop"
              alt="User profile"
              className="w-full h-full object-cover"
            />
          </div>
        </Link>
      </div>
    </nav>

    {/* Mobile Menu Drawer */}
    <div
      className={`fixed inset-0 z-60 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
    >
      <div
        className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={toggleMenu}
      />
      <aside className="relative w-72 h-full bg-white shadow-xl flex flex-col pt-6 overflow-hidden">
        <div className="flex items-center justify-between px-6 mb-4">
          <Logo />
          <button onClick={toggleMenu} className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-600">
            <X size={24} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto">
          <Sidebar
            isCollapsed={false}
            onToggle={toggleMenu}
            onItemClick={toggleMenu}
          />
        </div>
      </aside>
    </div>
  </>
);

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  if (isHomePage) {
    return <LandingNavbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />;
  }

  return <DashboardNavbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />;
}
