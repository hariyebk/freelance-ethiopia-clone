import { useEffect } from "react";
import PostLayout from "../shared/PostLayout";
import ApplicationFilter from "../shared/pieces/ApplicationFilter";
import PostCard from "../shared/pieces/PostCard";
import PostHeader from "../shared/post/PostHeader";
import PostMain from "../shared/post/PostMain";
import useApi from "../context/hook";

export default function SavedJobs(){
    const {user} = useApi()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <PostLayout title="Saved Jobs">
            <ApplicationFilter saved = {true} />
            { !user?.saved_posts ?  <div className="my-16 ml-6">
                    <p className="no-posts"> You have no saved posts </p>
                </div> : (
                    user?.saved_posts?.map((post) => {
                        return (
                            <PostCard post={post} Header = {
                                <PostHeader title={post.title} id={post.id}/>
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
