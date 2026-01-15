import { useState, useEffect } from "react";
import { GraduationCap, BookOpen, Briefcase, Calendar, Contact2, Save, Loader2 } from "lucide-react";
import Button from "../common/Button";
import { useProfile } from "../../hooks/useAuth";
import { useUpdateUser } from "../../hooks/useUsers";

const EducationDetailsForm = () => {
    const { data: response, isLoading: isProfileLoading } = useProfile();
    const updateUserMutation = useUpdateUser();
    const profile = response?.data;

    const [level, setLevel] = useState("-");
    const [degree, setDegree] = useState("-");
    const [course, setCourse] = useState("-");
    const [year, setYear] = useState("-");
    const [studentId, setStudentId] = useState("-");
    const [successMessage, setSuccessMessage] = useState("");

    useEffect(() => {
        if (profile) {
            setLevel(""); // 'level' is not present in the new flat structure or Postman, defaulting to empty or removing if unused
            setDegree(profile.degree || "-");
            setCourse(profile.course || "-");
            setYear(profile.graduationYear?.toString() || profile.yearOfGraduation || "-");
            setStudentId(profile.studentId || "-");
        }
    }, [profile]);

    const handleSave = () => {
        if (!profile) return;

        updateUserMutation.mutate(
            {
                id: profile._id || profile.id!,
                data: {
                    degree: degree === "-" ? "" : degree,
                    course: course === "-" ? "" : course,
                    graduationYear: year === "-" ? undefined : Number(year),
                    studentId: studentId === "-" ? "" : studentId,
                }
            },
            {
                onSuccess: () => {
                    setSuccessMessage("Education details updated successfully!");
                    setTimeout(() => setSuccessMessage(""), 3000);
                }
            }
        );
    };

    if (isProfileLoading) {
        return (
            <div className="flex-1 bg-white rounded-[2.5rem] border border-gray-100 p-8 md:p-12 shadow-sm flex items-center justify-center min-h-[400px]">
                <Loader2 className="w-10 h-10 text-brand-blue animate-spin" />
            </div>
        );
    }

    return (
        <div className="flex-1 bg-white rounded-[2.5rem] border border-gray-100 p-8 md:p-12 shadow-sm relative overflow-hidden">
            {/* Background Decorative Icon */}
            <div className="absolute right-10 top-6 opacity-[0.03] pointer-events-none">
                <GraduationCap size={120} className="text-gray-900" />
            </div>

            <div className="flex justify-between items-start mb-10 relative z-10">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Education Details</h2>
                    <p className="text-gray-500 font-medium">Update your profile to stay relevant in the Indian ecosystem.</p>
                </div>
            </div>

            {successMessage && (
                <div className="mb-6 p-4 bg-green-50 border border-green-100 text-green-600 rounded-2xl font-medium animate-in fade-in slide-in-from-top-2 relative z-10">
                    {successMessage}
                </div>
            )}

            <div className="space-y-8 relative z-10">
                {/* Education Level / University */}
                <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider ml-1">Education Level</label>
                    <div className="relative group">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand-blue-start transition-colors">
                            <GraduationCap size={20} />
                        </div>
                        <input
                            type="text"
                            value={level}
                            onChange={(e) => setLevel(e.target.value)}
                            className="w-full bg-white border border-[#2D3AE4]/30 rounded-full py-3.5 pl-12 pr-4 text-gray-700 font-medium focus:ring-1 focus:ring-brand-blue-start/20 focus:border-brand-blue-start outline-none transition-all shadow-sm"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                    {/* Degree */}
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-700 uppercase tracking-wider ml-1">Degree</label>
                        <div className="relative group">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand-blue-start transition-colors">
                                <BookOpen size={20} />
                            </div>
                            <input
                                type="text"
                                value={degree}
                                onChange={(e) => setDegree(e.target.value)}
                                className="w-full bg-white border border-[#2D3AE4]/30 rounded-full py-3.5 pl-12 pr-4 text-gray-700 font-medium focus:ring-1 focus:ring-brand-blue-start/20 focus:border-brand-blue-start outline-none transition-all shadow-sm"
                            />
                        </div>
                    </div>

                    {/* Course / Stream */}
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-700 uppercase tracking-wider ml-1">Course / Stream</label>
                        <div className="relative group">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand-blue-start transition-colors">
                                <Briefcase size={20} />
                            </div>
                            <input
                                type="text"
                                value={course}
                                onChange={(e) => setCourse(e.target.value)}
                                className="w-full bg-white border border-[#2D3AE4]/30 rounded-full py-3.5 pl-12 pr-4 text-gray-700 font-medium focus:ring-1 focus:ring-brand-blue-start/20 focus:border-brand-blue-start outline-none transition-all shadow-sm"
                            />
                        </div>
                    </div>

                    {/* Year of Graduation */}
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-700 uppercase tracking-wider ml-1">Year of Graduation</label>
                        <div className="relative group">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand-blue-start transition-colors">
                                <Calendar size={20} />
                            </div>
                            <input
                                type="text"
                                value={year}
                                onChange={(e) => setYear(e.target.value)}
                                className="w-full bg-white border border-[#2D3AE4]/30 rounded-full py-3.5 pl-12 pr-4 text-gray-700 font-medium focus:ring-1 focus:ring-brand-blue-start/20 focus:border-brand-blue-start outline-none transition-all shadow-sm"
                            />
                        </div>
                    </div>

                    {/* Student ID */}
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-700 uppercase tracking-wider ml-1">Student ID</label>
                        <div className="relative group">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand-blue-start transition-colors">
                                <Contact2 size={20} />
                            </div>
                            <input
                                type="text"
                                value={studentId}
                                onChange={(e) => setStudentId(e.target.value)}
                                className="w-full bg-white border border-[#2D3AE4]/30 rounded-full py-3.5 pl-12 pr-4 text-gray-700 font-medium focus:ring-1 focus:ring-brand-blue-start/20 focus:border-brand-blue-start outline-none transition-all shadow-sm"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-12 flex justify-end relative z-10">
                <Button
                    onClick={handleSave}
                    disabled={updateUserMutation.isPending}
                    variant="primary"
                    className="bg-[#2D3AE4] hover:bg-blue-700 px-8 py-3.5 flex items-center gap-3 shadow-lg shadow-blue-100 disabled:opacity-70"
                >
                    {updateUserMutation.isPending ? (
                        <Loader2 size={20} className="animate-spin" />
                    ) : (
                        <Save size={20} />
                    )}
                    {updateUserMutation.isPending ? "Saving..." : "Save Changes"}
                </Button>
            </div>
        </div>
    );
};

export default EducationDetailsForm;
