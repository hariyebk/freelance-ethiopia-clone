import { Link } from "react-router-dom";

interface CertificateProps {
    title: string,
    issuedBy: string,
    startDate: string,
    expireDate: string,
    routeTo: string
}

export default function Certificate({title, issuedBy, startDate, expireDate, routeTo}: CertificateProps) {
    return (
        <Link to={routeTo} className="mt-5 flex flex-col">
            <div className="flex items-center justify-between text-base text-stone-600 font-palanquin font-semibold">
                <h2> {title} </h2>
                <span className="mx-2"> By </span>
                <p> {issuedBy} </p>
            </div>
            <div className="mt-3 flex items-center text-sm font-semibold">
                <span> From: {startDate}</span>
                <span className="mx-2"> - </span>
                <span> To: {expireDate} </span>
            </div>
        </Link>
    )
}
