const StatItem = ({ value, label }: { value: string, label: string }) => (
    <div className="flex flex-col items-center">
        <h3 className="text-5xl md:text-6xl font-bold text-brand-highlight mb-2 tracking-tight">{value}</h3>
        <p className="text-gray-500 font-medium text-base">{label}</p>
    </div>
);

const SuccessStats = () => {
    return (
        <div className="mt-20 mb-20">
            <h2 className="text-4xl font-bold text-center text-brand-blue-text mb-16">
                Our <span className="text-brand-orange">Success !</span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
                <StatItem value="15K+" label="Students" />
                <StatItem value="95%" label="Total success" />
                <StatItem value="35" label="Universities" />
                <StatItem value="116K+" label="Opportunities" />
            </div>
        </div>
    );
};

export default SuccessStats;
