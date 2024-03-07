import { IoAdd} from "react-icons/io5";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import toast from "react-hot-toast";
import { useGeneral } from "../../lib/Tanstackquery/queriesAndMutations";
import { Box, CircularProgress } from "@mui/material";
import useApi from "../../context/hook";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";

interface EditPortfolioLinks {
    close: (state: boolean) => void,
}

export default function EditPortfolioLinks({close}: EditPortfolioLinks) {
    const {user} = useApi()
    const [link1, setLink1] = useState("")
    const [link2, setLink2] = useState("")
    const [AddNewLink, setAddNewLink] = useState(false)
    const {isPending, mutate: addLink} = useGeneral({
        isTobeDeleted: false,
        successMessage: "New Portfolio link has been added"
    })
    const {isPending: isLoading, mutate: deleteLink} = useGeneral({
        isTobeDeleted: true,
        successMessage: "Link deleted successfully"
    })

    const hasReachedLimits = user?.portfolio_links ? user.portfolio_links?.length === 2 : false

    function handleLink1Change(e: React.ChangeEvent<HTMLInputElement>){
        setLink1(e.target.value)
    }

    function handleLink2Change(e: React.ChangeEvent<HTMLInputElement>){
        setLink2(e.target.value)
    }

    function handleSave(){
        if(!link1 || !link2) return toast.error("Invalid Input")
        const tempData = link1 && link2 ? `${link1}, ${link2}` : link1 ? link1 : link2
        if(link1){
            addLink({
                value: tempData,
                column_name: "portfolio_links",
                limit: 2,
                errorMessage: "Failed to add your link"
            })
        }
    }

    function handleDeleteLink(link: string){
        deleteLink({
            value: link,
            column_name: "portfolio_links"
        })
        close(true)
    }


    return (
        <section>
            <div className="flex items-center justify-between gap-3 pt-10">
                {!hasReachedLimits && <form className="w-[280px] border-2 border-gray-300 focus:border-primary ml-4 mt-10 rounded-sm">
                    <input onChange={handleLink1Change} defaultValue="" placeholder="https://example.com" className="w-full pl-4 py-2 outline-none text-stone-600 text-sm font-palanquin" /> 
                </form>}
            </div>
            {AddNewLink && (
                !hasReachedLimits && <div className="mt-4">
                    <form className="w-[280px] border-2 border-gray-300 focus:border-primary ml-4">
                        <input onChange={handleLink2Change} defaultValue="" placeholder="https://example.com" className="w-full pl-4 py-2 outline-none text-stone-600 text-sm font-palanquin" /> 
                    </form>
                </div>
            )}
            { !hasReachedLimits && user?.portfolio_links?.length !== 1 && <button className={`${AddNewLink ? "text-gray-300": "hover:text-primary"} mt-6 ml-5 flex items-center gap-1 cursor-pointer`} disabled = {AddNewLink} onClick={() => setAddNewLink(true)}>
                <IoAdd />
                <p className="text-sm font-palanquin"> Add New Link  </p>
            </button>}
            {/* Links */}
            {isLoading ? (
                <Spinner />
            ) : 
                (<div className="w-[300px] mt-6 mb-10 ml-8">
                {!user?.portfolio_links ? null : (
                    user.portfolio_links.map((link) => {
                        return (
                            <div key={link} className="mt-3 flex items-center justify-between">
                                <Link key={link} to={link} className="text-primary text-sm"> {link} </Link>
                                <button onClick={() => handleDeleteLink(link)} className="pb-2">
                                    <FaTrash className = "mt-2 ml-3 w-3 h-3 text-red-600" />
                                </button>
                            </div>
                        )
                    })
                ) }
            </div>)
            }
            <div className="mt-10 mx-10 flex items-center gap-8">
                <button className="px-10 py-2 border border-stone-800 bg-stone-800 text-slate-100 rounded-md" onClick={() => close(false)}> { hasReachedLimits ? "close" : "cancel" }</button>
                {!hasReachedLimits && <button onClick={handleSave} className="px-10 py-2 border border-primary bg-gradient-to-r from-primary to-secondary  text-slate-100  font-palanquin rounded-md"> 
                    {isPending ? (
                        <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "center"}}>
                            <CircularProgress size={20} color="inherit" />
                        </Box>
                    ) : "Add"
                    }
                </button>}
            </div>
        </section>
    )
}
