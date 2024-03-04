import { FaTrash } from "react-icons/fa"


interface ServiceProps {
    service: string,
    onlyShow?: boolean,
    handleDeleteService?: (service: string) => void
}

export default function Service({service, onlyShow, handleDeleteService}: ServiceProps) {

    function handleClick(){
        window.scrollTo(0, 0);
        if(handleDeleteService){
            handleDeleteService(service)
        }
    }

    return (
        <section className={`${onlyShow ? "rounded-full max-lg:px-5 px-7 mt-2 mx-2" : "rounded-md max-lg:px-3 px-5 mt-6"} space-x-3 bg-stone-800 text-sm text-white py-2`}>
        <div className="flex items-center justify-between gap-3">
            <p className="max-lg:text-xs"> {service} </p>
            { !onlyShow && <button onClick={handleClick} className="ml-2">
                <FaTrash className ="text-red-600 w-3 h-3" />
            </button>}
        </div>
        </section>
    )
}
