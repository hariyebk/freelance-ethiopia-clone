import { useLocation } from "react-router-dom";
import TitleAndEdit from "../pieces/TitleAndEdit";
import { mainservices } from "../../constants";


export default function MainServices() {
    const {pathname} = useLocation()
    return (
        <section className="profile_container">
            <TitleAndEdit title="Main Services" routeTo={`${pathname}/edit-mainServices`} />
            { mainservices.map((services) => {
                return (
                    <div key={services.role} className="mt-5 flex flex-col items-start">
                        <h2 className="text-base text-stone-600 font-palanquin font-semibold"> {services.sector} </h2>
                        <p className="text-sm text-stone-600"> {services.role} </p>
                    </div>
                )
            })}
        </section>
    )
}
