
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress"
import { useSignup } from "../lib/Tanstackquery/queriesAndMutations";
import UserForm from "../shared/Forms/UserForm";
import FormHeader from "../shared/pieces/FormHeader";
import Goback from "../shared/pieces/Goback";


export type signUpType = {
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    bio?: string,
    birthDate: string,
    gender: string,
    country: string,
    city: string,
    phone: string,
}

export default function Register() {
    const {isPending, mutate: signup} = useSignup()

    async function handleSubmit(userData: signUpType){
        signup(userData)
    }

    // LOADING SPINNER
    if(isPending){
        return (
            <div className="min-h-screen">
                <div className="flex items-center justify-center h-screen">
                    <Box sx={{ display: 'flex' }}>
                        <CircularProgress/>
                    </Box>
                </div>
            </div>
        )
    }
    return (
        <section className="mt-36">
            <div className="lg:hidden flex ml-10 mt-10 items-center gap-3 cursor-pointer hover:text-primary">
                <Goback />
            </div>
            <UserForm newUser={true} handleSubmit={handleSubmit}  FormHeader={
                <FormHeader imageAddress="/Icons/edit-profile.png" title="Create Your Account" />
            } FormButtons={  
                <button type="submit" className="max-lg:w-72 w-full mt-10 mx-auto flex justify-center bg-gradient-to-r from-primary to-secondary max-lg:px-16 px-16 max-lg:py-2 py-2 text-slate-100 text-lg rounded-full"> Register </button>
            }/>
        </section>
    )
}
