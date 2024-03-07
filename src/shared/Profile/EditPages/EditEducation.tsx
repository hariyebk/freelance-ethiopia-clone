import { useEffect } from "react";
import Layout from "./Layout";
import MainComponentForEducation from "./components/MainComponentForEducation";
import ModalForEducation from "./components/ModalForEducation";
import useApi from "../../../context/hook";

export default function EditEducation(){
    const {user} = useApi()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <section className="w-full mt-36 mb-40">
            <Layout isThereData={Boolean(user?.education)} title="Education" MainComponent = {
                <MainComponentForEducation isEditing={true} />
            } ModalComponent = {
                <div className="h-[350px] overflow-scroll overflow-x-hidden custom-scrollbar">
                    <ModalForEducation />
                </div>
            } />
        </section>
    )
}
