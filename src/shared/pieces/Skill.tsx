import { FaTrash } from "react-icons/fa";

interface SkillProps {
    skill: string,
}
export default function Skill({skill}: SkillProps) {
    function handleDeleteSkill(){

    }
    return (
        <section className="space-x-3 bg-stone-800 text-sm text-white px-5 py-2 mx-3 my-3 rounded-md">
            <div className="flex items-center justify-between  gap-3">
                <p> {skill} </p>
                <button onClick={handleDeleteSkill} className="ml-2">
                    <FaTrash className ="text-red-600 w-3 h-3" />
                </button>
            </div>
        </section>
    )
}
