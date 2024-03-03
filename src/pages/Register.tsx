import { useEffect } from "react";
import UserForm from "../shared/Forms/UserForm";
import Goback from "../shared/pieces/Goback";
import { signUpType } from "../types";
import Spinner from "../shared/pieces/Spinner";
import { useSignup } from "../lib/Tanstackquery/queriesAndMutations";


export default function Register() {

    const {isPending, mutate: signUp} = useSignup()

    function createNewUser(userData: signUpType){
        signUp(userData)
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
        <section className="mt-36">
            <div className="lg:hidden flex ml-10 mt-10 items-center gap-3 cursor-pointer hover:text-primary">
                <Goback />
            </div>
            <div className="pb-20">
                <UserForm handleSubmit={createNewUser} newUser={true} />
            </div>
        </section>
    )
}
