import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormMessage } from "../../components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"
import { cities, jobSectors } from "../../constants"
import { AccountRoles } from "../../types"
import { preferenceValidation } from "../../lib/validation"
import { zodResolver } from "@hookform/resolvers/zod"
import useApi from "../../context/hook"
import { useForm } from "react-hook-form"
import { useUpdatePreference } from "../../lib/Tanstackquery/queriesAndMutations"
import { FormLabel } from "@mui/material"

interface Props {
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export default function SetPreference({setIsLoading}: Props){
    const {role, user} = useApi()
    const {isPending, mutate: updatePreference} = useUpdatePreference()
    const sectors = [ "None", ...jobSectors]

    const form = useForm<z.infer<typeof preferenceValidation>>({
        resolver: zodResolver(preferenceValidation),
        defaultValues: {
            sectorPreference: user?.preference?.sector || "",
            locationPreference: user?.preference?.location || ""
        },
    })

    function onSubmit(values: z.infer<typeof preferenceValidation>){
        window.scrollTo(0, 0);
        const preferences = {
            sector: values.sectorPreference,
            location: values.locationPreference
        }

        setIsLoading(isPending)
        updatePreference(preferences)
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
                    <FormLabel className="text-black"> choose your Industry </FormLabel>
                    <div className="max-lg:w-[300px] w-[400px] leading-2 border border-gray-500 rounded-md">
                        <Select onValueChange= {field.onChange} defaultValue={field.value}>
                            <FormControl>
                                <SelectTrigger className="focus:border-none focus:outline-none focus:ring-white">
                                    <SelectValue placeholder="Select your Industry"/>
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent className="">
                                {sectors.map((sector) => {
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
                {/* WORKING LOCATION */}
                <FormField
                        control={form.control}
                        name="locationPreference"
                        render={({ field }) => (
                            <FormItem className="mt-7 flex flex-1 flex-col justify-start gap-2 w-full">
                            <FormLabel className="flex items-center gap-2 max-lg:text-xs text-sm text-black font-palanquin font-medium"> 
                            choose your working location
                            </FormLabel>
                            <div className="max-lg:w-[300px] w-[400px] leading-2 border border-gray-500 rounded-md">
                                <Select onValueChange= {field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger className="focus:border-none focus:outline-none focus:ring-white">
                                            <SelectValue placeholder="Select the city you want to work in"/>
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {cities.map((city) => {
                                            return (
                                                <SelectItem  key={city.value} value={city.label}> {city.label} </SelectItem>
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
