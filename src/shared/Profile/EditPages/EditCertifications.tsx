import { useEffect } from "react";
import Layout from "./Layout";
import MainComponentForCertification from "./components/MainComponentForCertification";
import ModalForCertifications from "./components/ModalForCertifications";

export default function EditCertifications() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="w-full mt-40 mb-20">
            <Layout title="Certifications" ModalComponent = {
                <ModalForCertifications />
            } MainComponent = {
                <MainComponentForCertification />
            } />
        </section>
    )
}
