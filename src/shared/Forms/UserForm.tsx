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
import { Textarea } from "../../components/ui/textarea"
import useApi from "../../context/hook"
import { signUpType } from "../../types"
import lodash from "lodash"
import toast from "react-hot-toast"

interface UserFormProps {
    newUser: boolean,
    handleSubmit: (userData: signUpType) => void
}

export default function UserForm({newUser, handleSubmit} : UserFormProps) {

    const [showPassword, setShowPassword] = useState(false)
    const {user} = useApi()
    const tempData = {
        email: user?.email,
        firstName: user?.firstName,
        lastName: user?.lastName,
        gender: user?.gender,
        city: user?.city,
        country: user?.country,
        phone: user?.phone.replace("0", ""),
        birthDate: user?.birthDate
    }

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
            phone: user?.phone ? user?.phone.replace("0", "") : "",
            birthDate: user?.birthDate || ""
        },
    })

    function onSubmit(values: z.infer<typeof signupValidation>){

        if(newUser && !values.password){
            return form.setError("password", {
                message: "password is required"
            })
        }
        // Create new user
        if(newUser){
            window.scrollTo(0, 0);
            return handleSubmit(values as signUpType)
        }  
        // If, no changes are made
        if(!newUser && lodash.isEqual(tempData, values)){
            return toast.error("You have made no changes")
        }
        // update user
        else {
            window.scrollTo(0, 0);
            handleSubmit(values)
        }
    }

    
    return (
        <section className="w-full flex items-start justify-center max-lg:3 mt-10 mb-32">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col justify-start gap-3">
                    <div className="w-full flex items-start">
                        <div className="w-full flex gap-14 max-lg:mt-10 mb-5">
                            <div className="flex items-center mx-auto gap-4">
                                <img src="/Icons/edit-profile.png" width={30} height={30} alt="form-icon"/>
                                <h2 className="text-2xl text-stone-600 font-palanquin font-bold "> {newUser ? "Create Your Account" : "Update Your Profile"} </h2>
                            </div>
                        </div>
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
                                    <Input type="text" placeholder="first name" className={`${newUser ? "w-[200px]" : "w-[300px]"} max-lg:w-full no-autofill outline-none`} {...field}/> 
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
                                    <Input type="text" placeholder="last name"  className={`${newUser ? "w-[200px]" : "w-[300px]"} max-lg:w-full no-autofill outline-none`} {...field}/> 
                                </FormControl>
                                <FormMessage  className='text-sm text-red-500' />
                                </FormItem>
                            )}
                            />
                            {/* CITY */}
                            {newUser && (
                            <FormField
                            control={form.control}
                            name="city"
                            render={({ field }) => (
                                <FormItem className="flex flex-1 flex-col justify-start gap-2 w-full">
                                <FormLabel className="text-base text-stone-500 font-semibold font-palanquin">
                                City 
                                <span className="text-red-500 text-lg"> * </span>
                                </FormLabel>
                                <Select onValueChange= {field.onChange} defaultValue={field.value}>
                                    <FormControl className="border-gray-400 focus:border-none py-4">
                                        <SelectTrigger {...field}>
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
                            />)}
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
                                <Select onValueChange= {field.onChange} defaultValue={field.value}>
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
                                    <Input type="text" placeholder="Email"  className={`${newUser ? "w-[200px]" : "w-[300px]"}max-lg:w-full no-autofill outline-none`} {...field}/>
                                </FormControl>
                                <FormMessage  className='text-sm text-red-500' />
                                </FormItem>
                            )}
                            />
                            {newUser && (
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
                            )}
                            {/* CITY */}
                            {!newUser && <FormField
                            control={form.control}
                            name="city"
                            render={({ field }) => (
                                <FormItem className="flex flex-1 flex-col justify-start gap-2 w-full">
                                <FormLabel className="text-base text-stone-500 font-semibold font-palanquin">
                                City 
                                <span className="text-red-500 text-lg"> * </span>
                                </FormLabel>
                                <Select onValueChange= {field.onChange} defaultValue={field.value}>
                                    <FormControl className="border-gray-400 focus:border-none py-4">
                                        <SelectTrigger {...field}>
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
                            />}
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
                                <Select onValueChange= {field.onChange} defaultValue={field.value}>
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
                    <button type="submit" className="max-lg:w-72 w-full mt-10 mx-auto flex justify-center bg-gradient-to-r from-primary to-secondary max-lg:px-16 px-16 max-lg:py-2 py-2 text-slate-100 text-lg rounded-full"> {newUser ? "Register" : "Update"} </button>
                </form>
            </Form>
        </section>
    )
}