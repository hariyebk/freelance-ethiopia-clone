import UserForm from "../shared/Forms/UserForm";
import FormHeader from "../shared/pieces/FormHeader";

export default function Register() {
    return (
        <section className="mt-10">
            <UserForm newUser={true} FormHeader={
                <FormHeader imageAddress="/Icons/edit-profile.png" title="Create Your Account" />
            } FormButtons={  
                <button type="submit" className="mt-10 flex justify-center bg-stone-800 max-lg:px-16 px-16 max-lg:py-2 py-3 text-slate-100 text-lg rounded-full"> Register </button>
            }/>
        </section>
    )
}
