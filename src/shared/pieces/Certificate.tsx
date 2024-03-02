import { Link, useNavigate } from "react-router-dom";

interface CertificateProps {
    title: string,
    presentedBy: string,
    issuedDate: string,
    expirationDate: string,
    link?: string
}

export default function Certificate({title, presentedBy, issuedDate, expirationDate, link }: CertificateProps){
    const navigate = useNavigate()
    function handleClick(){
        navigate(link!)
    }
    return (
        <button onClick={handleClick} className="mt-5 flex flex-col">
            <div className="w-full flex flex-wrap items-center max-lg:text-sm max-lg:text-ellipsis max-lg:leading-normal leading-10 max-lg:pr-5">
                <Link to={link!} target="_blank" rel="noopener"> <p className="truncate ... hover:text-primary max-lg:text-sm text-stone-600 font-palanquin font-semibold"> {title} </p> </Link>
                <span className="mx-2"> By </span>
                <p className="max-lg:text-sm text-stone-600 font-palanquin font-semibold"> {presentedBy} </p>
            </div>
            <div className="mt-3 flex items-center text-sm font-semibold">
                <span> From: {issuedDate}</span>
                <span className="mx-2"> - </span>
                <span> To: {expirationDate} </span>
            </div>
        </button>
    )
}
