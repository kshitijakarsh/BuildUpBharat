import type { User } from "../lib/api/users";

export interface SectionStatus {
    name: string;
    isComplete: boolean;
    filledFields: number;
    totalFields: number;
    percentage: number;
}

export interface ProfileCompletion {
    overallPercentage: number;
    sections: SectionStatus[];
    nextIncompleteSection: string | null;
}

export const calculateProfileCompletion = (user?: User): ProfileCompletion => {
    if (!user) {
        return {
            overallPercentage: 0,
            sections: [],
            nextIncompleteSection: null
        };
    }

    const sections: SectionStatus[] = [
        {
            name: "Account Details",
            ...calculateSectionProgress([
                user.fullName,
                user.mobileNumber
            ])
        },
        {
            name: "Education Details",
            ...calculateSectionProgress([
                user.degree,
                user.course,
                user.graduationYear?.toString() || user.yearOfGraduation,
                user.studentId
            ])
        },
        {
            name: "Location Details",
            ...calculateSectionProgress([
                user.country,
                user.state,
                user.city,
                user.pinCode,
                user.fullAddress
            ])
        }
    ];

    const totalPercentage = sections.reduce((acc, section) => acc + section.percentage, 0);
    const overallPercentage = Math.round(totalPercentage / sections.length);

    const nextIncompleteSection = sections.find(s => !s.isComplete)?.name || null;

    return {
        overallPercentage,
        sections,
        nextIncompleteSection
    };
};

const calculateSectionProgress = (values: (string | number | undefined | null)[]) => {
    // Filter out fields that are null, undefined, "-", empty string
    const filledFields = values.filter(v => v && v !== "-" && v.toString().trim() !== "").length;
    const totalFields = values.length;
    const percentage = sizeToPercentage(filledFields, totalFields);

    return {
        isComplete: percentage === 100,
        filledFields,
        totalFields,
        percentage
    };
};

const sizeToPercentage = (part: number, total: number) => {
    if (total === 0) return 0;
    return Math.round((part / total) * 100);
};
