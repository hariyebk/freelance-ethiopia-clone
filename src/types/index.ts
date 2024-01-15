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
    setEditLanguages: React.Dispatch<React.SetStateAction<boolean>>
}