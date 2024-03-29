import { ExperienceProps } from "../shared/Profile/Experience"

export type signUpType = {
    email: string,
    password?: string,
    firstName: string,
    lastName: string,
    bio?: string,
    birthDate: string,
    gender: string,
    country: string,
    city: string,
    phone: string,
}

export type USER = signUpType & {
    id: string,
    type: string,
    avatar: string,
    preference?: {
        sector: string,
        location: string
    },
    appliedTo?: Application,
    saved_posts?: POST[],
    skills?: string[],
    main_services?: string[],
    experiences?: ExperienceProps[],
    education: {
        institute: string,
        enrolled_in: string,
        fieldOfStudy: string,
        startDate: string,
        finishedDate: string
    }[],
    certifications: {
        title: string,
        presentedBy: string,
        issuedDate: string,
        expirationDate: string,
        link?: string
    }[],
    languages: {
        language: string,
        proficiency: string
    }[],
    portfolio_links: string[]
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

 // eslint-disable-next-line
export type queryObjType = any

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
    setRole: React.Dispatch<React.SetStateAction<string>>,
    queryObj: queryObjType,
     // eslint-disable-next-line
    setQueryObj: React.Dispatch<React.SetStateAction<any>>
}

export enum status {
    pending = "pending",
    hired = "hired",
    shortListed = "shortListed",
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
    application: {
        post: {
            id: string,
            title: string,
            location: string,
            description: string,
            sector: string,
            site: string,
            type: string
        },
        status: string,
        feedback?: string,
        appliedAt: string
    }
}[] | null

export type ApplicationType = {
    application: {
        post: POST1 & POST2 & {
            id: string,
            created_at: string
        }, 
        status: string,
        feedback?: string,
        appliedAt: string
    }
}
