import { ProfileLayout } from ".";
import UserDetail from "../shared/Profile/UserDetail";


export default function EmployerProfile() {
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
