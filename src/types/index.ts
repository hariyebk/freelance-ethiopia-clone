import { signUpType } from "../pages/Register"

type USER = signUpType & {
    id: string,
    type: string,
    avatar: string
} 

export type IcontextType = {
    user: USER | null,
    setUser: React.Dispatch<React.SetStateAction<USER>> | React.Dispatch<React.SetStateAction<null>>
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