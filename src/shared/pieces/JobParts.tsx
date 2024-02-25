interface JobPartsProps {
    label: string,
    content?: string | string[],
}

export default function JobParts({label, content}: JobPartsProps) {
    console.log(typeof content)
    let value: React.ReactNode
    if(typeof content === "string"){
        value =  <p className="max-lg:pr-3 max-lg:text-sm text-base max-lg:leading-6 leading-7 text-stone-700 font-palanquin"> {content} </p>
    }
    else{
        value = <ul className="max-lg:ml-4 ml-5 text-base font-sans list-disc">
            {content?.map((res) => {
                return (
                    <li key={res} className="max-lg:pr-5 mt-2 text-stone-700 max-lg:text-sm font-palanquin max-lg:leading-6"> {res} </li>
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
