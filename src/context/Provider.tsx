import { createContext, useContext, useState } from "react"
import { IcontextType } from "../types"


const initial_state = {
    isAuthenticated: true,
    setAuthenticated: () => {},
    openFilter: false,
    setOpenFilter: () => {},
    openNav: false,
    setOpenNav: () => {},
    editPortfolioLinks: false,
    setEditPortfolioLinks: () => {},
    editLanguages: false,
    setEditLanguages: () => {}
}
const FilterConext = createContext<IcontextType>(initial_state)
export default function Provider({children}: {children: React.ReactNode}) {
    const [openFilter, setOpenFilter] = useState(false)
    const [openNav, setOpenNav] = useState(false)
    const [editPortfolioLinks, setEditPortfolioLinks] = useState(false)
    const [editLanguages, setEditLanguages] = useState(false)
    const [isAuthenticated, setAuthenticated] = useState(false)

    return (
        <FilterConext.Provider value={{
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


export function useApi(){
    const context = useContext(FilterConext)
    if(!context) throw new Error("context is used out of it's provider")
    return context
}