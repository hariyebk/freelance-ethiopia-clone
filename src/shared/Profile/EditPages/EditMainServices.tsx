import { GoArrowLeft } from "react-icons/go";
import MainServicesForm from "./components/MainServicesForm";
import { useNavigate } from "react-router-dom";
import useApi from "../../../context/hook";
import Service from "../../pieces/Service";
import Spinner from "../../pieces/Spinner";
import { useGeneral } from "../../../lib/Tanstackquery/queriesAndMutations";

export default function EditMainServices(){
    const {isPending, mutate: deleteService} = useGeneral({
        isTobeDeleted: true,
        successMessage: "service has been successfully deleted"
    })
    const {user} = useApi()
    const navigate = useNavigate()
    

    function deleteMainService(service: string){
        deleteService({
            value: service,
            column_name: "main_services"
        })
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
            <div className="px-16">
                <MainServicesForm />
                <div className="mt-10 px-10 flex items-center gap-5">
                    {!user?.main_services ? null : (
                        user.main_services.map((service) => {
                            return (
                                <Service key={service} service={service} handleDeleteService={deleteMainService} />
                            )
                        })
                    )}
                </div>
            </div>
        </section>
    )
}
