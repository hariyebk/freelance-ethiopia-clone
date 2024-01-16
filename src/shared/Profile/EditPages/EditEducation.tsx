import Layout from "./Layout";
import MainComponentForEducation from "./components/MainComponentForEducation";
import ModalForEducation from "./components/ModalForEducation";

export default function EditEducation() {
    return (
        <section className="w-full mt-36 mb-20">
            <Layout title="Education" MainComponent = {
                <MainComponentForEducation />
            } ModalComponent = {
                <div className="h-[350px] overflow-scroll overflow-x-hidden custom-scrollbar">
                    <ModalForEducation />
                </div>
            } />
        </section>
    )
}
