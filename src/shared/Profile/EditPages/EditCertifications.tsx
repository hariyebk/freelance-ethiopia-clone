import { useEffect } from "react";
import Layout from "./Layout";
import MainComponentForCertification from "./components/MainComponentForCertification";
import ModalForCertifications from "./components/ModalForCertifications";
import useApi from "../../../context/hook";

export default function EditCertifications() {

    const {user} = useApi()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="w-full mt-40 pb-16">
            <Layout isThereData={Boolean(user?.certifications)} title="Certifications" ModalComponent = {
                <div className="h-[350px] overflow-scroll overflow-x-hidden custom-scrollbar">
                    <ModalForCertifications />
                </div>
            } MainComponent = {
                <MainComponentForCertification isEditing={true} />
            } />
        </section>
    )
}
