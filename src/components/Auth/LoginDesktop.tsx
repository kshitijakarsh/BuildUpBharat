import React, { useState } from 'react'
import { Mail, Lock, Eye, EyeOff, ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Button from '../common/Button'
import Input from '../common/Input'
import { useLogin } from '../../hooks/useAuth'
import { loginSchema, type LoginFormValues } from './schemas'

const LoginDesktop: React.FC = () => {
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
        <div className="flex min-h-screen bg-white overflow-hidden font-sans">
            {/* Left Panel (Form) */}
            <div className="w-7/12 p-12 flex flex-col justify-center items-center relative">
                {/* Back Button */}
                <button
                    onClick={() => navigate('/')}
                    className="absolute top-10 left-10 flex items-center gap-2 text-gray-500 hover:text-brand-blue-text transition-colors group"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="font-semibold tracking-wide uppercase text-sm border-b border-gray-300 pb-0.5 group-hover:border-brand-blue-text">Back</span>
                </button>

                <div className="w-full max-w-lg">
                    <h1 className="text-4xl font-extrabold text-brand-blue-text mb-12 text-center tracking-tight">
                        Sign In
                    </h1>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <h2 className="text-brand-blue-text font-bold text-lg mb-6">
                            Account Details
                        </h2>

                        <div className="space-y-5">
                            <Input
                                title="Email"
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
                                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                }
                            />
                        </div>

                        <div className="flex items-center justify-between px-2 pt-2">
                            <label className="flex items-center cursor-pointer group">
                                <input
                                    type="checkbox"
                                    {...register('rememberMe')}
                                    className="w-4 h-4 rounded border-gray-300 text-brand-highlight focus:ring-brand-highlight cursor-pointer"
                                />
                                <span className="ml-2 text-sm text-gray-600 group-hover:text-gray-800 transition-colors">Remember me</span>
                            </label>
                            <button type="button" onClick={() => navigate('/forgot-password')} className="text-sm text-gray-500 hover:text-brand-highlight hover:underline font-medium">
                                Forgot Password?
                            </button>
                        </div>

                        <div className="pt-8 flex justify-center">
                            <Button
                                variant="primary"
                                type="submit"
                                disabled={isSubmitting}
                                className="bg-brand-orange hover:bg-brand-orange-deep text-white font-bold py-4 px-20 rounded-full shadow-xl hover:shadow-2xl hover:shadow-orange-200 transition-all transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed text-lg"
                            >
                                {isSubmitting ? 'Logging in...' : 'Login'}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Right Panel (Blue Overlay) */}
            <div className="w-5/12 bg-brand-accent-blue text-white relative flex flex-col justify-center items-center text-center drop-shadow-2xl z-10 rounded-tl-[60px] rounded-bl-[60px]">
                <div className="max-w-md px-8">
                    <h2 className="text-5xl font-extrabold mb-6 tracking-tight">Hello Folks!</h2>
                    <p className="text-white/80 text-lg mb-12 font-medium leading-relaxed">
                        Enter your professional details and start joining with us.
                    </p>

                    <button
                        onClick={() => navigate('/register')}
                        className="px-12 py-3 rounded-full border-2 border-white/30 text-white font-bold hover:bg-white hover:text-brand-accent-blue transition-all duration-300"
                    >
                        Register
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LoginDesktop
