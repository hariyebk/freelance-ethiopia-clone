import { Link, useNavigate } from "react-router-dom";
import { formatDateString } from "../../utils/helpers";

interface CertificateProps {
    isEditing?: boolean, 
    title: string,
    presentedBy: string,
    issuedDate: string,
    expirationDate: string,
    link?: string
}

export default function Certificate({isEditing, title, presentedBy, issuedDate, expirationDate, link }: CertificateProps){
    const navigate = useNavigate()
    function handleClick(){
        navigate(link!)
    }
    return (
        <button onClick={handleClick} className={`${isEditing && "ml-14"} mt-5 flex flex-col`}>
            <div className="w-full flex flex-wrap items-center max-lg:text-sm max-lg:text-ellipsis max-lg:leading-normal leading-10 max-lg:pr-5">
                <Link to={link!}> <p className="truncate ... hover:text-primary max-lg:text-sm text-stone-600 font-palanquin font-semibold"> {title} </p> </Link>
                <span className="mx-2"> By </span>
                <p className="max-lg:text-sm text-stone-600 font-palanquin font-semibold"> {presentedBy} </p>
            </div>
            <div className="mt-3 flex items-center text-sm font-semibold">
                <span> From: {formatDateString(issuedDate)}</span>
                <span className="mx-2"> - </span>
                <span> To: {formatDateString(expirationDate)} </span>
            </div>
        </button>
    )
}
