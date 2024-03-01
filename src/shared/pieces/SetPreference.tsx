import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormMessage } from "../../components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"
import { jobSectors } from "../../constants"
import { AccountRoles } from "../../types"
import { preferenceValidation } from "../../lib/validation"
import { zodResolver } from "@hookform/resolvers/zod"
import useApi from "../../context/hook"
import { useForm } from "react-hook-form"
import { useUpdatePreference } from "../../lib/Tanstackquery/queriesAndMutations"


export default function SetPreference(){
    const {role, setLoading} = useApi()
    const {mutate: updatePreference} = useUpdatePreference()

    const form = useForm<z.infer<typeof preferenceValidation>>({
        resolver: zodResolver(preferenceValidation),
        defaultValues: {
            sectorPreference: ""
        },
    })

    function onSubmit(values: z.infer<typeof preferenceValidation>){
        setLoading(true)
        window.scrollTo(0, 0);
        updatePreference(values.sectorPreference!)
        setLoading(false)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="">
            {role === AccountRoles.jobseeker && <>
                <h1 className="mt-14 max-lg:text-lg text-xl text-stone-500 font-semibold "> Set what kind of jobs you want to see </h1>
                <FormField
                control={form.control}
                name="sectorPreference"
                render={({ field }) => (
                    <FormItem className="mt-10 flex flex-1 flex-col justify-start gap-2 w-full">
                    <div className="leading-2 border border-gray-500 rounded-md">
                        <Select onValueChange= {field.onChange} defaultValue={field.value}>
                            <FormControl>
                                <SelectTrigger className="focus:border-none focus:outline-none focus:ring-white">
                                    <SelectValue placeholder="Select the sector"/>
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent className="">
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
                <button className="max-lg:mt-14 mt-10 w-[330px] bg-gradient-to-r from-primary to-secondary rounded-full px-5 py-2 text-slate-100 text-base font-palanquin"> set preference </button>
                
                </>
                }
            </form>
        </Form>
    )
}
