import { Star, Award, GraduationCap, PlayCircle, CheckCircle } from "lucide-react";

export default function AboutPublisher() {
    return (
        <div className="px-4 md:px-36 py-12">
            <div className="flex items-center gap-2 mb-8">
                <div className="bg-brand-navy w-12 h-1 rounded-full" />
                <p className="text-brand-navy font-bold uppercase tracking-wider text-sm">About Publisher</p>
            </div>

            <div className="grid md:grid-cols-12 gap-8 md:gap-16">
                {/* Left Column: Image & Stats */}
                <div className="md:col-span-4 lg:col-span-3 flex flex-col gap-6">
                    <img
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                        alt="Anudeep Ayyagari"
                        className="w-full aspect-square object-cover rounded-xl shadow-sm"
                    />

                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <Star className="text-brand-orange fill-brand-orange shrink-0" size={20} />
                            <div className="text-sm">
                                <span className="font-bold text-gray-900">4.5</span>
                                <span className="text-gray-600 ml-1">Instructor Rating</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <Award className="text-brand-orange shrink-0" size={20} />
                            <div className="text-sm">
                                <span className="font-bold text-gray-900">28,707</span>
                                <span className="text-gray-600 ml-1">Reviews</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <GraduationCap className="text-brand-orange shrink-0" size={20} />
                            <div className="text-sm">
                                <span className="font-bold text-gray-900">155,242</span>
                                <span className="text-gray-600 ml-1">Students</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <PlayCircle className="text-brand-orange shrink-0" size={20} />
                            <div className="text-sm">
                                <span className="font-bold text-gray-900">8</span>
                                <span className="text-gray-600 ml-1">Courses</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Bio */}
                <div className="md:col-span-8 lg:col-span-9">
                    <div className="flex items-center gap-3 mb-2">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Anudeep Ayyagari</h2>
                        <CheckCircle className="text-green-500 fill-green-500/10" size={28} />
                    </div>
                    <p className="text-gray-500 text-lg mb-8">
                        29-year UX + Design Veteran; Consultant, Author & Speaker
                    </p>

                    <div className="relative">
                        <div className="space-y-6 text-gray-600 leading-relaxed text-base">
                            <p>
                                Joe Natoli has launched five successful online courses with Udemy on the topics of User Experience (UX) and User Interface (UI) Design, with more than 180,000+ students enrolled to date.
                            </p>
                            <p>
                                Joe has been preaching and practicing the gospel of User Experience (UX) to Fortune 100, 500 and Government organizations for nearly three decades. That work includes commercial industry leaders like Google Ventures, Kroll/Duff + Phelps, Broadridge, Conde Nast, Johns Hopkins, Mettler-Toledo, PHH Arval, SC Johnson and Wolters Kluwer, as well as government agencies like the National Science Foundation, National Institutes of Health and the Dept. of Homeland Security.
                            </p>
                        </div>

                        <div className="absolute bottom-0 w-full h-24 bg-linear-to-t from-brand-gray-bg to-white/0 pt-16 flex items-end">
                            <button className="text-brand-blue font-bold hover:underline cursor-pointer">Read More...</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
