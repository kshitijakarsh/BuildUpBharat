export interface WhatYouGetCardProps {
    title: string;
    description: string;
    imageSrc?: string;
}

const WhatYouGetCard = ({ title, description, imageSrc }: WhatYouGetCardProps) => {
    return (
        <div className="flex gap-4 bg-brand-pale-blue rounded-2xl p-2">
            <img src={imageSrc} alt={title} className="" />
            <div className="flex flex-col flex-1 justify-center gap-4 p-4">
                <p className="text-4xl font-bold text-brand-navy">{title}</p>
                <p className="text-2xl font-normal text-neutral-800">{description}</p>
            </div>
        </div>
    );
};

export default WhatYouGetCard;
