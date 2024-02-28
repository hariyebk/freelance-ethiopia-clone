import { useMutation, useQuery, useQueryClient} from "@tanstack/react-query"
import { FetchAllPosts, FetchFullUserData, Login, Logout, Signup, UpdateUserAccountType, UploadAvatar, createPost1, createPost2, deletePostById, findMyPosts, findPostById, getCurrentUser } from "../Supabase/Api_Endpoints"
import toast from "react-hot-toast"
import { useNavigate, useParams } from "react-router-dom"
import { signUpType } from "../../pages/Register"
import { authenticated } from "../../constants"
import useApi from "../../context/hook"
import { POST1, POST2 } from "../../types"

// Query and Mutation hooks

// CREATE NEW USER
export const useSignup = () => {
    const navigate = useNavigate()
    return useMutation({
        mutationFn: (userData: signUpType) => Signup(userData),
        onSuccess: (response) => {
            navigate(`/register/${response.data[0].id}/upload-photo`)
        },
        onError: (error) => toast.error(error.message)
    })
}
// LOGIN
export const useLogin = () => {
    const {setRole, setUser} = useApi()
    const navigate = useNavigate()
    return useMutation({
        mutationFn: ({email, password}: {email: string, password: string}) => Login(email, password),
        onSuccess: (data) => {
            toast.success("you are logged in")
            if(data.user.type){
                setRole(data.user.type)
                setUser(data.user)
                return navigate("/profile-type")
            }
        },
        onError: (error) => toast.error(error.message)
    })
}
// LOGOUT
export const useLogout = () => {
    const {setRole, setUser} = useApi()
    const navigate = useNavigate()
    return useMutation({
        mutationFn: Logout,
        onSuccess: () => {
            setRole("")
            setUser(null)
            toast.success("you are logged out")
            return navigate("/login")
        },
        onError: () => toast.error("logout failed please try again")
    })
}
// UPLOAD AVATAR
export const useUploadAvatar = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    return useMutation({
        mutationFn: (imageInfo: File) => UploadAvatar(id!, imageInfo),
        onSuccess: () => {
            navigate(`/profile-type/${id}/new`)
        },
        onError: () => toast.error("uploading the image has failed, please try again") 
    })
}
// GET CURRENT USER
export const useGetCurrentUser = () => {
    const {isLoading, data} = useQuery({
        queryKey: ["user"],
        queryFn: getCurrentUser
    })
    return {isLoading, isAuthenticated: data?.user?.role === authenticated, data}
}
// GET FULL USER INFO
export const useGetUserInfo = () => {
    const {isLoading, data} = useQuery({
        queryKey: ["user_info"],
        queryFn:  FetchFullUserData
    })
    return {isLoading, data}

}
// UPDATE ACCOUNT TYPE
export const useUpdateAccountType = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const {setRole, setUser} = useApi()
    return useMutation({
        mutationFn: (accountType: string) => UpdateUserAccountType(id!, accountType),
        onSuccess: (data) => {
            setRole(data.user[0].type)
            setUser(data.user[0])
            toast.success("account created successfully")
            navigate(`/profile-type/`)
        },
        onError: () => toast.error("failed to set your account type")
    })
}
//  CREATE FIRST POST SECTION
export const useCreatePost1 = () => {
    const navigate = useNavigate()
    return useMutation({
        mutationFn: (post: POST1) => createPost1(post),
        onSuccess: (data) => {
            if(!data.jobpost?.length){
                return toast.error("failed to create the post, please try agian")
            }
            navigate(`/post/${data?.jobpost[0].id}/descriptions`)
        },
        onError: (error) => toast(error.message)
    })
}
// CREATE SECOND POST SECTION
export const useCreatePost2 = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    return useMutation({
        mutationFn: (post: POST2) => createPost2(id!, post),
        onSuccess: (data) => {
            if(data.data.length === 0){
                return toast.error("failed to create the post, something went wrong")
            }
            toast.success("post has been successfully created")
            navigate("/my-posts")
        },
        onError: (error) => toast(error.message)
    })
}
// FIND POST BY ID
export const useFindPostById = () => {
    const {id} = useParams()
    const {isLoading, data} = useQuery({
        queryKey: ["find_post"],
        queryFn: () =>  findPostById(id!)
    })
    return {isLoading, data}
}
// FETCH ALL MY POSTS
export const useFetchAllMyPosts = () => {
    const {user} = useApi()
    const name = user?.firstName as string
    const {isLoading, data} = useQuery({
        queryKey: ["my-posts"],
        queryFn: () =>  findMyPosts(name)
    })

    return {isLoading, data}
}
// DELETE POST BY ID
export const useDeletePostById = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (id: number) => deletePostById(id),
        onSuccess: (data) => {
            if(data.post.length === 0){
                return toast.error("failed to delete the post, please try agin")
            }
            queryClient.invalidateQueries({
                queryKey: ["my-posts"]
            })
            toast.success(`post has been successfully deleted`)
        },
        onError: (error) => toast.error(error.message)
    })
}
// FETCH ALL POSTS
export const useFetchAllPosts = () => {
    const {isLoading, data} = useQuery({
        queryKey: ["posts"],
        queryFn: FetchAllPosts
    })
    return {isLoading, data}
}