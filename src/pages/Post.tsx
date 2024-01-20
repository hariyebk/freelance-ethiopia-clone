import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { JobPostValidation } from "../lib/validation"
import { FormField, FormItem, FormControl, FormLabel, FormMessage, Form } from "../components/ui/form"
import { Input } from "../components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import { Experience, Gender, jobSectors, jobSite, jobTypes } from "../constants"

export default function Post() {
    const form = useForm<z.infer<typeof JobPostValidation>>({
        resolver: zodResolver(JobPostValidation),
        defaultValues: {
            title: "",
            site: "",
            type: "",
            level: "",
            sector: "",
            experience: "",
            gender: "",
            deadline: "",
            quantity: 1
        },
    })

    async function onSubmit(values: z.infer<typeof JobPostValidation>){
        console.log(values)
            
    }
    return (
        <section className="w-full mt-32 mb-36">
            <div className="mx-auto max-lg:w-[450px] w-[600px] h-auto shadow-lg bg-slate-50 rounded-md pt-10 pb-28 max-lg:px-16">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full lg:px-28">
                    <main className="">
                        <h1 className="text-2xl text-stone-500 font-semibold "> Post a Job </h1>
                            {/* TITLE */}
                            <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem className="mt-10 flex flex-1 flex-col justify-start gap-2 w-full">
                                <FormLabel className="text-sm lg:text-base font-palanquin font-medium"> Job Title </FormLabel>
                                <FormControl className="border-gray-400 focus:border-none py-3">
                                    <Input type="text" placeholder="ex. Accountant" className="w-[350px] no-autofill outline-none" {...field}/> 
                                </FormControl>
                                <FormMessage className='text-sm text-red-500' />
                                </FormItem>
                            )}
                            />
                            {/* SITE */}
                            <FormField
                            control={form.control}
                            name="site"
                            render={({ field }) => (
                                <FormItem className="mt-7 flex flex-1 flex-col justify-start gap-2 w-full">
                                <div className="w-[350px] leading-2 border border-gray-500 rounded-md">
                                    <Select onValueChange= {field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select the site for the Role"/>
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {jobSite.map((site) => {
                                                return (
                                                    <SelectItem  key={site} value={site}> {site} </SelectItem>
                                                )
                                            })}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <FormMessage className='text-sm text-red-500' />
                                </FormItem>
                            )}
                            />
                            {/* TYPE */}
                            <FormField
                            control={form.control}
                            name="type"
                            render={({ field }) => (
                                <FormItem className="mt-7 flex flex-1 flex-col justify-start gap-2 w-full">
                                <div className="w-[350px] leading-2 border border-gray-500 rounded-md">
                                    <Select onValueChange= {field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select the job type"/>
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {jobTypes.map((type) => {
                                                return (
                                                    <SelectItem  key={type} value={type}> {type} </SelectItem>
                                                )
                                            })}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <FormMessage className='text-sm text-red-500' />
                                </FormItem>
                            )}
                            />
                            {/* LEVEL */}
                            <FormField
                            control={form.control}
                            name="level"
                            render={({ field }) => (
                                <FormItem className="mt-7 flex flex-1 flex-col justify-start gap-2 w-full">
                                <div className="w-[350px] leading-2 border border-gray-500 rounded-md">
                                    <Select onValueChange= {field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select the experience level"/>
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {Experience.map((level) => {
                                                return (
                                                    <SelectItem  key={level} value={level}> {level} </SelectItem>
                                                )
                                            })}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <FormMessage className='text-sm text-red-500' />
                                </FormItem>
                            )}
                            />
                            {/* SECTOR */}
                            <FormField
                            control={form.control}
                            name="sector"
                            render={({ field }) => (
                                <FormItem className="mt-7 flex flex-1 flex-col justify-start gap-2 w-full">
                                <div className="w-[350px] leading-2 border border-gray-500 rounded-md">
                                    <Select onValueChange= {field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select the job sector"/>
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
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
                            {/* EXPERIENCE */}
                            <FormField
                            control={form.control}
                            name="experience"
                            render={({ field }) => (
                                <FormItem className="mt-7 flex flex-1 flex-col justify-start gap-2 w-full">
                                <FormLabel className="text-sm lg:text-base leading-6 font-palanquin font-medium"> How many years of experience should the candidate have ? </FormLabel>
                                <FormControl className="border-gray-400 focus:border-none py-3">
                                    <Input type="text" placeholder="ex. 2" className="w-[350px] no-autofill outline-none" {...field}/> 
                                </FormControl>
                                <FormMessage className='text-sm text-red-500' />
                                </FormItem>
                            )}
                            />
                            {/* GENDER */}
                            <FormField
                            control={form.control}
                            name="gender"
                            render={({ field }) => (
                                <FormItem className="mt-7 flex flex-1 flex-col justify-start gap-2 w-full">
                                <div className="w-[350px] leading-2 border border-gray-500 rounded-md">
                                    <Select onValueChange= {field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select the gender of the candidate"/>
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {Gender.map((gender) => {
                                                return (
                                                    <SelectItem  key={gender} value={gender}> {gender} </SelectItem>
                                                )
                                            })}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <FormMessage className='text-sm text-red-500' />
                                </FormItem>
                            )}
                            />
                            {/* DEADLINE */}
                            <FormField
                            control={form.control}
                            name="deadline"
                            render={({ field }) => (
                                <FormItem className="mt-7 flex flex-1 flex-col justify-start gap-2 w-full">
                                <FormLabel className="text-sm lg:text-base font-palanquin font-medium"> Daedline </FormLabel>
                                <FormControl className="border-gray-400 focus:border-none py-3">
                                    <Input type="date" className="w-[350px] no-autofill outline-none" {...field}/> 
                                </FormControl>
                                <FormMessage className='text-sm text-red-500' />
                                </FormItem>
                            )}
                            />
                            {/* QUANTITY */}
                            <FormField
                            control={form.control}
                            name="quantity"
                            render={({ field }) => (
                                <FormItem className="mt-7 flex flex-1 flex-col justify-start gap-2 w-full">
                                <FormLabel className="text-sm lg:text-base font-palanquin font-medium"> Quantity </FormLabel>
                                <FormControl className="border-gray-400 focus:border-none py-3">
                                    <Input type="text" className="w-[350px] no-autofill outline-none" {...field}/> 
                                </FormControl>
                                <FormMessage className='text-sm text-red-500' />
                                </FormItem>
                            )}
                            />
                            <button className="max-lg:mt-14 mt-14 w-[350px] bg-gradient-to-r from-primary to-secondary rounded-full px-5 py-2 text-lg text-slate-100 font-palanquin"> post </button>
                    </main>
                </form>
                </Form>
            </div>
        </section>
    )
}
