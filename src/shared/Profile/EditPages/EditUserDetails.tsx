import { useEffect } from "react";
import Goback from "../../pieces/Goback";
import UserForm from "../../Forms/UserForm";
import { signUpType } from "../../../types";
import { useUpdateUserData } from "../../../lib/Tanstackquery/queriesAndMutations";
import Spinner from "../../pieces/Spinner";

export default function EditUserDetails(){

    const {isPending, mutate: updateUser} = useUpdateUserData()

    function UpdateUser(userData: signUpType){
        updateUser(userData)
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if(isPending){
        return (
            <Spinner />
        )
    }

    return (
        <section className="w-full max-lg:mt-36 mt-28">
            <div className="lg:hidden max-lg:flex ml-10 mt-10 items-center gap-3 hover:text-primary">
                <Goback />
            </div>
            <div className="mx-48 mb-20 flex flex-col flex-1 items-start">
                <UserForm handleSubmit={UpdateUser} newUser={false} />
            </div>
        </section>
    )
}
