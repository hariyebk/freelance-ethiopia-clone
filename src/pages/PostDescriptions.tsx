import { useForm } from "react-hook-form"
import { Post2Validation } from "../lib/validation"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../components/ui/form"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { IoWarningOutline } from "react-icons/io5";
import { useCreatePost2, useUpdatePost } from "../lib/Tanstackquery/queriesAndMutations"
import Spinner from "../shared/pieces/Spinner"
import { useEffect } from "react"
import lodash from "lodash"
import toast from "react-hot-toast"
import { Box, CircularProgress } from "@mui/material"

interface jobPostProps {
    id?: string,
    description?: string,
    requirments?: string,
    responsibilities?: string,
    qualifications?: string | null,
    salary?: number | null,
    howToApply?: string | null,
    isTobeEdited?: boolean
}

export default function PostDescriptions({id, description, responsibilities, requirments, qualifications, salary, howToApply, isTobeEdited}: jobPostProps){

    const {isPending, mutate: createPost2} = useCreatePost2()
    const {isPending: isLoading, mutate: updatePost} = useUpdatePost()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const form = useForm<z.infer<typeof Post2Validation>>({
        resolver: zodResolver(Post2Validation),
        defaultValues: {
            description: description || "",
            responsibilities:  responsibilities|| "",
            requirments: requirments || "",
            qualifications: qualifications || "",
            salary: salary?.toString() || "",
            howToApply: howToApply || ""
        },
    })

    function onSubmit(values: z.infer<typeof Post2Validation>){
        if(isTobeEdited){
            const currentData = {description, responsibilities, requirments, qualifications, salary, howToApply}
            if(lodash.isEqual(currentData, values)){
                return toast.error("update aborted: No changes were made")
            }
            updatePost({postId: id as string, post2: values})
        }
        else {
            window.scrollTo(0, 0);
            createPost2(values)
        }
    }

    // LOADING SPINNER
    if(isPending){
        return (
            <Spinner />
        )
    }

    return (
        <section className="w-full mt-32 mb-36">
            <div className="mx-auto max-lg:w-[435px] w-[600px] h-auto shadow-lg bg-slate-50 rounded-md pt-10 pb-28 max-lg:px-8">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full lg:pl-24">
                    <main className="">
                        <h1 className="text-2xl text-stone-500 font-semibold "> {isTobeEdited ? "Update your post" : "Tell us more about the Job"} </h1>
                            {/* SALARY */}
                            <FormField
                            control={form.control}
                            name="salary"
                            render={({ field }) => (
                                <FormItem className="mt-10 flex flex-1 flex-col justify-start gap-2 w-full">
                                <FormLabel className="text-base lg:text-base font-palanquin font-semibold text-primary"> Salary amount </FormLabel>
                                <div className="flex items-center gap-2">
                                    <span> <IoWarningOutline /> </span>
                                    <p className="text-black text-sm"> You can skip this , if you want </p>
                                </div>
                                <FormControl className="border-gray-400 focus:border-none py-3">
                                    <Input type="text" placeholder={isTobeEdited ? !salary ? "Not specified" : "" : ""} className="max-sm:w-[300px] max-lg:w-[350px] w-[400px] no-autofill outline-none" {...field}/> 
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
                                <FormLabel className="text-base lg:text-base font-palanquin font-semibold text-primary"> Basic Job Description </FormLabel>
                                <FormControl className="border-gray-400 focus:border-none py-3">
                                    <Textarea className="p-3 max-lg:h-[100px] max-sm:w-[300px] max-lg:w-[350px] w-[430px] h-[150px] overflow-y-scroll custom-scrollbar rounded-md" {...field}/> 
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
                                <div className="flex items-center gap-2 max-sm:pr-6 max-sm:leading-5">
                                    <span> <IoWarningOutline /> </span>
                                    <p className="text-black text-sm"> Please use comma (,) to separate each responsibilities </p>
                                </div>
                                <FormControl className="border-gray-400 focus:border-none py-3">
                                    <Textarea className="p-3 max-lg:h-[100px] max-sm:w-[300px] max-lg:w-[350px] w-[430px] h-[150px] overflow-y-scroll custom-scrollbar rounded-md" {...field}/> 
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
                                    <p className="text-black text-sm"> Please use comma (,) to separate each requirments </p>
                                </div>
                                <FormControl className="border-gray-400 focus:border-none py-3">
                                    <Textarea className="p-3 max-lg:h-[100px] max-sm:w-[300px] max-lg:w-[350px] w-[430px] h-[150px] overflow-y-scroll custom-scrollbar rounded-md" {...field}/> 
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
                                    <p className="text-black text-sm"> You can skip this , if you want </p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span> <IoWarningOutline /> </span>
                                    <p className="text-black text-sm"> Please use comma (,) to separate each requirments </p>
                                </div>
                                <FormControl className="border-gray-400 focus:border-none py-3">
                                    <Textarea placeholder={isTobeEdited ? !qualifications ? "Not specified": "" : ""} className="p-3 max-lg:h-[100px] max-sm:w-[300px] max-lg:w-[350px] w-[430px] h-[150px] overflow-y-scroll custom-scrollbar rounded-md" {...field}/> 
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
                                    <p className="text-black text-sm"> You can skip this , if you want </p>
                                </div>
                                <FormControl className="border-gray-400 focus:border-none py-3">
                                    <Textarea placeholder={isTobeEdited ? !howToApply ? "Not specified" : "" : ""} className="p-3 max-lg:h-[100px] max-sm:w-[300px] max-lg:w-[350px] w-[450px] h-[90px] overflow-y-scroll custom-scrollbar rounded-md" {...field}/> 
                                </FormControl>
                                <FormMessage className='text-sm text-red-500' />
                                </FormItem>
                            )}
                            />
                            <button className="max-lg:mt-14 mt-14 max-sm:w-[300px] max-lg:w-[350px] w-[450px] bg-gradient-to-r from-primary to-secondary rounded-full px-5 py-2 text-lg text-slate-100 font-palanquin"> 
                            {isLoading ? (
                                <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "center"}}>
                                    <CircularProgress size={20} color="inherit" />
                                </Box>
                            ) : 
                            isTobeEdited ? "Update" : "Submit"
                            } 
                            </button>
                    </main>
                </form>
                </Form>
            </div>
        </section>
    )
}
