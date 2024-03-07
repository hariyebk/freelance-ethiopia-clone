import { Box, CircularProgress } from "@mui/material";
import useApi from "../../../../context/hook";
import { useGeneral } from "../../../../lib/Tanstackquery/queriesAndMutations";
import Experience, { ExperienceProps } from "../../Experience";
import { FaTrash } from "react-icons/fa";

interface Props {
    isEditing?: boolean
}

export default function MainComponentForWork({isEditing}: Props){
    const {user} = useApi()
    const {isPending, mutate: deleteExperience} = useGeneral({
        isTobeDeleted: true,
        successMessage: "Experience deleted suceessfully"
    })

    function handleDeleteExperience(experience: ExperienceProps){
        deleteExperience({
            value: experience,
            column_name: "experiences"
        })
    }
    

    return (
        <section className="max-lg:mt-3 mt-10 max-lg:mx-3 mx-6">
            <div>
            { !user?.experiences ? (
                <p className="no-post mt-10 ml-14 lg:ml-20"> Start by adding your experiences </p>
            ) :
            user.experiences.map((experience) => {
                return (
                    <div key={experience.company}>
                        <div className="w-full flex items-start justify-between">
                            <Experience
                                isEditing={isEditing}
                                position={experience.position}
                                company={experience.company}
                                location= {experience.location}
                                startDate={experience.startDate}
                                finishedDate={experience.finishedDate}
                                contribution={experience.contribution}
                            />
                            <button onClick={() => handleDeleteExperience(experience)} className="hover:text-primary mt-7">
                                {isPending ? (
                                    <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "center"}}>
                                        <CircularProgress size={20} color="inherit" />
                                    </Box>
                                ) : 
                                <FaTrash className = "w-4 h-4 text-red-600" />
                                }
                            </button>
                        </div>
                        {user.experiences && user.experiences[user.experiences?.length - 1] === experience ? null : <hr className="w-full lg:mx-8 mt-5 lg:my-6 border-0.5 border-gray-300"/>}
                    </div>
                )
            })
            }       
            </div>
        </section>
    )
}
