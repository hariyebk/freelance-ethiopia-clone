import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { rejectionComment } from "../../lib/validation";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../components/ui/form";
import { Textarea } from "../../components/ui/textarea";
import { useRejectApplicant } from "../../lib/Tanstackquery/queriesAndMutations";
import { Box, CircularProgress } from "@mui/material";
import { useParams } from "react-router-dom";

interface Props {
    userId: string,
    openModal: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ReasonForRejection({userId, openModal}: Props) {
    const {isPending, mutate: reject} = useRejectApplicant()
    const {id} = useParams()
    const form = useForm<z.infer<typeof rejectionComment>>({
        resolver: zodResolver(rejectionComment),
        defaultValues: {
            Comment: ""
        },
    })

    function onSubmit(values: z.infer<typeof rejectionComment>){
        reject({
            postId: id!,
            userId: userId,
            feedback: values.Comment
        })
        // close the modal
        openModal(false)
    }

    return (
        <section>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="max-lg:pl-3 pl-9 pt-5">
                    {/* Rejection Reason */}
                    <FormField
                    control={form.control}
                    name="Comment"
                    render={({ field }) => (
                        <FormItem className="flex flex-1 flex-col justify-start gap-2 w-full">
                        <FormLabel className="max-lg:mb-3 mb-5 max-lg:text-base text-xl text-black font-palanquin"> Reason for the Rejection </FormLabel>
                        <FormControl className="border-gray-700 focus:border-none">
                            <Textarea placeholder="failed to meet the requirments" className="p-3 max-lg:w-[300px] w-[370px] h-[150px] overflow-y-scroll custom-scrollbar rounded-sm text-sm text-black font-palanquin focus-visible:outline-slate-700"  {...field}/> 
                        </FormControl>
                        <FormMessage className='text-sm text-red-500' />
                        </FormItem>
                    )}
                    />
                    <button className="max-lg:w-[300px] w-[380px] mt-10 px-5 py-2 rounded-full bg-gradient-to-r from-primary to-secondary text-base text-white font-palanquin">
                        {isPending ? (
                            <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "center"}}>
                                <CircularProgress size={20} color="inherit" />
                            </Box>
                        ) : " Submit"}
                    </button>

                </form>
            </Form>
        </section>
    )
}
