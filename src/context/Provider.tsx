import { createContext, useEffect, useState } from "react"
import { AccountRoles, IcontextType } from "../types"
import {useGetUserInfo } from "../lib/Tanstackquery/queriesAndMutations"
import { useNavigate } from "react-router-dom"

const initial_state = {
    user: null,
    setUser: () => {},
    Loading: false,
    setLoading: () => {},
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
    const {isLoading, data} = useGetUserInfo()
    const navigate = useNavigate()
    const [openFilter, setOpenFilter] = useState(false)
    const [Loading, setLoading] = useState(isLoading)
    const [openNav, setOpenNav] = useState(false)
    const [editPortfolioLinks, setEditPortfolioLinks] = useState(false)
    const [editLanguages, setEditLanguages] = useState(false)
    const [role, setRole] = useState("")
    const [user, setUser] = useState(null)

    useEffect(() => {
        setRole(data?.user.type)
        setUser(data?.user)
        setLoading(isLoading)
        if(data?.user.type){
            return data?.user.type === AccountRoles.jobseeker ? navigate("/job") : navigate("/my-posts")
        }
    }, [isLoading, data?.user, navigate])

    
    return (
        <FilterConext.Provider value={{
            Loading,
            setLoading,
            user,
            setUser,
            role,
            setRole,
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
