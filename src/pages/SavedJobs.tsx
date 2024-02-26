import PostLayout from "../shared/PostLayout";
import ApplicationFilter from "../shared/pieces/ApplicationFilter";
import PostCard from "../shared/pieces/PostCard";
import PostMain from "../shared/post/PostMain";

export default function SavedJobs() {
    return (
        <PostLayout title="Saved Jobs">
            <div>
                <ApplicationFilter saved = {true} />
                <PostCard saved={true}>
                    <PostMain applied={true} />
                </PostCard>
            </div>
        </PostLayout>
    )
}
