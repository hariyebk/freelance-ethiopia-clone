import UserDetailsForm from "../../Forms/UserForm";
import FormHeader from "../../pieces/FormHeader";

export default function EditUserDetails() {
    return (
        <section className="w-full min-h-screen mt-10">
            <div className="mx-48 flex flex-col flex-1 items-start">
                <UserDetailsForm newUser={false} FormHeader={
                    <FormHeader imageAddress="/Icons/edit-profile.png" title="Update Your Profile" />
                } FormButtons={
                    <button type="submit" className="mt-10 flex justify-center bg-stone-800 max-lg:px-16 px-16 max-lg:py-2 py-3 text-slate-100 text-lg rounded-full"> Register </button>
                }/>
            </div>
        </section>
    )
}
