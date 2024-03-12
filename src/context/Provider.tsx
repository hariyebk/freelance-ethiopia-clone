import { createContext, useEffect, useState } from "react"
import { IcontextType, USER } from "../types"
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
    setEditLanguages: () => {},
    queryObj: null,
    setQueryObj: () => {}
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
    const [user, setUser] = useState<USER | null>(null)
    const [queryObj, setQueryObj] = useState(null)

    function updateRoleAndUser(){
        if(!role &&  data?.user){
            setRole(data?.user?.type)
            setUser(data?.user)
            navigate("/profile-type")
        }
    }

    useEffect(() => {
        setLoading(isLoading)
        updateRoleAndUser()
    },[isLoading])

    
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
            setEditLanguages,
            queryObj,
            setQueryObj
        }}>
            {children}
        </FilterConext.Provider>
    )
}
