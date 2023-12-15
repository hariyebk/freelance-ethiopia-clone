import { Link } from "react-router-dom";

interface CardProps {
    Title: string,
    des: string,
}
export default function Card({Title, des}: CardProps) {
    return (
        <div className="max-w-full h-[560px] rounded-[48px] my-16 bg-gradient-to-b from-primary to-secondary">
            <div className="w-[400px] ml-20 pt-20 flex flex-col items-start">
                <h1 className="text-white text-6xl font-bold"> {Title} </h1>
                <p className="w-full text-slate-100 text-lg font-palanquin mt-8"> {des} </p>
                <Link to="/regiester" className=" mt-7 max-w-[150px] text-xl bg-slate-50 py-2 text-primary px-5 rounded-full font-palanquin"> Get Started </Link>
            </div>
        </div>
    )
}
