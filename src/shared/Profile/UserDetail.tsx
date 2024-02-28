import { useLocation } from "react-router-dom";
import TitleAndEdit from "../pieces/TitleAndEdit";
import useApi from "../../context/hook";
import { calculateAge, changeDateFromIsoToNormal } from "../../utils/helpers";

export default function UserDetail() {
    const {user} = useApi()
    const {pathname} = useLocation()
    return (
        <section className="profile_container">
            <div className="w-full -mt-14 flex flex-col items-start">
                <img src={user?.avatar ? user.avatar : "/Images/userAvatar.png"} className="rounded-full object-contain" height={80} width={80} alt="user-profile-image" />
                <TitleAndEdit title={`${user?.firstName} ${user?.lastName}`} routeTo= {`${pathname}/edit-userDetails`} />
                <p className="mt-5 text-base text-stone-600 font-palanquin font-bold capitalize"> {user?.type} </p>
                <div className="mt-3 flex gap-3 items-center justify-between text-sm">
                    <section className="flex items-center gap-3">
                        <span className="userDetail"> Age:  </span>
                        <span className="text-black text-base"> {calculateAge(changeDateFromIsoToNormal(user?.birthDate as string))} </span>
                    </section>
                    <section className="flex items-center gap-3">
                        <span className="userDetail"> Sex: </span>
                        <span className="text-black text-base"> {user?.gender} </span>
                    </section>
                </div>
                <p className="mt-3 text-sm userDetail capitalize"> {`${user?.city}, ${user?.country}`} </p>
                {user?.bio && <section className="mt-6">
                    <p className="userDetail"> Bio </p>
                    <p className="text-black text-base"> {user?.bio} </p>
                </section>}
            </div>
        </section>
    )
}
