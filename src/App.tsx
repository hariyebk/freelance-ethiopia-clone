import { Route, Routes, BrowserRouter } from "react-router-dom"
import AppLayout from "./components/AppLayout"
import {About, Job, Faq, Help, Login, Signup} from "./pages"
import Home from "./pages/Home"
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
              <Route path="/signup" element = {<Signup />} />
          </Route>
        </Routes>
      </BrowserRouter>
  )
}


