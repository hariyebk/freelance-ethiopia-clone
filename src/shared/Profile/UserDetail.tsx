import TitleAndEdit from "../pieces/TitleAndEdit";
import useApi from "../../context/hook";
import { calculateAge, changeDateFromIsoToNormal } from "../../utils/helpers";
import { AccountRoles } from "../../types";
import { useFindUserById } from "../../lib/Tanstackquery/queriesAndMutations";
import Spinner from "../pieces/Spinner";

export default function UserDetail() {
    const {user, role} = useApi()
    const {isLoading, data} = useFindUserById()

    if(isLoading){
        return (
            <Spinner />
        )
    }
    
    return (
        <section className="profile_container">
            <div className="w-full -mt-14 flex flex-col items-start">
                <img src={data?.user ? data.user.avatar ? data.user.avatar : "/Images/userAvatar.png" : user?.avatar ? user.avatar : "/Images/userAvatar.png"} className="rounded-full object-contain ring-2 ring-white" height={80} width={80} alt="user-profile-image" />
                {data?.user ? <p className="pt-4 text-black text-base font-palanquin font-semibold"> {`${data.user.firstName} ${data.user.lastName}`} </p> : <TitleAndEdit title={`${user?.firstName} ${user?.lastName}`} routeTo="/edit-userDetails" />}
                {/* TODO: FOR JOB SEEKER , THIS SHOULD BE THEIR Role */}
                {role === AccountRoles.employer && <p className="mt-3 text-base text-stone-600 font-palanquin font-bold capitalize"> {data?.user ? data.user.type : user?.type} </p>}
                <div className="mt-3 flex gap-3 items-center justify-between text-sm">
                    <section className="flex items-center gap-3">
                        <span className="userDetail"> Age:  </span>
                        <span className="text-black text-base"> {calculateAge(changeDateFromIsoToNormal(data?.user ? data?.user.birthDate : user?.birthDate as string))} </span>
                    </section>
                    <section className="flex items-center gap-3">
                        <span className="userDetail"> Sex: </span>
                        <span className="text-black text-base"> {data?.user ? data.user.gender : user?.gender} </span>
                    </section>
                </div>
                <p className="mt-3 text-sm userDetail capitalize"> {data?.user ? `${data.user?.city}, ${data.user?.country}` : `${user?.city}, ${user?.country}`} </p>
                {user?.bio && role === AccountRoles.employer && <section className="mt-6">
                    <p className="userDetail"> Bio </p>
                    <p className="text-black text-base"> {data?.user ? data.user.bio : user?.bio} </p>
                </section>}
            </div>
        </section>
    )
}
