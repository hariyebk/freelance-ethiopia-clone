import { Link } from "react-router-dom";

interface CertificateProps {
    label: string,
    issuedBy: string,
    startDate: string,
    expireDate: string,
    routeTo: string
}

export default function Certificate({label, issuedBy, startDate, expireDate, routeTo}: CertificateProps) {
    return (
        <Link to={routeTo} className="mt-5 flex flex-col">
            <div className="w-full flex flex-wrap items-center max-lg:text-sm max-lg:text-ellipsis max-lg:pr-5">
                <Link to={routeTo} target="_blank" rel="noopener"> <p className="truncate ... hover:text-primary max-lg:text-sm text-stone-600 font-palanquin font-semibold"> {label} </p> </Link>
                <span className="mx-2"> By </span>
                <p className="max-lg:text-sm text-stone-600 font-palanquin font-semibold"> {issuedBy} </p>
            </div>
            <div className="mt-3 flex items-center text-sm font-semibold">
                <span> From: {startDate}</span>
                <span className="mx-2"> - </span>
                <span> To: {expireDate} </span>
            </div>
        </Link>
    )
}
