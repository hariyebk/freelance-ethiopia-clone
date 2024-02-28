import PostLayout from "../shared/PostLayout";
import ApplicationFilter from "../shared/pieces/ApplicationFilter";
import PostCard from "../shared/pieces/PostCard";
import PostHeader from "../shared/post/PostHeader";
import PostMain from "../shared/post/PostMain";

export default function SavedJobs(){
    // TODO: FETCH THE USERS SAVED POSTS
    return (
        <PostLayout title="Saved Jobs">
            <div>
                <ApplicationFilter saved = {true} />
                <PostCard Header = {
                    <PostHeader title="" saved={true} />
                } MainSection = {
                    <PostMain applied={true} />
                } />
            </div>
        </PostLayout>
    )
}
