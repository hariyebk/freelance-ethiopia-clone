import { useState } from "react";
import { Textarea } from "../../../components/ui/textarea";
import useApi from "../../../context/hook";
import Goback from "../../pieces/Goback";
import toast from "react-hot-toast";
import { useUpdateUserBio } from "../../../lib/Tanstackquery/queriesAndMutations";
import Spinner from "../../pieces/Spinner";

export default function EditBio(){
    const {user} = useApi()
    const [bio, setBio] = useState("")
    const {isPending, mutate: updateBio} = useUpdateUserBio()
    

    // Set the input change to the state
    function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>){
        setBio(e.target.value)
    }

    function handleUpdateBio(){
        if(!bio) return toast.error("Invalid input")
        updateBio(bio)
    }

    if(isPending){
        return (
            <Spinner />
        )
    }

    return (
        <section className="w-full mb-32 mt-36">
            <div className="lg:mx-24 max-sm:w-[350px] max-lg:w-[400px] w-[450px] flex flex-col items-start lg:gap-8 sm:mr-5">
                <div className="max-lg:ml-10 max-lg:mb-6">
                    <Goback />
                </div>
                <Textarea defaultValue={user?.bio} onChange={handleChange} className="h-[200px] max-lg:mx-10 lg:ml-20 mt-7 p-4 border border-gray-400 focus:border-none focus:ring-neutral-50 overflow-x-hidden overflow-scroll custom-scrollbar rounded-sm" />
                <div onClick={handleUpdateBio} className="w-full flex items-start justify-center max-lg:ml-10 ml-20">
                    <button className="btn"> {user?.bio ? "Update" : "Add bio"} </button>
                </div>
            </div>
        </section>
    )
}