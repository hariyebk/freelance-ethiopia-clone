import { FaLongArrowAltLeft } from "react-icons/fa";
import UserDetailsForm from "../../Forms/UserForm";
import FormHeader from "../../pieces/FormHeader";
import { useNavigate } from "react-router-dom";

export default function EditUserDetails() {
    const navigate = useNavigate()
    return (
        <section className="w-full min-h-screen">
            <div className="hidden max-lg:flex ml-10 mt-10 items-center gap-3 cursor-pointer hover:text-primary" onClick={() => navigate(-1)}>
                <FaLongArrowAltLeft style = {{fontSize: "20px"}} />
                <p className="text-primary font-palanquin font-semibold"> Go back </p>
            </div>
            <div className="mx-48 flex flex-col flex-1 items-start">
                <UserDetailsForm newUser={false} FormHeader={
                    <FormHeader imageAddress="/Icons/edit-profile.png" title="Update Your Profile" />
                } FormButtons={
                    <button type="submit" className="w-72 mt-10 mx-auto flex justify-center bg-gradient-to-r from-primary to-secondary max-lg:px-16 px-16 max-lg:py-2 py-3 text-slate-100 text-lg rounded-full"> Update </button>
                }/>
            </div>
        </section>
    )
}
