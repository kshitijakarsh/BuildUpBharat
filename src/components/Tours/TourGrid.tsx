import TourCard from "./TourCard";

const TOURS_DATA = [
    {
        id: "1",
        image: "https://images.unsplash.com/photo-1561059488-916d69792237?q=80&w=1000&auto=format&fit=crop",
        title: "Varanasi Cultural Heritage",
        description: "A deep dive into the spiritual capital of India.",
        duration: "8 Days and 5 Night",
        location: "Varanasi, Uttar Pradesh 221002",
        startDate: "22 August 2026",
        bookingDeadline: "20 August 2026",
        price: 7200,
        originalPrice: 8500
    },
    {
        id: "2",
        image: "https://images.unsplash.com/photo-1561059488-916d69792237?q=80&w=1000&auto=format&fit=crop",
        title: "Varanasi Cultural Heritage",
        description: "A deep dive into the spiritual capital of India.",
        duration: "8 Days and 5 Night",
        location: "Varanasi, Uttar Pradesh 221002",
        startDate: "22 August 2026",
        bookingDeadline: "20 August 2026",
        price: 7200,
        originalPrice: 8500
    },
    {
        id: "3",
        image: "https://images.unsplash.com/photo-1561059488-916d69792237?q=80&w=1000&auto=format&fit=crop",
        title: "Varanasi Cultural Heritage",
        description: "A deep dive into the spiritual capital of India.",
        duration: "8 Days and 5 Night",
        location: "Varanasi, Uttar Pradesh 221002",
        startDate: "22 August 2026",
        bookingDeadline: "20 August 2026",
        price: 7200,
        originalPrice: 8500
    },
    {
        id: "4",
        image: "https://images.unsplash.com/photo-1561059488-916d69792237?q=80&w=1000&auto=format&fit=crop",
        title: "Varanasi Cultural Heritage",
        description: "A deep dive into the spiritual capital of India.",
        duration: "8 Days and 5 Night",
        location: "Varanasi, Uttar Pradesh 221002",
        startDate: "22 August 2026",
        bookingDeadline: "20 August 2026",
        price: 7200,
        originalPrice: 8500
    },
    {
        id: "5",
        image: "https://images.unsplash.com/photo-1561059488-916d69792237?q=80&w=1000&auto=format&fit=crop",
        title: "Varanasi Cultural Heritage",
        description: "A deep dive into the spiritual capital of India.",
        duration: "8 Days and 5 Night",
        location: "Varanasi, Uttar Pradesh 221002",
        startDate: "22 August 2026",
        bookingDeadline: "20 August 2026",
        price: 7200,
        originalPrice: 8500
    },
    {
        id: "6",
        image: "https://images.unsplash.com/photo-1561059488-916d69792237?q=80&w=1000&auto=format&fit=crop",
        title: "Varanasi Cultural Heritage",
        description: "A deep dive into the spiritual capital of India.",
        duration: "8 Days and 5 Night",
        location: "Varanasi, Uttar Pradesh 221002",
        startDate: "22 August 2026",
        bookingDeadline: "20 August 2026",
        price: 7200,
        originalPrice: 8500
    },
];

const TourGrid = () => {
    return (
        <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                {TOURS_DATA.map((tour) => (
                    <TourCard key={tour.id} {...tour} />
                ))}
            </div>
        </div>
    );
};

export default TourGrid;
