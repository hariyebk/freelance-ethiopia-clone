import { Languages } from "../../constants";
import LanguageCard from "./LanguageCard";

export default function EditLanguages() {
    return (
        <section className="flex flex-col items-start">
            {Languages.map((item) => {
                return (
                    <LanguageCard key={item.language} title={item.language} level={item.level} />
                )
            })}
        </section>
    )
}
