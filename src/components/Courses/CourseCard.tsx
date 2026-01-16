import { User, Star, MoveUpRight } from 'lucide-react';

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



export default function CourseCard({ courseImage, courseTitle, bestSeller, author, description, rating, ratedBy, discount }: CourseCardProps) {
    return (
        <div className='flex flex-col gap-2'>
            <div className='relative rounded-2xl border border-black'>
                <img src={courseImage} alt="Course Card" className='rounded-2xl' />
                <div className='absolute top-2 left-2 flex gap-2'>
                    {bestSeller && <div id='seller-tag' className='bg-[#3DCBB1] font-bold text-white p-1 rounded-full text-xs'>
                        Best Seller
                    </div>}
                    <div id='discount-tag' className='bg-[#A04AE3] font-bold text-white p-1 rounded-full text-xs'>
                        {discount}% Off
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <h3 className="text-sm font-semibold leading-snug">
                    {courseTitle}
                </h3>

                <div className="flex items-center gap-1 text-sm">
                    <User size={14} />
                    <span className="text-[#3DCBB1] font-medium">
                        {author}
                    </span>
                </div>

                <p className="text-xs text-muted-foreground line-clamp-2">
                    {description}
                </p>

                <div className="mt-1 flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <Star
                            key={index}
                            size={14}
                            className={
                                index < Math.floor(rating)
                                    ? "fill-yellow-500 text-yellow-500"
                                    : "text-gray-300"
                            }
                        />
                    ))}

                    <span className="ml-1 text-xs text-muted-foreground">
                        ({ratedBy})
                    </span>
                </div>
            </div>

            <div className='w-full h-px bg-gray-400' />
            <div className='flex justify-between items-center px-2 hover:text-brand-blue'>
                <h1>View Course</h1>
                <MoveUpRight size={16}/>
            </div>
        </div>
    );
}