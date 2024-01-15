import { IoClose } from "react-icons/io5";
import Certificate from "../../../pieces/Certificate";

export default function MainComponentForCertification() {
    return (
        <section className="mt-10 mx-10">
            <div className="flex items-center justify-between gap-5">
                <Certificate label="The Ultimate React and Reudx Bootcamp"  issuedBy="Udemy" startDate="April-2023" expireDate="January-2023" routeTo="https://harun-space.vercel.app/portfolio" />
                <button className="hover:text-primary">
                    <IoClose style = {{fontSize: "20px"}} />
                </button>
            </div>
            <div className="mt-10">
                <button className="btn"> Update </button>
            </div>
        </section>
    )
}
