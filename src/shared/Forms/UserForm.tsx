import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { signupValidation } from "../../lib/validation"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../components/ui/form"
import { cities, countries } from "../../constants"
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "../../components/ui/select"
import { Input } from "../../components/ui/input"
import { useState } from "react"
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5"
import { signUpType } from "../../pages/Register"
import { Textarea } from "../../components/ui/textarea"

interface UserFormProps {
    user?: {
        email: string,
        firstName: string,
        lastName: string,
        gender: string,
        city: string,
        country: string,
        phone: string,
        birthDate: string
    }
    newUser: boolean,
    FormHeader: React.ReactNode,
    FormButtons: React.ReactNode,
    handleSubmit?: (userData: signUpType) => void
}

export default function UserForm({user, newUser, FormHeader, FormButtons, handleSubmit} : UserFormProps) {
    const [showPassword, setShowPassword] = useState(false)
    function handlePassword(){
        setShowPassword(!showPassword)
    }
    const form = useForm<z.infer<typeof  signupValidation>>({
        resolver: zodResolver(signupValidation),
        defaultValues: {
            email: user?.email || "",
            firstName: user?.firstName  || "",
            lastName: user?.lastName  || "",
            gender: user?.gender || "",
            city: user?.city  || "",
            country: user?.country  || "",
            phone: user?.phone,
            birthDate: user?.birthDate
        },
    })

    async function onSubmit(values: z.infer<typeof signupValidation>){
        if(handleSubmit){
            handleSubmit(values)
        }    
    }
    return (
        <section className="w-full flex items-start justify-center max-lg:3 mt-10 mb-32">
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
                                <FormLabel className="text-base text-stone-500 font-semibold font-palanquin"> 
                                First name
                                <span className="text-red-500 text-lg"> * </span>
                                </FormLabel>
                                <FormControl className="border-gray-400 focus:border-none py-5">
                                    <Input type="text" placeholder="first name" className="max-lg:w-full w-[200px] no-autofill outline-none" {...field}/> 
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
                                <FormLabel className="text-base text-stone-500 font-semibold font-palanquin"> 
                                Last name 
                                <span className="text-red-500 text-lg"> * </span>
                                </FormLabel>
                                <FormControl className="border-gray-400 focus:border-none py-5">
                                    <Input type="text" placeholder="last name" className="max-lg:w-full w-[200px] no-autofill outline-none" {...field}/> 
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
                                <FormLabel className="text-base text-stone-500 font-semibold font-palanquin">
                                City 
                                <span className="text-red-500 text-lg"> * </span>
                                </FormLabel>
                                <Select onValueChange= {field.onChange}>
                                    <FormControl className="border-gray-400 focus:border-none py-4">
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select your city" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {cities.map((city) => {
                                            return (
                                                <SelectItem key={city.label} value={city.label}> {city.label} </SelectItem>
                                            )
                                        })}
                                    </SelectContent>
                                </Select>
                                <FormMessage  className='text-sm text-red-500' />
                                </FormItem>
                            )}
                            />
                        </div>
                        <div className="form_container mt-6" >
                            {/* Phone number */}
                            <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem className="flex flex-1 flex-col justify-start gap-2 w-full">
                                <FormLabel className="text-base text-stone-500 font-semibold font-palanquin">
                                Phone number 
                                <span className="text-red-500 text-lg"> * </span>
                                </FormLabel>
                                <FormControl className="border-gray-400 focus:border-none">
                                    <div className="w-[300px] bg-white border border-gray-500 rounded-md focus-visible:ring-offset-black flex items-center">
                                        <div className="relative flex items-center pt-1">
                                            <div className="absolute -right-[67px] flex items-center gap-1 pb-1">
                                                <span className="fi fi-et" />
                                                <p className="text-sm"> +251 </p>
                                            </div>
                                        </div>
                                        <Input type="text" placeholder="enter your phone number" {...field} className="h-full w-full focus:outline-none no-autofill border-none pl-20 py-4 bg-white" />
                                </div>
                                </FormControl>
                                <FormMessage  className='text-sm text-red-500' />
                                </FormItem>
                            )}
                            />
                            {/* // GENDER */}
                            <FormField
                            control={form.control}
                            name="gender"
                            render={({ field }) => (
                                <FormItem className="flex flex-1 flex-col justify-start gap-2 w-full">
                                <FormLabel className="text-base text-stone-500 font-semibold font-palanquin">
                                Gender 
                                <span className="text-red-500 text-lg"> * </span>
                                </FormLabel>
                                <Select onValueChange= {field.onChange}>
                                    <FormControl className="border-gray-400 focus:border-none py-3">
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
                        </div>
                        <div className="form_container mt-3">
                            {/* Email */}
                            <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className="flex flex-1 flex-col justify-start gap-2 w-full">
                                <FormLabel className="text-base text-stone-500 font-semibold font-palanquin">
                                Email 
                                <span className="text-red-500 text-lg"> * </span>
                                </FormLabel>
                                <FormControl className="border-gray-400 focus:border-none py-5">
                                    <Input type="text" placeholder="Email" className="max-lg:w-full w-[250px] no-autofill outline-none" {...field}/>
                                </FormControl>
                                <FormMessage  className='text-sm text-red-500' />
                                </FormItem>
                            )}
                            />
                            {newUser ? (
                                <div>
                                    {/* // PASSWORD */}
                                    <FormField
                                        control={form.control}
                                        name="password"
                                        render={({ field }) => (
                                            <FormItem className="flex flex-1 flex-col justify-start gap-2 w-full">
                                            <FormLabel className="text-base text-stone-500 font-semibold font-palanquin">
                                            Password 
                                            <span className="text-red-500 text-lg"> * </span>
                                            </FormLabel>
                                            <FormControl className="focus:outline-none">
                                            <div className="w-[300px] bg-white border border-gray-500 rounded-md focus-visible:ring-offset-black flex items-center">
                                                <Input type={`${showPassword ? "text" : "password"}`}  placeholder="Password" {...field} className="h-full w-full focus:outline-none border-none p-3" />
                                                <div className="relative flex items-center pt-1">
                                                    {showPassword ? (
                                                        <button type="button" onClick={handlePassword} className="absolute right-4">
                                                            <IoEyeOutline />
                                                        </button>
                                                    ) : (
                                                        <button type="button" onClick={handlePassword} className="absolute right-4">
                                                            <IoEyeOffOutline />
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                            </FormControl>
                                            <FormMessage  className='text-sm text-red-500' />
                                            </FormItem>
                                        )}
                                    />
                                    
                                </div>
                            ) : (
                                // GENDER
                                <FormField
                                control={form.control}
                                name="gender"
                                render={({ field }) => (
                                    <FormItem className="flex flex-1 flex-col justify-start gap-2 w-full">
                                    <FormLabel className="text-base text-stone-500 font-semibold font-palanquin"> Gender </FormLabel>
                                    <Select onValueChange= {field.onChange}>
                                    <FormControl className="border-gray-400 focus:border-none py-3">
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
                                <FormLabel className="text-base text-stone-500 font-semibold font-palanquin"> 
                                Date of Birth 
                                <span className="text-red-500 text-lg"> * </span>
                                </FormLabel>
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
                                <FormLabel className="text-base text-stone-500 font-semibold font-palanquin">
                                Country 
                                <span className="text-red-500 text-lg"> * </span>
                                </FormLabel>
                                <Select onValueChange= {field.onChange}>
                                    <FormControl className="border-gray-400 focus:border-none py-6">
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select your country" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {countries.map((country) => {
                                            return (
                                                <SelectItem key={country.value} value={country.label}> {country.label} </SelectItem>
                                            )
                                        })}
                                    </SelectContent>
                                </Select>
                                <FormMessage  className='text-sm text-red-500' />
                                </FormItem>
                            )}
                            />
                        </div>
                        {newUser && (
                            // bio
                            <FormField
                            control={form.control}
                            name="bio"
                            render={({ field }) => (
                                <FormItem className="flex flex-1 flex-col justify-start gap-2 w-full">
                                <FormLabel className="mt-4 text-base text-stone-500 font-semibold font-palanquin"> How do you describe yourself ? </FormLabel>
                                <FormControl className="border-gray-400 focus:border-none py-5">
                                    <Textarea className="p-3 max-lg:h-[100px] h-[150px]" {...field} />
                                </FormControl>
                                <FormMessage  className='text-sm text-red-500' />
                                </FormItem>
                            )}
                            />
                        )}
                    </main>
                    {FormButtons}
                </form>
            </Form>
        </section>
    )
}