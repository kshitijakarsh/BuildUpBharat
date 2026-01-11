import React from 'react'
import { Twitter, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from 'lucide-react'
import logo from '@/assets/logo.svg'

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-light-blue pt-20 pb-10 rounded-t-[50px] mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6 flex flex-col h-full">
            <div className="w-48">
              <img src={logo} alt="Build Up Bharat" className="w-full h-auto" />
            </div>
            <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
              Build Up Bharat is a youth-focused initiative that helps students and aspiring
              entrepreneurs develop skills, confidence, leadership ability, and real-world exposure
              through learning, community engagement, and growth-oriented opportunities.
            </p>
            <div className="mt-auto pt-8 text-xs text-gray-500 font-medium">
              <p>Copyright © Build Up Bharat — All Rights Reserved, 2026</p>
            </div>
          </div>

          {/* Get in Touch */}
          <div className="space-y-6">
            <h3 className="text-base font-bold text-brand-blue uppercase tracking-wide">
              Get in Touch
            </h3>
            <ul className="space-y-4 text-sm text-gray-600">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-brand-blue mt-0.5 shrink-0" />
                <span className="max-w-[200px]">8819 Ohio St. South Gate, CA 90280</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-brand-blue shrink-0" />
                <span>Ourstudio@hello.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-brand-blue shrink-0" />
                <span>+1 386-688-3295</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-base font-bold text-brand-blue uppercase tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:text-brand-blue transition-colors">About Build Up Bharat</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Benefits</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Why Join Us</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Opportunities</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Socials */}
          <div className="space-y-6">
            <div className="flex gap-4">
              <a href="#" className="p-2.5 bg-brand-blue text-white rounded-full hover:bg-brand-blue-end transition-colors flex items-center justify-center w-10 h-10">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2.5 bg-brand-blue text-white rounded-full hover:bg-brand-blue-end transition-colors flex items-center justify-center w-10 h-10">
                {/* Using Twitter icon for X as placeholder if X not available, but user wants X. */}
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2.5 bg-brand-blue text-white rounded-full hover:bg-brand-blue-end transition-colors flex items-center justify-center w-10 h-10">
                <Youtube size={20} />
              </a>
              <a href="#" className="p-2.5 bg-brand-blue text-white rounded-full hover:bg-brand-blue-end transition-colors flex items-center justify-center w-10 h-10">
                <Linkedin size={20} />
              </a>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed max-w-xs">
              Stay connected for updates, initiatives, and opportunities from the Build Up Bharat community.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
