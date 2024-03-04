import { GoArrowLeft } from "react-icons/go";
import MainServicesForm from "./components/MainServicesForm";
import { useNavigate } from "react-router-dom";
import useApi from "../../../context/hook";
import Service from "../../pieces/Service";
import { useUpdateMainServices } from "../../../lib/Tanstackquery/queriesAndMutations";
import Spinner from "../../pieces/Spinner";

export default function EditMainServices(){
    const {user} = useApi()
    const navigate = useNavigate()
    const {isPending, mutate: updateService} = useUpdateMainServices()
    

    function deleteService(service: string){
        console.log(service)

    }

    if(isPending){
        return (
            <Spinner />
        )
    }

    return (
        <section className="my-36 mx-auto max-lg:w-[450px] w-[620px] h-auto shadow-lg bg-slate-50 rounded-md pb-28 pt-10">
            <span className="bg-gray-200 cursor-pointer hover:text-primary rounded-full flex justify-center items-center ml-8 w-12 h-12" onClick={() => navigate(-1)}>
                <GoArrowLeft style = {{fontSize: "20px"}} />
            </span>
            <div className="px-20">
                <MainServicesForm handleSubmit={updateService} />
                <div className="mt-10 mx-10 flex items-center gap-5">
                    {!user?.main_services ? null : (
                        user.main_services.map((service) => {
                            return (
                                <Service key={service} service={service} handleDeleteService={deleteService} />
                            )
                        })
                    )}
                </div>
            </div>
        </section>
    )
}
