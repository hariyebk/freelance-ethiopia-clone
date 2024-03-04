import { FaTrash } from "react-icons/fa";

interface SkillProps {
    skill: string,
    onlyShow?: boolean,
    handleDelete: (skill: string) => void
}

export default function Skill({skill, onlyShow, handleDelete}: SkillProps) {

    function handleClick(){
        window.scrollTo(0, 0);
        handleDelete(skill)
    }

    return (
        <section className={`${onlyShow ? "rounded-full px-7 mt-2 mx-2" : "rounded-md px-5 my-3 mx-3"} space-x-3 bg-stone-800 text-sm text-white py-2`}>
            <div className="flex items-center justify-between  gap-3">
                <p> {skill} </p>
                { !onlyShow && <button onClick={handleClick} className="ml-2">
                    <FaTrash className ="text-red-600 w-3 h-3" />
                </button>}
            </div>
        </section>
    )
}
