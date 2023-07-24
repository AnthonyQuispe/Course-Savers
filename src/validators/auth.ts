import {z} from 'zod'

export const registerSchema = z.object({
    email: z.string().email(),
    firstName: z.string().min(3).max(255),
    lastName: z.string().min(3).max(255),
    studentId: z.string().min(3).max(20),
    password: z.string().min(8).max(100),
    confirmPassword: z.string().min(8).max(100),
})