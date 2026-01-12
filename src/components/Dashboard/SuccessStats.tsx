const StatItem = ({ value, label }: { value: string, label: string }) => (
    <div className="flex flex-col items-center">
        <h3 className="text-2xl md:text-6xl font-nunito font-medium bg-linear-to-r from-brand-blue to-brand-gray-light bg-clip-text text-transparent mb-1 md:mb-2 tracking-tight">{value}</h3>
        <p className="text-[10px] md:text-base text-gray-500 font-medium text-center leading-tight">{label}</p>
    </div>
);

const SuccessStats = () => {
    return (
        <div className="mt-12 md:mt-20">
            <h2 className="text-2xl md:text-4xl font-bold text-center text-brand-blue-text mb-8 md:mb-16">
                Our <span className="text-brand-orange">Success !</span>
            </h2>

            <div className="flex justify-between items-start md:grid md:grid-cols-4 md:gap-x-8 gap-y-12 px-2 md:px-0">
                <StatItem value="15K+" label="Students" />
                <StatItem value="95%" label="Total success" />
                <StatItem value="35" label="Universities" />
                <StatItem value="116K+" label="Opportunities" />
            </div>
        </div>
    );
};

export default SuccessStats;
