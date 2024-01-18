import ApplicationFilter from "../shared/pieces/ApplicationFilter";
import PostCard from "../shared/pieces/PostCard";

export default function SavedJobs() {
    return (
        <section className="w-full mt-40 mb-20">
            <div className="mx-auto max-lg:w-full w-[800px] h-auto shadow-lg bg-slate-50 rounded-md pb-28 pt-10 px-10">
                <h2 className="text-2xl max-lg:text-xl text-stone-600 font-palanquin font-semibold"> Saved Jobs </h2>
                <ApplicationFilter saved = {true} />
                <PostCard saved={true} applied={true} />
            </div>
        </section>
    )
}
