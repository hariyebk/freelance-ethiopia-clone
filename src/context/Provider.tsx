import { createContext, useContext, useState } from "react"
import { IcontextType } from "../types"


const initial_state = {
    openFilter: false,
    setOpenFilter: () => {},
    openNav: false,
    setOpenNav: () => {},
    editProfile: false,
    setEditProfile: () => {}
}
const FilterConext = createContext<IcontextType>(initial_state)
export default function Provider({children}: {children: React.ReactNode}) {
    const [openFilter, setOpenFilter] = useState(false)
    const [openNav, setOpenNav] = useState(false)
    const [editProfile, setEditProfile] = useState(false)
    return (
        <FilterConext.Provider value={{
            openFilter,
            openNav,
            setOpenFilter,
            setOpenNav,
            editProfile,
            setEditProfile
        }}>
            {children}
        </FilterConext.Provider>
    )
}


export function useApi(){
    const context = useContext(FilterConext)
    if(!context) throw new Error("context is used out of it's provider")
    return context
}