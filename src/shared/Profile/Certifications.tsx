import Certificate from "../pieces/Certificate";
import TitleAndEdit from "../pieces/TitleAndEdit";


export default function Certifications() {
    return (
        <section className="profile_container mb-20">
            <TitleAndEdit title="Certifications" routeTo="/" />
            <Certificate title="https://harun-space.vercel.app/portfolio" issuedBy="Udemy" startDate="April-2023" expireDate="January-2023" routeTo="/" />
        </section>
    )
}
