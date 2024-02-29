import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { CoverLetterValidation } from "../lib/validation"
import { z } from "zod"
import { Form, FormField, FormItem, FormMessage } from "../components/ui/form"
import { FormControl } from "@mui/material"
import { Textarea } from "../components/ui/textarea"
import Goback from "../shared/pieces/Goback"
import { useEffect } from "react"
import { coverLetterGuide } from "../constants"
import { LuDot } from "react-icons/lu";

export default function Apply() {
    const form = useForm<z.infer<typeof CoverLetterValidation>>({
        resolver: zodResolver(CoverLetterValidation),
        defaultValues: {
            coverLetter: ""
        },
    })

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    async function onSubmit(values: z.infer<typeof CoverLetterValidation>){
        console.log(values)
        // TODO: Add the application to the job post applications array.
        form.reset()
    }
    return (
        <section className="w-full max-lg:my-40 mt-40 lg:mb-40">
            <Form {...form}>
                <div className="mb-16 lg:mb-10 ml-6 lg:ml-24">
                    <Goback />
                </div>
                <div className="flex items-start justify-between max-lg:ml-10  ml-36 mt-24 ">
                    <form onSubmit={form.handleSubmit(onSubmit)} className="max-lg:mx-10 lg:w-[600px]">
                        <h1 className="max-lg:text-lg text-2xl font-palanquin"> Write a Cover Letter for the hiring manager </h1>
                        <div className="lg:w-[500px] w-[350px]">
                            <FormField
                                control={form.control}
                                name="coverLetter"
                                render={({ field }) => (
                                    <FormItem className="mt-5 flex flex-1 flex-col justify-start gap-2 w-full">
                                    <FormControl className="focus:outline-none">
                                        <Textarea className="mt-7 overflow-scroll overflow-x-hidden custom-scrollbar border border-gray-600 w-full h-[200px] focus:border-none px-5 py-4 rounded-sm" {...field} />
                                    </FormControl>
                                    <FormMessage className='text-sm text-red-500' />
                                    </FormItem>
                                )}
                                />
                                <div className="w-full flex justify-end mt-10 mr-5">
                                    <button type="submit" className="max-lg:mx-auto max-lg:w-full w-[250px] lg:text-lg bg-gradient-to-r from-primary to-secondary rounded-full text-base max-lg:text-sm text-center text-white py-2 px-4"> submit </button>
                                </div>
                        </div>
                    </form>
                    {/* GUIDELINES */}
                    <div className="max-lg:hidden">
                        <h3 className="pl-16 text-base text-black font-palanquin"> Make sure that your cover letter incorporates these key points. </h3>
                        <hr className="w-[450px] shadow-xl ml-14 mt-3 border-t" />
                        <ul className="mt-5 pr-5">
                            {coverLetterGuide.map((guide) => {
                                return (
                                    <div  key={guide} className="flex items-center gap-2 pl-16">
                                        <LuDot />
                                        <li className="my-2 flex flex-wrap leading-7 font-palanquin text-sm"> {guide} </li>
                                    </div>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </Form>
        </section>
    )
}
