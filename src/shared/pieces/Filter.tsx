interface FilterProps {
    lists: string[],
    title: string
}

export default function Filter({title, lists}: FilterProps) {
    return (
        <div className="mt-3">
            <h3 className="ml-4 text-darkblue text-lg font-palanquin font-medium"> {title} </h3>
            <div className="mt-5 mx-3">
                {lists.map((value) => {
                    return (
                        <div key={value} className="flex items-center gap-2 my-1.5">
                            <input type="checkbox" className="hover:cursor-pointe checked:bg-primary cursor-pointer" />
                        <p className={`${title === "sectors" ? "text-sm truncate ...": "capitalize text-sm"}`}> {value} </p>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}
