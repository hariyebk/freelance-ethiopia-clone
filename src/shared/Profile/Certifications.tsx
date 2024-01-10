import { useLocation } from "react-router-dom";
import Certificate from "../pieces/Certificate";
import TitleAndEdit from "../pieces/TitleAndEdit";


export default function Certifications() {
    const {pathname} = useLocation()
    return (
        <section className="profile_container lg:mb-20">
            <TitleAndEdit title="Certifications" routeTo={`${pathname}/edit-certification`} />
            <Certificate label="The Ultimate React and Reudx Bootcamp"  issuedBy="Udemy" startDate="April-2023" expireDate="January-2023" routeTo="https://harun-space.vercel.app/portfolio" />
        </section>
    )
}
