import { useTours } from "../../hooks/useTours";
import TourCard from "./TourCard";

const TourGrid = () => {
    const { data: response, isLoading, isError, error } = useTours(1, 10);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-[400px]">
                <div className="w-12 h-12 border-4 border-brand-orange border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    if (isError) {
        return (
            <div className="text-center py-12">
                <p className="text-red-500 font-medium">Failed to load tours. Please try again later.</p>
                <p className="text-gray-400 text-sm mt-2">{(error as any)?.message}</p>
            </div>
        );
    }

    const tours = response?.data?.tours || [];

    if (tours.length === 0) {
        return (
            <div className="text-center py-12">
                <p className="text-gray-500 font-medium text-lg">No tours available at the moment.</p>
                <p className="text-gray-400">Check back later for exciting new journeys!</p>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                {tours.map((tour) => (
                    <TourCard
                        key={tour.id}
                        {...tour}
                        originalPrice={tour.price + 1000}
                    />
                ))}
            </div>
        </div>
    );
};

export default TourGrid;
