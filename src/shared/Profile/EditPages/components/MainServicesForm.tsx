import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "../../../../components/ui/form"
import { MainServicesValidation } from "../../../../lib/validation"
import { IoWarningOutline } from "react-icons/io5"
import { Textarea } from "../../../../components/ui/textarea"
import toast from "react-hot-toast"

interface MainServicesProps {
    handleSubmit : (service: string) => void
}

export default function MainServicesForm({handleSubmit}: MainServicesProps) {
    
    const form = useForm<z.infer<typeof MainServicesValidation >>({
        resolver: zodResolver(MainServicesValidation),
        defaultValues: {
            service: ""
        },
    })
    
    function onSubmit(values: z.infer<typeof MainServicesValidation>){
        if(!values.service){
            return toast.error("Invalid Input")
        } 
        window.scrollTo(0, 0);
        handleSubmit(values.service)
    }

    return (
        <section className="mt-5 max-lg:mx-2 mx-10">
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col justify-start gap-3">
                <FormField
                control={form.control}
                name="service"
                render={({ field }) => (
                    <FormItem className="flex flex-1 flex-col justify-start gap-2 w-full">
                    <FormLabel className="w-full text-start max-lg:text-lg text-xl text-black font-palanquin mb-5"> What services do you offer ?  </FormLabel>
                    <div className="flex items-center gap-2">
                        <span> <IoWarningOutline /> </span>
                        <p className="text-black max-lg:text-xs text-sm"> use comma to separate each services.  </p>
                    </div>
                    <div className="flex items-center gap-2 pb-4">
                        <span> <IoWarningOutline /> </span>
                        <p className="text-black max-lg:text-xs text-sm"> A maximum of 4 services is allowed.  </p>
                    </div>
                    <FormControl className="max-lg:mt-2 mt-5">
                        <Textarea className="p-3 max-lg:h-[100px] h-[150px] border-gray-700 focus:outline-none focus-visible:ring-white overflow-y-auto custom-scrollbar" {...field} />
                    </FormControl>
                    <FormMessage className='text-sm text-red-500' />
                    </FormItem>
                )}
                />
                <button className="bg-gradient-to-r from-primary to-secondary mt-5 max-lg:w-[100px] w-[130px] px-8 py-2 rounded-lg text-slate-100 max-lg:text-base text-lg font-palanquin"> Add </button>
            </form>
            </Form>
        </section>
    )
}
