import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { signupValidation } from "../../lib/validation"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../components/ui/form"
import { IoLocationOutline } from "react-icons/io5"
import { CiMail, CiUser } from "react-icons/ci"
import { FiUsers } from "react-icons/fi"
import { SlCalender } from "react-icons/sl"
import { cities, countries } from "../../constants"
import { RiLockPasswordLine } from "react-icons/ri"

interface UserFormProps {
    user?: {
        email: string,
        firstName: string,
        lastName: string,
        gender: string,
        city: string,
        country: string,
        birthDate: string
    }
    newUser: boolean,
    FormHeader: React.ReactNode,
    FormButtons: React.ReactNode
}

export default function UserForm({user, newUser, FormHeader, FormButtons} : UserFormProps) {

    const form = useForm<z.infer<typeof  signupValidation>>({
        resolver: zodResolver(signupValidation),
        defaultValues: {
            // file: [],
            email: user?.email || "",
            firstName: user?.firstName  || "",
            lastName: user?.lastName  || "",
            gender: user?.gender || "",
            city: user?.city  || "",
            country: user?.country  || "",
            birthDate: user?.birthDate  || ""
        },
    })

    async function onSubmit(values: z.infer<typeof signupValidation>){
        console.log(values)
            
    }
    return (
        <section className="w-full min-h-screen flex items-start justify-center max-lg:3 mt-10 mb-20">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col justify-start gap-3">
                    <div className="w-full flex items-start">
                        {FormHeader}
                    </div>
                    <main className="mt-4">
                        <div className="form_container">
                            {/* FIRSTNAME */}
                            <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                                <FormItem className="flex flex-1 flex-col justify-start gap-2 w-full">
                                <FormLabel className="text-base text-stone-500 font-semibold font-palanquin"> First name </FormLabel>
                                <FormControl className="no-foucs">
                                <div className="border border-stone-800 p-3 rounded max-lg:w-[300px] w-[300px] flex flex-1 items-center  max-lg:mx-auto gap-5">
                                    <CiUser style = {{fontSize: "25px"}} />
                                    <input type="text" placeholder="first name" className="w-full no-autofill outline-none" {...field}/> 
                                </div>
                                </FormControl>
                                <FormMessage className='text-sm text-red-500' />
                                </FormItem>
                            )}
                            />
                            {/* LASTNAME */}
                            <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                                <FormItem className="flex flex-1 flex-col justify-start gap-2 w-full">
                                <FormLabel className="text-base text-stone-500 font-semibold font-palanquin"> Last name </FormLabel>
                                <FormControl className="no-foucs">
                                <div className="border border-stone-800 p-3 rounded max-lg:w-[300px] w-[300px] flex flex-1 items-center  max-lg:mx-auto gap-5">
                                    <CiUser style = {{fontSize: "25px"}} />
                                    <input type="text" placeholder="last name" className="w-full no-autofill outline-none" {...field}/> 
                                </div>
                                </FormControl>
                                <FormMessage  className='text-sm text-red-500' />
                                </FormItem>
                            )}
                            />
                             {/* CITY */}
                            <FormField
                            control={form.control}
                            name="city"
                            render={({ field }) => (
                                <FormItem className="flex flex-1 flex-col justify-start gap-2 w-full">
                                <FormLabel className="text-base text-stone-500 font-semibold font-palanquin"> City </FormLabel>
                                <FormControl className="no-foucs">
                                <div className="border border-stone-800 p-3 rounded max-lg:w-[300px] w-[300px] flex flex-1 items-center  max-lg:mx-auto gap-5">
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
                        </div>
                        <div className="form_container mt-3">
                            {/* Email */}
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
                            {newUser ? (
                            // PASSWORD
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
                            />) : (
                                // GENDER
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
                            )}
                        </div>
                        <div className="form_container mt-3">
                            {/* BIRTHDATE */}
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
                            {/* COUNTRY */}
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
                        </div>
                    </main>
                    {FormButtons}
                </form>
            </Form>
        </section>
    )
}