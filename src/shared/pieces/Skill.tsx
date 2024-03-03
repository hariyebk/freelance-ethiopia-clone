import { FaTrash } from "react-icons/fa";

interface SkillProps {
    skill: string,
    onlyShow?: boolean
}
export default function Skill({skill, onlyShow}: SkillProps) {
    function handleDeleteSkill(){

    }
    return (
        <section className={`${onlyShow ? "rounded-full px-7 mt-2 mx-2" : "rounded-md px-5 my-3 mx-3"} space-x-3 bg-stone-800 text-sm text-white py-2`}>
            <div className="flex items-center justify-between  gap-3">
                <p> {skill} </p>
                { !onlyShow && <button onClick={handleDeleteSkill} className="ml-2">
                    <FaTrash className ="text-red-600 w-3 h-3" />
                </button>}
            </div>
        </section>
    )
}
