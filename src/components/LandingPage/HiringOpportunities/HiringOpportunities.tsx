import React from 'react'
import SectionHeader from '../../common/SectionHeader'
import type { LucideIcon } from 'lucide-react'
import { LayoutGrid, Briefcase, Users } from 'lucide-react'
import hiring from '@/assets/hiring.svg'

interface OpportunityItem {
  id: number
  title: string
  description: string
  icon: LucideIcon
  color: string
}

const OPPORTUNITIES: OpportunityItem[] = [
  {
    id: 1,
    title: 'Internship & Work Opportunities',
    description:
      'Discover student-friendly internships and exposure-based learning opportunities shared through the platform.',
    icon: LayoutGrid,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    id: 2,
    title: 'Programs & Learning Engagements',
    description:
      'Stay connected to activities, initiatives, and awareness programs that support your growth and skill development.',
    icon: Briefcase,
    color: 'bg-orange-100 text-orange-500',
  },
  {
    id: 3,
    title: 'Events, Activities & Youth Initiatives',
    description:
      'Explore updates about workshops, discussions, and community-based interactive opportunities.',
    icon: Users,
    color: 'bg-purple-100 text-purple-600',
  },
]

const HiringFeatureBlock: React.FC<{ item: OpportunityItem }> = ({ item }) => (
  <div className="flex items-start gap-4 p-4 first:pt-0">
    <div
      className={`w-12 h-12 ${item.color.split(' ')[0]} rounded-lg flex items-center justify-center shadow-sm shrink-0`}
    >
      <div className={item.color.split(' ')[1]}>
        <item.icon size={20} strokeWidth={3} />
      </div>
    </div>
    <div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
      <p className="text-gray-600 leading-relaxed text-sm font-normal">
        {item.description}
      </p>
    </div>
  </div>
)

const HiringOpportunities: React.FC = () => {
  return (
    <section id="opportunities" className="relative w-full py-10 md:py-24 bg-white overflow-hidden">
      <div className="absolute bottom-20 left-10 w-3 h-3 bg-blue-500 rounded-full opacity-60"></div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader bgText="Opportunities">
          <span className="text-brand-navy">
            Current <span className="text-brand-blue">Hiring</span> & <span className="text-brand-orange">Opportunities</span>
          </span>
        </SectionHeader>

        <div className="max-w-3xl mx-auto text-center mb-16 mt-6">
          <p className="text-gray-600 text-sm md:text-lg leading-relaxed">
            Stay updated with internships, roles, events, and opportunity alerts that help you explore learning, career exposure, and professional growth pathways.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left: Illustration */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img src={hiring} alt="Hiring Opportunities Illustration" className="w-full max-w-md lg:max-w-full h-auto" />
          </div>

          {/* Right: List */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            {OPPORTUNITIES.map(item => (
              <HiringFeatureBlock key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HiringOpportunities
