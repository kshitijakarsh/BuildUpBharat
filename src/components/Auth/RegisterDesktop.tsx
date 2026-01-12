import React, { useState } from 'react'
import { Mail, Lock, Eye, EyeOff, User, Phone, ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import Button from '../common/Button'
import Input from '../common/Input'
import { useRegister } from '../../hooks/useAuth'

import { registerSchema, type RegisterFormValues } from './schemas'

const RegisterDesktop: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const navigate = useNavigate()
    const registerMutation = useRegister()

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

    const onSubmit = async (data: RegisterFormValues) => {
        try {
            await registerMutation.mutateAsync({
                fullName: data.fullName,
                email: data.email,
                mobileNumber: data.mobile,
                password: data.password,
                confirmPassword: data.confirmPassword
            })
            navigate('/dashboard')
        } catch (error) {
            console.error('Registration failed:', error)
        }
    }

    return (
        <div className="flex min-h-screen bg-white overflow-hidden font-sans">
            {/* Left Panel */}
            <div className="w-5/12 bg-brand-accent-blue text-white relative flex flex-col justify-center items-center text-center drop-shadow-2xl z-10 rounded-tr-[60px] rounded-br-[60px]">

                {/* Back Button */}
                <button
                    onClick={() => navigate('/')}
                    className="absolute top-10 left-10 flex items-center gap-2 text-white/80 hover:text-white transition-colors group"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="font-semibold tracking-wide uppercase text-sm border-b border-white/30 pb-0.5 group-hover:border-white">Back</span>
                </button>

                <div className="max-w-md px-8">
                    <h2 className="text-5xl font-extrabold mb-6 tracking-tight">Welcome Back!</h2>
                    <p className="text-white/80 text-lg mb-12 font-medium leading-relaxed">
                        To keep connected with us please login with your credentials
                    </p>

                    <button
                        onClick={() => navigate('/login')}
                        className="px-12 py-3 rounded-full border-2 border-white/30 text-white font-bold hover:bg-white hover:text-brand-accent-blue transition-all duration-300"
                    >
                        Login
                    </button>
                </div>
            </div>

            {/* Right Panel */}
            <div className="w-7/12 p-12 flex flex-col justify-center items-center relative">
                <div className="w-full max-w-lg">
                    <h1 className="text-4xl font-extrabold text-brand-blue-text mb-12 text-center tracking-tight">
                        Create Account
                    </h1>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <h2 className="text-brand-blue-text font-bold text-lg mb-6">
                            Account Details
                        </h2>

                        <div className="space-y-5">
                            <Input
                                title="Full Name"
                                icon={User}
                                placeholder="Enter your Full name"
                                error={errors.fullName?.message}
                                {...register('fullName')}
                            />

                            <Input
                                title="Email Address"
                                type="email"
                                icon={Mail}
                                placeholder="Enter your Email"
                                error={errors.email?.message}
                                {...register('email')}
                            />

                            <Input
                                title="Mobile Number"
                                type="tel"
                                icon={Phone}
                                placeholder="Enter your Mobile Number"
                                error={errors.mobile?.message}
                                {...register('mobile')}
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
                                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                }
                            />

                            <Input
                                title="Confirm Password"
                                type={showConfirmPassword ? 'text' : 'password'}
                                icon={Lock}
                                placeholder="Enter your Password"
                                error={errors.confirmPassword?.message}
                                {...register('confirmPassword')}
                                rightElement={
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="text-gray-400 hover:text-brand-highlight"
                                    >
                                        {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                }
                            />
                        </div>

                        <div className="pt-8 flex justify-center">
                            <Button
                                variant="primary"
                                type="submit"
                                disabled={isSubmitting}
                                className="bg-brand-orange hover:bg-brand-orange-deep text-white font-bold py-4 px-20 rounded-full shadow-xl hover:shadow-2xl hover:shadow-orange-200 transition-all transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed text-lg"
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

export default RegisterDesktop
