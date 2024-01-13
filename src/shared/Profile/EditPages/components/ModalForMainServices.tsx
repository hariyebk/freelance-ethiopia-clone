import { jobSectors } from "../../../../constants"


export default function ModalForMainServices() {
    return (
        <div className="flex flex-col items-start lg:mx-6 gap-5">
            <div className="w-fulll flex flex-col space-y-4">
                <h3 className="mb-5 max-lg:text-xl text-2xl text-stone-800 text-center font-palanquin font-semibold"> Sector </h3>
                <select className="mt-3 focus:outline-none border border-stone-500 lg:px-5 py-2">
                    {jobSectors.map((sector) => {
                        return (
                            <option key={sector} className="lg:px-3"> {sector} </option>
                        )
                    })}
                </select>
            </div>
            <div className="w-full mt-3 flex flex-col space-y-4">
                <h3 className="mb-5 max-lg:text-xl text-2xl text-stone-800 text-center font-palanquin font-semibold"> Role </h3>
                <select className="mt-5 focus:outline-none border border-stone-500 px-5 py-2">
                    <option> Web development </option>
                </select>
            </div>
            <button className="btn"> Add Services </button>
        </div>
    )
}
