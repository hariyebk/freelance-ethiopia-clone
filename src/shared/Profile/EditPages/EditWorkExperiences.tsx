import { useEffect } from "react";
import Layout from "./Layout";
import MainComponentForWork from "./components/MainComponentForWork";
import ModalForWork from "./components/ModalForWork";
import useApi from "../../../context/hook";

export default function EditWorkExperiences() {

    const {user} = useApi()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="w-full mt-36 mb-28">
            <Layout isThereData={Boolean(user?.experiences)} title="Work Experiences" MainComponent = {
                <MainComponentForWork isEditing={true} />
            } ModalComponent = {
                <div className="h-[400px] overflow-scroll overflow-x-hidden custom-scrollbar">
                    <ModalForWork />
                </div>
            } />
        </section>
    )
}
