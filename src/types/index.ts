import { signUpType } from "../pages/Register"

export type USER = signUpType & {
    id: string,
    type: string,
    avatar: string,
    preference?: {
        sector: string,
        location: string
    },
    appliedTo?: Application
} 

export type POST1 = {
    postedBy: string,
    title: string,
    site: string,
    type: string,
    level: string,
    sector: string,
    compensationType: string,
    location?: string,
    gender: string,
    deadline: string,
    quantity: string,
}

export type POST2 = {
    description: string,
    responsibilities: string,
    requirments: string,
    qualifications?: string,
    salary?: string,
    howToApply?: string
}

export type POST = POST1 & POST2 & {
    id: string,
    created_at: string,
    applications?: {
        applicant: USER,
        coverLetter: string
    }[]
}

export type IcontextType = {
    user: USER | null,
    setUser: React.Dispatch<React.SetStateAction<USER | null>> | React.Dispatch<React.SetStateAction<null>>
    Loading: boolean,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    openFilter: boolean,
    openNav: boolean
    setOpenFilter: React.Dispatch<React.SetStateAction<boolean>>,
    setOpenNav:React.Dispatch<React.SetStateAction<boolean>>,
    editPortfolioLinks: boolean,
    setEditPortfolioLinks: React.Dispatch<React.SetStateAction<boolean>>
    editLanguages: boolean,
    setEditLanguages: React.Dispatch<React.SetStateAction<boolean>>,
    role: string,
    setRole: React.Dispatch<React.SetStateAction<string>>
}

export enum status {
    pending = "pending",
    hired = "hired",
    rejected = "rejected"
}
export enum AccountRoles {
    jobseeker = "jobseeker",
    employer = "employer"
}

export enum AccountTypes {
    job_seeker = "Job Seeker",
    private = "Private",
    Coorporate =  "Coorporate",
    licensed_startup = "Licensed Startup",
    unlicensed_startup = "Unlicensed Startup"
} 

export type Application = {
    post: POST1 & POST2 & {
        id: string,
        created_at: string
    }, 
    status: string,
    appliedAt: string
}[] | null