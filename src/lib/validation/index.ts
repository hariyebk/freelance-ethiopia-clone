import * as z from "zod"
// data validation for our signupform fields
export const loginValidation = z.object({
    email: z.string().email(),
    password: z.string().min(8, { message: "Password must be at least 8 characters." }),
})
export const signupValidation = z.object({
    email: z.string().email(),
    password: z.string().min(8, { message: "Password must be at least 8 characters." }).optional(),
    firstName: z.string().min(2, {message: "first name is required"}).max(8, {message: "first name is too long"}),
    lastName: z.string().min(2, {message: "last name is required"}).max(8, {message: "last name is too long"}),
    bio: z.string().min(2, {message: "bio is too short"}).max(100, {message: "bio is too long"}).optional(),
    birthDate: z.string().min(6, {message: "birthdate is required"}),
    gender: z.string(),
    country: z.string(),
    city: z.string()
})