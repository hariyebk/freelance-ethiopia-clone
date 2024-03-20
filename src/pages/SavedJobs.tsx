import { useEffect, useState } from "react";
import PostLayout from "../shared/PostLayout";
import ApplicationFilter from "../shared/pieces/ApplicationFilter";
import PostCard from "../shared/pieces/PostCard";
import PostHeader from "../shared/post/PostHeader";
import PostMain from "../shared/post/PostMain";
import useApi from "../context/hook";
import { useSearchParams } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { useSortSavedPosts } from "../lib/Tanstackquery/queriesAndMutations";
import { POST } from "../types";
import { Box,  CircularProgress } from "@mui/material";

export default function SavedJobs(){
    const {user} = useApi()
    const [sort, setSort] = useState("")
    const [searchParams, setSearchParams] = useSearchParams()
    const {isPending, mutate: sortPosts, data: sortedPosts} = useSortSavedPosts()

    useEffect(() => {
        if(sort){
            sortPosts(sort)
        }
        window.scrollTo(0, 0);
    }, [sort, sortPosts]);

    function handleDeleteSort(){
        searchParams.delete("sort")
        setSearchParams(searchParams)
        setSort("")
    }


    return (
        <section className="mb-48">
            <PostLayout title="Saved Jobs">
                <div className="mb-5">
                    { user?.saved_posts ? <ApplicationFilter setSort={setSort} saved = {true} /> : null}
                    {sort && <div className="-ml-2 mt-3 mb-14">
                        <button onClick={handleDeleteSort} className="bg-stone-800 w-fit ml-3 mt-5 px-5 py-2 text-white text-xs flex items-center gap-4 rounded-full">  
                            <span> {sort} </span>
                            <IoClose className = "text-white hover:text-primary w-4 h-4" />
                        </button>
                    </div>
                    }
                    {isPending ? (
                        <div className="h-[350px] mt-20">
                            <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "center"}}>
                                <CircularProgress size={40} color="inherit" />
                            </Box>
                        </div>
                    ) :
                    
                    sort ? sortedPosts?.map((post: POST) => {
                        return (
                            <div key={post.id}>
                                <PostCard post={post} Header = {
                                    <PostHeader title={post.title} id={post.id}/>
                                } MainSection = {
                                    <PostMain post={post} />
                                } />
                            </div>
                        )
                    }) : !user?.saved_posts ?  <div className="my-16 ml-6">
                            <p className="no-posts"> You have no saved posts </p>
                        </div> : (
                            user?.saved_posts?.map((post) => {
                                return (
                                    <div key={post.id}>
                                        <PostCard post={post} Header = {
                                            <PostHeader title={post.title} id={post.id}/>
                                        } MainSection = {
                                            <PostMain post={post} />
                                        } />
                                    </div>

                                )
                            })
                        )
                    }
                </div>
            </PostLayout>
        </section>
    )
}
