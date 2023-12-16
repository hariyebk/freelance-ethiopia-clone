
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { loginValidation } from "../lib/validation";
import { Form, FormField, FormItem, FormMessage, FormControl} from "../components/ui/form";
import { Link } from "react-router-dom";
import { FaLock, FaUser } from "react-icons/fa";


export default function Login() {
    const form = useForm<z.infer<typeof  loginValidation>>({
        resolver: zodResolver(loginValidation),
        defaultValues: {
            email: "" ,
            password: ""
        },
    })
    async function onSubmit(values: z.infer<typeof loginValidation>){
        console.log(values)
        
    }
    return (
        <section className="flex w-full min-h-screen items-center justify-center">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col justify-start gap-10 -mt-5 p-10 shadow-md">
                    <h2 className="font-semibold max-lg:text-2xl text-3xl font-palanquin text-center">  Log in to Afriworks </h2>
                    {/* email */}
                    <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem className="flex flex-1 flex-col justify-start gap-3 w-full">
                        <FormControl className="no-foucs">
                        <div className="border border-stone-800 p-3 rounded max-lg:w-[300px] w-[400px] flex flex-1 items-center  max-lg:mx-auto gap-5">
                            <FaUser />
                            <input type="text" placeholder="Email" className="w-full no-autofill outline-none" {...field}/> 
                        </div>
                        </FormControl>
                        <FormMessage className='text-light-1 text-base-regular' />
                        </FormItem>
                    )}
                    />
                    {/* password */}
                    <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem className="flex flex-1 flex-col justify-start gap-3 w-full">
                        <FormControl>
                        <div className="border border-stone-800 p-3 rounded max-lg:-mt-3 max-lg:w-[300px] w-[400px] flex flex-1 items-center max-lg:mx-auto gap-5">
                            <FaLock />
                            <input type="password" placeholder="password" className="w-full outline-none" {...field} />
                        </div>
                        </FormControl>
                        <FormMessage className='text-light-1 text-base-regular' />
                        </FormItem>
                    )}
                    />
                    <p className="flex items-center justify-end -mt-6">
                        <Link to="/forgot-password" className="mt-3 text-stone-500 text-base text-right"> Forgot password ?</Link>
                    </p>
                    <div className="flex flex-col justify-center items-center -mt-10">
                        <button type="submit" className="mt-4 bg-stone-800 max-lg:px-10 px-20 rounded-3xl text-slate-100 py-2"> Continue with email </button> 
                        <div className="flex items-center justify-evenly mt-8">
                            <hr className="w-16 h-0.5 bg-stone-700 ml-3" />
                            <p className="text-stone-800 text-base ml-3">
                            Don’t have an account? </p>
                            <hr className="w-16 h-0.5 bg-stone-700 ml-3"/>
                        </div>
                        <Link to="/onboard" className="my-10 rounded-3xl px-6 py-2 border-2 border-stone-600 text-stone-700 font-medium"> Sign up </Link>
                    </div>
                </form>
            </Form>
        </section>
    )
}
