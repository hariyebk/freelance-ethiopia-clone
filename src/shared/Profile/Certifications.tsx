import useApi from "../../context/hook";
import Certificate from "../pieces/Certificate";
import TitleAndEdit from "../pieces/TitleAndEdit";


export default function Certifications() {
    const {user} = useApi()
    return (
        <section className="profile_container lg:mb-20">
            <TitleAndEdit title="Certifications" routeTo="edit-certification" />
            {!user?.certificates ? (
                <p className="no-posts mt-8"> You have added no certificates to your profile </p>
            ) : 
            (
                user.certificates.map((certificate) => {
                    return (
                        <Certificate title={certificate.title} presentedBy={certificate.presentedBy} issuedDate={certificate.issuedDate} expirationDate={certificate.expirationDate} link={certificate.link}   />
                    )
                })
            )
            }
        </section>
    )
}
