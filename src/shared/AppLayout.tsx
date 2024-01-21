import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import SideFilter from "./pieces/SideFilter";
import SidebarNav from "./pieces/SidebarNav";
import SidebarEditProfile from "./pieces/SidebarEditProfile";
import EditPortfolioLinks from "./pieces/EditPortfolioLinks";
import EditLanguages from "./pieces/EditLanguages";
import useApi from "../context/hook";


export default function AppLayout() {
    const {openFilter, openNav, editPortfolioLinks, setEditPortfolioLinks, editLanguages, setEditLanguages} = useApi()
    return (
        <section className="max-lg:overflow-x-hidden">
            <NavBar/>  
            <Outlet />
            <Footer />
            {openFilter && <SideFilter />}
            {openNav && <SidebarNav />}
            {editPortfolioLinks && (
                <SidebarEditProfile close={setEditPortfolioLinks} title="Update your Portfolio Links">
                    <EditPortfolioLinks />
                </SidebarEditProfile>
            )}
            {editLanguages && (
                <SidebarEditProfile close={setEditLanguages} title="Update Languages">
                    <EditLanguages />
                </SidebarEditProfile>
            )}
        </section>
    )
}
