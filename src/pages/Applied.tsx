import { useEffect} from "react";
import ApplicationsList from "../shared/ApplicationsList";
import ApplicationFilter from "../shared/pieces/ApplicationFilter";
import useApi from "../context/hook";
import { Application } from "../types";
import { useDeletePostFromAppliedToArray } from "../lib/Tanstackquery/queriesAndMutations";
import Spinner from "../shared/pieces/Spinner";

export default function Applied() {

    const {isPending, mutate: deleteIfPostDoesntExist} = useDeletePostFromAppliedToArray()
    const {user} = useApi()

    useEffect(() => {
        if(user?.appliedTo){
            deleteIfPostDoesntExist({
                appliedToArray: user.appliedTo,
                userId: user.id as string
            })
        }
        window.scrollTo(0, 0);
    }, [user?.appliedTo, user?.id, deleteIfPostDoesntExist]);

    if(isPending){
        return (
            <Spinner />
        )
    }

    return (
        <section className="w-full mt-40 mb-36">
            <div className="mx-auto max-lg:w-[450px] w-[700px] h-auto shadow-lg bg-slate-50 rounded-md pb-28">
                <div className="pt-10 max-lg:px-14 px-14">
                    <div className="flex items-center justify-between text-stone-600 font-palanquin font-semibold">
                        <h1 className="text-2xl max-lg:text-lg"> Your Applications </h1>
                        <p className="text-xl max-lg:text-lg"> Status </p>
                    </div>
                    { user?.appliedTo ? <ApplicationFilter /> : null}
                </div>
                <ApplicationsList applications={user?.appliedTo as Application} />
            </div>
        </section>
    )
}
