import { useMutation, useQuery, useQueryClient} from "@tanstack/react-query"
import { DeleteElement, FetchAllPosts, FetchFullUserData, Login, Logout, Signup, UpdateElement, UpdateOrDeleteLanguages, UpdateUserAccountType, UploadAvatar, apply, createPost1, createPost2, deletePostById, fetchAllPostApplications, filterPosts, findMyPosts, findPostById, findUserById, getCurrentUser, rejectApplication, savePost, shortListApplication, unSavePost, updatePassword, updatePost, updateUserBio, updateUserData, updateUserPreference } from "../Supabase/Api_Endpoints"
import toast from "react-hot-toast"
import { useNavigate, useParams } from "react-router-dom"
import { authenticated } from "../../constants"
import useApi from "../../context/hook"
import { AccountRoles, POST1, POST2, signUpType} from "../../types"


// CREATE NEW USER
export const useSignup = () => {
    const navigate = useNavigate()
    return useMutation({
        mutationFn: (userData: signUpType) => Signup(userData),
        onSuccess: (response) => {
            navigate(`/register/${response?.data[0].id}/upload-photo`)
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
// UPDATE USER PASSWORD 
export const useUpdatePassword = () => {
    const navigate = useNavigate()
    const {user} = useApi()
    return useMutation(({
        mutationFn: ({currentPassword, newPassword}: {currentPassword: string, newPassword: string}) => updatePassword({email: user?.email as string, currentPassword, newPassword }),
        onSuccess: () => {
            toast.success("password has been changed, you need to login again")
            navigate("/login")
        },
        onError: (error) => toast.error(error.message)
    }))

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
// UPDATE USER PREFERENCE
export const useUpdatePreference = () => {
    const {user, setUser} = useApi()
    const id = user?.id as string
    const navigate = useNavigate()
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: ({sector, location}: {sector: string | null, location: string | null}) => updateUserPreference( id, {
            "sector": sector,
            "location": location
        }),
        onSuccess: (data) => {
            setUser(data.user[0])
            queryClient.invalidateQueries({
                queryKey: ["posts", "user"]
            })
            toast.success("your preference has been set")
            navigate("/job")
        },
        onError: (error) => toast.error(error.message)
    })
}
// UPDATE USER DATA
export const useUpdateUserData = () => {
    const {role, user, setUser} = useApi()
    const navigate = useNavigate()
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (userInfo: signUpType) => updateUserData(user?.id as string, userInfo),
        onSuccess: (data) => {
            setUser(data.user[0])
            queryClient.invalidateQueries({
                queryKey: ["user_info", "user"]
            })
            toast.success("Your data has been updated")
            role === AccountRoles.jobseeker ?  navigate("/my-profile") : navigate("/profile")
        }
    })
}
// UPDATE USER BIO
export const useUpdateUserBio = () => {
    const {user, setUser} = useApi()
    const navigate = useNavigate()
    return useMutation({
        mutationFn: (bio: string) => updateUserBio({
            userId: user?.id as string,
            bio
        }),
        onSuccess: (data) => {
            setUser(data.user[0]),
            toast.success("your bio has been updated")
            navigate("/my-profile")
        },
        onError: (error) => toast.error(error.message)
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
export const useUpdatePost = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: ({postId, post1, post2}: {postId: string, post1?: POST1, post2?: POST2}) =>  updatePost({
            postId,
            post1,
            post2
        }),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["posts", "my-posts"]
            })
            toast.success("post has been updated successfully")
        },
        onError: (error) => toast.error(error.message) 
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
                queryKey: ["posts", "my-posts"]
            })
            toast.success(`post has been successfully deleted`)
        },
        onError: (error) => toast.error(error.message)
    })
}
// FETCH ALL POSTS
export const useFetchAllPosts = () => {
    const {user} = useApi()
    const {isLoading, data} = useQuery({
        queryKey: ["posts"],
        queryFn: () => FetchAllPosts(user?.preference)
    })
    return {isLoading, data}
}
// APPLY FOR A JOB
export const useApply = () => {
    const {id} = useParams()
    const {user, setUser} = useApi()
    const navigate = useNavigate()
    return useMutation({
        mutationFn: ({userId, coverLetter}: {userId: string, coverLetter: string}) => apply(id!, userId, {
            "coverLetter": coverLetter,
            "applicant": user!
        }),
        onSuccess: (data) => {
            setUser(data.user[0])
            toast.success("application successfull")
            navigate("/applied")
        },
        onError: (error) => toast.error(error.message)
    })
}
// SAVE POST 
export const useSavePost = () => {
    const {user, setUser} = useApi()
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (postId: string) => savePost({userId: user?.id as string, postId}),
        onSuccess: (data) => {
            setUser(data.user[0])
            toast.success("post bookmarked")
            queryClient.invalidateQueries({
                queryKey: ["posts"]
            })
        },
        onError: (error) => toast.error(error.message)
    })
}
// UNSAVE POST
export const useUnSavePost = () => {
    const {user, setUser} = useApi()
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (postId: string) => unSavePost({postId, userId: user?.id as string}),
        onSuccess: (data) => {
            setUser(data.user[0])
            toast.success("post removed from bookmarks")
            queryClient.invalidateQueries({
                queryKey: ["posts"]
            })
        },
        onError: (error) => toast.error(error.message)
    })
}
// REFACTORED
export const useGeneral = ({isTobeDeleted, successMessage, dontRedirect}: {isTobeDeleted: boolean, successMessage: string, dontRedirect?: boolean}) => {
    const {user, setUser} = useApi()
    const navigate = useNavigate()
    return useMutation({
        mutationFn: ({
            value,
            column_name,
            limit,
            errorMessage,
        } : {
             // eslint-disable-next-line
            value: any,
            column_name: string,
            limit?: number,
            errorMessage?: string
        }) => isTobeDeleted ? DeleteElement({userId: user?.id as string, value, column_name}) : UpdateElement({userId: user?.id as string, value, column_name, limit: limit! , errorMessage: errorMessage!}),
        onSuccess: (data) => {
            setUser(data.user[0]),
            toast.success(successMessage)
            !isTobeDeleted && dontRedirect ? null : navigate("/my-profile")
        },
        onError: (error) => toast.error(error.message)
    })
}
// UPDATE OR DELETE LANGUAGES
export const useLanguage = ({close, isTobeDeleted}: {close: React.Dispatch<React.SetStateAction<boolean>>, isTobeDeleted?: boolean}) => {
    const {user, setUser} = useApi()
    return useMutation({
        mutationFn: ({language, languages}: {language?: string, languages?: {language: string, proficiency: string}[]}) => isTobeDeleted ? UpdateOrDeleteLanguages({
            userId: user?.id as string,
            isTobeDeleted: true,
            language
        }) : UpdateOrDeleteLanguages({
            userId: user?.id as string,
            languages
        }),
        onSuccess: (data) => {
            setUser(data.user[0])
            toast.success("language updated successfully")
            close(false)
        }
    })
}
// FILTER, PAGINATION AND SORTING
export const useFilterPosts = () => {
    return useMutation({
        mutationFn: ({type, level, sector, gender, location, site}: {type?: string, level?: string, sector?: string, gender?: string, location?: string, site?: string}) => filterPosts({
            type,
            level,
            sector,
            gender,
            location,
            site
        }),
        onError: (error) => toast.error(error.message)
    })
}
// FETCH POST APPLICATIONS
export const useFetchPostApplications = () => {
    const {user} = useApi()
    const {id} = useParams()
    const {isLoading, data: applications} = useQuery({
        queryKey: ["post_applications"],
        queryFn: () => fetchAllPostApplications({
            postedBy: user?.firstName as string,
            postId: id!
        })
    })
    return {isLoading, applications}
}
// FIND USER BY ID
export const useFindUserById = () => {
    const {id} = useParams()
    const {isLoading, data} = useQuery({
        queryKey: ["user"],
        queryFn: () => findUserById(id)
    })
    return {isLoading, data}
}
// REJECT JOB APPLICANT
export const useRejectApplicant = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: ({postId, userId}: {postId: string, userId: string}) => rejectApplication({
            postId,
            userId
        }),
        onSuccess: () => {
            toast.success("applicant has been rejected")
            // We need to separatley invalidate the queries.
            queryClient.invalidateQueries({
                queryKey: ["post_applications"]
            })
            queryClient.invalidateQueries({
                queryKey: ["user"]
            })
        }  
    })
}
// SHORTLIST JOB APPLICANT 
export const useShortListApplicant = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: ({postId, userId}: {postId: string, userId: string}) => shortListApplication({
            postId,
            userId
        }),
        onSuccess: () => {
            toast.success("applicant has been short-listed")
            queryClient.invalidateQueries({
                queryKey: ["post_applications"]
            })
            queryClient.invalidateQueries({
                queryKey: ["user"]
            })
        }  
    })
}
