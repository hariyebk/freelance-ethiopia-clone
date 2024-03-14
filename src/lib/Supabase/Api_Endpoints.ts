import supabase from "./config"
import { signUpType, POST, POST1, POST2, USER} from "../../types"
import { ExperienceProps } from "../../shared/Profile/Experience"
import { EducationProps } from "../../shared/pieces/EducationItem"
import { Certificate } from "../../shared/Profile/EditPages/components/MainComponentForCertification"
import { Language } from "../../shared/pieces/EditLanguages"
import { changeDateFromIsoToNormal } from "../../utils/helpers"

interface GeneralUpdateProps{
    userId: string, 
     // eslint-disable-next-line
    value:  any, 
    column_name: string, 
    limit: number, 
    errorMessage: string
}

interface GeneralDeleteProps{
    userId: string,
     // eslint-disable-next-line
    value:  any, 
    column_name: string, 
}


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
        password: userInfo.password as string,
    })
    // Login the user automatically
    Login(userInfo.email, userInfo.password as string)
    
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
    return {data}
}
export async function updatePost({postId, post1, post2}: {postId: string, post1?: POST1, post2?: POST2}){
    if(post1){
        const {data, error} = await supabase.from("post").update({
            postedBy: post1.postedBy,
            title: post1.title,
            site: post1.site,
            type: post1.type,
            sector: post1.sector,
            compensationType: post1.compensationType,
            location: post1.location ? post1.location : null,
            gender: post1.gender,
            deadline: post1.deadline,
            quantity: parseInt(post1.quantity)
        }).eq("id", postId).select("*")
        if(error) throw new Error(error.message)
        return {data}
    }
    else if(post2){
        const {data, error} = await supabase.from("post").update({ description: post2.description, salary: post2.salary ? parseInt(post2.salary) : null, 
            responsibilities: post2.responsibilities.replace(/[\n\r]/g, "").split(","),
            requirments: post2.requirments.replace(/[\n\r]/g, "").split(","),
            qualifications: post2.qualifications ? post2.qualifications.split(",") : null,
            howToApply: post2.howToApply ? post2.howToApply.replace(/[\n\r]/g, "") : null
        }).eq("id", postId).select()
    
        if(error) throw new Error(error.message)    
        return {data}
    }
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
    //TODO: remove the post from appliedTo array of every user that have applied to this post
    return {post}
}
export async function FetchAllPosts(preference?: {sector: string, location: string}){
    let query = supabase.from("post").select("*")
    if(preference){
        if(preference.location){
            query = query.eq("location", preference.location)
        }
        if(preference.sector){
            query =  query.eq("sector", preference.sector)
        }
    }
    const {data: posts, error} = await query.order("created_at", {
        ascending: false
    })
    if(error) throw new Error(error.message)
    return {posts}
    
}
export async function updateUserData(id: string, userInfo: signUpType){
    const {data: user, error} = await supabase.from("users").update({...userInfo, phone: `0${userInfo.phone}`}).eq("id", id).select("*")
    if(error) throw new Error(error.message)
    return {user}
}
export async function updateUserBio ({userId, bio}: {userId: string, bio: string}){
    const {data: user, error} = await supabase.from("users").update({bio}).eq("id", userId).select("*")
    if(error) throw new Error(error.message)
    return {user} 
}
export async function updateUserPreference(id: string, preferences: {sector: string | null, location: string | null}){
    if(!preferences.sector && !preferences.location){
        const {data: user, error} =  await supabase.from("users").update({preference: null}).eq("id", id).select("*")
        if(error) throw new Error(error.message)
        return {user}
    }
    const {data: user, error} =  await supabase.from("users").update({preference: preferences}).eq("id", id).select("*")
    if(error) throw new Error(error.message)
    return {user}
}
export async function savePost({postId, userId}: {postId: string, userId: string}) {
    const {data: post, error} = await supabase.from("post").select().eq("id", postId).single()
    if(error) throw new Error(error.message)
    const {data, error: error1} = await supabase.from("users").select().eq("id", userId).single()
    if(error1) throw new Error(error1.message)
    const tempArray = data.saved_posts ? data.saved_posts : []
    // Insert the post into the array
    const {data: user, error: error2}  = await supabase.from("users").update({saved_posts: [...tempArray, post]}).eq("id", userId).select("*") 
    if(error2) throw new Error(error2.message)
    return {user}
}
export async function unSavePost({postId, userId}: {postId: string, userId: string}){
    const {data, error: error} = await supabase.from("users").select().eq("id", userId).single()
    if(error) throw new Error(error.message)
    if(!data.saved_posts) throw new Error("you don't have any saved posts")
    // Filter out all the saved posts from the unsaved post
    const tempArray = data.saved_posts.filter((post: POST) => post.id !== postId)
    // Update the saved_posts array
    const {data: user, error: error1}  = await supabase.from("users").update({saved_posts: tempArray.length === 0 ? null : [...tempArray]}).eq("id", userId).select("*") 
    if(error1) throw new Error(error1.message)
    return {user}
}
export async function apply( postId: string, userId: string, application: {coverLetter: string, applicant: USER}){
    // First retrieve applications array
    const {data: originalPost, error} = await supabase.from("post").select("id, location, description, sector, site, type, title, applications").eq("id", postId).single()
    if(error) throw new Error("something went wrong, try again")
    const tempArray1 = originalPost.applications ? originalPost.applications : []
    // Update the array with the new value
    const {data: updatedPost, error: error1} = await supabase.from("post").update({applications: [...tempArray1, application]}).eq("id", postId).select("*")
    if(error1) throw new Error(error1.message)
    // First retrieve all the users applications
    const {data: data, error: error2} = await supabase.from("users").select("*").eq("id", userId).single()
    if(error2) throw new Error("something went wrong, try again")
    const tempArray2 = data.appliedTo ? data.appliedTo : []
    // Update the array with the new application
    const tempObj = {
        "application": {
            "post": {
                id: originalPost.id.toString(),
                title: originalPost.title,
                location: originalPost.location,
                description: originalPost.description,
                sector: originalPost.sector,
                site: originalPost.site,
                type: originalPost.type
            },
            "status": "pending",
            "appliedAt": changeDateFromIsoToNormal(new Date().toISOString())
        }
    }
    console.log(tempArray2, tempObj)
    const {data: user, error: error3} = await supabase.from("users").update({appliedTo: [...tempArray2,  tempObj]}).eq("id", userId).select("*")
    if(error3) throw new Error(error3.message)
    return {updatedPost, user}    
}
// REFACTORED
export async function UpdateElement({userId, value, column_name, limit, errorMessage}: GeneralUpdateProps) {
        const isString  = typeof value === "string"
        // Retrieve the array
        const {data, error} = await supabase.from("users").select().eq("id", userId).single()
        if(error) throw new Error(error.message)
        const tempArray = data[column_name] ? data[column_name] : []
        let tempArray1
        if(isString){
            tempArray1 = value.replace(/[\n\r]/g, "").split(",").filter((element) => element !== "")
        }
        const tempArray2 =  isString ? [...tempArray, ...tempArray1!] : null
        // If the value is string, we use tempArray2 else we push the current object to the Array
        const finalValue = isString ? tempArray2 : [...tempArray, value]
        // If the user added beyond the limit
        if(isString && tempArray2 && tempArray2.length> limit) throw new Error(errorMessage)
        // update the array
        const {data: user, error: error1} = await supabase.from("users").update({[column_name]: finalValue}).eq("id", userId).select("*")
        if(error1) throw new Error(error1.message)
        return {user}
}
export async function DeleteElement({userId, value, column_name}: GeneralDeleteProps) {
    const isString  = typeof value === "string"
    // Retrieve the target array first
    const {data, error} = await supabase.from("users").select().eq("id", userId).single()
    if(error) throw new Error(error.message)
    // filter out the deleted value from the array
    let tempArray
    if(isString){
        tempArray = data[column_name].filter((element: string) => element !== value) 
    }
    else if(value?.company){
        tempArray = data[column_name].filter((element: ExperienceProps) => element.company !== value.company as string) 
    }
    else if(value?.fieldOfStudy){
        tempArray = data[column_name].filter((element: EducationProps) => element.fieldOfStudy !== value.fieldOfStudy as string) 
    }
    else if(value?.presentedBy){
        tempArray = data[column_name].filter((element: Certificate) => element.presentedBy !== value.presentedBy as string) 
    }
    // update the array
    const {data: user, error: error1} = await supabase.from("users").update({[column_name]: tempArray.length > 0 ? tempArray : null}).eq("id", userId).select("*")
    if(error1) throw new Error(error1.message)
    return {user}
}
export async function UpdateOrDeleteLanguages({userId, languages, isTobeDeleted, language}: {userId: string, languages?: {language?: string, proficiency: string}[], isTobeDeleted?: boolean, language?: string}) {

    const {data, error} = await supabase.from("users").select().eq("id", userId).single()
    if(error) throw new Error(error.message)
    const tempArray = data.languages ? data.languages : []
    let tempArray1
    if(!isTobeDeleted && languages){
        tempArray1 = [...tempArray, ...languages]
    }
    else if(isTobeDeleted){
        tempArray1 = tempArray.filter((element: Language) => element.language !== language)
        if(tempArray1.length === 0){
            tempArray1 = null
        }
    }
    const {data: user, error: error1} = await supabase.from("users").update({languages: tempArray1}).eq("id", userId).select("*")
    if(error1) throw new Error(error1.message)
    return {user}
}
export async function filterPosts({type, level, sector, gender, location, site}: {type?: string, level?: string, sector?: string, gender?: string, location?: string, site?: string}) {
    let query = supabase.from("post").select("*")

    if (type) {
        query = query.eq("type", type)
    }
    if (level) {
        query = query.eq("level", level)
    }
    if (sector) {
        query = query.eq("sector", sector)
    }
    if (location) {
        query = query.eq("location", location)
    }
    if (site) {
        query = query.eq("site", site)
    }
    if (gender === "All") {
        query = query.filter("gender", "in", ["Male", "Female"])
    } else if (gender) {
        query = query.eq("gender", gender)
    }

    const { data: posts, error } = await query

    if (error) throw new Error(error.message)

    if (!posts || posts.length === 0)  return [];

    return posts;
}
export async function fetchAllPostApplications({postedBy, postId}: {postedBy: string, postId: string}){
    const {data, error} = await supabase.from("post").select("*").eq("postedBy", postedBy).eq("id", postId).single()
    if(error) throw new Error(error.message)
    const applications = data.applications
    return applications
}