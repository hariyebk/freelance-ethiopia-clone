import { useEffect } from "react";
import { ProfileLayout } from ".";
import UserDetail from "../shared/Profile/UserDetail";


export default function EmployerProfile(){

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <ProfileLayout MainProfile={(
            <div className="md:container flex flex-col items-center mb-20 max-md:mx-10 md:w-[600px] xl:w-[900px]">
                <div className="w-full h-[150px] rounded-t-2xl bg-gradient-to-r from-primary to-secondary" />
                <UserDetail />
            </div>

        )} />
    )
}
