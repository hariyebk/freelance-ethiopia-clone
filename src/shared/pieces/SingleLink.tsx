import { useNavigate } from "react-router-dom"
import useApi from "../../context/hook"

interface LinkProps {
    link: {
        path: string,
        label: string
    }
}
export default function SingleLink({link}: LinkProps) {
    const {setOpenNav} = useApi()
    const navigate = useNavigate()

    function handleNavigate(){
        setOpenNav(false)
        navigate(link.path)
    }

    return (
        <button key={link.label} onClick={handleNavigate} className="block bg-white max-lg:mt-3 font-normal text-md text-gray-500 hover:text-primary z-40" >
            {link.label}
        </button>
    )
}
