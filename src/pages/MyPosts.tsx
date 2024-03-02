import { useDeletePostById, useFetchAllMyPosts } from "../lib/Tanstackquery/queriesAndMutations";
import PostLayout from "../shared/PostLayout";
import ApplicationFilter from "../shared/pieces/ApplicationFilter";
import PostCard from "../shared/pieces/PostCard";
import PostMain from "../shared/post/PostMain";
import PostHeader from "../shared/post/PostHeader";
import { AccountRoles } from "../types";
import { FaEdit, FaTrash } from "react-icons/fa";
import useApi from "../context/hook";
import { useEffect, useState } from "react";
import PopOver from "../shared/PopOver";
import Spinner from "../shared/pieces/Spinner";

export default function MyPosts(){
    const {isLoading, data} = useFetchAllMyPosts()
    const {role} = useApi()
    const {isPending, mutate: deletePost} = useDeletePostById()
    const [openModal, setOpenModal] = useState(false)
    const [currentId, setCurrentId] = useState<number | null>(null)
    const closeModal = () => setOpenModal(false) 
    const handleOpenModal = () => setOpenModal(true)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    function handleEditPost(){

    }

    function handleDeletePost(id: number){
        window.scrollTo(0, 0);
        closeModal()
        deletePost(id)
    }

    if(openModal){
        return (
            <section className="min-h-screen">
                <PopOver open={true} handleClose={closeModal}>
                    <div>
                        <p className="text-lg font-palanquin"> Are you sure you want to delete this job post ? </p>
                        <div className="w-full mt-10 pr-10 flex items-center justify-end gap-7">
                            <button className="px-8 py-2 border border-stone-800 bg-stone-800 text-sm text-slate-100 rounded-full" onClick={closeModal}> cancel </button>
                            <button onClick={() => handleDeletePost(currentId!) } className="px-8 py-2 bg-red-600 text-slate-100 text-sm font-palanquin rounded-full"> Delete </button>
                        </div>
                    </div>
                </PopOver>
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
                <ApplicationFilter saved = {true} />
            
                { data?.posts.length === 0 ?  <div className="my-16 ml-6">
                        <p className="no-posts"> You haven't posted any jobs yet 😣 </p> 
                </div> : (
                    data?.posts.map((post) => {
                        return (
                            <div key={post.id}>
                                <PostCard post={post} Header = {
                                    <PostHeader title={post.title} id={post.id}>
                                        { role === AccountRoles.employer && <div className="flex items-center gap-7">
                                                <button onClick={handleEditPost}>
                                                    <FaEdit className = "text-blue-600 w-5 h-5" />
                                                </button>
                                                <button onClick={() => {
                                                    handleOpenModal()
                                                    setCurrentId(post.id)
                                                }}>
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
