import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../../../components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { WorkExperienceValidation } from "../../../../lib/validation";
import { ExperienceProps } from "../../Experience";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";

interface ModalForWorkProps{
    experience?: ExperienceProps
}
export default function ModalForWork({experience}: ModalForWorkProps) {
    const form = useForm<z.infer<typeof WorkExperienceValidation>>({
        resolver: zodResolver(WorkExperienceValidation),
        defaultValues: {
            position: experience?.position || "",
            company: experience?.company || "",
            country: experience?.country || "",
            city: experience?.city || "",
            startDate: experience?.startDate || "",
            finishDate: experience?.finishedDate || "",
            contribution: experience?.contribution || ""
        },
    })
    async function onSubmit(values: z.infer<typeof WorkExperienceValidation>){
        console.log(values)
            
    }
    return (
        <section className="mt-4 mb-10 focus:border-none">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col justify-start mx-5 gap-3">
                    {/* POSITION */}
                    <FormField
                    control={form.control}
                    name="position"
                    render={({ field }) => (
                        <FormItem className="flex flex-1 flex-col justify-start gap-2 w-full">
                        <FormLabel className="text-base text-stone-500 font-semibold font-palanquin"> Title </FormLabel>
                        <FormControl className="no-foucs">
                            <Input type="text" placeholder="Title" className="w-full mt-2 border border-gray-400 no-autofill focus:border-none" {...field} />
                        </FormControl>
                        <FormMessage className='text-sm text-red-500' />
                        </FormItem>
                    )}
                    />
                    {/* COMPANY */}
                    <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                        <FormItem className="flex flex-1 flex-col justify-start gap-2 w-full">
                        <FormLabel className="mt-2 text-base text-stone-500 font-semibold font-palanquin"> Company name </FormLabel>
                        <FormControl className="no-foucs">
                            <Input type="text" placeholder="Name of the company" className="w-full mt-2 border border-gray-400 no-autofill focus:border-none" {...field} />
                        </FormControl>
                        <FormMessage className='text-sm text-red-500' />
                        </FormItem>
                    )}
                    />
                    {/* COUNTRY */}
                    <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                        <FormItem className="flex flex-1 flex-col justify-start gap-2 w-full">
                        <FormLabel className="mt-2 text-base text-stone-500 font-semibold font-palanquin"> Country </FormLabel>
                        <FormControl className="no-foucs">
                            <div className="flex flex-col items-start gap-5">
                                <Input type="text" placeholder="country name" className="w-full mt-2 border border-gray-400 no-autofill focus:border-none" {...field} />
                                <div className="w-full flex items-center gap-3">
                                    <Input type="checkbox" className="w-4 h-4" />
                                    <p> I worked remote </p>
                                </div>
                            </div>
                        </FormControl>
                        <FormMessage className='text-sm text-red-500' />
                        </FormItem>
                    )}
                    />
                    {/* CITY */}
                    <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                        <FormItem className="flex flex-1 flex-col justify-start gap-2 w-full">
                        <FormLabel className="mt-2 text-base text-stone-500 font-semibold font-palanquin"> City </FormLabel>
                        <FormControl className="no-foucs">
                            <Input type="text" placeholder="city name" className="w-full mt-2 border border-gray-400 no-autofill focus:border-none" {...field} />
                        </FormControl>
                        <FormMessage className='text-sm text-red-500' />
                        </FormItem>
                    )}
                    />
                    {/* START DATE */}
                    <FormField
                    control={form.control}
                    name="startDate"
                    render={({ field }) => (
                        <FormItem className="flex flex-1 flex-col justify-start gap-2 w-full">
                        <FormLabel className="mt-2 text-base text-stone-500 font-semibold font-palanquin"> Start Date </FormLabel>
                        <FormControl className="no-foucs">
                            <Input type="date" className="w-full mt-2 border border-gray-400 no-autofill focus:border-none" {...field} />
                        </FormControl>
                        <FormMessage className='text-sm text-red-500' />
                        </FormItem>
                    )}
                    />
                    {/* FINISH DATE */}
                    <FormField
                    control={form.control}
                    name="finishDate"
                    render={({ field }) => (
                        <FormItem className="flex flex-1 flex-col justify-start gap-2 w-full">
                        <FormLabel className="mt-2 text-base text-stone-500 font-semibold font-palanquin"> Finish Date </FormLabel>
                        <FormControl className="no-foucs">
                            <div className="flex flex-col items-start gap-5">
                                <Input type="date" className="w-full mt-2 border border-gray-400 no-autofill focus:border-none" {...field} />
                                <div className="w-full flex items-center gap-3">
                                    <Input type="checkbox" className="w-4 h-4" />
                                    <p> I currently work here </p>
                                </div>
                            </div>
                        </FormControl>
                        <FormMessage className='text-sm text-red-500' />
                        </FormItem>
                    )}
                    />
                    {/* CONTRIBUTION */}
                    <FormField
                    control={form.control}
                    name="contribution"
                    render={({ field }) => (
                        <FormItem className="mt-4 flex flex-1 flex-col justify-start gap-2 w-full">
                        <FormLabel className="mt-2 text-base text-stone-500 font-semibold font-palanquin"> Contribution </FormLabel>
                        <FormControl className="no-foucs">
                            <Textarea placeholder="what did you contribute during your stay" className="w-full mt-2 border border-gray-400 no-autofill focus:border-none"  {...field} />
                        </FormControl>
                        <FormMessage className='text-sm text-red-500' />
                        </FormItem>
                    )}
                    />
                    <button className="mt-7 btn"> Create </button>
                </form>
            </Form>
        </section>
    )
}
