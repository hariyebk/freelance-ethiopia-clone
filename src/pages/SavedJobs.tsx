import { useEffect } from "react";
import PostLayout from "../shared/PostLayout";
import ApplicationFilter from "../shared/pieces/ApplicationFilter";
import PostCard from "../shared/pieces/PostCard";
import PostHeader from "../shared/post/PostHeader";
import PostMain from "../shared/post/PostMain";

export default function SavedJobs(){

    // TODO: FETCH THE USERS SAVED POSTS
    const data:{posts: []} = {
        posts: []
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <PostLayout title="Saved Jobs">
            <ApplicationFilter saved = {true} />
            { data?.posts.length === 0 ?  <div className="my-16 ml-6">
                    <p className="no-posts"> You have no saved posts </p>
                </div> : (
                    data.posts.map((post) => {
                        return (
                            <PostCard post={post} Header = {
                                <PostHeader title="" id="" savedPage={true} />
                            } MainSection = {
                                <PostMain post={post} />
                            } />

                        )
                    })
                )
            }
        </PostLayout>
    )
}
