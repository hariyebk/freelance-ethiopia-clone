import { Link } from 'react-router-dom'
interface Props {
    title: string,
    routeTo: string,
    add?: boolean
}
export default function TitleAndEdit({title, routeTo, add}: Props) {
    function handleClick(){
        window.scrollTo(0, 0)
    }
    
    return (
        <div className="w-full flex items-center justify-between">
            <h2  className="mt-3 text-lg  font-semibold"> {title} </h2>
            <Link to={routeTo} className="mr-10 text-sm text-red-500 font-palanquin font-semibold" onClick={handleClick}> {add ? "Add" : "Edit"} </Link>
        </div>  
    )
}
