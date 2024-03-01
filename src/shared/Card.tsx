import { Link } from "react-router-dom";

interface CardProps {
    id: number
    Title: string,
    des: string,
}
export default function Card({Title, des, id}: CardProps) {
    return (
        <div className="relative lg:max-w-full max-lg:h-[440px] h-[550px] max-lg:rounded-xl rounded-[30px] my-16">
            <div className="absolute inset-y-0 max-lg:rounded-lg rounded-[47px] bg-gradient-to-b from-primary to-secondary max-lg:w-full h-full w-full max-lg:px-10 lg:pr-72 lg:pl-20 pt-20 flex flex-col items-start">
                <h1 className="text-white max-lg:text-[27px] text-6xl lg:leading-tight font-bold"> {Title} </h1>
                <p className="w-full pr-20 text-white text-justify max-lg:text-base max-lg:leading-7 text-lg font-palanquin max-lg:font-sans mt-8  max-lg:px-3 "> {des} </p>
                <Link to="/register" className="mt-10 lg:mt-20 lg:w-[200px] text-base bg-slate-50 lg:py-2.5 max-lg:py-2 max-lg:px-7 text-primary text-center lg:uppercase rounded-full font-palanquin font-semibold"> Get Started </Link>
                <img src={id === 1 ? "./Images/forcard1.svg" : "./Images/forcard2.svg"} alt="people" width={400} height={500} className="max-lg:hidden object-contain absolute top-28 -right-5 z-10"/>
            </div>
        </div>
    )
}
