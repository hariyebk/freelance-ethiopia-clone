
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
    main_services?: {
        sector: string,
        title: string
    }[],
    experiences?: {
        role: string,
        companyName: string,
        location: string,
        startDate: string,
        finishedDate: string,
        contribution: string
    }[],
    education: {
        institute: string,
        enrolled_in: string,
        fieldOfStudy: string,
        startDate: string,
        finishedDate: string
    }[],
    certificates: {
        title: string,
        presentedBy: string,
        issuedDate: string,
        expirationDate: string,
        link?: string
    }[],
    languages: string[],
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