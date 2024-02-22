import { useMutation, useQuery} from "@tanstack/react-query"
import { FetchFullUserData, Login, Logout, Signup, UpdateUserAccountType, UploadAvatar, createPost1, getCurrentUser } from "../Supabase/Api_Endpoints"
import toast from "react-hot-toast"
import { useNavigate, useParams } from "react-router-dom"
import { signUpType } from "../../pages/Register"
import { authenticated } from "../../constants"
import useApi from "../../context/hook"
import { POST1 } from "../../types"

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
    return useMutation({
        mutationFn: (accountType: string) => UpdateUserAccountType(id!, accountType),
        onError: () => toast.error("failed to set your account type")
    })
}
//  CREATE FIRST POST SECTION
export const useCreatePost = () => {
    const navigate = useNavigate()
    return useMutation({
        mutationFn: (post: POST1) => createPost1(post),
        onSuccess: (data) => {
            console.log(data)
            navigate(`/post/${data.jobpost[0].id}/descriptions`)
        },
        onError: (error) => toast(error.message)
    })
}