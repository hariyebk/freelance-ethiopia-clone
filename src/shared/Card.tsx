import { Link } from "react-router-dom";

interface CardProps {
    id: number
    Title: string,
    des: string,
}
export default function Card({Title, des, id}: CardProps) {
    return (
        <div className={`relative lg:max-w-full ${id === 1 ? "max-sm:h-[520px]" : "max-sm:h-[460px]"} sm:h-[390px] md:h-[420px] lg:h-[550px] max-lg:rounded-xl rounded-[30px] mt-16 mb-10`}>
            <div className="absolute inset-y-0 max-lg:rounded-lg rounded-[47px] bg-gradient-to-b from-primary to-secondary max-lg:w-full h-full w-full max-sm:px-4 sm:px-6 lg:pr-72 lg:pl-16 max-sm:pt-10 sm:pt-20 flex flex-col items-start">
                <h1 className="text-white max-sm:text-xl sm:text-[27px] lg:text-5xl lg:leading-tight font-bold max-sm:ml-3"> {Title} </h1>
                <p className="w-full lg:w-[460px] text-white max-lg:text-base max-lg:leading-7 text-lg font-palanquin max-lg:font-sans mt-8 lg:mt-14  max-lg:px-3 "> {des} </p>
                <Link to="/register" className="mt-10 max-sm:mt-10 lg:mt-14 lg:w-[200px] text-base bg-slate-50 lg:py-2.5 max-lg:py-2 max-lg:px-7 text-primary text-center lg:uppercase rounded-full font-palanquin font-semibold"> Get Started </Link>
                <img src={id === 1 ? "./Images/forcard1.svg" : "./Images/forcard2.svg"} alt="people" width={400} height={500} className="max-lg:hidden object-contain absolute top-44 lg:top-40 right-1 z-10"/>
            </div>
        </div>
    )
}
