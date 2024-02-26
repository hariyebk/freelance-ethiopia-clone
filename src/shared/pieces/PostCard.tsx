import { useState } from "react";
import {POST1, POST2 } from "../../types";
import PopOver from "../PopOver";
import PostSubHeader from "../post/PostSubHeader";
import PostHeader from "../post/PostHeader";


interface PostCardProps {
    saved?: boolean,
    post?: POST1 & POST2 & {
        id: string,
        created_at: string
    },
    children: React.ReactNode
}

export default function PostCard({post, children, saved}: PostCardProps){
    const [openModal, setOpenModal] = useState(false)
    const closeModal = () => setOpenModal(false) 
    const handleOpenModal = () => setOpenModal(true)

    function handleDeletePost(){

    }

    if(openModal){
        return (
            <section className="min-h-screen">
                <PopOver open={true} handleClose={closeModal}>
                    <div>
                        <p className="text-lg font-palanquin"> Are you sure you want to delete this job post ? </p>
                        <div className="w-full mt-10 pr-10 flex items-center justify-end gap-7">
                            <button className="px-8 py-2 border border-stone-800 bg-stone-800 text-sm text-slate-100 rounded-full" onClick={closeModal}> cancel </button>
                            <button onClick={handleDeletePost} className="px-8 py-2 bg-red-600 text-slate-100 text-sm font-palanquin rounded-full"> Delete </button>
                        </div>
                    </div>
                </PopOver>
            </section>
        )
    }

    return (
        <div className="flex flex-col items-start mt-10 max-lg:mx-2 ml-4 mr-3">
            {/* HEADER */}
            <PostHeader openModal={handleOpenModal} saved={saved} />
            {/* SUB-HEADER */}
            <PostSubHeader postedBy={post?.postedBy} created_at={post?.created_at} location={post?.location} />
            {/* POST-MAIN-SECTION */}
            {children}
        </div>
    )
}
