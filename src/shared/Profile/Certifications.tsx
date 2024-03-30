import useApi from "../../context/hook";
import { useFindUserById } from "../../lib/Tanstackquery/queriesAndMutations";
import Certificate from "../pieces/Certificate";
import Spinner from "../pieces/Spinner";
import TitleAndEdit from "../pieces/TitleAndEdit";

interface CertificateType {
    title: string,
    presentedBy: string,
    issuedDate: string,
    expirationDate: string,
    link?: string
}

export default function Certifications() {
    const {user} = useApi()
    const {isLoading, data} = useFindUserById()

    if(isLoading){
        return (
            <Spinner />
        )
    }

    return (
        <section className="profile_container lg:mb-20">
            {data?.user ? <h3 className="mt-3 text-lg text-black font-semibold"> Certifications </h3> : <TitleAndEdit title="Certifications" routeTo="/edit-certification" add={Boolean(!user?.certifications)} />}
            {data?.user ? data?.user.certifications ? data.user.certifications.map((certificate: CertificateType) => {
                return (
                <div key={certificate.title} className="w-full pr-7">
                    <Certificate title={certificate.title} presentedBy={certificate.presentedBy} issuedDate={certificate.issuedDate} expirationDate={certificate.expirationDate} link={certificate.link}   />
                    {data.user?.certifications && data.user.certifications[data.user.certifications?.length - 1] === certificate ? null : <hr className="w-full lg:mx-2 mt-5 border-0.5 border-gray-300"/>}
                </div>
            )
            }) : <p className="mt-6 max-sm:leading-7 md:ml-4 text-base text-gray-600"> certifications are not specified </p>
            :
            !user?.certifications ? (
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
