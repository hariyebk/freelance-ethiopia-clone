interface ProfileTypeProps {
    children: React.ReactNode,
    title: string,
    description: string
}

export default function ProfileType({children, title, description}: ProfileTypeProps) {
    return (
        <div className="max-lg:mt-40 w-full h-full pb-20 flex max-lg:items-center max-lg:justify-center">
            <span className="max-lg:pl-5 pl-48 lg:mt-20">
                <img src="/Frame.svg" alt="poster" className="max-lg:hidden w-[460px] h-auto"  />
            </span>
            <div className="max-lg:mx-7 max-lg:w-full lg:w-[380px] flex flex-col max-lg:items-center items-start max-lg:-mt-20  mt-24 lg:ml-36 font-palanquin">
                <h3 className="max-lg:text-2xl text-2xl font-normal"> {title} </h3>
                <p className="mt-7 max-lg:px-5 max-lg:leading-6 text-fade max-lg:text-sm max-lg:text-center text-base"> {description} </p>
                {children}
            </div>
        </div>
    )
}