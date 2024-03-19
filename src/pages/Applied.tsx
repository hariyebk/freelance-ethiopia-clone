import ApplicationsList from "../shared/ApplicationsList";
import ApplicationFilter from "../shared/pieces/ApplicationFilter";
import useApi from "../context/hook";
import { Application } from "../types";
import { useEffect } from "react";

export default function Applied() {
    const {user} = useApi()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="w-full mt-40 mb-36">
            <div className="mx-auto max-md:w-[450px] md:w-[600px] lg:w-[700px] h-auto shadow-lg bg-slate-50 rounded-md pb-28">
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
