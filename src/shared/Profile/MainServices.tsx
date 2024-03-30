import TitleAndEdit from "../pieces/TitleAndEdit";
import useApi from "../../context/hook";
import Service from "../pieces/Service";
import { useFindUserById } from "../../lib/Tanstackquery/queriesAndMutations";
import Spinner from "../pieces/Spinner";


export default function MainServices() {
    const {user} = useApi()
    const {isLoading, data} = useFindUserById()

    if(isLoading){
        return (
            <Spinner />
        )
    }
    return (
        <section className="profile_container pb-5">
            {data?.user ? <h3 className="mt-3 text-lg text-black font-semibold"> Main Services </h3> : <TitleAndEdit title="Main Services" routeTo="/edit-mainServices" add={Boolean(!user?.main_services)} />}
            <div className="mt-7 flex items-center gap-2">
                {data?.user ? data.user.main_services ? data.user.main_services.map((service: string) => {
                    return (
                        <Service key={service} service={service} onlyShow={true}/>
                    )

                }) : <p className="mt-6 md:ml-4 max-sm:leading-7 text-base text-gray-600"> Main services of the appilicant are not specified</p>
                :
                !user?.main_services ? (
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
