
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { loginValidation } from "../lib/validation";
import { Form, FormField, FormItem, FormMessage, FormControl} from "../components/ui/form";
import { Link } from "react-router-dom";
import { Input } from "../components/ui/input";
// import { IoEyeOffOutline } from "react-icons/io5";
// import { IoEyeOutline } from "react-icons/io5";
import { useState } from "react";


export default function Login() {
    const [showPassword, setShowPassword] = useState(false)
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
        <section className="flex w-full min-h-screen items-center justify-center mt-16">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col justify-start gap-8 -mt-5 p-10 shadow-md rounded-md bg-slate-50">
                    <h2 className="font-semibold max-lg:text-2xl text-3xl font-palanquin text-center">  Log in to Afriworks </h2>
                    {/* email */}
                    <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem className="flex flex-1 flex-col justify-start gap-3 w-full">
                        <FormControl className="focus:outline-none">
                        <Input placeholder="Email" className="w-full border-gray-500 focus:border-none no-autofill outline-none py-6" {...field} />
                        </FormControl>
                        <FormMessage className='text-sm text-red-500 font-palanquin' />
                        </FormItem>
                    )}
                    />
                    {/* password */}
                    <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem className="flex flex-1 flex-col justify-start gap-3 w-full">
                        <FormControl className="focus:outline-none">
                            {/* <div className="w-full flex items-center justify-between border-gray-500 border rounded-md bg-white focus-visible:ring-black focus-visible:ring-2"> */}
                            <Input type="password"  placeholder="Password" className="w-full border-gray-500 focus:border-none no-autofill outline-none py-6" {...field} />
                                {/* <div className="relative flex items-center pt-1">
                                    {showPassword ? (
                                        <button onClick={(showPassword) => setShowPassword(!showPassword)} className="absolute right-4">
                                            <IoEyeOutline />
                                        </button>
                                    ) : (
                                        <button onClick={(showPassword) => setShowPassword(!showPassword)} className="absolute right-4">
                                            <IoEyeOffOutline />
                                        </button>
                                    )}
                                </div> */}
                            {/* </div> */}
                        </FormControl>
                        <FormMessage className='text-sm text-red-500 font-palanquin' />
                        </FormItem>
                    )}
                    />
                    <p className="flex items-center justify-end -mt-6">
                        <Link to="/forgot-password" className="mt-3 text-stone-500 text-base text-right"> Forgot password ?</Link>
                    </p>
                    <div className="w-full flex flex-col justify-center items-center">
                        <button type="submit" className="bg-stone-800 max-lg:px-10 px-20 rounded-3xl max-lg:text-sm text-slate-100 py-2"> Continue with email </button> 
                        <div className="flex items-center justify-evenly mt-8">
                            <hr className="w-16 h-0.5 bg-stone-700 ml-3" />
                            <p className="text-stone-800 max-lg:text-sm text-base ml-3">
                            Don’t have an account? </p>
                            <hr className="w-16 h-0.5 bg-stone-700 ml-3"/>
                        </div>
                        <Link to="/onboard" className="w-full max-lg:w-[200px] mx-10 mt-8 px-8 py-2 rounded-full text-base text-center text-slate-100  bg-gradient-to-r from-primary to-secondary"> Sign up </Link>
                    </div>
                </form>
            </Form>
        </section>
    )
}
