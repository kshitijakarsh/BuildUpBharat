import React from 'react'
import { Plus } from 'lucide-react'

export interface FeatureItem {
    id: number
    title: string
    description: string
}

interface FeatureBlockProps {
    item: FeatureItem
}

const FeatureBlock: React.FC<FeatureBlockProps> = ({ item }) => {
    return (
        <div className="relative flex flex-col items-start text-left group h-full p-3">
            {/* Icon & Title Row */}
            <div className="flex items-center gap-3 mb-3">
                <div
                    className={`w-10 h-10 bg-brand-orange rounded-lg flex items-center justify-center shadow-sm shrink-0`}
                >
                    <div className="text-white">
                        <Plus size={20} strokeWidth={3} />
                    </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
            </div>

            {/* Description */}
            <p className="text-gray-800 leading-relaxed text-sm font-normal mb-4">
                {item.description}
            </p>
        </div>
    )
}

export default FeatureBlock
