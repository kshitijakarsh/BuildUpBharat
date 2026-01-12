import React, { useState, useEffect } from 'react'
import { Check, ArrowRight } from 'lucide-react'
import Button from '../common/Button'

interface MembershipModalProps {
    isOpen: boolean
    onClose: () => void
}

const MembershipModal: React.FC<MembershipModalProps> = ({ isOpen, onClose }) => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true)
            document.body.style.overflow = 'hidden'
        } else {
            const timer = setTimeout(() => setIsVisible(false), 300)
            document.body.style.overflow = 'unset'
            return () => clearTimeout(timer)
        }
    }, [isOpen])

    if (!isVisible && !isOpen) return null

    return (
        <div className={`fixed inset-0 z-50 overflow-y-auto transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className="flex min-h-full items-center justify-center p-4 text-center">
                {/* Backdrop */}
                <div className="fixed inset-0 bg-white/80 backdrop-blur-sm" onClick={onClose} />

                {/* Modal Content */}
                <div className={`relative w-full max-w-6xl mx-auto transform transition-all duration-300 text-left ${isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-10'}`}>

                    {/* Mobile Skip Button */}
                    <button
                        onClick={onClose}
                        className="md:hidden absolute left-0 flex items-center gap-1 text-gray-500 text-sm font-medium z-20"
                    >
                        <ArrowRight size={14} className="rotate-180" /> Skip
                    </button>

                    {/* Header Section */}
                    <div className="text-center pt-8 mb-8 md:mb-12 relative">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-brand-blue-text">
                            Become Member of <span className="text-brand-highlight">BuildUp</span> <span className="text-brand-orange">Bharat</span>
                        </h2>

                        <button
                            onClick={onClose}
                            className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-1 text-gray-500 font-medium transition-colors border-b border-dotted border-gray-400 pb-0.5"
                        >
                            Skip <ArrowRight size={16} />
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {/* Free Plan */}
                        <div className="bg-white rounded-4xl p-8 shadow-xl transition-shadow border border-gray-100 flex flex-col">
                            <h3 className="text-brand-accent-blue font-bold text-lg mb-2">Free Plan</h3>
                            <div className="flex items-baseline gap-2 mb-8">
                                <span className="text-5xl font-bold text-gray-900">Free</span>
                                <span className="text-xs font-bold tracking-wider text-gray-500 uppercase">/ forever</span>
                            </div>

                            <ul className="space-y-4 mb-8 flex-1">
                                {[
                                    'Access to basic community updates',
                                    'Limited learning content access',
                                    'Participation in open activities'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="shrink-0 w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                                            <Check size={12} className="text-gray-600" strokeWidth={3} />
                                        </div>
                                        <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                variant="secondary"
                                onClick={onClose}
                                className="w-full rounded-2xl py-4 border-gray-200 font-bold text-brand-accent-blue hover:bg-gray-50"
                            >
                                Try for free
                            </Button>
                        </div>

                        {/* Premium Plan - Highlighted */}
                        <div className="bg-white rounded-4xl p-8 shadow-2xl border border-brand-accent-blue/10 flex flex-col relative z-10 ring-4 ring-brand-accent-blue/5">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-brand-accent-blue font-bold text-lg">Premium Plan</h3>
                                <span className="bg-white border border-brand-accent-blue text-brand-blue-text text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Best!</span>
                            </div>

                            <div className="flex items-baseline gap-2 mb-8">
                                <span className="text-5xl font-bold text-gray-900">₹1499</span>
                                <span className="text-xs font-bold tracking-wider text-gray-500 uppercase">/ forever</span>
                            </div>

                            <ul className="space-y-4 mb-8 flex-1">
                                {[
                                    'Full access to all courses & programs',
                                    'Workshops & skill-based sessions',
                                    'Community networking & discussions',
                                    'Lifetime platform access'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="shrink-0 w-6 h-6 rounded-full bg-brand-orange flex items-center justify-center mt-0.5 shadow-sm">
                                            <Check size={12} className="text-white" strokeWidth={3} />
                                        </div>
                                        <span className="text-gray-700 text-sm font-medium leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                variant="primary"
                                className="w-full rounded-xl py-4 bg-brand-accent-blue hover:bg-brand-accent-blue-hover text-white font-bold shadow-lg shadow-brand-accent-blue/30"
                            >
                                Premium Plan
                            </Button>
                        </div>

                        {/* Pro Plan */}
                        <div className="bg-white rounded-4xl p-8 shadow-xl hover:shadow-2xl transition-shadow border border-gray-100 flex flex-col">
                            <h3 className="text-brand-accent-blue font-bold text-lg mb-2">Pro Plan</h3>
                            <div className="flex items-baseline gap-2 mb-8">
                                <span className="text-5xl font-bold text-gray-900">₹999</span>
                                <span className="text-xs font-bold tracking-wider text-gray-500 uppercase">/ monthly</span>
                            </div>

                            <ul className="space-y-4 mb-8 flex-1">
                                {[
                                    'Access to courses & programs',
                                    'Workshops & activities',
                                    'Community interaction benefits',
                                    'Event & opportunity updates'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="shrink-0 w-6 h-6 rounded-full bg-brand-purple-light flex items-center justify-center mt-0.5">
                                            <Check size={12} className="text-white" strokeWidth={3} />
                                        </div>
                                        <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                variant="secondary"
                                className="w-full rounded-2xl py-4 border-gray-200 font-bold text-brand-accent-blue hover:bg-gray-50"
                            >
                                Extended Plan
                            </Button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MembershipModal
