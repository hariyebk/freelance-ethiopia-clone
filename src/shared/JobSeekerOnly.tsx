
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useApi from "../context/hook";
import { AccountRoles } from "../types";

export default function JobSeekerOnly() {
    const {role} = useApi()
    const navigate = useNavigate()
    useEffect(() => {
        if(role !== AccountRoles.jobseeker){
            navigate("/")
        }
    }, [role, navigate])
    return (
        <section>
            <Outlet />
        </section>
    )
}
