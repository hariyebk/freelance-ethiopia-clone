import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../../../components/ui/form"
import { Input } from "../../../../components/ui/input"
import { certificationValidation } from "../../../../lib/validation"
import { Box, CircularProgress } from "@mui/material"
import { useGeneral } from "../../../../lib/Tanstackquery/queriesAndMutations"


export default function ModalForCertifications(){

    const {isPending, mutate: addCertificate} = useGeneral({
        isTobeDeleted: false,
        successMessage: "certificate added successfully"
    })

    const form = useForm<z.infer<typeof certificationValidation>>({
        resolver: zodResolver(certificationValidation),
        defaultValues: {
            title: "",
            presentedBy: "",
            issuedDate: "",
            expirationDate: "",
            link: ""
        },
    })
    
    function onSubmit(values: z.infer<typeof certificationValidation>){
        const tempData = {
            title: values.title,
            presentedBy: values.presentedBy,
            issuedDate: values.issuedDate,
            expirationDate: values.expirationDate,
            link: values.link ? values.link : null
        }
        addCertificate({
            value: tempData,
            column_name: "certifications",
            errorMessage: "Failed to add the certificate"
        })
    }

    return (
        <section className="mt-4 mb-5 focus:border-none">
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col justify-start mx-5 gap-3">
                {/* TITLE */}
                <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                    <FormItem className="flex flex-1 flex-col justify-start gap-2 w-full">
                    <FormLabel className="text-base text-stone-500 font-semibold font-palanquin"> Title </FormLabel>
                    <FormControl className="no-foucs">
                        <Input type="text" placeholder="Fullstack Developer" className="w-full mt-2 border border-gray-400 no-autofill focus:border-none" {...field} />
                    </FormControl>
                    <FormMessage className='text-sm text-red-500' />
                    </FormItem>
                )}
                />
                {/* PRESENTED BY */}
                <FormField
                control={form.control}
                name="presentedBy"
                render={({ field }) => (
                    <FormItem className="flex flex-1 flex-col justify-start gap-2 w-full">
                    <FormLabel className="mt-2 text-base text-stone-500 font-semibold font-palanquin"> Presented by </FormLabel>
                    <FormControl>
                        <Input type="text" placeholder="Coursera" className="w-full mt-2 border border-gray-400 no-autofill focus:border-none" {...field} />
                    </FormControl>
                    <FormMessage className='text-sm text-red-500' />
                    </FormItem>
                )}
                />
                {/* ISSUED DATE */}
                <FormField
                control={form.control}
                name="issuedDate"
                render={({ field }) => (
                    <FormItem className="flex flex-1 flex-col justify-start gap-2 w-full">
                    <FormLabel className="mt-2 text-base text-stone-500 font-semibold font-palanquin"> Issued Date </FormLabel>
                    <FormControl className="no-foucs">
                        <Input type="date" className="w-full mt-2 border border-gray-400 no-autofill focus:border-none" {...field} />
                    </FormControl>
                    <FormMessage className='text-sm text-red-500' />
                    </FormItem>
                )}
                />
                {/* EXPIRATION DATE */}
                <FormField
                control={form.control}
                name="expirationDate"
                render={({ field }) => (
                    <FormItem className="flex flex-1 flex-col justify-start gap-2 w-full">
                    <FormLabel className="mt-2 text-base text-stone-500 font-semibold font-palanquin"> Expiration Date </FormLabel>
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
                name="link"
                render={({ field }) => (
                    <FormItem className="flex flex-1 flex-col justify-start gap-2 w-full">
                    <FormLabel className="text-base text-stone-500 font-semibold font-palanquin"> url </FormLabel>
                    <FormControl className="no-foucs">
                        <Input type="text" className="w-full mt-2 border border-gray-400 no-autofill focus:border-none" {...field} />
                    </FormControl>
                    <FormMessage className='text-sm text-red-500' />
                    </FormItem>
                )}
                />
                <button className="mt-7 btn"> { isPending ? (
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
