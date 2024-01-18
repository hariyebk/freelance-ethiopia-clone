import { useContext } from "react"
import { FilterConext } from "./Provider"

export default function useApi(){
    const context = useContext(FilterConext)
    if(!context) throw new Error("context is used out of it's provider")
    return context
}