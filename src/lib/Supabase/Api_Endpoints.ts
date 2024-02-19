import supabase from "./config"
import { signUpType } from "../../pages/Register"

// API ENDPOINTS
export async function Signup(userInfo: signUpType){
    // create the new user in the table
    const { data, error } = await supabase
    .from("users")
    .insert([
        { firstName: userInfo.firstName, lastName: userInfo.lastName, bio: userInfo.bio, birthDate: userInfo.birthDate, gender: userInfo.gender, country: userInfo.country, city: userInfo.city, type: "", avatar: "" , phone: `0${userInfo.phone}`},
    ])
    .select()
    
    if(error) throw new Error(error.message)

    // For Authentication
    const {error: error1} = await supabase.auth.signUp({
        email: userInfo.email,
        password: userInfo.password,
    })

    if(error1) throw new Error(error1.message)

    return {data}
}
export async function Login(email: string, password: string){
    const {data, error} = await supabase.auth.signInWithPassword({
        email,
        password
    })
    if(error) throw new Error(error.message)
    return {data}
}
export async function Logout(){
    const {error} = await supabase.auth.signOut()
    if(error) throw new Error(error.message)
}
export async function getCurrentUser(){
    const {data: session} = await supabase.auth.getSession()
    if(!session.session) return null
    const {data, error} = await supabase.auth.getUser()
    if(error) throw new Error(error.message)
    return data
}
export async function UploadAvatar(id: string, imageInfo: File){
    const bucketName = import.meta.env.VITE_STORAGE_BUCKET_NAME as string
    const imageUrl = import.meta.env.VITE_IMAGE_URL as string
    const imagename = imageInfo.name.replace("/", "")
    const {error: fileUploadError, data: image } = await supabase.storage.from(bucketName).upload(imagename, imageInfo)
    if(fileUploadError) throw new Error(fileUploadError.message)
    // TODO: update the user's data to include a url for their avatar
    const {data, error} = await supabase.from("users").update({avatar: `${imageUrl}/${image.path}`}).eq("id", id)
    if(error) throw new Error(error.message)
    return {data}
}
