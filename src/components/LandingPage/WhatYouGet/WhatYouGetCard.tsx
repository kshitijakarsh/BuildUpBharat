export interface WhatYouGetCardProps {
    title: string;
    description: string;
    imageSrc?: string;
}

const WhatYouGetCard = ({ title, description, imageSrc }: WhatYouGetCardProps) => {
    return (
        <article className="group relative mx-auto w-full max-w-4xl px-2 sm:px-0">
            <div className="flex flex-col items-center gap-3 sm:gap-4 overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl bg-brand-pale-blue p-4 sm:p-5 md:p-8 shadow-md transition-shadow duration-300 hover:shadow-lg lg:flex-row lg:gap-12 lg:p-10">
                <figure className="flex w-full shrink-0 items-center justify-center lg:w-2/5">
                    {imageSrc ? (
                        <img
                            src={imageSrc}
                            alt=""
                            className="h-auto max-h-[80px] sm:max-h-[100px] md:max-h-[160px] lg:max-h-[200px] w-auto object-contain"
                            loading="lazy"
                        />
                    ) : (
                        <div className="flex h-28 w-28 md:h-36 md:w-36 items-center justify-center rounded-xl bg-white/20 text-xs md:text-sm font-bold italic text-tours-blue/50">
                            No Image
                        </div>
                    )}
                </figure>

                <div className="flex w-full flex-col items-center text-center lg:w-3/5 lg:items-start lg:text-left">
                    <h3 className="mb-1 sm:mb-2 md:mb-4 text-base sm:text-lg md:text-xl lg:text-2xl font-extrabold text-brand-navy">
                        {title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg font-normal leading-relaxed text-gray-600">
                        {description}
                    </p>
                </div>
            </div>
        </article>
    );
};

export default WhatYouGetCard;
