import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useFilterContext } from "../context/Provider";
import SideFilter from "./pieces/SideFilter";



export default function AppLayout() {
    const {open} = useFilterContext()
    console.log(open)
    return (
        <div className="overflow-scroll max-xl:overflow-x-hidden main-scrollbar">
            <NavBar />  
            <Outlet />
            <Footer />
            {open && <SideFilter />}
        </div>
    )
}
