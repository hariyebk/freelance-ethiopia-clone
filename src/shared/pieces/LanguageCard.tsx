import { ChangeEvent, useState } from "react"
import { Language_levels } from "../../constants"

interface LanguageCardProps {
    title: string,
    level: string
}
export default function LanguageCard({title, level}: LanguageCardProps) {
    const [optionValue, setOptionValue] = useState(level)
    function handleChange(e: ChangeEvent<HTMLSelectElement>){
        setOptionValue(e.target.value)
    }
    return (
        <div className="mt-10 ml-6 w-[300px] px-5 py-2 border border-gray-300 focus:border-primary">
                <h2 className="pl-2 text-base font-palanquin"> {title} </h2>
                <hr className=" mt-2 border-0.5 border-gray-300" />
                <select className="w-full mt-3 outline-none text-sm font-palanquin" value={optionValue} onChange={handleChange}>
                    {
                        Language_levels.map((value) => {
                            return (
                                <option key={value}> {value} </option>
                            )
                        })
                    }
                    <option> {level} </option>
                </select>
        </div>
    )
}
