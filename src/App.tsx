import { Route, Routes} from "react-router-dom"
import {About, Job, Faq, Help, Login, Signup, Home, NotFound, Register, Profile, ProfileSetUp, Applied, SavedJobs, Settings, MyPosts, Post, PostDetails, JobSeekerProfile, Apply, VerifyPhoneNumber, PostDescriptions, EditPost } from "./pages"
import {EditUserDetails, EditSkills, EditBio, EditMainServices, EditWorkExperiences, EditEducation, EditCertifications, Protect, AppLayout, JobSeekerOnly} from "./shared"
import EmployersOnly from "./shared/EmployersOnly"
import EmployerProfile from "./pages/EmployerProfile"
import UploadUserAvatar from "./pages/UploadUserAvatar"
import { Toaster } from "react-hot-toast"
import useApi from "./context/hook"
import Spinner from "./shared/pieces/Spinner"

export default function App(){
  const {Loading} = useApi()

  // LOADING SPINNER
  if(Loading){
    return (
      <Spinner />
  )
}

  return (
        <main>
            <Routes>
                <Route element = {<AppLayout />}>
                    <Route path="/" element = {<Home />} />
                    <Route path="/job" element = {<Job />} />
                    <Route path="/faq" element = {<Faq />} />
                    <Route path="/about" element = {<About />} />
                    <Route path="/help" element = {<Help/>} />
                    <Route path="/login" element = {<Login />} />
                    <Route path="/onboard" element = {<Signup />} />
                    <Route path="/register" element = {<Register />} />
                    <Route path="/profile-type/:id/new" element = {<ProfileSetUp />} />
                    <Route path="/register/:id/upload-photo" element = {<UploadUserAvatar />} />
                    {/* TODO: IMPLEMENT THIS FEATURE */}
                    <Route path="/verify-your-phone-number" element = {<VerifyPhoneNumber />} />

                    {/* AUTHENTICATION MIDDLEWARE */}
                    <Route element = {
                      <Protect />
                    }>
                            {/* AUTHENTICATED USERS PAGES */}
                            <Route path="/profile-type" element = {<Profile />} />
                            <Route path="/post/:id/apply" element = {<Apply />} />
                            <Route path="/settings" element = {<Settings />} />
                            <Route path= "/edit-userDetails" element = {<EditUserDetails />}/>
                      {/* JOB SEEKER AUTHORIZATION MIDDLEWARE */}
                      <Route element = {
                        <JobSeekerOnly />
                      }>
                            <Route path="/my-profile" element = {<JobSeekerProfile />} /> 
                            <Route path= "/edit-skills" element = {<EditSkills />}/> 
                            <Route path= "/edit-bio" element = {<EditBio />}/> 
                            <Route path= "/edit-mainServices" element = {<EditMainServices />}/> 
                            <Route path= "/edit-workExperiences" element = {<EditWorkExperiences />}/> 
                            <Route path= "/edit-education" element = {<EditEducation />}/> 
                            <Route path= "/edit-certification" element = {<EditCertifications />}/>
                            <Route path="/applied" element = {<Applied />} />
                            <Route path="/saved-jobs" element = {<SavedJobs />} />
                    </Route>
                    {/* EMPLOYER AUTHORIZATION MIDDLEWARE */}
                    <Route element = {
                      <EmployersOnly />
                    } >
                            <Route path="/my-posts" element={<MyPosts />} />
                            <Route path="/post" element={<Post />} />
                            <Route path="/post/:id/descriptions" element={<PostDescriptions />} />
                            <Route path="/post:id" element={<PostDetails />} />
                            <Route path="/edit-post/:id" element={<EditPost />} />
                            <Route path="/profile" element = {<EmployerProfile />} />
                    </Route>
                    </Route>
                </Route>
                <Route path="/*" element = {<NotFound />} />
            </Routes>
            <Toaster />
        </main>
  )
}


