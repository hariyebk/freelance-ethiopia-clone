import { Route, Routes, BrowserRouter } from "react-router-dom"
import {About, Job, Faq, Help, Login, Signup, Home, NotFound, Register, Profile, ProfilePage, ProfileSetUp, Applied } from "./pages"
import {EditUserDetails, EditSkills, EditBio, EditMainServices, EditWorkExperiences, EditEducation, EditCertifications, Protect, AppLayout} from "./shared"
import ShortList from "./pages/ShortList"
import SavedJobs from "./pages/SavedJobs"

export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route element = {<AppLayout />}>
                  {/* MENU FOR NON-AUTHENTICATED USERS */}
                  <Route path="/" element = {<Home />} />
                  <Route path="/job" element = {<Job />} />
                  <Route path="/faq" element = {<Faq />} />
                  <Route path="/about" element = {<About />} />
                  <Route path="/help" element = {<Help/>} />
                  <Route path="/login" element = {<Login />} />
                  <Route path="/onboard" element = {<Signup />} />
                  <Route path="/register" element = {<Register />} />
              <Route element = {
                <Protect />
              }>
                  {/* USER PROFILE PAGES */}
                  <Route path="/profile-type" element = {<Profile />} />
                  <Route path="/profile-type/new" element = {<ProfileSetUp />} />
                  <Route path="/profile/:id" element = {<ProfilePage />} />
                  <Route path= "/profile/:id/edit-userDetails" element = {<EditUserDetails />}/> 
                  <Route path= "/profile/:id/edit-skills" element = {<EditSkills />}/> 
                  <Route path= "/profile/:id/edit-bio" element = {<EditBio />}/> 
                  <Route path= "/profile/:id/edit-mainServices" element = {<EditMainServices />}/> 
                  <Route path= "/profile/:id/edit-workExperiences" element = {<EditWorkExperiences />}/> 
                  <Route path= "/profile/:id/edit-education" element = {<EditEducation />}/> 
                  <Route path= "/profile/:id/edit-certification" element = {<EditCertifications />}/>
                  {/* MENU FOR AUTHENTICATED USERS */}
                  <Route path="/applied" element = {<Applied />} />
                  <Route path="/short-list" element = {<ShortList />} />
                  <Route path="/saved-jobs" element = {<SavedJobs />} />
              </Route>
          </Route>
          <Route path="/*" element = {<NotFound />} />
        </Routes>
      </BrowserRouter>
  )
}


