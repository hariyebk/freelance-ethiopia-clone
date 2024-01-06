export type IcontextType = {
    openFilter: boolean,
    openNav: boolean
    setOpenFilter: React.Dispatch<React.SetStateAction<boolean>>,
    setOpenNav:React.Dispatch<React.SetStateAction<boolean>>,
    editProfile: boolean,
    setEditProfile: React.Dispatch<React.SetStateAction<boolean>>
}