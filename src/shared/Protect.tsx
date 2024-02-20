
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect} from "react";
import useApi from "../context/hook";

export default function Protect() {
    const {role} = useApi()
    const navigate = useNavigate()
    useEffect(() => {
        if(!role){
            navigate("/login")
        }
    }, [role, navigate])
    return (
        <section>
            <Outlet />
        </section>
    )
}
