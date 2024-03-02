import TitleAndEdit from "../pieces/TitleAndEdit";
import useApi from "../../context/hook";


export default function MainServices() {
    const {user} = useApi()
    return (
        <section className="profile_container pb-5">
            <TitleAndEdit title="Main Services" routeTo="/edit-mainServices" />
            { !user?.main_services ? (
                <p className="mt-8 no-posts"> Please add the main services you offer </p>
            )
            : user.main_services.map((services) => {
                return (
                    <div key={services.title} className="mt-5 flex flex-col items-start">
                        <h2 className="text-base text-stone-600 font-palanquin font-semibold"> {services.sector} </h2>
                        <p className="text-sm text-stone-600"> {services.title} </p>
                    </div>
                )
            })}
        </section>
    )
}
