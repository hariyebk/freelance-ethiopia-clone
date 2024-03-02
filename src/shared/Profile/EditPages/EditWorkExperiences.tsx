import { useEffect } from "react";
import Layout from "./Layout";
import MainComponentForWork from "./components/MainComponentForWork";
import ModalForWork from "./components/ModalForWork";

export default function EditWorkExperiences() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="w-full mt-36 mb-20">
            <Layout title="Work Experiences" MainComponent = {
                <MainComponentForWork />
            } ModalComponent = {
                <div className="h-[350px] overflow-scroll overflow-x-hidden custom-scrollbar">
                    <ModalForWork />
                </div>
            } />
        </section>
    )
}
