import TitleAndEdit from "../pieces/TitleAndEdit";
import useApi from "../../context/hook";
import Service from "../pieces/Service";


export default function MainServices() {
    const {user} = useApi()
    return (
        <section className="profile_container pb-5">
            <TitleAndEdit title="Main Services" routeTo="/edit-mainServices" add={Boolean(!user?.main_services)} />
            <div className="mt-7 flex items-center gap-2">
                { !user?.main_services ? (
                    <p className="mt-8 no-posts"> You haven't added any services you offer </p>
                )
                : user.main_services.map((service) => {
                    return (
                        <Service key={service} service={service} onlyShow={true}/>
                    )
                })}
            </div>
        </section>
    )
}
