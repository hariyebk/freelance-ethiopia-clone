import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { EducationValidation } from "../../../../lib/validation"
import { Form, FormField, FormItem, FormControl, FormLabel, FormMessage } from "../../../../components/ui/form"
import { Input } from "../../../../components/ui/input"
import { EducationProps } from "../../../pieces/EducationItem"
import { EducationLevel } from "../../../../constants"
import { Select, SelectTrigger, SelectValue, SelectItem, SelectContent} from "../../../../components/ui/select"
import { SelectGroup } from "@radix-ui/react-select"


interface ModalEducationProps {
    education?: EducationProps
}

export default function ModalForEducation({education}: ModalEducationProps){
    const form = useForm<z.infer<typeof  EducationValidation>>({
        resolver: zodResolver(EducationValidation),
        defaultValues: {
            Institute: education?.Institute || "",
            EnrolledIn: education?.EnrolledIn || "",
            FieldOfStudy: education?.FinishedDate || "",
            StartDate: education?.StartDate || "",
            FinishedDate: education?.FinishedDate || ""
        },
    })
    async function onSubmit(values: z.infer<typeof  EducationValidation>){
        console.log(values)
            
    }
    return (
        <section className="mt-4 mb-10 focus:border-none">
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col justify-start mx-5 gap-3">
                {/* INSTITUTION */}
                <FormField
                control={form.control}
                name="Institute"
                render={({ field }) => (
                    <FormItem className="flex flex-1 flex-col justify-start gap-2 w-full">
                    <FormLabel className="text-base text-stone-500 font-semibold font-palanquin"> University </FormLabel>
                    <FormControl className="no-foucs">
                        <Input type="text" placeholder="Name of the Institute" className="w-full mt-2 border border-gray-400 no-autofill focus:border-none" {...field} />
                    </FormControl>
                    <FormMessage className='text-sm text-red-500' />
                    </FormItem>
                )}
                />
                {/* LEVEL OF EDUCATION */}
                <FormField
                control={form.control}
                name="EnrolledIn"
                render={({ field }) => (
                    <FormItem className="flex flex-1 flex-col justify-start gap-2 w-full">
                    <FormLabel className="mt-2 text-base text-stone-500 font-semibold font-palanquin"> Level of Education </FormLabel>
                    <FormControl className="z-50">
                        <Select onValueChange= {field.onChange} defaultValue={field.value}>
                            <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select your level of Education" />
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent className="container">
                                <SelectGroup>
                                    {EducationLevel.map((level) => {
                                        return (
                                            <SelectItem value={level}> {level} </SelectItem>
                                        )
                                    })}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </FormControl>
                    <FormMessage className='text-sm text-red-500' />
                    </FormItem>
                )}
                />
                {/* FIELD OF STUDY*/}
                <FormField
                control={form.control}
                name="FieldOfStudy"
                render={({ field }) => (
                    <FormItem className="mt-2 flex flex-1 flex-col justify-start gap-2 w-full">
                    <FormLabel className="mt-2 text-base text-stone-500 font-semibold font-palanquin"> Field of Study </FormLabel>
                    <FormControl className="no-foucs">
                        <Input type="text" placeholder="department" className="w-full mt-2 border border-gray-400 no-autofill focus:border-none" {...field} />
                    </FormControl>
                    <FormMessage className='text-sm text-red-500' />
                    </FormItem>
                )}
                />
                {/* START DATE */}
                <FormField
                control={form.control}
                name="StartDate"
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
                name="FinishedDate"
                render={({ field }) => (
                    <FormItem className="flex flex-1 flex-col justify-start gap-2 w-full">
                    <FormLabel className="mt-2 text-base text-stone-500 font-semibold font-palanquin"> Finish Date </FormLabel>
                    <FormControl className="no-foucs">
                        <div className="flex flex-col items-start gap-5">
                            <Input type="date" className="w-full mt-2 border border-gray-400 no-autofill focus:border-none" {...field} />
                            <div className="w-full flex items-center gap-3">
                                <Input type="checkbox" className="w-4 h-4" />
                                <p> I am currently Studing </p>
                            </div>
                        </div>
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
