import { Route, Routes, BrowserRouter } from "react-router-dom"
import AppLayout from "./shared/AppLayout"
import {About, Job, Faq, Help, Login, Signup, } from "./pages"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Register from "./pages/Register"
import Profile from "./pages/Profile"
import ProfileSetUp from "./pages/ProfileSetUp"
import ProfilePage from "./pages/ProfilePage"
export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route element = {
            <AppLayout />
          }>
              <Route path="/" element = {<Home />} />
              <Route path="/job" element = {<Job />} />
              <Route path="/faq" element = {<Faq />} />
              <Route path="/about" element = {<About />} />
              <Route path="/help" element = {<Help/>} />
              <Route path="/login" element = {<Login />} />
              <Route path="/onboard" element = {<Signup />} />
              <Route path="/register" element = {<Register />} />
              {/* TODO: USER MUST BE AUTHENTICATED */}
              <Route path="/profile-type" element = {<Profile />} />
              <Route path="/profile-type/new" element = {<ProfileSetUp />} />
              <Route path="/profile/:id" element = {<ProfilePage />} />
          </Route>
          <Route path="/*" element = {<NotFound />} />
        </Routes>
      </BrowserRouter>
  )
}


