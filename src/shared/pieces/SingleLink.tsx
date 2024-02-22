import { Link } from "react-router-dom"

interface LinkProps {
    link: {
        path: string,
        label: string
    }
}
export default function SingleLink({link}: LinkProps) {
    return (
        <Link to={link.path} key={link.label} className="block bg-white max-lg:mt-3 font-normal text-md text-gray-500 hover:text-primary z-40" >
            {link.label}
        </Link>
    )
}
