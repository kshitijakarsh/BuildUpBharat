import React from 'react'
import { Star } from 'lucide-react'

export interface TestimonialItem {
    id: number
    name: string
    role: string
    image: string
    rating: number
    title: string
    quote: string
}

interface FeedbackCardProps {
    item: TestimonialItem
    isActive?: boolean
}

const MAX_RATING = 5

const FeedbackCard: React.FC<FeedbackCardProps> = ({
    item,
    isActive = false,
}) => {
    return (
        <div
            className={`relative bg-white rounded-3xl p-6 md:p-8 min-h-[280px] md:min-h-[320px] mx-2 md:mx-4 shadow-md flex flex-col transition-all duration-300 ${isActive ? '' : 'shadow-sm border-gray-100'
                }`}
        >
            {/* Header */}
            <div className="flex items-center gap-4">
                <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover"
                />

                <div>
                    <h4 className="text-base md:text-lg font-bold text-gray-900">{item.name}</h4>
                    <span className="text-xs font-medium uppercase tracking-wide text-brand-orange">
                        — {item.role}
                    </span>

                    <div className="flex gap-1 mt-1">
                        {Array.from({ length: MAX_RATING }).map((_, i) => {
                            const isFilled = i < item.rating
                            return (
                                <Star
                                    key={i}
                                    size={12}
                                    className={
                                        isFilled
                                            ? 'fill-orange-400 text-orange-400'
                                            : 'fill-gray-200 text-gray-200'
                                    }
                                />
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="mt-6 space-y-3">
                <h3 className="text-base md:text-lg font-bold text-gray-900">
                    {item.title}
                </h3>

                <p className="text-xs md:text-sm font-light leading-relaxed text-gray-600">
                    {item.quote}
                </p>
            </div>
        </div>
    )
}

export default FeedbackCard
