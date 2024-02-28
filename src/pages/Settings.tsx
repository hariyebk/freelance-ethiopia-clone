import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../components/ui/form"
import { Input } from "../components/ui/input"
import { useForm } from "react-hook-form"
import { SettingsValidation } from "../lib/validation"
import { z } from "zod"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import { jobSectors } from "../constants"
import { AccountRoles } from "../types"
import useApi from "../context/hook"
import { useState } from "react"
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5"

export default function Settings() {
    const [showPassword, setShowPassword] = useState(false)
    function handlePassword(){
        setShowPassword(!showPassword)
    }
    const {role} = useApi()
    const form = useForm<z.infer<typeof SettingsValidation>>({
        resolver: zodResolver(SettingsValidation),
        defaultValues: {
            oldPassword: "",
            newPassword: "",
            passwordConfirm: "",
            sectorPreference: ""
        },
    })

    async function onSubmit(values: z.infer<typeof SettingsValidation>){
        console.log(values)
            
    }
    return (
        <section className="w-full mt-32 mb-36">
            <div className="mx-auto max-lg:w-[450px] w-[700px] h-auto shadow-lg bg-slate-50 rounded-md pt-10 pb-28 max-lg:px-16 px-28">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="">
                    <main className="">
                        <h1 className="max-lg:text-lg text-xl text-stone-500 font-semibold "> Update Your Password </h1>
                         {/* PASSWORD */}
                        <FormField
                            control={form.control}
                            name="oldPassword"
                            render={({ field }) => (
                                <FormItem className="mt-10 flex flex-1 flex-col justify-start gap-2 w-full">
                                <FormLabel className="text-base font-palanquin font-medium"> Old Password </FormLabel>
                                <FormControl className="focus:outline-none">
                                    <div className="max-lg:w-[320px] w-[350px] bg-white border border-gray-500 rounded-md focus-visible:ring-offset-black flex items-center">
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
                                <FormMessage className='text-sm text-red-500' />
                                </FormItem>
                            )}
                            />
                        {/* PASSWORD */}
                        <FormField
                            control={form.control}
                            name="newPassword"
                            render={({ field }) => (
                                <FormItem className="mt-7 flex flex-1 flex-col justify-start gap-2 w-full">
                                <FormLabel className="text-base font-palanquin font-medium"> New Password </FormLabel>
                                <FormControl className="focus:outline-none">
                                    <div className="max-lg:w-[320px] w-[350px] bg-white border border-gray-500 rounded-md focus-visible:ring-offset-black flex items-center">
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
                                <FormMessage className='text-sm text-red-500' />
                                </FormItem>
                            )}
                            />
                        {/* PASSWORDCONFIRM */}
                        <FormField
                            control={form.control}
                            name="passwordConfirm"
                            render={({ field }) => (
                                <FormItem className="mt-5 flex flex-1 flex-col justify-start gap-2 w-full">
                                <FormLabel className="text-base font-palanquin font-medium"> Confirm Password </FormLabel>
                                <FormControl className="focus:outline-none">
                                    <div className="max-lg:w-[320px] w-[350px] bg-white border border-gray-500 rounded-md focus-visible:ring-offset-black flex items-center">
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
                            <button className="mt-10 w-[330px] bg-gradient-to-r from-primary to-secondary rounded-full px-5 py-2 text-slate-100 text-base font-palanquin"> Update </button>
                            {role === AccountRoles.jobseeker && <>
                                <h1 className="mt-14 max-lg:text-lg text-xl text-stone-500 font-semibold "> Set what kind of jobs you want to see </h1>
                                <FormField
                                control={form.control}
                                name="sectorPreference"
                                render={({ field }) => (
                                    <FormItem className="mt-10 flex flex-1 flex-col justify-start gap-2 w-full">
                                    <div className="leading-2 border border-gray-500 rounded-md">
                                        <Select onValueChange= {field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger className="focus:border-none focus:outline-none focus:ring-white">
                                                    <SelectValue placeholder="Select the sector"/>
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent className="">
                                                {jobSectors.map((sector) => {
                                                    return (
                                                        <SelectItem  key={sector} value={sector}> {sector} </SelectItem>
                                                    )
                                                })}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <FormMessage className='text-sm text-red-500' />
                                    </FormItem>
                                )}
                                />
                                <button className="max-lg:mt-14 mt-10 w-[330px] bg-gradient-to-r from-primary to-secondary rounded-full px-5 py-2 text-slate-100 text-base font-palanquin"> set preference </button>
                            </>
                        }
                    </main>
                </form>
                </Form>
            </div>
        </section>
    )
}