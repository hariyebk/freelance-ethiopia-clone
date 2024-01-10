import UserDetailsForm from "../../Forms/UserForm";
import FormHeader from "../../pieces/FormHeader";

export default function EditUserDetails() {
    return (
        <section className="w-full min-h-screen">
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
