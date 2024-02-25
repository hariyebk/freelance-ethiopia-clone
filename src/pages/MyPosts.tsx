import { Box, CircularProgress } from "@mui/material";
import { useFetchAllMyPosts } from "../lib/Tanstackquery/queriesAndMutations";
import PostLayout from "../shared/PostLayout";
import ApplicationFilter from "../shared/pieces/ApplicationFilter";
import PostCard from "../shared/pieces/PostCard";

export default function MyPosts(){
    const {isLoading, data} = useFetchAllMyPosts()
    console.log(data?.posts[0])

    // LOADING SPINNER
    if(isLoading){
        return (
            <div className="min-h-screen">
                <div className="flex items-center justify-center min-h-screen">
                    <Box sx={{ display: 'flex' }}>
                        <CircularProgress/>
                    </Box>
                </div>
            </div>
        )
    }

    return (
        <PostLayout title="My Posts">
            <div>
                <ApplicationFilter saved = {true} />
                <PostCard saved={true} post={data?.posts[0]} />
            </div>
        </PostLayout>
    )
}
