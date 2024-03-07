import { FaTrash } from "react-icons/fa";
import Certificate from "../../../pieces/Certificate";
import useApi from "../../../../context/hook";
import { useGeneral } from "../../../../lib/Tanstackquery/queriesAndMutations";
import { Box, CircularProgress } from "@mui/material";

interface Props {
    isEditing?: boolean
}
export interface Certificate {
    title: string,
    presentedBy: string,
    issuedDate: string,
    expirationDate: string,
    link?: string
}

export default function MainComponentForCertification({isEditing}: Props){

    const {isPending, mutate: addCertificate} = useGeneral({
        isTobeDeleted: true,
        successMessage: "certificate has been added"
    })

    const {user} = useApi()

    function handleDelete(certificate: Certificate ){
        addCertificate({
            value: certificate,
            column_name: "certifications"
        })
    }

    return (
        <section className="mt-10 mx-6">
            <div>
                {!user?.certifications ? (
                    <p className="no-post mt-20 max-lg:ml-10 ml-28"> Start by adding your certificates </p>
                ) : user.certifications.map((certificate) => {
                    return (
                        <div  key={certificate.title}>
                            <div className="w-full flex items-center justify-between">
                                <div>
                                    <Certificate
                                    isEditing={isEditing}
                                    title={certificate.title} 
                                    issuedDate={certificate.issuedDate} 
                                    presentedBy={certificate.presentedBy} 
                                    expirationDate={certificate.expirationDate} 
                                    link={certificate.link} />
                                </div>
                                <button onClick={() => handleDelete(certificate)} className="hover:text-primary">
                                    {isPending ? (
                                            <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "center"}}>
                                                <CircularProgress size={20} color="inherit" />
                                            </Box>
                                        ) : 
                                        <FaTrash className = "w-4 h-4 text-red-600" />
                                    }
                                </button>
                            </div>
                            {user?.certifications && user.certifications[user.certifications?.length - 1] === certificate ? null : <hr className="w-full lg:mx-8 mt-5 lg:my-6 border-0.5 border-gray-300"/>}
                        </div>
                    )
                })
                }
            </div>
        </section>
    )
}
