interface JobPartsProps {
    label: string,
    content: string | string[],
}

export default function JobParts({label, content}: JobPartsProps) {
    let value: React.ReactNode
    if(typeof content === "string"){
        value =  <p className="max-lg:pr-3 text-base max-lg:text-justify text-stone-700 font-sans"> {content} </p>
    }
    else{
        value = <ul className="max-lg:ml-4 ml-5 text-base font-sans list-disc">
            {content.map((res) => {
                return (
                    <li key={res} className="max-lg:pr-5 mt-2 text-stone-700"> {res} </li>
                )
            })}
        </ul>
    }
    
    return (
        <div className="mb-4 max-lg:mr-2 mr-5">
            <p className="mt-5 mb-3 text-base text-primary font-semibold font-palanquin"> {label} </p>
            {value}
        </div>
    )
}
