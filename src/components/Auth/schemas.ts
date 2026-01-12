import * as z from 'zod'

export const loginSchema = z.object({
    email: z.string().email('Please enter a valid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    rememberMe: z.boolean().optional(),
})

export type LoginFormValues = z.infer<typeof loginSchema>

export const registerSchema = z
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

export type RegisterFormValues = z.infer<typeof registerSchema>
