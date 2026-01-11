import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.svg";
import Button from "./Button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#', active: true },
    { name: 'About', href: '#' },
    { name: 'Benefits', href: '#' },
    { name: 'Why Join Us', href: '#' },
    { name: 'Community', href: '#' },
    { name: 'Opportunities', href: '#' },
    { name: 'Success Stories', href: '#' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <nav className="flex items-center justify-between px-4 md:px-8 py-4 bg-white border-b border-gray-100 sticky top-0 z-50">
        {/* Left Section: Mobile Menu Toggle & Logo */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-600"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} className="text-brand-orange" /> : <Menu size={24} className="text-brand-orange" />}
          </button>

          <div className="flex items-center text-brand-orange">
            <img src={logo} alt="Build Up Bharat" className="h-10 md:h-12 w-auto" />
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-brand-orange relative pb-1 ${link.active ? 'text-black' : 'text-gray-600'
                }`}
            >
              {link.name}
              {link.active && (
                <span className="absolute bottom-[-10px] left-0 w-6 h-[3px] bg-brand-orange rounded-full" />
              )}
            </a>
          ))}
        </div>

        {/* Action Button */}
        <div>
          <Link to="/register">
            <Button variant="primary" className="px-6! py-2! md:py-2.5! text-xs md:text-sm!">
              Register
            </Button>
          </Link>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'
            }`}
          onClick={toggleMenu}
        />

        {/* Drawer Content */}
        <aside className="relative w-72 h-full bg-white shadow-xl flex flex-col p-6">
          <div className="flex items-center justify-between mb-8">
            <img src={logo} alt="Build Up Bharat" className="h-10 w-auto" />
            <button onClick={toggleMenu} className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-600">
              <X size={24} />
            </button>
          </div>

          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={toggleMenu}
                className={`text-lg font-medium transition-colors hover:text-brand-orange ${link.active ? 'text-brand-orange' : 'text-gray-600'
                  }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="mt-auto pt-8 border-t border-gray-100">
            <Link to="/register" onClick={toggleMenu}>
              <Button variant="primary" className="w-full">
                Register Now
              </Button>
            </Link>
          </div>
        </aside>
      </div>
    </>
  );
}
