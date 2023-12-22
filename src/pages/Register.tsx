import { useForm } from "react-hook-form"
import { z } from "zod"
import { signupValidation } from "../lib/validation"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../components/ui/form"
import { IoLocationOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { FiUsers } from "react-icons/fi";
import { cities, countries } from "../constants"
import { CiMail } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";

export default function Register() {
    const form = useForm<z.infer<typeof  signupValidation>>({
        resolver: zodResolver(signupValidation),
        defaultValues: {
            email: "" ,
            password: "",
            firstName: "",
            lastName: "",
            birthDate:  "",
            gender: "male",
            country: "et",
            city: "aa"
        },
    })
    function onSubmit(values: z.infer<typeof signupValidation>){
        console.log(values)
        
    }
    return (
        <section className="w-full min-h-screen flex items-start justify-center mt-10 mb-20">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col justify-start gap-5">
                    <h1 className="text-2xl font-palanquin mb-7 mx-auto"> Account Information </h1>
                    {/* email */}
                    <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                        <FormItem className="flex flex-1 flex-col justify-start gap-2 w-full">
                        <FormLabel className="text-base text-stone-500 font-semibold font-palanquin"> First name </FormLabel>
                        <FormControl className="no-foucs">
                        <div className="border border-stone-800 p-3 rounded max-lg:w-[300px] w-[400px] flex flex-1 items-center  max-lg:mx-auto gap-5">
                            <CiUser style = {{fontSize: "25px"}} />
                            <input type="text" placeholder="first name" className="w-full no-autofill outline-none" {...field}/> 
                        </div>
                        </FormControl>
                        <FormMessage className='text-sm text-red-500' />
                        </FormItem>
                    )}
                    />
                    {/* last name */}
                    <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                        <FormItem className="flex flex-1 flex-col justify-start gap-2 w-full">
                        <FormLabel className="text-base text-stone-500 font-semibold font-palanquin"> Last name </FormLabel>
                        <FormControl className="no-foucs">
                        <div className="border border-stone-800 p-3 rounded max-lg:w-[300px] w-[400px] flex flex-1 items-center  max-lg:mx-auto gap-5">
                            <CiUser style = {{fontSize: "25px"}} />
                            <input type="text" placeholder="last name" className="w-full no-autofill outline-none" {...field}/> 
                        </div>
                        </FormControl>
                        <FormMessage  className='text-sm text-red-500' />
                        </FormItem>
                    )}
                    />
                    {/* email */}
                    <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem className="flex flex-1 flex-col justify-start gap-2 w-full">
                        <FormLabel className="text-base text-stone-500 font-semibold font-palanquin"> Email </FormLabel>
                        <FormControl className="no-foucs">
                        <div className="border border-stone-800 p-3 rounded max-lg:w-[300px] w-[400px] flex flex-1 items-center  max-lg:mx-auto gap-5">
                            <CiMail style = {{fontSize: "25px"}} />
                            <input type="text" placeholder="email" className="w-full no-autofill outline-none" {...field}/> 
                        </div>
                        </FormControl>
                        <FormMessage  className='text-sm text-red-500' />
                        </FormItem>
                    )}
                    />
                    {/* Password */}
                    <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem className="flex flex-1 flex-col justify-start gap-2 w-full">
                        <FormLabel className="text-base text-stone-500 font-semibold font-palanquin"> Password </FormLabel>
                        <FormControl className="no-foucs">
                        <div className="border border-stone-800 p-3 rounded max-lg:w-[300px] w-[400px] flex flex-1 items-center  max-lg:mx-auto gap-5">
                            <RiLockPasswordLine style = {{fontSize: "25px"}} />
                            <input type="password" placeholder="password" className="w-full no-autofill outline-none" {...field}/> 
                        </div>
                        </FormControl>
                        <FormMessage  className='text-sm text-red-500' />
                        </FormItem>
                    )}
                    />
                    {/* birth date */}
                    <FormField
                    control={form.control}
                    name="birthDate"
                    render={({ field }) => (
                        <FormItem className="flex flex-1 flex-col justify-start gap-2 w-full">
                        <FormLabel className="text-base text-stone-500 font-semibold font-palanquin"> Date of Birth </FormLabel>
                        <FormControl className="no-foucs">
                        <div className="border border-stone-800 p-3 rounded max-lg:w-[300px] w-[400px] flex flex-1 items-center  max-lg:mx-auto gap-5">
                            <SlCalender style = {{fontSize: "20px"}} />
                            <input type="Date" className="w-full no-autofill outline-none" {...field}/> 
                        </div>
                        </FormControl>
                        <FormMessage  className='text-sm text-red-500' />
                        </FormItem>
                    )}
                    />
                    {/* gender */}
                    <FormField
                    control={form.control}
                    name="gender"
                    render={({ field }) => (
                        <FormItem className="flex flex-1 flex-col justify-start gap-2 w-full">
                        <FormLabel className="text-base text-stone-500 font-semibold font-palanquin"> Gender </FormLabel>
                        <FormControl className="no-foucs">
                        <div className="border border-stone-800 p-3 rounded max-lg:w-[300px] w-[400px] flex flex-1 items-center  max-lg:mx-auto gap-5">
                            <FiUsers style = {{fontSize: "25px"}} />
                            <select className="w-full no-autofill outline-none text-base text-stone-500 font-palanquin" {...field}>
                                <option value="male" className="p-3"> Male </option>
                                <option value="female" className="p-3"> Female </option>
                            </select>
                        </div>
                        </FormControl>
                        <FormMessage  className='text-sm text-red-500' />
                        </FormItem>
                    )}
                    />
                    {/* country */}
                    <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                        <FormItem className="flex flex-1 flex-col justify-start gap-2 w-full">
                        <FormLabel className="text-base text-stone-500 font-semibold font-palanquin"> Country </FormLabel>
                        <FormControl className="no-foucs">
                        <div className="border border-stone-800 p-3 rounded max-lg:w-[300px] w-[400px] flex flex-1 items-center  max-lg:mx-auto gap-5">
                            <IoLocationOutline style = {{fontSize: "25px"}} />
                            <select className="w-full no-autofill outline-none text-base text-stone-500 font-palanquin" {...field}>
                                {countries.map((country) => {
                                    return (
                                        <option key={country.value} value={country.value}> {country.label} </option>
                                    )
                                })}
                            </select>
                        </div>
                        </FormControl>
                        <FormMessage  className='text-sm text-red-500' />
                        </FormItem>
                    )}
                    />
                    {/* City */}
                    <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                        <FormItem className="flex flex-1 flex-col justify-start gap-2 w-full">
                        <FormLabel className="text-base text-stone-500 font-semibold font-palanquin"> City </FormLabel>
                        <FormControl className="no-foucs">
                        <div className="border border-stone-800 p-3 rounded max-lg:w-[300px] w-[400px] flex flex-1 items-center  max-lg:mx-auto gap-5">
                            <IoLocationOutline style = {{fontSize: "25px"}} />
                            <select className="w-full no-autofill outline-none text-base text-stone-500 font-palanquin" {...field}>
                                {cities.map((city) => {
                                    return (
                                        <option key={city.value} value={city.value}> {city.label} </option>
                                    )
                                })}
                            </select>
                        </div>
                        </FormControl>
                        <FormMessage  className='text-sm text-red-500' />
                        </FormItem>
                    )}
                    />
                    <button type="submit" className="mt-10 flex justify-center bg-stone-800 max-lg:px-16 px-16 max-lg:py-2 py-3 text-slate-100 text-lg rounded-full"> Register </button>
                </form>
            </Form>
        </section>
    )
}
