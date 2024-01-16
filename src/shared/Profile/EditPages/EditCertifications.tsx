import Layout from "./Layout";
import MainComponentForCertification from "./components/MainComponentForCertification";
import ModalForCertifications from "./components/ModalForCertifications";

export default function EditCertifications() {
    return (
        <section className="w-full mt-36 mb-20">
            <Layout title="Certifications" ModalComponent = {
                <ModalForCertifications />
            } MainComponent = {
                <MainComponentForCertification />
            } />
        </section>
    )
}
