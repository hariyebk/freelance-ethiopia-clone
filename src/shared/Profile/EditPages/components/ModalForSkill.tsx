

export default function ModalForSkill() {
    return (
        <section className="focus:outline-none">
            <form className="w-full lg:px-5 py-3">
                <label className="mx-auto flex justify-center text-xl text-stone-600 text-center font-palanquin font-bold pr-2"> Add New Skill </label>
                <input type="search" className="max-lg:w-[280px] w-[350px] ml-4 mt-7 border border-gray-500 focus:border-none px-4 max-lg:py-2 py-3 rounded" />
                <div className="mx-5 flex justify-center">
                    <button className="mt-14 ml-3 w-full px-8 py-2 rounded-full bg-gradient-to-r from-primary to-secondary text-slate-100 font-palanquin"> Add </button>
                </div>
            </form>
        </section>
    )
}
