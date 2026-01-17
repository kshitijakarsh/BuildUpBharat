import { Link, useParams } from 'react-router-dom';
import { ChevronRight, ArrowLeft } from 'lucide-react';
import { mockCourses } from './CoursesPage';
import CourseContent from '../components/Courses/CourseContent';
import FAQSection from '../components/Tours/FAQSection';
import CourseHero from '../components/Courses/CourseHero';
import CourseStats from '../components/Courses/CourseStats';
import CourseHeader from '../components/Courses/CourseHeader';
import AboutCourse from '../components/Courses/AboutCourse';
import AboutPublisher from '../components/Courses/AboutPublisher';

const CourseDetailPage = () => {
    const { id } = useParams<{ id: string }>();
    const course = mockCourses.find(c => c.id === id);

    if (!course) {
        return (
            <div className="max-w-xl mx-auto py-20 text-center space-y-6">
                <div className="bg-red-50 text-red-600 p-6 rounded-3xl border border-red-100 italic font-medium">
                    Course not found
                </div>
                <Link to="/courses" className="inline-flex items-center gap-2 text-brand-blue font-bold hover:underline">
                    <ArrowLeft size={18} />
                    Back to all courses
                </Link>
            </div>
        );
    }

    return (
        <div className="pb-20">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
                <Link to="/courses" className="flex items-center gap-2 hover:text-brand-blue transition-colors">
                    <ArrowLeft size={16} />
                    Courses
                </Link>
                <ChevronRight size={14} />
                <span className="text-gray-800 font-medium truncate">{course.courseTitle}</span>
            </div>

            <CourseHero course={course} />

            <CourseStats />
            <CourseHeader />
            <AboutCourse />
            <CourseContent />
            <AboutPublisher />


            <div className='bg-brand-pale-blue/10'>
                <FAQSection />
            </div>
        </div>
    );
};

export default CourseDetailPage;
