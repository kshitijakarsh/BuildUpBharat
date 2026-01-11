import React, { useState } from 'react'
import { Mail, Lock, Eye, EyeOff, ArrowLeft, User, Phone } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import Button from '../components/common/Button'

const registerSchema = z
    .object({
        fullName: z.string().min(2, 'Full Name must be at least 2 characters'),
        email: z.string().email('Please enter a valid email address'),
        mobile: z.string().regex(/^\d{10}$/, 'Please enter a valid 10-digit mobile number'),
        password: z.string().min(6, 'Password must be at least 6 characters'),
        confirmPassword: z.string(),
    })
    .refine(data => data.password === data.confirmPassword, {
        message: "Passwords don't match",
        path: ['confirmPassword'],
    })

type RegisterFormValues = z.infer<typeof registerSchema>

const RegisterPage: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<RegisterFormValues>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            fullName: '',
            email: '',
            mobile: '',
            password: '',
            confirmPassword: '',
        },
    })

    const onSubmit = async (_data: RegisterFormValues) => {
        // TODO: Implement actual registration logic
        await new Promise(resolve => setTimeout(resolve, 1000))
        navigate('/')
    }

    return (
        <div className="flex min-h-screen bg-white font-sans">
            <div className="hidden lg:flex lg:w-[45%] bg-tours-blue relative overflow-hidden rounded-r-[100px] items-center justify-center p-16 order-1">
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center text-white absolute top-8 left-8"
                >
                    <ArrowLeft size={18} className="mr-1" />
                    <span className="font-semibold text-sm border-b-2 border-dotted border-white pb-0.5">
                        Back
                    </span>
                </button>

                <div className="text-center text-white max-w-lg z-10">
                    <h2 className="text-5xl font-extrabold mb-8">Welcome Back!</h2>
                    <p className="text-xl mb-12 leading-relaxed">
                        To keep connected with us please login with your credentials
                    </p>
                    <Button
                        variant="outline"
                        onClick={() => navigate('/login')}
                        className="px-16! py-3! rounded-3xl! border-2! border-white! text-white! font-bold! hover:bg-white! hover:text-tours-blue!"
                    >
                        Login
                    </Button>
                </div>
            </div>

            {/* Right Side - Form */}
            <div className="flex flex-col w-full lg:w-[55%] p-8 lg:p-12 relative order-2 overflow-y-auto">
                <div className="flex-1 flex flex-col justify-center max-w-lg mx-auto w-full">
                    <h1 className="text-4xl font-bold text-brand-blue-end mb-10 text-center">
                        Create Account
                    </h1>

                    <form onSubmit={handleSubmit(onSubmit)} className="mb-6">
                        <h2 className="text-tours-blue font-semibold mb-6 flex justify-center">
                            Account Details
                        </h2>

                        <div className="space-y-4">
                            {/* Full Name */}
                            <div className="space-y-1">
                                <label className="text-sm font-normal text-slate-700 block">Full Name</label>
                                <div className="relative flex items-center">
                                    <div className="absolute left-0 top-0 bottom-0 w-12 bg-tours-blue rounded-l-3xl flex items-center justify-center text-white">
                                        <User size={20} />
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Enter your Full name"
                                        {...register('fullName')}
                                        className={`w-full pl-16 pr-4 py-2.5 rounded-3xl border ${errors.fullName ? 'border-red-500' : 'border-slate-300'
                                            } focus:outline-none focus:ring-2 focus:ring-tours-blue transition-all`}
                                    />
                                </div>
                                {errors.fullName && (
                                    <p className="text-red-500 text-xs ml-2">{errors.fullName.message}</p>
                                )}
                            </div>

                            {/* Email */}
                            <div className="space-y-1">
                                <label className="text-sm font-normal text-slate-700 block">Email Address</label>
                                <div className="relative flex items-center">
                                    <div className="absolute left-0 top-0 bottom-0 w-12 bg-tours-blue rounded-l-3xl flex items-center justify-center text-white">
                                        <Mail size={20} />
                                    </div>
                                    <input
                                        type="email"
                                        placeholder="Enter your Email"
                                        {...register('email')}
                                        className={`w-full pl-16 pr-4 py-2.5 rounded-3xl border ${errors.email ? 'border-red-500' : 'border-slate-300'
                                            } focus:outline-none focus:ring-2 focus:ring-tours-blue transition-all`}
                                    />
                                </div>
                                {errors.email && (
                                    <p className="text-red-500 text-xs ml-2">{errors.email.message}</p>
                                )}
                            </div>

                            {/* Mobile Number */}
                            <div className="space-y-1">
                                <label className="text-sm font-normal text-slate-700 block">Mobile Number</label>
                                <div className="relative flex items-center">
                                    <div className="absolute left-0 top-0 bottom-0 w-12 bg-tours-blue rounded-l-3xl flex items-center justify-center text-white">
                                        <Phone size={20} />
                                    </div>
                                    <input
                                        type="tel"
                                        placeholder="Enter your Mobile Number"
                                        {...register('mobile')}
                                        className={`w-full pl-16 pr-4 py-2.5 rounded-3xl border ${errors.mobile ? 'border-red-500' : 'border-slate-300'
                                            } focus:outline-none focus:ring-2 focus:ring-tours-blue transition-all`}
                                    />
                                </div>
                                {errors.mobile && (
                                    <p className="text-red-500 text-xs ml-2">{errors.mobile.message}</p>
                                )}
                            </div>

                            {/* Password */}
                            <div className="space-y-1">
                                <label className="text-sm font-normal text-slate-700 block">Password</label>
                                <div className="relative flex items-center">
                                    <div className="absolute left-0 top-0 bottom-0 w-12 bg-tours-blue rounded-l-3xl flex items-center justify-center text-white">
                                        <Lock size={20} />
                                    </div>
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder="Enter your Password"
                                        {...register('password')}
                                        className={`w-full pl-16 pr-12 py-2.5 rounded-3xl border ${errors.password ? 'border-red-500' : 'border-slate-300'
                                            } focus:outline-none focus:ring-2 focus:ring-tours-blue transition-all`}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 text-slate-400 hover:text-slate-600"
                                    >
                                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                </div>
                                {errors.password && (
                                    <p className="text-red-500 text-xs ml-2">{errors.password.message}</p>
                                )}
                            </div>

                            {/* Confirm Password */}
                            <div className="space-y-1">
                                <label className="text-sm font-normal text-slate-700 block">Confirm Password</label>
                                <div className="relative flex items-center">
                                    <div className="absolute left-0 top-0 bottom-0 w-12 bg-tours-blue rounded-l-3xl flex items-center justify-center text-white">
                                        <Lock size={20} />
                                    </div>
                                    <input
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        placeholder="Enter your Password"
                                        {...register('confirmPassword')}
                                        className={`w-full pl-16 pr-12 py-2.5 rounded-3xl border ${errors.confirmPassword ? 'border-red-500' : 'border-slate-300'
                                            } focus:outline-none focus:ring-2 focus:ring-tours-blue transition-all`}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute right-4 text-slate-400 hover:text-slate-600"
                                    >
                                        {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                </div>
                                {errors.confirmPassword && (
                                    <p className="text-red-500 text-xs ml-2">{errors.confirmPassword.message}</p>
                                )}
                            </div>
                        </div>

                        <div className="mt-6 flex justify-center">
                            <Button
                                variant="primary"
                                type="submit"
                                disabled={isSubmitting}
                                className="bg-brand-orange! text-white! font-bold! py-3! px-20! rounded-3xl! hover:bg-brand-orange-deep! transition-colors! shadow-lg! disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Registering...' : 'Register'}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage
