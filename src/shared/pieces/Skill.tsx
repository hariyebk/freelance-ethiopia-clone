
interface SkillProps {
    skill: string,
    type?: string
}
export default function Skill({skill}: SkillProps) {
    return (
        <section className=" max-lg:mt-5 mt-10 lg:mx-20 rounded-xl bg-gray-100 border border-gray-100 shadow-lg px-7 py-3">
            <form className="flex items-center">
                <input value={skill} className="w-[500px] bg-gray-100 outline-none focus:outline-none text-left text-base text-stone-800 font-palanquin font-semibold px-7" />
            </form>
        </section>
    )
}
