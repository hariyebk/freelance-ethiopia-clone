import { useForm } from "react-hook-form"
import { jobSectors } from "../../../../constants"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "../../../../components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../../components/ui/select"
import { JobSectorValidation } from "../../../../lib/validation"


export default function ModalForMainServices() {
    const form = useForm<z.infer<typeof JobSectorValidation >>({
        resolver: zodResolver(JobSectorValidation),
        defaultValues: {
            sector:  "",
            role: ""
        },
    })
    async function onSubmit(values: z.infer<typeof JobSectorValidation>){
        console.log(values)
            
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col items-start lg:mx-6 gap-5">
                    <FormField
                    control={form.control}
                    name="sector"
                    render={({ field }) => (
                        <FormItem className="flex flex-1 flex-col justify-start gap-2 w-full">
                        <FormLabel className="mt-2 text-base text-stone-500 font-semibold font-palanquin"> Sector </FormLabel>
                        <div className="leading-2">
                            <Select onValueChange= {field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select the sector of your service"/>
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent className="z-50">
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
                    <FormField
                    control={form.control}
                    name="role"
                    render={({ field }) => (
                        <FormItem className="flex flex-1 flex-col justify-start gap-2 w-full">
                        <FormLabel className="mt-2 text-base text-stone-500 font-semibold font-palanquin"> Role </FormLabel>
                        <Select onValueChange= {field.onChange} defaultValue={field.value}>
                            <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select role of your service" />
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                <SelectItem  value="full-stack developer"> Full stack developer </SelectItem>
                            </SelectContent>
                        </Select>
                        <FormMessage className='text-sm text-red-500' />
                        </FormItem>
                    )}
                    />
                    <button className="btn"> Add Services </button>
            </form>
        </Form>
    )
}
