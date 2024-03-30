import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../../../components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { WorkExperienceValidation } from "../../../../lib/validation";
import { ExperienceProps } from "../../Experience";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";
import { useGeneral } from "../../../../lib/Tanstackquery/queriesAndMutations";
import { Box, CircularProgress } from "@mui/material";
import { IoWarningOutline } from "react-icons/io5";

interface ModalForWorkProps{
    experience?: ExperienceProps
}

export default function ModalForWork({experience}: ModalForWorkProps) {

    const {isPending, mutate: addExperience} = useGeneral({
        isTobeDeleted: false,
        successMessage: "New Experience has been added"
    })

    const form = useForm<z.infer<typeof WorkExperienceValidation>>({
        resolver: zodResolver(WorkExperienceValidation),
        defaultValues: {
            position: experience?.position || "",
            company: experience?.company || "",
            location: experience?.location || "",
            city: experience?.city || "",
            startDate: experience?.startDate || "",
            finishDate: experience?.finishedDate || "",
            contribution: experience?.contribution || ""
        },
    })
    
    function onSubmit(values: z.infer<typeof WorkExperienceValidation>){
            const tempData = {
                position: values.position,
                company: values.company,
                city: values.city ? values.city : null,
                location: values.location ? values.location : "Remote",
                startDate: values.startDate,
                finishedDate: values.finishDate ? values.finishDate : "now",
                contribution: values.contribution
            }

            addExperience({
                value: tempData,
                column_name: "experiences",
                errorMessage: "Failed to create your Experience"
            })
    }

    return (
        <section className="mt-4 mb-10 max-sm:pl-5  focus:border-none">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col justify-start max-lg:mr-5 lg:mx-5 gap-3">
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
                    name="location"
                    render={({ field }) => (
                        <FormItem className="flex flex-1 flex-col justify-start gap-2 w-full">
                        <FormLabel className="mt-2 text-base text-stone-500 font-semibold font-palanquin"> 
                            <span> Country </span>
                            <div className="mt-5 mb-2 flex items-center gap-2 text-sm text-black font-light">
                                <span> <IoWarningOutline /> </span> You can skip this, if the job is Remote
                            </div>
                        </FormLabel>
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
                        <FormLabel className="mt-2 text-base text-stone-500 font-semibold font-palanquin"> 
                            <span> City </span>
                            <div className="mt-5 mb-2 flex items-center gap-2 text-sm text-black font-light">
                                <span> <IoWarningOutline /> </span> You can skip this, if the job is Remote
                            </div>
                        </FormLabel>
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
                            <Textarea placeholder="what did you contribute during your stay" className="w-full h-[150px] mt-2 border border-gray-400 no-autofill focus:border-none"  {...field} />
                        </FormControl>
                        <FormMessage className='text-sm text-red-500' />
                        </FormItem>
                    )}
                    />
                    <button className="mt-7 btn"> {isPending ? (
                        <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "center"}}>
                            <CircularProgress size={20} color="inherit" />
                        </Box>
                    ) : "Add"
                    } </button>
                </form>
            </Form>
        </section>
    )
}
