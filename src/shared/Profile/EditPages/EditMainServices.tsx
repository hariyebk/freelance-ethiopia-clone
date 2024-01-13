import { useEffect } from "react";
import Layout from "./Layout";
import MainComponentForMainServices from "./components/MainComponentForMainServices";
import ModalForMainServices from "./components/ModalForMainServices";

export default function EditMainServices() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <section className="w-full">
            <Layout title="Main Services" ModalComponent = {
                <div className="h-[450px]">
                    <ModalForMainServices />
                </div>
            } MainComponent = {
                <MainComponentForMainServices />
            } />
        </section>
    )
}
