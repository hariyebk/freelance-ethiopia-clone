import { Box, CircularProgress } from "@mui/material";
import { useFetchAllMyPosts } from "../lib/Tanstackquery/queriesAndMutations";
import PostLayout from "../shared/PostLayout";
import ApplicationFilter from "../shared/pieces/ApplicationFilter";
import PostCard from "../shared/pieces/PostCard";
import PostMain from "../shared/post/PostMain";

export default function MyPosts(){
    const {isLoading, data} = useFetchAllMyPosts()

    // LOADING SPINNER
    if(isLoading){
        return (
            <div className="min-h-screen">
                <div className="flex items-center justify-center min-h-screen">
                    <Box sx={{ display: 'flex' }}>
                        <span className="h-full">
                            <CircularProgress/>
                        </span>
                    </Box>
                </div>
            </div>
        )
    }

    return (
        <PostLayout title="My Posts">
            <div>
                <ApplicationFilter saved = {true} />
                <PostCard saved={true} post={data?.posts[0]}>
                    <PostMain saved={true} post={data?.posts[0]} />
                </PostCard>
            </div>
        </PostLayout>
    )
}
