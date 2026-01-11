import React, { useState } from 'react'
import { Mail, Lock, Eye, EyeOff, ArrowLeft } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import Button from '../components/common/Button'

const loginSchema = z.object({
    email: z.string().email('Please enter a valid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    rememberMe: z.boolean().optional(),
})

type LoginFormValues = z.infer<typeof loginSchema>

const LoginPage: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
            rememberMe: false,
        },
    })

    const onSubmit = async (_data: LoginFormValues) => {
        // TODO: Implement actual login logic
        await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate API call
        navigate('/')
    }

    return (
        <div className="flex min-h-screen bg-white font-sans">
            <div className="flex flex-col w-full lg:w-1/2 p-8 lg:p-16 relative">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center text-slate-600 hover:text-slate-900 absolute top-8 left-8"
                >
                    <ArrowLeft size={18} className="mr-1" />
                    <span className="font-semibold text-sm border-b-2 border-dotted border-slate-600 pb-0.5">
                        Back
                    </span>
                </button>

                <div className="flex-1 flex flex-col justify-center max-w-md mx-auto w-full">
                    <h1 className="text-4xl font-bold text-brand-blue-end mb-12 text-center">Sign In</h1>

                    <form onSubmit={handleSubmit(onSubmit)} className="mb-8">
                        <h2 className="text-tours-blue font-semibold mb-6 flex justify-center">
                            Account Details
                        </h2>

                        <div className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-normal text-slate-700 block">Email</label>
                                <div className="relative flex items-center">
                                    <div className="absolute left-0 top-0 bottom-0 w-12 bg-tours-blue rounded-l-3xl flex items-center justify-center text-white">
                                        <Mail size={20} />
                                    </div>
                                    <input
                                        type="email"
                                        placeholder="Enter your Email"
                                        {...register('email')}
                                        className={`w-full pl-16 pr-4 py-3 rounded-3xl border ${errors.email ? 'border-red-500' : 'border-slate-300'
                                            } focus:outline-none focus:ring-2 focus:ring-tours-blue transition-all`}
                                    />
                                </div>
                                {errors.email && <p className="text-red-500 text-xs ml-2">{errors.email.message}</p>}
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-normal text-slate-700 block">Password</label>
                                <div className="relative flex items-center">
                                    <div className="absolute left-0 top-0 bottom-0 w-12 bg-tours-blue rounded-l-3xl flex items-center justify-center text-white">
                                        <Lock size={20} />
                                    </div>
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder="Enter your Password"
                                        {...register('password')}
                                        className={`w-full pl-16 pr-12 py-3 rounded-3xl border ${errors.password ? 'border-red-500' : 'border-slate-300'
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
                        </div>

                        <div className="flex items-center justify-between mt-4 px-2">
                            <label className="flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    {...register('rememberMe')}
                                    className="w-4 h-4 rounded border-slate-300 text-tours-blue focus:ring-tours-blue"
                                />
                                <span className="ml-2 text-xs text-slate-600">Remember me</span>
                            </label>
                            <Link to="/forgot-password" className="text-xs text-slate-600 hover:underline">
                                Forgot Password ?
                            </Link>
                        </div>

                        <div className="mt-8 flex justify-center">
                            <Button
                                variant="primary"
                                type="submit"
                                disabled={isSubmitting}
                                className="bg-brand-orange! text-white! font-bold! py-3! px-16! rounded-3xl! hover:bg-brand-orange-deep! transition-colors! shadow-lg! disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Logging in...' : 'Login'}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="hidden lg:flex lg:w-1/2 bg-tours-blue relative overflow-hidden rounded-l-[100px] items-center justify-center p-16">
                <div className="text-center text-white max-w-lg z-10">
                    <h2 className="text-5xl font-extrabold mb-8">Hello Folks!</h2>
                    <p className="text-xl mb-12 leading-relaxed">
                        Enter your professional details and start joining with us.
                    </p>
                    <Button
                        variant="outline"
                        onClick={() => navigate('/register')}
                        className="px-16! py-3! rounded-3xl! border-2! border-white! text-white! font-bold! hover:bg-white! hover:text-tours-blue!"
                    >
                        Register
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
