import { useApi } from "../../context/Provider"

export default function Languages() {
    const {setEditLanguages} = useApi()
    return (
        <div className="mt-5 w-[260px] flex items-start gap-4 rounded-xl shadow-lg border border-gray-300 py-5 pl-5">
            <div className="flex flex-wrap flex-col gap-3 w-36">
                <h3 className="text-base text-stone-600 font-palanquin font-bold"> Languages </h3>
                <div className="mt-4 flex items-center gap-3 text-base font-palanquin">
                    <h3> Amharic </h3>
                    <p className="text-gray-500"> native </p>
                </div>
                <div className="mt-2 flex items-center gap-3 text-base font-palanquin">
                    <h3> English </h3>
                    <p className="text-gray-500"> Professional </p>
                </div>
                <div className="mt-2 flex items-center gap-3 text-base font-palanquin">
                    <h3> Spanish </h3>
                    <p className="text-gray-500"> Beginner </p>
                </div>
            </div>
            <button className="text-sm text-red-500 font-palanquin font-semibold" onClick={() => setEditLanguages(true)}> Edit </button>
        </div>
    )
}
