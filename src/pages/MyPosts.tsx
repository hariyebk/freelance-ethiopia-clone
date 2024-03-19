import { useDeletePostById, useFetchAllMyPosts, useSortMyPosts } from "../lib/Tanstackquery/queriesAndMutations";
import PostLayout from "../shared/PostLayout";
import ApplicationFilter from "../shared/pieces/ApplicationFilter";
import PostCard from "../shared/pieces/PostCard";
import PostMain from "../shared/post/PostMain";
import PostHeader from "../shared/post/PostHeader";
import { AccountRoles, POST } from "../types";
import { FaEdit, FaTrash } from "react-icons/fa";
import useApi from "../context/hook";
import { useEffect, useState } from "react";
import PopOverDelete from "../shared/PopOverDelete";
import Spinner from "../shared/pieces/Spinner";
import { useNavigate, useSearchParams } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { Box, CircularProgress } from "@mui/material";


export default function MyPosts(){
    const {isLoading, data} = useFetchAllMyPosts()
    const {role} = useApi()
    const {isPending, mutate: deletePost} = useDeletePostById()
    const [openModal, setOpenModal] = useState(false)
    const [currentId, setCurrentId] = useState<number | null>(null)
    const [sort, setSort] = useState("")
    const [searchParams, setSearchParams] = useSearchParams()
    const closeModal = () => setOpenModal(false) 
    const handleOpenModal = () => setOpenModal(true)
    const {isPending: isSorting, mutate: sortPosts, data: sortedPosts} = useSortMyPosts()
    const navigate = useNavigate()
    const AreTherePosts = data?.posts?.length !== 0

    useEffect(() => {
        if(sort){
            sortPosts(sort)
        }
        window.scrollTo(0, 0);
    }, [sort, sortPosts]);

    function handleEditPost(post: POST){
        navigate(`/edit-post/${post.id}`)
    }

    function handleClick(post: POST){
        window.scrollTo(0, 0);
        handleOpenModal()
        setCurrentId(parseInt(post.id))
    }

    function handleDeleteSort(){
        searchParams.delete("sort")
        setSearchParams(searchParams)
        setSort("")
    }

    function handleDeletePost(id: number){
        window.scrollTo(0, 0);
        closeModal()
        deletePost(id)
    }

    if(openModal){
        return (
            <section className="min-h-screen">
                <PopOverDelete open={true} handleClose={closeModal}>
                    <div>
                        <p className="text-lg font-palanquin"> Are you sure you want to delete this job post ? </p>
                        <div className="w-full mt-10 pr-10 flex items-center justify-end gap-7">
                            <button className="px-8 py-2 border border-stone-800 bg-stone-800 text-sm text-slate-100 rounded-full" onClick={closeModal}> cancel </button>
                            <button onClick={() => handleDeletePost(currentId!) } className="px-8 py-2 bg-red-600 text-slate-100 text-sm font-palanquin rounded-full"> Delete </button>
                        </div>
                    </div>
                </PopOverDelete>
            </section>
        )
    }
    
    // LOADING SPINNER
    if(isLoading || isPending){
        return (
            <Spinner />
        )
    }

    return (
        <PostLayout title="My Posts">
            <div>
                <ApplicationFilter saved = {true} setSort={setSort} />
                {sort && <div className="mt-6 mb-10 -ml-2">
                    <button onClick={handleDeleteSort} className="bg-stone-800 w-fit ml-3 mt-5 px-5 py-2 text-white text-xs flex items-center gap-4 rounded-full">  
                        <span> {sort} </span>
                        <IoClose className = "text-white hover:text-primary w-4 h-4" />
                    </button>
                </div>
                }
            
                { !AreTherePosts ?  <div className="my-16 ml-5">
                        <p className="no-posts"> You haven't posted any jobs yet 😣 </p> 
                </div> : (
                    isSorting ? (
                        <div className="h-[350px] mt-20">
                            <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "center"}}>
                                <CircularProgress size={40} color="inherit" />
                            </Box>
                        </div>
                    ): sort ? (
                        sortedPosts?.map((post: POST) => {
                            return (
                                <div key={post.id}>
                                <PostCard post={post} Header = {
                                    <PostHeader title={post.title} id={post.id}>
                                        { role === AccountRoles.employer && <div className="flex items-center gap-7">
                                                <button onClick={() => handleEditPost(post)}>
                                                    <FaEdit className = "text-blue-600 w-5 h-5" />
                                                </button>
                                                <button onClick={() => handleClick(post)}>
                                                    <FaTrash className = "text-red-600 w-5 h-5" />
                                                </button>
                                            </div>  
                                        }
                                    </PostHeader>
                                } MainSection = {
                                    <PostMain post={post} />
                                } />
                                <hr className="border-t border-gray-300 shadow-lg w-full" />
                            </div>
                            )
                        })
                    ) : data?.posts.map((post) => {
                        return (
                            <div key={post.id}>
                                <PostCard post={post} Header = {
                                    <PostHeader title={post.title} id={post.id}>
                                        { role === AccountRoles.employer && <div className="flex items-center gap-7">
                                                <button onClick={() => handleEditPost(post)}>
                                                    <FaEdit className = "text-blue-600 w-5 h-5" />
                                                </button>
                                                <button onClick={() => handleClick(post)}>
                                                    <FaTrash className = "text-red-600 w-5 h-5" />
                                                </button>
                                            </div>  
                                        }
                                    </PostHeader>
                                } MainSection = {
                                    <PostMain post={post} />
                                } />
                                <hr className="border-t border-gray-300 shadow-lg w-full" />
                            </div>
                        )
                    })
                )
                }
            </div>
        </PostLayout>
    )
}
