import { useLocation } from "react-router-dom";
import TitleAndEdit from "../pieces/TitleAndEdit";


export default function MainServices() {
    const {pathname} = useLocation()
    return (
        <section className="profile_container">
            <TitleAndEdit title="Main Services" routeTo={`${pathname}/edit-mainServices`} />
            <div className="mt-5 flex flex-col items-start">
                <h2 className="text-base text-stone-600 font-palanquin font-semibold"> Software Design and Development </h2>
                <p className="text-sm text-stone-600"> Full stack web developer </p>
            </div>
            <div className="mt-3 flex flex-col items-start">
                <h2 className="text-base text-stone-600 font-palanquin font-semibold">  Sales and Marketing </h2>
                <p className="text-sm text-stone-600"> Sales </p>
            </div>
        </section>
    )
}
