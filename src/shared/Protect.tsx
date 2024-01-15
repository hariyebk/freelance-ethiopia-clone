import { useApi } from "../context/Provider";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Protect() {
    const {isAuthenticated} = useApi()
    const navigate = useNavigate()
    useEffect(() => {
        if(!isAuthenticated){
            navigate("/login")
        }
    }, [isAuthenticated, navigate])
    return (
        <section>
            <Outlet />
        </section>
    )
}
