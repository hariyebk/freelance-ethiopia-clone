import { Route, Routes, BrowserRouter } from "react-router-dom"
import AppLayout from "./shared/AppLayout"
import {About, Job, Faq, Help, Login, Signup, } from "./pages"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Register from "./pages/Register"
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
          </Route>
          <Route path="/*" element = {<NotFound />} />
        </Routes>
      </BrowserRouter>
  )
}


