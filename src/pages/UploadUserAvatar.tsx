import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { z } from "zod"
import { UserAvatarValidation } from "../lib/validation"
import { Form, FormControl, FormField, FormItem, FormMessage } from "../components/ui/form"
import AvatarUploader from "../shared/pieces/AvatarUploader"
import Goback from "../shared/pieces/Goback"
import { useState } from "react"

export default function UploadUserAvatar() {
    const navigate = useNavigate()
    const [isAvatar, setIsAvatar] = useState(false)
    const form = useForm<z.infer<typeof  UserAvatarValidation>>({
        resolver: zodResolver(UserAvatarValidation),
        defaultValues: {
            file: []
        },
    })

    async function onSubmit(values: z.infer<typeof UserAvatarValidation>){
        console.log(values)
        // TODO: CREATE THE USERS PROFILE PICTURE
        navigate("/profile-type/new")
    }
    return (
        <section className="w-full mt-40 mb-36">
            <div className="mx-auto w-full flex flex-col gap-20">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <div className="lg:hidden mb-16 ml-14">
                            <Goback />
                        </div>
                        <div  className="flex justify-center">
                            <FormField
                            control={form.control}
                            name="file"
                            render={({ field }) => (
                                <FormItem>
                                <FormControl>
                                    <AvatarUploader setIsAvatar={setIsAvatar} fieldchange={field.onChange} mediaUrl="/Images/profile-uploader.png" />
                                </FormControl>
                                <FormMessage className='text-sm text-red-500' />
                                </FormItem>
                            )}
                            />
                        </div>
                        <div className="max-lg:mt-10 mt-40 mx-48 flex max-lg:flex-col items-center lg:justify-between gap-10">
                            <div className="max-lg:hidden">
                                <Goback />
                            </div>
                            <button type="submit" className="rounded-full bg-stone-800 px-6 py-2 text-slate-100 text-base font-palanquin">
                                {isAvatar ? "countinue" : "Not now"}
                            </button>
                        </div>
                    </form>
                </Form>
                </div>
        </section>
    )
}
