
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useApi from "../context/hook";
import { AccountRoles } from "../types";

export default function EmployersOnly() {
    const {role} = useApi()
    const navigate = useNavigate()
    useEffect(() => {
        if(role !== AccountRoles.employer){
            navigate("/")
        }
    }, [role, navigate])
    return (
        <section>
            <Outlet />
        </section>
    )
}
