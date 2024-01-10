import { FaLongArrowAltLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
interface FormHeaderProps {
    title: string,
    imageAddress: string
}

export default function FormHeader({title, imageAddress}: FormHeaderProps) {
    const navigate = useNavigate()
    return (
        <div className="w-full flex gap-56 max-lg:mt-10 mb-5">
            <div className="hidden lg:flex items-center gap-3 cursor-pointer hover:text-primary" onClick={() => navigate(-1)}>
                <FaLongArrowAltLeft style = {{fontSize: "20px"}} />
                <p className="text-primary font-palanquin font-semibold"> Go back </p>
            </div>
            <div className="flex items-center gap-4">
                <img src={imageAddress} width={30} height={30} alt="form-icon"/>
                <h2 className="text-2xl text-stone-600 font-palanquin font-bold "> {title} </h2>
            </div>
        </div>
    )
}
