import { useEffect } from "react";
import { ProfileLayout } from ".";
import UserDetail from "../shared/Profile/UserDetail";


export default function EmployerProfile(){

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <ProfileLayout MainProfile={(
            <div className="flex flex-col items-start mb-20">
                <div className="w-full">
                    <div className="w-full h-[150px] rounded-t-2xl bg-gradient-to-r from-primary to-secondary" />
                    <UserDetail />
                </div>
            </div>

        )} />
    )
}
