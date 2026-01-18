import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface FAQItemProps {
  question: string
  answer: string
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="w-full flex items-center justify-between group focus:outline-none py-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-4 text-left">
          <div
            className={`w-2.5 h-2.5 rounded-full transition-colors duration-200 ${isOpen ? 'bg-brand-orange' : 'bg-brand-purple-light'} shrink-0`}
          />
          <span
            className={`text-base md:text-lg transition-colors duration-200 ${isOpen ? 'text-brand-blue-text font-bold' : 'text-[#4F4F4F] font-medium'}`}
          >
            {question}
          </span>
        </div>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-400 group-hover:text-brand-purple-light transition-colors" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-brand-purple-light transition-colors" />
        )}
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
      >
        <div className="ml-10 text-[#666666] text-sm leading-relaxed font-nunito">{answer}</div>
      </div>
    </div>
  )
}

const FAQ_DATA = [
  {
    question: 'What kind of tours does Build Up Bharat offer?',
    answer:
      'Build Up Bharat organizes educational tours, industry visits, event-based exposure trips, and learning-focused outings that help students experience real-world environments beyond classrooms.',
  },
  {
    question: 'Who can participate in the tours?',
    answer:
      'Tours are open to registered Build Up Bharat members. Some tours may have specific eligibility criteria depending on the nature of the event, location, or learning objective.',
  },
  {
    question: 'Are the tours mandatory or optional?',
    answer:
      'All tours are completely optional. Students can choose to participate based on their interests, availability, and learning goals.',
  },
  {
    question: 'Is there an additional cost for tours?',
    answer:
      'Some tours may involve additional charges to cover travel, accommodation, or event fees. Complete details, including cost breakdowns, will be shared before registration.',
  },
  {
    question: 'How will I get updates about upcoming tours?',
    answer:
      'Members will receive updates about upcoming tours directly through the platform, dashboard notifications, and official communication channels.',
  },
]

interface FAQSectionProps {
  compact?: boolean
}

const ToursFAQ = ({ compact = false }: FAQSectionProps) => {
  const content = (
    <div className={compact ? 'space-y-0' : 'max-w-4xl'}>
      {FAQ_DATA.map((item, index) => (
        <FAQItem key={index} {...item} />
      ))}
    </div>
  )

  if (compact) {
    return content
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
      <div className="mb-12 flex items-center gap-4">
        <div className="w-1.5 h-10 bg-brand-blue rounded-full" />
        <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-text">
          Frequently Asked Questions
        </h2>
      </div>
      {content}
    </div>
  )
}

export default ToursFAQ
