import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { CoverLetterValidation } from "../lib/validation"
import { z } from "zod"
import { Form, FormField, FormItem, FormMessage } from "../components/ui/form"
import { FormControl } from "@mui/material"
import { Textarea } from "../components/ui/textarea"
import Goback from "../shared/pieces/Goback"
// import { useNavigate } from "react-router-dom"

export default function Apply() {
    // const navigate = useNavigate()
    const form = useForm<z.infer<typeof CoverLetterValidation>>({
        resolver: zodResolver(CoverLetterValidation),
        defaultValues: {
            coverLetter: ""
        },
    })

    async function onSubmit(values: z.infer<typeof CoverLetterValidation>){
        console.log(values)
        // TODO: Add the application to the job post applications array.
        form.reset()
            
    }
    return (
        <section className="w-full max-lg:my-40 mt-52 lg:mb-40">
            <Form {...form}>
                <div className="mb-16 lg:mb-10 ml-6 lg:ml-36">
                    <Goback />
                </div>
                <form onSubmit={form.handleSubmit(onSubmit)} className="mx-auto max-lg:mx-10 lg:w-[600px]">
                    <h1 className="max-lg:text-lg text-2xl font-palanquin"> Write a Cover Letter for a hiring manager </h1>
                    <div className="lg:w-[500px]">
                        <FormField
                            control={form.control}
                            name="coverLetter"
                            render={({ field }) => (
                                <FormItem className="mt-5 flex flex-1 flex-col justify-start gap-2 w-full">
                                <FormControl className="focus:outline-none">
                                    <Textarea className="mt-7 overflow-scroll overflow-x-hidden custom-scrollbar border border-gray-600 w-full h-[200px] focus:border-none px-5 py-4" {...field} />
                                </FormControl>
                                <FormMessage className='text-sm text-red-500' />
                                </FormItem>
                            )}
                            />
                            <div className="w-full flex justify-end mt-10 mr-5">
                                <button type="submit" className="w-[150px] bg-gradient-to-r from-primary to-secondary rounded-full text-base max-lg:text-sm text-center text-white py-2 px-4"> submit </button>
                            </div>
                    </div>
                </form>
            </Form>
        </section>
    )
}
