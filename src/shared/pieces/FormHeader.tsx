
interface FormHeaderProps {
    title: string,
    imageAddress: string
}

export default function FormHeader({title, imageAddress}: FormHeaderProps) {
    return (
        <div className="mb-7 flex items-center gap-5">
            <img src={imageAddress} width={45} height={45} alt="form-icon"/>
            <h2 className="text-3xl text-stone-600 font-palanquin font-bold "> {title} </h2>
        </div>
    )
}
