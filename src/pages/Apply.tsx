import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { CoverLetterValidation } from "../lib/validation"
import { z } from "zod"
import { Form, FormField, FormItem, FormMessage } from "../components/ui/form"
import { Box, CircularProgress, FormControl } from "@mui/material"
import { Textarea } from "../components/ui/textarea"
import Goback from "../shared/pieces/Goback"
import { useEffect } from "react"
import { coverLetterGuide } from "../constants"
import { LuDot } from "react-icons/lu";
import { useApply } from "../lib/Tanstackquery/queriesAndMutations"
import useApi from "../context/hook"

export default function Apply() {
    const {isPending, mutate: apply} = useApply()
    const {user} = useApi()
    const form = useForm<z.infer<typeof CoverLetterValidation>>({
        resolver: zodResolver(CoverLetterValidation),
        defaultValues: {
            coverLetter: ""
        },
    })

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    function onSubmit(values: z.infer<typeof CoverLetterValidation>){
        apply({
            userId: user?.id as string,
            coverLetter: values.coverLetter
        })
    }


    return (
        <section className="w-full container md:my-52 max-md:my-40">
            <Form {...form}>
                <div className="md:hidden mb-16 lg:mb-10 ml-6">
                    <Goback />
                </div>
                <div className="flex items-center justify-center mt-10 max-md:mt-20 xl:ml-16">
                    <form onSubmit={form.handleSubmit(onSubmit)} className="lg:w-[600px]">
                        <h1 className="max-lg:text-lg text-2xl font-palanquin"> Write a Cover Letter for the hiring manager </h1>
                        <div className="md:w-[500px] max-md:w-[350px]">
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
                                <div className="w-full flex justify-end mt-10">
                                    <button type="submit" className="max-lg:mx-auto max-lg:w-full w-[250px] lg:text-lg bg-gradient-to-r from-primary to-secondary rounded-full text-base max-lg:text-sm text-center text-white py-2 px-4">
                                        {isPending ? (
                                        <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "center"}}>
                                            <CircularProgress size={20} color="inherit" />
                                        </Box>

                                        ): "submit"}
                                    </button>
                                </div>
                        </div>
                    </form>
                    {/* GUIDELINES */}
                    <div className="max-xl:hidden mb-10 -ml-6">
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
