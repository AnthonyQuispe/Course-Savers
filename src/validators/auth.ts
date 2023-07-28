import { z } from 'zod'

export const registerSchema = z.object({
    email: z.string().email(),
    school: z.string(),
    campus: z.string(),
    firstName: z.string().min(2, { message: "Enter a valid name, too short" }).max(100, { message: "Enter a valid name, too long" }),
    lastName: z.string().min(3, { message: "Enter a valid name, too short" }).max(100, { message: "Enter a valid name, too long" }),
    studentId: z.string()
    .min(3, { message: "Enter a valid ID, too short" })
    .max(20, { message: "Enter a valid ID, too long" })
    .refine((val)=> !isNaN(val as unknown as number), {message: "ID must only contain numbers"}),
    password: z.string().min(8, { message: "Password must contain at least 8 characters" }).max(100, { message: "Password must contain at most 100 characters" }),
    confirmPassword: z.string().min(8, { message: "Password must contain at least 8 characters" }).max(100, { message: "Password must contain at most 100 characters" }),
})