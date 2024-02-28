import Layout from "./Layout";
import MainComponentForMainServices from "./components/MainComponentForMainServices";
import ModalForMainServices from "./components/ModalForMainServices";

export default function EditMainServices() {

    return (
        <section className="w-full mt-40 mb-20">
            <Layout title="Main Services" ModalComponent = {
                <ModalForMainServices />
            } MainComponent = {
                <MainComponentForMainServices />
            } />
        </section>
    )
}
