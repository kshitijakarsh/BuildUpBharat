import CourseCard from "../components/Courses/CourseCard";
import mock_course from "@/assets/mock_course.jpg";
import Tabs from "../components/Courses/Tabs";
import { Search } from "lucide-react";
import courses from '@/assets/courses.svg'

interface CourseCardProps {
    courseImage: string;
    courseTitle: string;
    bestSeller: boolean;
    author: string;
    description: string;
    rating: number;
    ratedBy: number;
    discount: number;
}

export const mockCourses: CourseCardProps[] = [
    {
        courseImage: mock_course,
        courseTitle: "Adobe Illustrator Scratch Course",
        bestSeller: true,
        author: "Kitani Studio",
        description:
            "Learn Adobe Illustrator from scratch and master professional design workflows with real-world projects.",
        rating: 4.8,
        ratedBy: 1280,
        discount: 10,
    },
    {
        courseImage: mock_course,
        courseTitle: "UI Design Fundamentals with Figma",
        bestSeller: false,
        author: "DesignHub",
        description:
            "Understand core UI principles, spacing, typography, and color systems using Figma.",
        rating: 4.5,
        ratedBy: 860,
        discount: 20,
    },
    {
        courseImage: mock_course,
        courseTitle: "Advanced React & Component Patterns",
        bestSeller: true,
        author: "Frontend Masters",
        description:
            "Build scalable React applications using modern hooks, patterns, and performance techniques.",
        rating: 4.9,
        ratedBy: 2140,
        discount: 15,
    },
    {
        courseImage: mock_course,
        courseTitle: "Complete Tailwind CSS Mastery",
        bestSeller: false,
        author: "CSS Ninja",
        description:
            "Design responsive, accessible, and maintainable UI using Tailwind CSS and best practices.",
        rating: 4.6,
        ratedBy: 940,
        discount: 0,
    },
    {
        courseImage: mock_course,
        courseTitle: "Next.js App Router Deep Dive",
        bestSeller: true,
        author: "Vercel Labs",
        description:
            "Master the Next.js App Router, server components, data fetching, and deployment strategies.",
        rating: 4.8,
        ratedBy: 1560,
        discount: 25,
    },
];


export default function CoursesPage() {
    return (
        <div className="flex flex-col gap-4">
            <div className="bg-brand-course-blue grid grid-cols-2 rounded-2xl">
                <div className="flex flex-col justify-center px-6 gap-4">
                    <p className="text-5xl font-semibold text-white">Learn something new everyday.</p>
                    <p className="text-white text-lg">Access structured learning, live sessions, and certificates inside Build Up Bharat.</p>

                    <button className="bg-white text-brand-accent-blue px-6 py-2 rounded-full w-56">Browse Courses</button>
                </div>
                <div className="h-full flex items-center justify-center">
                    <img src={courses} alt="Course Image" className="rounded-2xl h-96 w-full object-cover" />
                </div>
            </div>
            <div className="w-full flex justify-center">
                <div className="hidden md:flex flex-1 max-w-2xl items-center relative group">
                    <input
                        type="text"
                        placeholder="Search of courses..."
                        className="w-full bg-[#F2F2F2] border-none rounded-full py-2.5 px-6 pr-12 text-sm text-gray-600 placeholder:text-gray-400 focus:ring-1 focus:ring-brand-blue/20 outline-none transition-all group-hover:bg-[#EBEBEB]"
                    />
                    <Search className="absolute right-5 w-5 h-5 text-gray-400 group-hover:text-gray-500 transition-colors" />
                </div>
            </div>
            <Tabs />
            <div className="flex flex-col mb-4">
                <p className="text-lg font-semibold">Trending Course</p>
                <p className="text-sm text-gray-500 leading-3">We know the best things for You.  Top picks for You.</p>
            </div>

            <div className="grid grid-cols-3 gap-4">
                {mockCourses.map((course, index) => (
                    <CourseCard key={index} {...course} />
                ))}
            </div>
        </div >
    );
}
