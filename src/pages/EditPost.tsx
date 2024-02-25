import { Box, CircularProgress } from "@mui/material"
import { useFindPostById } from "../lib/Tanstackquery/queriesAndMutations"
import { Post, PostDescriptions } from "."


export default function EditPost(){
    const {isLoading, data} = useFindPostById()
    console.log(data)

    // LOADING SPINNER
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
        <div className="min-h-screen mx-32">
            <div className="">
                <p className="text-2xl text-stone-500 font-semibold"> First section of the post </p>
                <Post title={data?.post.title} site={data?.post.site} type={data?.post.type} level={data?.post.level} sector={data?.post.sector} compensationType={data?.post.compensationType} location={data?.post.location} gender={data?.post.gender} deadline={data?.post.deadline} quantity={data?.post.quantity} />
            </div>
            <div className="">
                <p className="text-2xl text-stone-500 font-semibold"> Second section of the post </p>
                <PostDescriptions description={data?.post.description} responsibilities={data?.post.responsibilities} requirments={data?.post.requirments} qualifications={data?.post.qualifications} salary={data?.post.salary} howToApply={data?.post.howToApply} />
            </div>

        </div>
    )
}
