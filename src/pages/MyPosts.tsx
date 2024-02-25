import PostLayout from "../shared/PostLayout";
import ApplicationFilter from "../shared/pieces/ApplicationFilter";
import PostCard from "../shared/pieces/PostCard";

export default function MyPosts(){
    return (
        <PostLayout title="My Posts">
            <div>
                <ApplicationFilter saved = {true} />
                <PostCard saved={true} />
            </div>
        </PostLayout>
    )
}
