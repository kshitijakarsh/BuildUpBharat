import React from 'react'
import SectionHeader from '../../common/SectionHeader'
import FeatureBlock, { type FeatureItem } from './FeatureBlock'

const COMMUNITY_FEATURES: FeatureItem[] = [
  {
    id: 1,
    title: 'Connect & Collaborate',
    description:
      'Engage with like-minded students, peers, and motivated youth through interactive discussions, activities, and community-driven learning.',
  },
  {
    id: 2,
    title: 'Share Ideas & Grow Together',
    description:
      'Participate in conversations, knowledge sharing, group interactions, and experience-based learning that helps you build confidence and perspective.',
  },
  {
    id: 3,
    title: 'Build Meaningful Networks',
    description:
      'Develop long-term connections that support personal growth, career exploration, leadership development, and future opportunities.',
  },
  {
    id: 4,
    title: 'A Pan-India Youth Community',
    description:
      'Be part of a growing national platform that brings together learners and young leaders from diverse regions and backgrounds.',
  },
]


const JoinCommunity: React.FC = () => {
  return (
    <section className="relative w-full py-24 bg-white overflow-hidden">
      {/* Decorative dots based on image */}
      <div className="absolute top-0 left-10 w-3 h-3 bg-indigo-500 rounded-full opacity-60 animate-bounce"></div>
      <div className="absolute bottom-10 right-20 w-4 h-4 bg-orange-500 rounded-full opacity-60 animate-pulse"></div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader bgText="Join Us">
          <span className="text-brand-navy">
            Join a <span className="text-brand-navy">Professional</span> <span className="text-brand-orange">Community</span>
          </span>
        </SectionHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-10 lg:gap-16 max-w-5xl mx-auto items-stretch mt-16">
          {COMMUNITY_FEATURES.map((feature) => (
            <div key={feature.id} className="mt-10 md:mt-0">
              <FeatureBlock
                item={feature}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default JoinCommunity
