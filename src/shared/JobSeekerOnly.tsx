
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {AccountRoles} from "../types";
import useApi from "../context/hook";

export default function JobSeekerOnly() {
    const {role} = useApi()
    const navigate = useNavigate()

    useEffect(() => {
        if(role !== AccountRoles.jobseeker){
            return navigate("/login")
        }
    }, [role, navigate])

    return (
        <section>
            <Outlet />
        </section>
    )
}
