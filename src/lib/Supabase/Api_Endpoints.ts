import supabase from "./config"
import { signUpType } from "../../pages/Register"
import { POST1, POST2 } from "../../types"


// TODO: FOR FORGET PASSWORD -  supabase.auth.resetPasswordForEmail
// API ENDPOINTS
export async function Signup(userInfo: signUpType){
    // create the new user in the table
    const { data, error } = await supabase
    .from("users")
    .insert([
        { firstName: userInfo.firstName, lastName: userInfo.lastName, email: userInfo.email, bio: userInfo.bio, birthDate: userInfo.birthDate, gender: userInfo.gender, country: userInfo.country, city: userInfo.city, type: "", avatar: "" , phone: `0${userInfo.phone}`, preference: ""},
    ])
    .select()
    
    if(error) throw new Error(error.message)

    // For Authentication
    const {error: error1} = await supabase.auth.signUp({
        email: userInfo.email,
        password: userInfo.password,
    })
    // Login the user automatically
    Login(userInfo.email, userInfo.password)
    
    if(error1) throw new Error(error1.message)

    return {data}
}
export async function Login(email: string, password: string){
    const {data, error} = await supabase.auth.signInWithPassword({
        email,
        password
    })
    if(error) throw new Error(error.message)
    const {data: user, error: error1} = await supabase.from("users").select("*").eq("email", data.user.email).single()
    if(error1) throw new Error(error1.message)
    return {user}  
}
export async function Logout(){
    const {error} = await supabase.auth.signOut()
    if(error) throw Error(error.message)
}
export async function getCurrentUser(){
    const {data: session} = await supabase.auth.getSession()
    if(!session.session) return null
    const {data, error} = await supabase.auth.getUser()
    if(error) throw new Error(error.message)
    return data
}
export async function FetchFullUserData(){
    const data = await getCurrentUser()
    if(!data) return null
    const {data: user, error} = await supabase.from("users").select("*").eq("email", data.user.email).single()
    if(error) return null
    return {user}    
}
export async function updatePassword({email , currentPassword, newPassword}: {email: string, currentPassword: string, newPassword: string}){
    // check if the current password is correct
    const {error} = await supabase.auth.signInWithPassword({
        email,
        password: currentPassword
    })
    if(error) throw new Error("your current password is incorrect")
    //  if the current password is correct , update the users password.
    const {data, error: error1} = await supabase.auth.updateUser({password: newPassword})
    if(error1) throw new Error(error1.message)
    return {data}
    
}
export async function UploadAvatar(id: string, imageInfo: File){
    const bucketName = import.meta.env.VITE_STORAGE_BUCKET_NAME as string
    const imageUrl = import.meta.env.VITE_IMAGE_URL as string
    const imagename = imageInfo.name.replace("/", "")
    const {error: fileUploadError, data: image } = await supabase.storage.from(bucketName).upload(imagename, imageInfo)
    if(fileUploadError) throw new Error(fileUploadError.message)
    const {data, error} = await supabase.from("users").update({avatar: `${imageUrl}/${image.path}`}).eq("id", id)
    if(error) throw new Error(error.message)
    return {data}
}
export async function UpdateUserAccountType (id: string, accountType: string){
    const {data: user, error} = await supabase.from("users").update({type: accountType}).eq("id", id).select("*")
    if(error) throw new Error(error.message)
    return {user}
}
export async function createPost1(post: POST1){
    const {data:jobpost, error} = await supabase.from("post").insert([{
        postedBy: post.postedBy,
        title: post.title,
        site: post.site,
        type: post.type,
        level: post.level,
        sector: post.sector,
        compensationType: post.compensationType,
        location: post.location ? post.location : null,
        gender: post.gender,
        deadline: post.deadline,
        quantity: parseInt(post.quantity)
    }]).select()
    if(error?.message) throw new Error(error.message)
    return {jobpost}
}
export async function createPost2(id: string, post: POST2){ 
    const {data, error} = await supabase.from("post").update({ description: post.description, salary: post.salary ? parseInt(post.salary) : null, 
        responsibilities: post.responsibilities.replace(/[\n\r]/g, "").split(","),
        requirments: post.requirments.replace(/[\n\r]/g, "").split(","),
        qualifications: post.qualifications ? post.qualifications.split(",") : null,
        howToApply: post.howToApply ? post.howToApply.replace(/[\n\r]/g, "") : null
    }).eq("id", id).select()

    if(error) throw new Error(error.message)
    console.log(error)

    return {data}
}
export async function findPostById(id: string){
    const {data:post, error} = await supabase.from("post").select("*").eq("id", id).single()
    if(error) throw new Error(error.message)
    return {post}
}
export async function findMyPosts(name: string){
    const {data: posts, error} = await supabase.from("post").select("*").eq("postedBy", name).order('created_at', {
        ascending: false
    }).select()
    if(error) throw new Error(error.message)
    return {posts}
}
export async function deletePostById(id: number){
    const {data:post, error} = await supabase.from("post").delete().eq("id", id).select()
    if(error) throw new Error(error.message)
    return {post}
}
export async function FetchAllPosts(){
    const {data: posts, error} = await supabase.from("post").select("*", {count: "exact"})
    if(error) throw new Error(error.message)
    return {posts}
}
export async function updateUserPreference(id: string, sector: string){
    const {data: user, error} = await supabase.from("users").update({preference: sector}).eq("id", id).select("*")
    if(error) throw new Error(error.message)
    return {user}
}
// export async function apply(userId: number, postId: string, coverLetter: string){
//     const application = {
//         applicantId: userId,
//         coverLetter: coverLetter
//     }

//     const {data: user, error} = await supabase.from("post").update({}).eq("id", postId).select("*")
//     if(error) throw new Error(error.message)
//     return {user}    
// }