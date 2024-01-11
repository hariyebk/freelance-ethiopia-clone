import UserForm from "../shared/Forms/UserForm";
import FormHeader from "../shared/pieces/FormHeader";
import Goback from "../shared/pieces/Goback";

export default function Register() {
    return (
        <section className="lg:mt-10">
            <div className="lg:hidden max-lg:flex ml-10 mt-10 items-center gap-3 cursor-pointer hover:text-primary">
                <Goback />
            </div>
            <UserForm newUser={true} FormHeader={
                <FormHeader imageAddress="/Icons/edit-profile.png" title="Create Your Account" />
            } FormButtons={  
                <button type="submit" className="w-72 mt-10 mx-auto flex justify-center bg-gradient-to-r from-primary to-secondary max-lg:px-16 px-16 max-lg:py-2 py-3 text-slate-100 text-lg rounded-full"> Register </button>
            }/>
        </section>
    )
}
