import { useLocation } from "react-router-dom";
import TitleAndEdit from "../pieces/TitleAndEdit";

export default function UserDetail() {
    const {pathname} = useLocation()
    return (
        <section className="profile_container">
            <div className="w-full -mt-14 flex flex-col items-start">
                <img src="/Images/hari.jpg" className="rounded-full object-contain" height={80} width={80} alt="user-profile-image" />
                <TitleAndEdit title="Harun Bekri" routeTo= {`${pathname}/edit-userDetails`} />
                <p className="mt-5 text-base text-stone-600 font-palanquin font-bold capitalize"> full-stack web developer </p>
                <p className="mt-3 flex gap-3 items-center justify-between text-sm">
                    <span> Age: 25 </span>
                    <span> Sex: male </span>
                </p>
                <p className="mt-3 text-sm capitalize"> Addis Ababa, Ethiopia </p>
            </div>
        </section>
    )
}
