import ApplicationsList from "../shared/ApplicationsList";
import ApplicationFilter from "../shared/pieces/ApplicationFilter";

export default function Applied() {
    return (
        <section className="w-full mt-40 mb-36">
            <div className="mx-auto max-lg:w-[450px] w-[700px] h-auto shadow-lg bg-slate-50 rounded-md pb-28">
                <div className="pt-10 max-lg:px-14 px-14">
                    <div className="flex items-center justify-between text-stone-600 font-palanquin font-semibold">
                        <h1 className="text-2xl max-lg:text-xl"> Your Applications </h1>
                        <p className="text-xl max-lg:text-lg"> Status </p>
                    </div>
                    <ApplicationFilter />
                </div>
                <ApplicationsList />
            </div>
        </section>
    )
}
