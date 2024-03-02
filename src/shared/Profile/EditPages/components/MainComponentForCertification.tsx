import { FaTrash } from "react-icons/fa";
import Certificate from "../../../pieces/Certificate";

export default function MainComponentForCertification() {
    return (
        <section className="mt-10 mx-6">
            <div className="flex items-center justify-between gap-5">
                <Certificate label="The Ultimate React and Reudx Bootcamp"  issuedBy="Udemy" startDate="April-2023" expireDate="January-2023" routeTo="https://harun-space.vercel.app/portfolio" />
                <button className="hover:text-primary">
                    <FaTrash className = "w-4 h-4 text-red-600" />
                </button>
            </div>
            <div className="mt-10">
                <button className="btn"> Update </button>
            </div>
        </section>
    )
}
