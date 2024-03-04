import { FaTrash } from "react-icons/fa";

interface SkillProps {
    skill: string,
    onlyShow?: boolean,
    handleDelete?: (skill: string) => void
}

export default function Skill({skill, onlyShow, handleDelete}: SkillProps) {

    function handleClick(){
        window.scrollTo(0, 0);
        if(handleDelete){
            handleDelete(skill)
        }
    }

    return (
        <section className={`${onlyShow ? "rounded-full max-lg:px-5 px-7 mt-2 mx-2" : "rounded-md max-lg:px-3 px-5 my-3 mx-3"} lg:space-x-3 bg-stone-800 text-sm text-white py-2`}>
            <div className="flex items-center justify-between  gap-3">
                <p className="max-lg:text-xs"> {skill} </p>
                { !onlyShow && <button onClick={handleClick} className="ml-2">
                    <FaTrash className ="text-red-600 w-3 h-3" />
                </button>}
            </div>
        </section>
    )
}
