export type IcontextType = {
    isAuthenticated: boolean,
    setAuthenticated:  React.Dispatch<React.SetStateAction<boolean>>,
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