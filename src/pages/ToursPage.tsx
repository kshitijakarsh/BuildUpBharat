import ToursHeader from "../components/Tours/ToursHeader";
import TourGrid from "../components/Tours/TourGrid";
import ToursFAQ from "../components/Tours/ToursFAQ";

const ToursPage = () => {
    return (
        <div className="space-y-12 pb-20">
            <ToursHeader />
            <TourGrid />
            <ToursFAQ />
        </div>
    );
};

export default ToursPage;
