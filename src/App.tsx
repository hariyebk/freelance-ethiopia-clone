import { Route, Routes, BrowserRouter } from "react-router-dom"
import {About, Job, Faq, Help, Login, Signup, Home, NotFound, Register, Profile, ProfileSetUp, Applied, SavedJobs, Settings, MyPosts, Post, PostDetails, JobSeekerProfile, Apply, VerifyPhoneNumber } from "./pages"
import {EditUserDetails, EditSkills, EditBio, EditMainServices, EditWorkExperiences, EditEducation, EditCertifications, Protect, AppLayout, JobSeekerOnly} from "./shared"
import EmployersOnly from "./shared/EmployersOnly"
import EmployerProfile from "./pages/EmployerProfile"
import UploadUserAvatar from "./pages/UploadUserAvatar"


export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route element = {<AppLayout />}>
                  {/* AUTHORIZATION FOR NON-AUTHENTICATED USERS */}
                  <Route path="/" element = {<Home />} />
                  <Route path="/job" element = {<Job />} />
                  <Route path="/faq" element = {<Faq />} />
                  <Route path="/about" element = {<About />} />
                  <Route path="/help" element = {<Help/>} />
                  <Route path="/login" element = {<Login />} />
                  <Route path="/onboard" element = {<Signup />} />
                  <Route path="/register" element = {<Register />} />
                  <Route path="/register/upload-photo" element = {<UploadUserAvatar />} />
                  <Route path="/verify-your-phone-number" element = {<VerifyPhoneNumber />} />
                  {/* AUTHENTICATION MIDDLEWARE */}
              <Route element = {
                <Protect />
              }>
                      {/* AUTHENTICATED USERS PAGES */}
                      <Route path="/profile-type" element = {<Profile />} />
                      <Route path="/profile-type/new" element = {<ProfileSetUp />} />
                      <Route path="/post/:id/apply" element = {<Apply />} />
                      <Route path="/settings" element = {<Settings />} />
                {/* JOB SEEKER AUTHORIZATION MIDDLEWARE */}
                <Route element = {
                  <JobSeekerOnly />
                }>
                      <Route path="/jobseeker-profile/:id" element = {<JobSeekerProfile />} />
                      <Route path= "/jobseeker-profile/:id/edit-userDetails" element = {<EditUserDetails />}/> 
                      <Route path= "/jobseeker-profile/:id/edit-skills" element = {<EditSkills />}/> 
                      <Route path= "/jobseeker-profile/:id/edit-bio" element = {<EditBio />}/> 
                      <Route path= "/jobseeker-profile/:id/edit-mainServices" element = {<EditMainServices />}/> 
                      <Route path= "/jobseeker-profile/:id/edit-workExperiences" element = {<EditWorkExperiences />}/> 
                      <Route path= "/jobseeker-profile/:id/edit-education" element = {<EditEducation />}/> 
                      <Route path= "/jobseeker-profile/:id/edit-certification" element = {<EditCertifications />}/>
                      <Route path="/applied" element = {<Applied />} />
                      <Route path="/saved-jobs" element = {<SavedJobs />} />
                  </Route>
                  {/* EMPLOYER AUTHORIZATION MIDDLEWARE */}
                  <Route element = {
                    <EmployersOnly />
                  } >
                      <Route path="/my-posts" element={<MyPosts />} />
                      <Route path="/post" element={<Post />} />
                      <Route path="/post:id" element={<PostDetails />} />
                      <Route path="/employer-profile/:id" element = {<EmployerProfile />} />
                  </Route>
              </Route>
          </Route>
          <Route path="/*" element = {<NotFound />} />
        </Routes>
      </BrowserRouter>
  )
}


