import { Heart } from 'lucide-react';
import Button from '../common/Button';
import DotsPattern from './DotsPattern';


interface CourseHeroProps {
    course: {
        courseTitle: string;
        description: string;
        rating: number;
        ratedBy: number;
        author: string;
        courseImage: string;
    }
}

const CourseHero = ({ course }: CourseHeroProps) => {
    return (
        <div className='relative grid grid-cols-2 gap-4 bg-[#111B38] px-36 py-24 overflow-hidden'>
            <DotsPattern className="absolute top-12 left-24" />
            <DotsPattern className="absolute bottom-22 right-24 rotate-180" />
            <div className="text-white flex flex-col gap-3 max-w-xl">
                {/* Badge / meta */}
                <p className="text-xs uppercase tracking-wide text-white/80">
                    Most Subscribed
                </p>

                {/* Title */}
                <h1 className="text-2xl font-semibold leading-snug">
                    {course.courseTitle}
                </h1>

                {/* Description */}
                <p className="text-sm text-white/80">
                    {course.description}
                </p>

                {/* Rating + Author */}
                <p className="text-xs text-white/70">
                    {course.rating} ({course.ratedBy}) · Published by{" "}
                    <span className="underline cursor-pointer hover:text-white">
                        {course.author}
                    </span>
                </p>

                {/* Actions */}
                <div className="flex gap-3 pt-2">
                    <Button variant="outline" className="flex items-center gap-2">
                        <Heart size={16} />
                        Wishlist
                    </Button>

                    <Button className="px-6">
                        Watch Live
                    </Button>
                </div>
            </div>

            <div className="relative group w-fit">
                <img
                    src={course.courseImage}
                    alt="Course Image"
                    className="block"
                />

                <button
                    className="
      absolute top-1/2 left-1/2
      -translate-x-1/2 -translate-y-1/2
      opacity-0 group-hover:opacity-100
      transition-opacity duration-300
      flex items-center justify-center
      bg-black/60 text-white
      px-4 py-2 rounded-md
    "
                >
                    Watch Demo
                </button>
            </div>

        </div>
    );
};

export default CourseHero;
