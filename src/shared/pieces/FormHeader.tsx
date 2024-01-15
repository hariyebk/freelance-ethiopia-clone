import Goback from "./Goback"


interface FormHeaderProps {
    title: string,
    imageAddress: string
}

export default function FormHeader({title, imageAddress}: FormHeaderProps) {
    return (
        <div className="w-full flex gap-20 max-lg:mt-10 mb-5">
            <div className="hidden lg:flex items-center gap-3 cursor-pointer hover:text-primary">
                <Goback />
            </div>
            <div className="flex items-center gap-4">
                <img src={imageAddress} width={30} height={30} alt="form-icon"/>
                <h2 className="text-2xl text-stone-600 font-palanquin font-bold "> {title} </h2>
            </div>
        </div>
    )
}
