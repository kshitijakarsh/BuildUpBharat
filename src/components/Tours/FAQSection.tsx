import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItemProps {
    question: string;
    answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200 py-4">
            <button
                className="w-full flex items-center justify-between group focus:outline-none py-2"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex items-center gap-4 text-left">
                    <div className={`w-2.5 h-2.5 rounded-full transition-colors duration-200 ${isOpen ? 'bg-brand-orange' : 'bg-brand-purple-light'} shrink-0`} />
                    <span className={`text-base md:text-lg transition-colors duration-200 ${isOpen ? 'text-brand-blue-text font-bold' : 'text-[#4F4F4F] font-medium'}`}>
                        {question}
                    </span>
                </div>
                {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-gray-400 group-hover:text-brand-purple-light transition-colors" />
                ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-brand-purple-light transition-colors" />
                )}
            </button>

            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                <div className="ml-10 text-[#666666] text-sm leading-relaxed font-nunito">
                    {answer}
                </div>
            </div>
        </div>
    );
};

const FAQ_DATA = [
    {
        question: "What types of courses are included in the program?",
        answer: "Our program includes a diverse range of educational journeys focused on cultural immersion, leadership development, and hands-on experience in historical and spiritual locations across India."
    },
    {
        question: "How do I join a live class?",
        answer: "Once you book a tour, you will receive login credentials to our platform where you can access live sessions, schedules, and preparatory materials."
    },
    {
        question: "Will I be able to access recorded sessions if I miss a live class?",
        answer: "Yes, all our live educational sessions are recorded and made available to participants through their personalized dashboard for future reference."
    },
    {
        question: "Are the courses suitable for beginners or only advanced entrepreneurs?",
        answer: "The courses are designed for all experience levels — from early-stage entrepreneurs and students to founders looking to enhance their skills."
    },
    {
        question: "Do I receive a certificate after completing a course?",
        answer: "Yes, every participant who successfully completes the educational journey receives a certificate from BuildUp Bharat, recognizing their participation and learning."
    }
];

const FAQSection = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
            <div className="mb-12 flex items-center gap-4">
                <div className="w-1.5 h-10 bg-brand-blue rounded-full" />
                <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-text">
                    Frequently Asked Questions
                </h2>
            </div>

            <div className="max-w-4xl">
                {FAQ_DATA.map((item, index) => (
                    <FAQItem key={index} {...item} />
                ))}
            </div>
        </div>
    );
};

export default FAQSection;
