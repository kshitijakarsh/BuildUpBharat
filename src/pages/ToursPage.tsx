import ToursHeader from "../components/Tours/ToursHeader";
import TourGrid from "../components/Tours/TourGrid";
import FAQSection from "../components/Tours/FAQSection";

const ToursPage = () => {
    return (
        <div className="space-y-12 pb-20">
            <ToursHeader />
            <TourGrid />
            <FAQSection />
        </div>
    );
};

export default ToursPage;
