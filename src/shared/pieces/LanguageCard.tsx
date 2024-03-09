import { FaTrash } from "react-icons/fa"
import { useLanguage } from "../../lib/Tanstackquery/queriesAndMutations"
import { Box, CircularProgress } from "@mui/material"

interface LanguageCardProps {
    title: string,
    close: React.Dispatch<React.SetStateAction<boolean>>
}

export default function LanguageCard({title, close}: LanguageCardProps) {

    const {isPending, mutate: deleteLanguage} = useLanguage({
        close,
        isTobeDeleted: true
    })

    function handleDeleteLanguage(){
        deleteLanguage({
            language: title
        })
    }
    
    return (
        <section className="w-[300px] ml-10 mt-6 flex items-center justify-between">
            <h2 className="pl-2 text-base font-palanquin"> {title} </h2>
            <button onClick={handleDeleteLanguage} className="">
            {isPending ? (
                <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "center"}}>
                    <CircularProgress size={20} color="inherit" />
                </Box>
                ) :
                <FaTrash className ="text-red-600 w-3 h-3" />}
            </button>
        </section>
    )
}
