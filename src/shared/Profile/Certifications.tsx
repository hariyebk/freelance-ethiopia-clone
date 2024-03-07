import useApi from "../../context/hook";
import Certificate from "../pieces/Certificate";
import TitleAndEdit from "../pieces/TitleAndEdit";


export default function Certifications() {
    const {user} = useApi()

    return (
        <section className="profile_container lg:mb-20">
            <TitleAndEdit title="Certifications" routeTo="/edit-certification" add={Boolean(!user?.certifications)} />
            {!user?.certifications ? (
                <p className="no-posts mt-8"> You have added no certificates to your profile </p>
            ) : 
            (
                user.certifications.map((certificate) => {
                    return (
                        <div key={certificate.title} className="w-full pr-7">
                            <Certificate title={certificate.title} presentedBy={certificate.presentedBy} issuedDate={certificate.issuedDate} expirationDate={certificate.expirationDate} link={certificate.link}   />
                            {user?.certifications && user.certifications[user.certifications?.length - 1] === certificate ? null : <hr className="w-full lg:mx-2 mt-5 border-0.5 border-gray-300"/>}
                        </div>
                    )
                })
            )
            }
        </section>
    )
}
