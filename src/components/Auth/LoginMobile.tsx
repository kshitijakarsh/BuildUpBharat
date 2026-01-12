import React, { useState } from 'react'
import { Mail, Lock, Eye, EyeOff, X } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import Button from '../common/Button'
import Input from '../common/Input'
import { useLogin } from '../../hooks/useAuth'

import { loginSchema, type LoginFormValues } from './schemas'

const LoginMobile: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()
    const loginMutation = useLogin()

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

    const onSubmit = async (data: LoginFormValues) => {
        try {
            await loginMutation.mutateAsync(data)
            navigate('/dashboard')
        } catch (error) {
            console.error('Login failed:', error)
        }
    }

    return (
        <div className="flex min-h-screen bg-gray-50/50 font-sans items-center justify-center p-4">
            {/* Main Card Container */}
            <div className="bg-white rounded-4xl md:rounded-[2.5rem] shadow-2xl w-full max-w-lg relative overflow-hidden">

                {/* Close Button */}
                <button
                    onClick={() => navigate('/')}
                    className="absolute top-4 left-4 md:top-6 md:left-6 text-gray-800 hover:text-gray-600 z-10 p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                    <X size={20} className="md:w-6 md:h-6" />
                </button>

                <div className="p-6 pt-16 md:p-12">
                    <h1 className="text-2xl md:text-3xl font-extrabold text-brand-blue-text mb-6 md:mb-8 text-center">
                        Welcome Back
                    </h1>

                    {/* Google Button Placeholder */}
                    <button className="w-full bg-white border border-gray-100 shadow-sm rounded-full py-2.5 md:py-3 px-4 flex items-center justify-center gap-2 md:gap-3 hover:bg-gray-50 transition-colors mb-6 md:mb-8 group">
                        <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5 md:w-6 md:h-6" />
                        <span className="font-semibold text-sm md:text-base text-gray-600 group-hover:text-gray-900">Signin with Google</span>
                    </button>

                    <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                        <div className="h-px bg-gray-200 flex-1"></div>
                        <span className="text-xs md:text-sm text-gray-400 font-medium">or</span>
                        <div className="h-px bg-gray-200 flex-1"></div>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
                        <h2 className="text-brand-highlight font-bold text-center mb-4 md:mb-6 text-base md:text-lg">
                            Account Details
                        </h2>

                        <div className="space-y-3 md:space-y-5">
                            <Input
                                title="Email Address"
                                type="email"
                                icon={Mail}
                                placeholder="Enter your Email"
                                error={errors.email?.message}
                                {...register('email')}
                            />

                            <Input
                                title="Password"
                                type={showPassword ? 'text' : 'password'}
                                icon={Lock}
                                placeholder="Enter your Password"
                                error={errors.password?.message}
                                {...register('password')}
                                rightElement={
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="text-gray-400 hover:text-brand-highlight"
                                    >
                                        {showPassword ? <EyeOff size={18} className="md:w-5 md:h-5" /> : <Eye size={18} className="md:w-5 md:h-5" />}
                                    </button>
                                }
                            />
                        </div>

                        <div className="flex items-center justify-between px-2">
                            <label className="flex items-center cursor-pointer group">
                                <input
                                    type="checkbox"
                                    {...register('rememberMe')}
                                    className="w-4 h-4 rounded border-gray-300 text-brand-highlight focus:ring-brand-highlight cursor-pointer"
                                />
                                <span className="ml-2 text-xs text-gray-600 group-hover:text-gray-800 transition-colors">Remember me</span>
                            </label>
                            <button type="button" onClick={() => navigate('/forgot-password')} className="text-xs text-brand-highlight hover:underline font-medium">
                                Forgot Password?
                            </button>
                        </div>

                        <div className="pt-2 md:pt-4 flex justify-center">
                            <Button
                                variant="primary"
                                type="submit"
                                disabled={isSubmitting}
                                className="bg-brand-orange hover:bg-brand-orange-deep text-white font-bold py-3 md:py-4 px-16 md:px-24 rounded-full shadow-lg hover:shadow-xl hover:shadow-orange-200 transition-all transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed w-full md:w-auto text-sm md:text-base"
                            >
                                {isSubmitting ? 'Logging in...' : 'Login'}
                            </Button>
                        </div>

                        <div className="text-center mt-4 md:mt-6">
                            <p className="text-gray-600 font-medium text-xs md:text-sm">
                                Don't have an account? <button onClick={() => navigate('/register')} className="text-brand-blue-text font-extrabold hover:underline">Register</button>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginMobile
