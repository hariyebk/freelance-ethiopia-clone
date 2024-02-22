import { useForm } from "react-hook-form"
import { Post2Validation } from "../lib/validation"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../components/ui/form"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { IoWarningOutline } from "react-icons/io5";


export default function PostDescriptions(){
    const form = useForm<z.infer<typeof Post2Validation>>({
        resolver: zodResolver(Post2Validation),
        defaultValues: {
            description: "",
            responsibilities: "",
            requirments: "",
            qualifications: "",
            salary: "",
            howToApply: ""
        },
    })

    async function onSubmit(values: z.infer<typeof Post2Validation>){
        console.log(values)
            
    }

    return (
        <section className="w-full mt-32 mb-36">
            <div className="mx-auto max-lg:w-[435px] w-[600px] h-auto shadow-lg bg-slate-50 rounded-md pt-10 max-lg:ml-7 pb-28 max-lg:px-8">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full lg:pl-24">
                    <main className="">
                        <h1 className="text-2xl text-stone-500 font-semibold "> Tell us more about the Job </h1>
                            {/* SALARY */}
                            <FormField
                            control={form.control}
                            name="salary"
                            render={({ field }) => (
                                <FormItem className="mt-10 flex flex-1 flex-col justify-start gap-2 w-full">
                                <FormLabel className="text-sm lg:text-base font-palanquin font-semibold text-primary"> Salary amount </FormLabel>
                                <div className="flex items-center gap-2">
                                    <span> <IoWarningOutline /> </span>
                                    <p className="text-black max-lg:text-xs text-sm"> You can skip this , if you want </p>
                                </div>
                                <FormControl className="border-gray-400 focus:border-none py-3">
                                    <Input type="text" className="max-lg:w-[350px] w-[400px] no-autofill outline-none" {...field}/> 
                                </FormControl>
                                <FormMessage className='text-sm text-red-500' />
                                </FormItem>
                            )}
                            />
                            {/* DESCRIPTION */}
                            <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem className="mt-10 flex flex-1 flex-col justify-start gap-2 w-full">
                                <FormLabel className="text-sm lg:text-base font-palanquin font-semibold text-primary"> Basic Job Description </FormLabel>
                                <div className="flex items-center gap-2">
                                    <span> <IoWarningOutline /> </span>
                                    <p className="text-black max-lg:text-xs text-sm"> Total characters should not exceed 200 </p>
                                </div>
                                <FormControl className="border-gray-400 focus:border-none py-3">
                                    <Textarea className="p-3 max-lg:h-[100px] max-lg:w-[350px] w-[430px] h-[150px] overflow-y-scroll custom-scrollbar rounded-md" {...field}/> 
                                </FormControl>
                                <FormMessage className='text-sm text-red-500' />
                                </FormItem>
                            )}
                            />
                            {/* RESPONSIBILITIES */}
                            <FormField
                            control={form.control}
                            name="responsibilities"
                            render={({ field }) => (
                                <FormItem className="mt-10 flex flex-1 flex-col justify-start gap-2 w-full">
                                <FormLabel className="text-sm lg:text-base font-palanquin font-semibold text-primary"> Responsibilities </FormLabel>
                                <div className="flex items-center gap-2">
                                    <span> <IoWarningOutline /> </span>
                                    <p className="text-black max-lg:text-xs text-sm"> Please use comma (,) to separate each responsibilities </p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span> <IoWarningOutline /> </span>
                                    <p className="text-black max-lg:text-xs text-sm"> Total characters should not exceed 500 </p>
                                </div>
                                <FormControl className="border-gray-400 focus:border-none py-3">
                                    <Textarea className="p-3 max-lg:h-[100px] max-lg:w-[350px] w-[430px] h-[150px] overflow-y-scroll custom-scrollbar rounded-md" {...field}/> 
                                </FormControl>
                                <FormMessage className='text-sm text-red-500' />
                                </FormItem>
                            )}
                            />
                            {/* REQUIRMENTS */}
                            <FormField
                            control={form.control}
                            name="requirments"
                            render={({ field }) => (
                                <FormItem className="mt-10 flex flex-1 flex-col justify-start gap-2 w-full">
                                <FormLabel className="text-sm lg:text-base font-palanquin font-semibold text-primary"> Requiremnts </FormLabel>
                                <div className="flex items-center gap-2">
                                    <span> <IoWarningOutline /> </span>
                                    <p className="text-black max-lg:text-xs text-sm"> Please use comma (,) to separate each requirments </p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span> <IoWarningOutline /> </span>
                                    <p className="text-black max-lg:text-xs text-sm"> Total characters should not exceed 500 </p>
                                </div>
                                <FormControl className="border-gray-400 focus:border-none py-3">
                                    <Textarea className="p-3 max-lg:h-[100px] max-lg:w-[350px] w-[430px] h-[150px] overflow-y-scroll custom-scrollbar rounded-md" {...field}/> 
                                </FormControl>
                                <FormMessage className='text-sm text-red-500' />
                                </FormItem>
                            )}
                            />
                            {/* QUALIFICATIONS */}
                            <FormField
                            control={form.control}
                            name="qualifications"
                            render={({ field }) => (
                                <FormItem className="mt-10 flex flex-1 flex-col justify-start gap-2 w-full">
                                <FormLabel className="text-sm lg:text-base font-palanquin font-semibold text-primary"> Qualifications </FormLabel>
                                <div className="flex items-center gap-2">
                                    <span> <IoWarningOutline /> </span>
                                    <p className="text-black max-lg:text-xs text-sm"> You can skip this , if you want </p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span> <IoWarningOutline /> </span>
                                    <p className="text-black max-lg:text-xs text-sm"> Please use comma (,) to separate each requirments </p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span> <IoWarningOutline /> </span>
                                    <p className="text-black max-lg:text-xs text-sm"> Total characters should not exceed 500 </p>
                                </div>
                                <FormControl className="border-gray-400 focus:border-none py-3">
                                    <Textarea className="p-3 max-lg:h-[100px] max-lg:w-[350px] w-[430px] h-[150px] overflow-y-scroll custom-scrollbar rounded-md" {...field}/> 
                                </FormControl>
                                <FormMessage className='text-sm text-red-500' />
                                </FormItem>
                            )}
                            />
                            {/* HOW TO APPLY */}
                            <FormField
                            control={form.control}
                            name="howToApply"
                            render={({ field }) => (
                                <FormItem className="mt-10 flex flex-1 flex-col justify-start gap-2 w-full">
                                <FormLabel className="text-sm lg:text-base font-palanquin font-semibold text-primary"> How should the candidate Apply ? </FormLabel>
                                <div className="flex items-center gap-2">
                                    <span> <IoWarningOutline /> </span>
                                    <p className="text-black max-lg:text-xs text-sm"> You can skip this , if you want </p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span> <IoWarningOutline /> </span>
                                    <p className="text-black max-lg:text-xs text-sm"> Total characters should not exceed 50 </p>
                                </div>
                                <FormControl className="border-gray-400 focus:border-none py-3">
                                    <Textarea className="p-3 max-lg:h-[100px] max-lg:w-[350px] w-[450px] h-[90px] overflow-y-scroll custom-scrollbar rounded-md" {...field}/> 
                                </FormControl>
                                <FormMessage className='text-sm text-red-500' />
                                </FormItem>
                            )}
                            />
                            <button className="max-lg:mt-14 mt-14 max-lg:w-[350px] w-[400px] bg-gradient-to-r from-primary to-secondary rounded-full px-5 py-2 text-lg text-slate-100 font-palanquin"> post </button>
                    </main>
                </form>
                </Form>
            </div>
        </section>
    )
}
