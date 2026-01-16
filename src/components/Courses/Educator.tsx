interface EducatorProps {
    educatorImage: string;
    educatorName: string;
    educatorExpertise: string;
}

export default function EducatorCard({ educatorImage, educatorName, educatorExpertise }: EducatorProps) {
    return (
        <div className="flex flex-col w-2xs overflow-hidden rounded-2xl bg-gray-200">
            {/* Image */}
            <img
                src={educatorImage}
                alt={educatorName}
                className="h-48 w-2xs object-cover"
            />

            {/* Content */}
            <div className="flex flex-col items-center gap-1 bg-muted p-3">
                <p className="text-sm font-semibold text-foreground">
                    {educatorName}
                </p>

                <p className="text-xs text-muted-foreground">
                    {educatorExpertise}
                </p>
            </div>
        </div>

    );
}