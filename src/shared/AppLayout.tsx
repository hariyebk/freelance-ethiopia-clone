import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useApi } from "../context/Provider";
import SideFilter from "./pieces/SideFilter";
import SidebarNav from "./pieces/SidebarNav";



export default function AppLayout() {
    const {openFilter, openNav} = useApi()
    return (
        <div className="overflow-scroll overflow-x-hidden main-scrollbar">
            <NavBar />  
            <Outlet />
            <Footer />
            {openFilter && <SideFilter />}
            {openNav && <SidebarNav />}
        </div>
    )
}
