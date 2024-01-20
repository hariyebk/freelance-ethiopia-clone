import { useNavigate } from "react-router-dom";
import UserForm from "../shared/Forms/UserForm";
import FormHeader from "../shared/pieces/FormHeader";
import Goback from "../shared/pieces/Goback";

export default function Register() {
    const navigate = useNavigate()
    function handleSubmit(){
        // TODO: create the user
        navigate('/register/upload-photo')
    }
    return (
        <section className="mt-36">
            <div className="lg:hidden flex ml-10 mt-10 items-center gap-3 cursor-pointer hover:text-primary">
                <Goback />
            </div>
            <UserForm newUser={true} handleSubmit={handleSubmit}  FormHeader={
                <FormHeader imageAddress="/Icons/edit-profile.png" title="Create Your Account" />
            } FormButtons={  
                <button type="submit" className="w-72 mt-5 mx-auto flex justify-center bg-gradient-to-r from-primary to-secondary max-lg:px-16 px-16 max-lg:py-2 py-3 text-slate-100 text-lg rounded-full"> Register </button>
            }/>
        </section>
    )
}
