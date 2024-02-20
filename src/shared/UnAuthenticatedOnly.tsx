import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import useApi from "../context/hook";
import { AccountRoles } from "../types";


export default function UnAuthenticatedOnly(){
    const {role} = useApi()
    const navigate = useNavigate()

    useEffect(() => {
        role ? role === AccountRoles.jobseeker ?  navigate("/job") :  navigate("/my-posts") : null
    }, [role, navigate])

    return (
        <div>
            <Outlet />
        </div>
    )
}
