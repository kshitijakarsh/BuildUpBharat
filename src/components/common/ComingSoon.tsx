import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';
import SectionHeader from './SectionHeader';
import Coming from '@/assets/coming.svg';

const ComingSoon = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Notification requested for:', email);
        alert('Thank you! We will notify you.');
        setEmail('');
    };

    return (
        <div className="relative w-full overflow-hidden">
            <div className="max-h-[80vh] flex flex-col items-center justify-center mx-auto py-20 text-center relative z-10">
                <div className="p-6 rounded-full w-32 h-32 md:w-48 md:h-48 flex items-center justify-center">
                    <img src={Coming} alt="Coming Soon" className="w-full h-full object-contain" />
                </div>

                <SectionHeader bgText="Coming Soon">
                    Feature Under Development
                </SectionHeader>

                <p className="text-gray-500 max-w-lg text-lg">
                    We're working hard to bring you this feature. Subscribe to stay updated and get notified as soon as it's ready!
                </p>

                {/* Notification Form */}
                <form
                    onSubmit={handleSubmit}
                    className="mt-12 w-full max-w-lg relative group"
                >
                    <div className="relative flex items-center bg-white rounded-full border border-brand-highlight/30 shadow-sm transition-all focus-within:ring-2 focus-within:ring-brand-highlight/20 focus-within:border-brand-highlight">
                        <div className="pl-6 md:pl-8 text-gray-400 group-focus-within:text-brand-accent-blue transition-colors hidden sm:block">
                            <Mail size={22} />
                        </div>
                        <input
                            type="email"
                            required
                            placeholder="Enter your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="flex-1 bg-transparent border-none px-4 text-gray-800 placeholder-gray-400 outline-none text-base md:text-lg"
                        />
                        <button
                            type="submit"
                            className="bg-brand-accent-blue hover:bg-blue-600 text-white font-bold py-3 px-6 md:px-10 rounded-full flex items-center gap-2 transition-all active:scale-95 shadow-md hover:shadow-lg shadow-blue-100/50"
                        >
                            <span className="hidden sm:inline">Notify Me</span>
                            <Send size={18} className="md:w-5 md:h-5" />
                        </button>
                    </div>
                </form>

                <div className="mt-12 flex gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-brand-accent-blue rounded-full animate-pulse" />
                        In Design
                    </span>
                    <span className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-brand-highlight rounded-full animate-pulse delay-75" />
                        In Development
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ComingSoon;
