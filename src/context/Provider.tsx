import { createContext, useContext, useState } from "react"
import { IcontextType } from "../types"


const initial_state = {
    open: false,
    setOpen: () => {}
}
const FilterConext = createContext<IcontextType>(initial_state)
export default function Provider({children}: {children: React.ReactNode}) {
    const [open, setOpen] = useState(false)
    return (
        <FilterConext.Provider value={{
            open,
            setOpen
        }}>
            {children}
        </FilterConext.Provider>
    )
}


export function useFilterContext(){
    const context = useContext(FilterConext)
    if(!context) throw new Error("context is used out of it's provider")
    return context
}