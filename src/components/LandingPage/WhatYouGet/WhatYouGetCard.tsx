export interface WhatYouGetCardProps {
    title: string;
    description: string;
    imageSrc?: string;
}

const WhatYouGetCard = ({ title, description, imageSrc }: WhatYouGetCardProps) => {
    return (
        <article className="group relative mx-auto w-full max-w-4xl px-2 sm:px-0">
            <div className="flex flex-row items-center gap-3 sm:gap-4 lg:gap-12 overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl bg-brand-pale-blue p-3 sm:p-5 md:p-8 lg:p-10 shadow-md transition-shadow duration-300 hover:shadow-lg">
                <figure className="flex w-1/3 lg:w-2/5 shrink-0 items-center justify-center">
                    {imageSrc ? (
                        <img
                            src={imageSrc}
                            alt=""
                            className="h-auto max-h-[60px] sm:max-h-[100px] md:max-h-[160px] lg:max-h-[200px] w-auto object-contain"
                            loading="lazy"
                        />
                    ) : (
                        <div className="flex h-16 w-16 sm:h-20 sm:w-20 md:h-36 md:w-36 items-center justify-center rounded-xl bg-white/20 text-[10px] md:text-sm font-bold italic text-tours-blue/50">
                            No Image
                        </div>
                    )}
                </figure>

                <div className="flex w-2/3 lg:w-3/5 flex-col items-start text-left">
                    <h3 className="mb-1 sm:mb-2 md:mb-4 text-sm sm:text-lg md:text-xl lg:text-2xl font-extrabold text-brand-navy">
                        {title}
                    </h3>
                    <p className="text-[10px] sm:text-sm md:text-base lg:text-lg font-normal leading-relaxed text-gray-600">
                        {description}
                    </p>
                </div>
            </div>
        </article>
    );
};

export default WhatYouGetCard;
