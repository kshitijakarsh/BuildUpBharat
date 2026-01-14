import { Clock, MapPin, Calendar, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

interface TourCardProps {
    id: string;
    image: string;
    title: string;
    description: string;
    duration: string;
    location: string;
    startDate: string;
    bookingDeadline: string;
    price: number;
    originalPrice: number;
}

const TourCard = ({
    id,
    image,
    title,
    description,
    duration,
    location,
    startDate,
    bookingDeadline,
    price,
    originalPrice
}: TourCardProps) => {
    return (
        <div className="bg-white rounded-[40px] p-6 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:-translate-y-2">
            {/* Image Container with orange border glow */}
            <div className="relative rounded-[32px] overflow-hidden mb-6 p-1 bg-[#FFB16933]">
                <div className="rounded-[28px] overflow-hidden border-2 border-brand-orange-light/20">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-48 object-cover"
                    />
                </div>
            </div>

            <div className="space-y-4">
                <div>
                    <h3 className="text-2xl font-bold text-[#1E1E1E] mb-1 font-sans">
                        {title}
                    </h3>
                    <p className="text-[#666666] text-sm font-nunito leading-relaxed">
                        {description}
                    </p>
                </div>

                {/* Details List */}
                <div className="space-y-3">
                    <div className="flex items-center gap-3 text-brand-orange">
                        <Clock className="w-5 h-5" />
                        <span className="text-[#333333] text-sm font-nunito">{duration}</span>
                    </div>
                    <div className="flex items-center gap-3 text-brand-orange">
                        <MapPin className="w-5 h-5" />
                        <span className="text-[#333333] text-sm font-nunito">{location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-brand-orange">
                        <Calendar className="w-5 h-5" />
                        <span className="text-[#333333] text-sm font-nunito">Starts {startDate}</span>
                    </div>
                    <div className="flex items-center gap-3 text-brand-orange">
                        <Calendar className="w-5 h-5" />
                        <span className="text-[#333333] text-sm font-nunito">Book by {bookingDeadline}</span>
                    </div>
                </div>

                <div className="pt-2 border-t border-gray-100 flex items-end justify-between">
                    <div className="flex items-baseline gap-2">
                        <span className="text-gray-400 line-through text-xs md:text-sm font-nunito">₹{originalPrice}</span>
                        <span className="text-2xl md:text-3xl font-bold text-brand-blue-text font-sans">₹{price}</span>
                    </div>
                    <Link
                        to={`/tours/${id}`}
                        className="flex items-center gap-1 text-[#666666] hover:text-brand-orange transition-colors duration-200"
                    >
                        <span className="text-sm font-medium">See more</span>
                        <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TourCard;
