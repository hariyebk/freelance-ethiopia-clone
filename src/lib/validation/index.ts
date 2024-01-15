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
export const WorkExperienceValidation = z.object({
    position: z.string().min(2, {message: "Title is too short"}).max(20, {message: "Title is too long"}),
    company: z.string().min(3, {message: "company name is too short"}).max(20, {message: "Company name is too long"}),
    city: z.string().min(3, {message: "city name is too short"}).max(20, {message: "City name is too long"}).optional(),
    country: z.string().min(3, {message: "country name is too short"}).max(20, {message: "Country name is too long"}),
    startDate: z.string(),
    finishDate: z.string(),
    contribution: z.string()
})
export const EducationValidation = z.object({
    Institute: z.string().min(2, {message: "University name is too long"}).max(40, {message: "University name is too short"}),
    EnrolledIn: z.string(),
    FieldOfStudy: z.string().min(2, {message: "Field of Study is too short"}).max(20, {message: "Field of Study is too long"}),
    StartDate: z.string(),
    FinishedDate: z.string()
})
export const JobSectorValidation = z.object({
    sector: z.string(),
    role: z.string()
})
export const skillValidation = z.object({
    skill: z.string()
})
export const certificationValidation = z.object({
    certification: z.string()
})