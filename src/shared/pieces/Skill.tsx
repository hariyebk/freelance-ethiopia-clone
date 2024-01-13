import { IoClose } from "react-icons/io5";
interface SkillProps {
    skill: string,
}
export default function Skill({skill}: SkillProps) {
    return (
        <section className="gap-3 bg-stone-800 text-sm text-white px-5 py-2 rounded-full mr-3 my-3">
            <div className="flex items-center gap-3 justify-between">
                <p> {skill} </p>
                {/* TODO: OnClick delete the skill */}
                <button className="hover:text-primary">
                    <IoClose />
                </button>
            </div>
        </section>
    )
}
