import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { signupValidation } from "../../lib/validation"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../components/ui/form"
import { cities, countries } from "../../constants"
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "../../components/ui/select"
import { Input } from "../../components/ui/input"

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
                                <FormControl className="border-gray-400 focus:border-none py-6">
                                    <Input type="text" placeholder="first name" className="w-full no-autofill outline-none" {...field}/> 
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
                                <FormControl className="border-gray-400 focus:border-none py-6">
                                    <Input type="text" placeholder="last name" className="w-full no-autofill outline-none" {...field}/> 
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
                                <Select onValueChange= {field.onChange}>
                                    <FormControl className="border-gray-400 focus:border-none py-6">
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select your city" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {cities.map((city) => {
                                            return (
                                                <SelectItem key={city.label} value={city.value}> {city.label} </SelectItem>
                                            )
                                        })}
                                    </SelectContent>
                                </Select>
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
                                <FormControl className="border-gray-400 focus:border-none py-6">
                                    <Input type="text" placeholder="Email" className="w-full no-autofill outline-none" {...field}/>
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
                                    <FormControl className="border-gray-400 focus:border-none py-6">
                                        <Input type="password" placeholder="password" className="w-full no-autofill outline-none" {...field}/> 
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
                                    <Select onValueChange= {field.onChange}>
                                    <FormControl className="border-gray-400 focus:border-none py-6">
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select your Gender" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="male"> Male </SelectItem>
                                        <SelectItem value="female"> Female </SelectItem>
                                    </SelectContent>
                                </Select>
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
                                <FormControl className="border-gray-400 focus:border-none py-6">
                                    <Input type="date" className="w-full no-autofill outline-none" {...field}/> 
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
                                <Select onValueChange= {field.onChange}>
                                    <FormControl className="border-gray-400 focus:border-none py-6">
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select your country" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {countries.map((country) => {
                                            return (
                                                <SelectItem key={country.value} value={country.value}> {country.label} </SelectItem>
                                            )
                                        })}
                                    </SelectContent>
                                </Select>
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