interface FormHeaderProps {
    title: string,
    imageAddress: string
}

export default function FormHeader({title, imageAddress}: FormHeaderProps) {
    return (
        <div className="flex items-center gap-5 max-lg:mt-10 my-4">
            <img src={imageAddress} width={40} height={40} alt="form-icon"/>
            <h2 className="max-lg:text-2xl text-3xl text-stone-600 font-palanquin font-bold "> {title} </h2>
        </div>
    )
}
