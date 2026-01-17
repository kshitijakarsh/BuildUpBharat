
const courseStats = [
    {
        title: "Hours of Course",
        value: "24+"
    },
    {
        title: "Total Assignments",
        value: "18+"
    },
    {
        title: "Video Lessons",
        value: "20+"
    },
    {
        title: "Students Enrolled",
        value: "4312+"
    },
]

const CourseStats = () => {
    return (
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 px-4 md:px-36 py-12'>
            {courseStats.map((stat, index) => {
                return (
                    <div key={index} className="flex flex-col gap-2">
                        <p className='text-brand-orange text-5xl font-bold'>
                            {stat.value}
                        </p>
                        <p className='text-gray-600 font-medium text-lg'>{stat.title}</p>
                    </div>
                )
            })}
        </div>
    );
};

export default CourseStats;
