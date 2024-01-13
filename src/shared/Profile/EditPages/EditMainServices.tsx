import { useEffect } from "react";
import LayoutForSkillsAndMainServices from "./LayoutForSkillsAndMainServices";
import MainComponentForMainServices from "./components/MainComponentForMainServices";
import ModalForMainServices from "./components/ModalForMainServices";

export default function EditMainServices() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <section className="w-full">
            <LayoutForSkillsAndMainServices title="Main Services" ModalComponent = {
                <div className="h-[450px]">
                    <ModalForMainServices />
                </div>
            } MainComponent = {
                <MainComponentForMainServices />
            } />
        </section>
    )
}
