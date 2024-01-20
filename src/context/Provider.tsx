import { createContext, useState } from "react"
import { IcontextType } from "../types"


const initial_state = {
    isAuthenticated: true,
    setAuthenticated: () => {},
    role: "",
    setRole: () => {},
    openFilter: false,
    setOpenFilter: () => {},
    openNav: false,
    setOpenNav: () => {},
    editPortfolioLinks: false,
    setEditPortfolioLinks: () => {},
    editLanguages: false,
    setEditLanguages: () => {}
}
export const FilterConext = createContext<IcontextType>(initial_state)
export default function Provider({children}: {children: React.ReactNode}) {
    const [openFilter, setOpenFilter] = useState(false)
    const [openNav, setOpenNav] = useState(false)
    const [editPortfolioLinks, setEditPortfolioLinks] = useState(false)
    const [editLanguages, setEditLanguages] = useState(false)
    const [isAuthenticated, setAuthenticated] = useState(true)
    const [role, setRole] = useState("jobseeker")

    return (
        <FilterConext.Provider value={{
            role,
            setRole,
            isAuthenticated,
            setAuthenticated,
            openFilter,
            openNav,
            setOpenFilter,
            setOpenNav,
            editPortfolioLinks,
            setEditPortfolioLinks,
            editLanguages,
            setEditLanguages
        }}>
            {children}
        </FilterConext.Provider>
    )
}
