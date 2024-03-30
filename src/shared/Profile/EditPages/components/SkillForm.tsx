import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../../../components/ui/form"
import { skillValidation } from "../../../../lib/validation"
import { z } from "zod"
import toast from "react-hot-toast"
import { Textarea } from "../../../../components/ui/textarea"
import { IoWarningOutline } from "react-icons/io5"
import { useGeneral } from "../../../../lib/Tanstackquery/queriesAndMutations"
import { Box, CircularProgress } from "@mui/material"



export default function SkillForm(){

    const {isPending, mutate: addSkill} = useGeneral({isTobeDeleted: false, successMessage: "New skills have been added."})

    const form = useForm<z.infer<typeof skillValidation>>({
        resolver: zodResolver(skillValidation),
        defaultValues: {
            skill: ""
        },
    })
    
    function onSubmit(values: z.infer<typeof  skillValidation>){
        if(!values.skill){
            return toast.error("No skill added")
        }
        addSkill({
            value: values.skill,
            column_name: "skills",
            limit: 9,
            errorMessage: "total number of skills exceeded the limit"
        }) 
    }

    return (
        <section className="mt-5 max-sm:mt-10 max-lg:ml-10 max-sm:mx-3 mx-10">
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col justify-start gap-3">
                <FormField
                control={form.control}
                name="skill"
                render={({ field }) => (
                    <FormItem className="flex flex-1 flex-col justify-start gap-2 w-full">
                    <FormLabel className="w-full text-start max-lg:text-lg text-xl text-black font-palanquin mb-5"> Add a new skill </FormLabel>
                    <div className="flex items-center gap-2">
                        <span> <IoWarningOutline /> </span>
                        <p className="text-black max-lg:text-xs text-sm"> use comma to separate each skills.  </p>
                    </div>
                    <div className="flex items-center gap-2 pb-4">
                        <span> <IoWarningOutline /> </span>
                        <p className="text-black max-lg:text-xs text-sm"> A maximum of 9 skills allowed.  </p>
                    </div>
                    <FormControl className="max-lg:mt-2 mt-5">
                        <Textarea className="p-3 max-lg:h-[100px] h-[150px] max-sm:w-[280px] border-gray-700 focus:outline-none focus-visible:ring-white overflow-y-auto custom-scrollbar" {...field} />
                    </FormControl>
                    <FormMessage className='text-sm text-red-500' />
                    </FormItem>
                )}
                />
                <button className="bg-gradient-to-r from-primary to-secondary mt-5 max-lg:w-[100px] w-[130px] px-8 py-2 rounded-lg text-slate-100 max-lg:text-base text-lg font-palanquin">
                    { isPending ? (
                        <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "center"}}>
                            <CircularProgress size={20} color="inherit" />
                        </Box>

                    ) : "Add"}
                </button>
            </form>
            </Form>
        </section>
    )
}
