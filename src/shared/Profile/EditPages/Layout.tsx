import { useNavigate } from "react-router-dom"
import Goback from "../../pieces/Goback"
import { useState } from "react"
import { GoArrowLeft } from "react-icons/go"
import { IoClose } from "react-icons/io5"
import PopOverForm from "../../PopOverForm"

interface Props {
    isThereData: boolean,
    title: string,
    MainComponent: React.ReactNode,
    ModalComponent?: React.ReactNode
}

export default function Layout({isThereData, title, MainComponent, ModalComponent}: Props) {
    console.log(isThereData)
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    const navigate = useNavigate()

    return (
        <section className="w-full mb-36">
            <div className="lg:hidden mt-10 mb-14 ml-10">
                <Goback />
            </div>
            <div className={`${isThereData ? "h-auto" : "h-[450px]"} max-lg:mt-10 mt-20 mx-auto max-lg:w-[430px] w-[600px] bg-slate-50 border border-gray-100 shadow-md rounded-lg`}>
                <div className="max-lg:mb-10 mb-10 flex flex-col flex-1 items-start max-lg:px-6 px-10 py-7">
                    {/* HEADER */}
                    <div className="w-full flex items-center justify-between max-lg:px-2">
                        <div className="flex items-center gap-5 mt-4">
                            <span className="max-lg:hidden bg-gray-200 cursor-pointer hover:text-primary rounded-full flex justify-center items-center w-10 h-10" onClick={() => navigate(-1)}>
                                <GoArrowLeft style = {{fontSize: "20px"}} />
                            </span>
                            <h2 className="text-xl text-stone-600 font-palanquin font-semibold"> {title} </h2>
                        </div>
                        <div className="ml-8 mt-3 cursor-pointer hover:text-primary">
                            <p className="text-base text-stone-600 font-palanquin font-semibold hover:text-primary" onClick={handleOpen}>  Add new </p>
                            {/* MODAL */}
                            <PopOverForm open = {open} handleClose={handleClose}>
                                <button onClick={handleClose}>
                                    <IoClose style = {{fontSize: "20px"}} />
                                </button>
                                <div className="flex flex-col mx-6">
                                    {ModalComponent}
                                </div>
                            </PopOverForm>
                        </div>
                    </div>
                    <div className="w-full max-lg:mt-10">
                        {MainComponent}
                    </div>
                </div>
            </div>
        </section>
    )
}
