import { useGetUserInfo } from "../lib/Tanstackquery/queriesAndMutations";
import AcccountCard from "../shared/pieces/AcccountCard";
import ProfileType from "../shared/ProfileType";
import Box from "@mui/material/Box"
import CircularProgress from "@mui/material/CircularProgress";

export default function Profile(){
    const {isLoading, data} = useGetUserInfo()
    if(isLoading){
        return (
            <div className="min-h-screen">
                <div className="flex items-center justify-center h-screen">
                    <Box sx={{ display: 'flex' }}>
                        <CircularProgress/>
                    </Box>
                </div>
            </div>
        )
    }
    return (
        <section className="mb-20 mt-24 max-lg:mt-60 max-lg:mb-10">
            <ProfileType title="Choose your Profile" description="Here are a list of profiles you have created. You can chose the profile you want to post jobs to or look for work.">
                <AcccountCard name={`${data?.user.firstName} ${data?.user.lastName}`} role={data?.user.type} />
            </ProfileType>
        </section>
    )
}
