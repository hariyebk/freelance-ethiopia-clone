import { useMutation} from "@tanstack/react-query"
import { Login, Logout, Signup, UploadAvatar } from "../Supabase/Api_Endpoints"
import toast from "react-hot-toast"
import { useNavigate, useParams } from "react-router-dom"
import { signUpType } from "../../pages/Register"

// Query and Mutation hooks

// CREATE NEW USER
export const useSignup = () => {
    const navigate = useNavigate()
    return useMutation({
        mutationFn: (userData: signUpType) => Signup(userData),
        onSuccess: (response) => {
            console.log(response.data)
            navigate(`/register/${response.data[0].id}/upload-photo`)
        },
        onError: (error) => toast.error(error.message)
    })
}

// LOGIN
export const useLogin = () => {
    const navigate = useNavigate()
    return useMutation({
        mutationFn: ({email, password}: {email: string, password: string}) => Login(email, password),
        onSuccess: () => {
            navigate('/profile-type')
        },
        onError: (error) => toast.error(error.message)
    })
}

// LOGOUT
export const useLogout = () => {
    const navigate = useNavigate()
    return useMutation({
        mutationFn: Logout,
        onSuccess: () => {
            navigate('/')
        },
        onError: () => toast.error("logout failed please try again")
    })
}

export const useUploadAvatar = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    return useMutation({
        mutationFn: (imageInfo: File) => UploadAvatar(id!, imageInfo),
        onSuccess: (response) => {
            console.log(response.data)
            navigate('/profile-type/new')
        },
        onError: () => toast.error("uploading the image has failed, please try again") 
    })
}