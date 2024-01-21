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
    birthDate: z.string(),
    gender: z.string(),
    country: z.string(),
    city: z.string()
}).refine((value) => {
    // convert the string into date
    const birthdate = new Date(value.birthDate);
    // get today's date
    const today = new Date();
    // compare if the user is at least 14 years old
    const age = today.getFullYear() - birthdate.getFullYear();
    const isAtLeast14 = age >= 14;

    return isAtLeast14
    }, {
        message: 'You Must be at least 14 years old',
        path: ["birthDate"]
    }

)
export const UserAvatarValidation = z.object({
    file: z.custom<File[]>(),
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
export const SettingsValidation = z.object({
    password: z.string().optional(),
    passwordConfirm: z.string().optional(),
    sectorPreference: z.string().optional()
}).refine((value) => {
    if(value.password === ""){
        return true
    }
    if(value.password){
        return value.password.length >= 6
    }
}, {
    message: "password must be at least 6 characters",
    path: ["password"]
}).refine(
    (values) => {
        return values.password === values.passwordConfirm;
    },
    {
        message: "Passwords must match!",
        path: ["passwordConfirm"],
    }
)
export const JobPostValidation = z.object({
    title: z.string().min(2, {message: "Job Title is too short"}).max(70, {message: "Job Title is too long"}),
    site: z.string(),
    type: z.string(),
    level: z.string(),
    sector: z.string(),
    experience: z.string(),
    gender: z.string(),
    deadline: z.string(),
    quantity: z.number().default(1)
})
export const CoverLetterValidation = z.object({
    coverLetter: z.string().min(5, {message: "Cover letter is too short"}).max(800, {message: "cover letter should have a maximum of 800 charcters. This is too long"})
})
