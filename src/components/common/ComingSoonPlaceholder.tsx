import { Lock } from 'lucide-react';

interface ComingSoonPlaceholderProps {
    title?: string;
    message?: string;
}

const ComingSoonPlaceholder = ({
    title = "Coming Soon",
    message = "We are working on adding new content."
}: ComingSoonPlaceholderProps) => {
    return (
        <div className="absolute inset-0 flex flex-col items-center justify-center backdrop-blur-md bg-white/40 z-10">
            <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center mb-4 text-brand-orange">
                <Lock size={32} />
            </div>
            <h3 className="text-xl font-bold text-brand-blue-text">{title}</h3>
            <p className="text-gray-500 font-medium text-sm mt-1">{message}</p>
        </div>
    );
};

export default ComingSoonPlaceholder;
