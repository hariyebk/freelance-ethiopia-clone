import Layout from "./Layout";
import MainComponentForCertification from "./components/MainComponentForCertification";
import ModalForCertifications from "./components/ModalForCertifications";

export default function EditCertifications() {
    return (
        <section className="w-full">
            <Layout title="Certifications" ModalComponent = {
                <ModalForCertifications />
            } MainComponent = {
                <MainComponentForCertification />
            } />
        </section>
    )
}
