import { IoClose } from "react-icons/io5"
import { mainservices } from "../../../../constants"


export default function MainComponentForMainServices() {
    return (
        <div className="mx-10">
            <div className="flex flex-col">
                <div className="max-lg:mt-6 mt-10 mx-auto flex flex-wrap items-center">
                    {
                        mainservices.map((services) => {
                            return (
                                <section key={services.role} className="gap-3 bg-stone-800 text-sm text-white px-5 py-2 rounded-full mr-3 my-3">
                                    <div className="flex items-center gap-3 justify-between">
                                        <p> {services.role} </p>
                                        {/* TODO: OnClick delete the services */}
                                        <button className="hover:text-primary">
                                            <IoClose />
                                        </button>
                                    </div>
                                </section>
                            )
                        })
                    }
                </div>
                <button className="mt-10 mx-auto w-[300px] rounded-full bg-gradient-to-r from-primary to-secondary px-8 py-2 text-slate-100">
                    Update
                </button>
            </div>
        </div>
    )
}
