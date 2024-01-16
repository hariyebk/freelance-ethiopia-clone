import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../../../components/ui/form"
import { skillValidation } from "../../../../lib/validation"
import { z } from "zod"
import { Input } from "../../../../components/ui/input"


export default function ModalForSkill() {
    const form = useForm<z.infer<typeof skillValidation>>({
        resolver: zodResolver(skillValidation),
        defaultValues: {
            skill: ""
        },
    })
    async function onSubmit(values: z.infer<typeof  skillValidation>){
        console.log(values)
            
    }
    return (
        <section className="">
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col justify-start lg:mx-5 gap-3">
                <FormField
                control={form.control}
                name="skill"
                render={({ field }) => (
                    <FormItem className="flex flex-1 flex-col justify-start gap-2 w-full">
                    <FormLabel className="w-full text-center max-lg:text-lg text-xl text-stone-500 font-semibold font-palanquin mb-5"> Add a new skill </FormLabel>
                    <FormControl className="mt-5">
                        <Input type="text" placeholder="Add a new skill" className="w-full mt-2 border border-gray-400 no-autofill focus:border-none" {...field} />
                    </FormControl>
                    <FormMessage className='text-sm text-red-500' />
                    </FormItem>
                )}
                />
                <button className="mt-5 ml-3 w-full px-8 py-2 rounded-full bg-gradient-to-r from-primary to-secondary text-slate-100 font-palanquin"> Add </button>
            </form>
            </Form>
        </section>
    )
}
