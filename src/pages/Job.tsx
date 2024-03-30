import { IoClose, IoSearchOutline } from "react-icons/io5";
import PostCard from "../shared/pieces/PostCard";
import { CiFilter } from "react-icons/ci";
import FilterOptions from "../shared/pieces/FilterOptions";
import useApi from "../context/hook";
import PostMain from "../shared/post/PostMain";
import { useFetchAllPosts, useFilterPosts, useSearchJob} from "../lib/Tanstackquery/queriesAndMutations";
import Spinner from "../shared/pieces/Spinner";
import PostHeader from "../shared/post/PostHeader";
import { useEffect, useState} from "react";
import { Box, CircularProgress } from "@mui/material";
import { useNavigate, useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";

export default function Job() {
    const {setOpenFilter} = useApi()
    const {isLoading, data} = useFetchAllPosts()
    const {isPending, mutate: filterPosts, data: filteredPosts} = useFilterPosts()
    const {isPending: isSearching, mutate: search, data: searchedPosts} = useSearchJob()
    const [searchQuery, setSearchQuery] = useState("")
    const [finalSearchString, setFinalSearchString] = useState("")
    const [searchParams, setSearchParams] = useSearchParams()
    const navigate = useNavigate()
    const {user, queryObj, role} = useApi()
    const checkIfNoDataExists = data?.posts.length === 0

    useEffect(() => {
        if(queryObj){
            filterPosts(queryObj)
        }
        if(finalSearchString){
            search(finalSearchString)
        }
        window.scrollTo(0, 0);
    }, [queryObj, filterPosts, finalSearchString, search]);

    function handleSearch(e?: React.FormEvent<HTMLFormElement> ){
        if(e) e.preventDefault()
        if(!role) return navigate("/login")
        if(!searchQuery) return toast.error("No query is provided")
        setFinalSearchString(searchQuery)
        searchParams.set("search", searchQuery)
        setSearchParams(searchParams)
    }
    function handleDeleteQuery(){
        setSearchQuery("")
        setFinalSearchString("")
        searchParams.delete("search")
        setSearchParams(searchParams)
    }


    if(isLoading){
        return (
            <Spinner />
        )
    }

    return (
        <section className="w-full mt-20">
            <div className="flex gap-8 lg:ml-44">
                <div className="container w-[700px] mb-20">
                    <div className="flex flex-col flex-1 shadow-md  p-2 my-14">
                        <div className="flex items-center justify-start border border-slate-200 rounded-lg pl-3">
                            <IoSearchOutline style = {{color: "#ef754c", fontSize: "20px"}} />
                            <form onSubmit={handleSearch} className="w-full">
                                <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} type="text" placeholder="Seacrh for job" className="w-full h-full ml-3 py-2.5 outline-none"  />
                            </form>
                            <button onClick={() => handleSearch()} className="bg-primary w-16 h-[50px] rounded-r-md flex justify-center items-center">
                                <IoSearchOutline style = {{color: "#fff", fontSize: "20px"}} />
                            </button>
                        </div>
                        {finalSearchString && <button onClick={handleDeleteQuery} className="bg-stone-800 w-fit ml-3 mt-5 px-5 py-2 text-white text-xs flex items-center gap-4 rounded-full">  
                            <span> {finalSearchString} </span>
                            <IoClose className = "text-white hover:text-primary w-4 h-4" />
                        </button>}
                        <div className="flex items-center justify-between mt-10 ml-5 pr-4">
                            <h1 className="text-2xl text-darkblue font-palanquin"> Jobs You Might Like </h1>
                            <button className="lg:hidden focus:outline-none mt-2" onClick={() => setOpenFilter(true)}>
                                <CiFilter style = {{fontSize: "40px", color: "#ef754c"}} />
                            </button>
                        </div>
                        <p className="mt-5 ml-6 text-sm text-primary font-semibold font-palanquin"> All jobs </p>
                        <hr className="relative top-[11px] w-20 ml-3 border border-t-2 border-primary" />
                        <hr className="mt-2 border border-t-1 border-gray-100 leading-5" />
                        <p className="text-[15px] ml-4 mt-5 text-gray-600 font-sans font-normal"> Browse jobs that match your experiace to a client’s hiring preference. Ordered by most relevant. </p>
                        <hr className="mt-3 border-t-2 border-gray-100 leading-5" />
                        
                        { isPending || isSearching ? (
                            <div className="w-full h-full pt-24 pb-48 flex items-start justify-center text-black ">
                                <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "center"}}>
                                    <CircularProgress size={40} color="inherit" />
                                </Box>
                            </div>

                        ): (queryObj && Object.keys(queryObj).length > 0 && filteredPosts?.length === 0) ?
                            <div className="my-16 ml-6">
                                <p className="no-posts"> No posts found that match your query 😔 </p>
                            </div> :
                            (finalSearchString && searchedPosts?.data.length == 0) ?  <div className="my-16 ml-6">
                            <p className="no-posts"> {`No posts found for ${finalSearchString}`}  😔 </p>
                            </div>
                            : checkIfNoDataExists ?  <div className="my-16 ml-6">
                                <p className="no-posts"> {user?.preference ? "No posts found according to your preferences 😣" :  "No posts found 😣"} </p>
                                </div> : 
                                // If Filters exist
                                (queryObj && Object.keys(queryObj).length > 0) ? (
                                    filteredPosts?.map((post) => {
                                        return (
                                            <PostCard key={post.id} post={post} Header = {
                                                <PostHeader title={post.title} id={post.id} />
                                            } MainSection = {
                                                <PostMain post={post} />
                                            } />
                                        )
                                    })
                                ) :
                                (finalSearchString && searchedPosts?.data && searchedPosts?.data?.length > 0) ? (
                                    searchedPosts?.data.map((post) => {
                                        return (
                                            <PostCard key={post.id} post={post} Header = {
                                                <PostHeader title={post.title} id={post.id} />
                                            } MainSection = {
                                                <PostMain post={post} />
                                            } />
                                        )
                                    })
                                )
                                :
                                (
                                data?.posts?.map((post) => {
                                    return (
                                        <PostCard key={post.id} post={post} Header = {
                                            <PostHeader title={post.title} id={post.id} />
                                        } MainSection = {
                                            <PostMain post={post} />
                                        } />
                                    )
                                })
                            )}
                    </div>
                </div>
                {!user?.preference && <div className="my-14 shadow-md max-lg:hidden lg:mr-10 pb-14 px-5 overflow-scroll overflow-x-hidden custom-scrollbar">
                    <FilterOptions/>
                </div>}
            </div>
        </section>
    )
}