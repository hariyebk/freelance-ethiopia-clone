import { Box, CircularProgress } from "@mui/material";
import useApi from "../../../../context/hook";
import { useGeneral } from "../../../../lib/Tanstackquery/queriesAndMutations";
import EducationItem, { EducationProps } from "../../../pieces/EducationItem";
import { FaTrash } from "react-icons/fa";

interface Props {
    isEditing?: boolean
}

export default function MainComponentForEducation({isEditing}: Props) {
    const {user} = useApi()
    const {isPending, mutate: deleteEducation} = useGeneral({
        isTobeDeleted: true,
        successMessage: "Education deleted successfully"
    })

    function handleDeleteEducation(education: EducationProps){
        deleteEducation({
            value: education,
            column_name: "education",
        })
    }

    return (
        <section className="mx-3 mt-6"> 
            {!user?.education ? (
                <p className="no-post mt-16 ml-14 lg:ml-24"> Start by adding You Education background </p>
            ) :( 
            user?.education?.map((education) => {
                return (
                    <div key={education.fieldOfStudy}>
                        <div className="flex items-center justify-between gap-3">
                            <EducationItem 
                                isEditing={isEditing}
                                institute={education.institute} 
                                enrolled_in={education.enrolled_in}
                                fieldOfStudy={education.fieldOfStudy} 
                                startDate={education.startDate}
                                finishedDate={education.finishedDate} />
                            {isPending ? (
                                <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "center"}}>
                                    <CircularProgress size={20} color="inherit" />
                                </Box>
                            ) : 
                            <button onClick={() => handleDeleteEducation(education)} className="hover:text-primary">
                                <FaTrash className = "w-4 h-4 text-red-600" />
                            </button>
                            }
                        </div>
                        {user.education && user.education[user.education?.length - 1] === education ? null : <hr className="w-full lg:mx-8 lg:my-6 mt-3 border-t border-gray-200" />}
                    </div>
                )
            })
            )
            }
        </section>
    )
}
