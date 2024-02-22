
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {AccountRoles} from "../types";
import useApi from "../context/hook";

export default function JobSeekerOnly() {
    const {role} = useApi()
    const navigate = useNavigate()

    useEffect(() => {
        if(!role){
            return navigate("/login")
        }
        if(role !== AccountRoles.jobseeker){
            return navigate("/profile-type")
        }
    }, [role, navigate])

    return (
        <section>
            <Outlet />
        </section>
    )
}
