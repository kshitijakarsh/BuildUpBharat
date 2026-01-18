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
        <div className="bg-white rounded-4xl p-6 shadow-md">
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
                        {description.split(' ').slice(0, 20).join(' ')}
                        {description.split(' ').length > 20 ? '...' : ''}
                    </p>
                </div>

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
                        <span className="text-[#333333] text-sm font-nunito">
                            Starts {new Date(startDate).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
                        </span>
                    </div>
                    <div className="flex items-center gap-3 text-brand-orange">
                        <Calendar className="w-5 h-5" />
                        <span className="text-[#333333] text-sm font-nunito">
                            Book by {new Date(bookingDeadline).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
                        </span>
                    </div>
                </div>

                <div className="pt-2 border-t border-gray-100 flex items-end justify-between">
                    <div className="flex items-baseline gap-2">
                        <span className="text-gray-400 line-through text-xs md:text-sm font-nunito">₹{originalPrice}</span>
                        <span className="text-2xl md:text-3xl font-bold text-brand-blue-text font-sans">₹{price}</span>
                    </div>
                </div>
                <Link
                    to={`/tours/${id}`}
                    className="flex justify-center items-center gap-1 text-[#666666] hover:text-brand-orange transition-colors duration-200"
                >
                    <span className="text-sm font-medium">See more</span>
                    <ArrowUpRight className="w-4 h-4" />
                </Link>
            </div>
        </div>
    );
};

export default TourCard;
