import { useState } from "react";
import useApi from "../../context/hook";
import LanguageCard from "./LanguageCard";
import toast from "react-hot-toast";
import { Box, CircularProgress } from "@mui/material";
import { useLanguage } from "../../lib/Tanstackquery/queriesAndMutations";
import { Language_levels } from "../../constants";
import { IoAdd } from "react-icons/io5";
import { languageValidation } from "../../lib/validation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { FaMinus } from "react-icons/fa6";

interface EditLanguageProps {
    close: React.Dispatch<React.SetStateAction<boolean>>
}

export type Language = {
    language: string, 
    proficiency: string 
}

export default function EditLanguages({close}: EditLanguageProps){

    const {user} = useApi()
    const [showLan2, setShowLan2] = useState(false)
    const [showLan3, setShowLan3] = useState(false)
    const length = user?.languages?.length
    const [lengthLimit, setLengthLimit] = useState(length || 0)

    const {isPending, mutate: updateLanguage} = useLanguage({
        close,
        isTobeDeleted: false
    })

    const form = useForm<z.infer<typeof  languageValidation>>({
        resolver: zodResolver(languageValidation),
        defaultValues: {
            language1: "",
            lang1Level: ""
        },
    })

    const hasReachedLimits = user?.languages ? length === 3 : false

    function handleShowLess(){
        setShowLan2(false)
        setShowLan3(false)
        setLengthLimit(length || 0)
    }

    function handleShowNext(){
        showLan2 ? setShowLan3(true) : setShowLan2(true)
        setLengthLimit((length) => length + 1)
    }

    function onSubmit(values: z.infer<typeof languageValidation>){
        if(!values.language1 && !values.language2 && !values.language3) {
            return toast.error("Inavlid inputs")
        }
        const checkifAlreadyExists = user?.languages?.filter((element) => element.language === values.language1 || element.language === values.language2 || element.language === values.language3)

        if(checkifAlreadyExists && checkifAlreadyExists?.length > 0){
            return toast.error(`${checkifAlreadyExists[0]?.language} already exists`)
        }

        const tempArray: Language[] = []

        const tempData1 = {
            language: values.language1,
            proficiency: values.lang1Level
        }
        const tempData2 = {
            language: values.language2,
            proficiency: values.lang2Level
        }
        const tempData3 = {
            language: values.language3,
            proficiency: values.lang3Level
        }

        if(values.language1 && values.lang1Level){
            tempArray.push(tempData1)
        }
        if(values.language2 && values.lang2Level){
            tempArray.push(tempData2 as Language)
        }
        if(values.language3 && values.lang3Level){
            tempArray.push(tempData3 as Language)
        }

        updateLanguage({
            languages: tempArray
        })
    }

    return (
        <section className="flex flex-col items-start overflow-y-auto custom-scrollbar">
            <h4 className="mt-10 ml-7 text-lg text-black font-palanquin"> Update Languages </h4>
            {!hasReachedLimits &&  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 ml-7">
                        {/* FIRST LANGUAGE */}
                        <div>
                            <FormField
                            control={form.control}
                            name="language1"
                            render={({ field }) => (
                                <FormItem>
                                <FormControl className="border-gray-400 py-3 focus-visible:outline-none focus-visible:ring-white">
                                    <Input type="text" placeholder="English" className="w-[230px] max-lg:w-full no-autofill" {...field}/> 
                                </FormControl>
                                <FormMessage className='text-sm text-red-500' />
                                </FormItem>
                            )}
                            />
                            <FormField
                                control={form.control}
                                name="lang1Level"
                                render={({ field }) => (
                                <FormItem>
                                <Select onValueChange= {field.onChange} defaultValue={field.value}>
                                    <FormControl className="w-[230px] mt-3">
                                        <SelectTrigger className="py-3 focus:border-none focus:outline-none focus:ring-white">
                                            <SelectValue placeholder="Select your proficiency" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent className="w-[230px]">
                                        {Language_levels.map((level) => {
                                            return (
                                                <SelectItem key={level} value={level}> {level} </SelectItem>
                                            )
                                        })}
                                    </SelectContent>
                                </Select>
                                <FormMessage  className='text-sm text-red-500' />
                                </FormItem>
                                )}
                                />
                                {showLan2 && <hr className="mt-3 border-t border-gray-300 w-[230px] shadow-md" />}
                        </div>
                        {/* SECOND LANGUAGE */}
                        { showLan2 && <div className="mt-5">
                            <FormField
                            control={form.control}
                            name="language2"
                            render={({ field }) => (
                                <FormItem>
                                <FormControl className="border-gray-400 focus:border-none py-3 focus-visible:outline-none focus-visible:ring-white">
                                    <Input type="text" placeholder="spanish" className={"w-[230px] max-lg:w-full no-autofill"} {...field}/> 
                                </FormControl>
                                <FormMessage className='text-sm text-red-500' />
                                </FormItem>
                            )}
                            />
                            <FormField
                                control={form.control}
                                name="lang2Level"
                                render={({ field }) => (
                                <FormItem>
                                <Select onValueChange= {field.onChange} defaultValue={field.value}>
                                    <FormControl className="w-[230px] mt-3">
                                        <SelectTrigger className="py-3 focus:border-none focus:outline-none focus:ring-white">
                                            <SelectValue placeholder="Select your proficiency" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent className="w-[230px]">
                                        {Language_levels.map((level) => {
                                            return (
                                                <SelectItem key={level} value={level}> {level} </SelectItem>
                                            )
                                        })}
                                    </SelectContent>
                                </Select>
                                <FormMessage  className='text-sm text-red-500' />
                                </FormItem>
                                )}
                                />
                                {showLan3 && <hr className="mt-3 border-t border-gray-300 w-[230px] shadow-md" />}
                        </div>}
                        {/* THIRD LANGUAGE */}
                        {showLan3 && <div className="mt-5">
                            <FormField
                            control={form.control}
                            name="language3"
                            render={({ field }) => (
                                <FormItem>
                                <FormControl className="border-gray-400 focus:border-none py-3 focus-visible:outline-none focus-visible:ring-white">
                                    <Input type="text" placeholder="Arabic" className={"w-[230px] max-lg:w-full no-autofill"} {...field}/> 
                                </FormControl>
                                <FormMessage className='text-sm text-red-500' />
                                </FormItem>
                            )}
                            />
                            <FormField
                                control={form.control}
                                name="lang3Level"
                                render={({ field }) => (
                                <FormItem>
                                <Select onValueChange= {field.onChange} defaultValue={field.value}>
                                    <FormControl className="w-[230px] mt-3">
                                        <SelectTrigger className="py-3 focus:border-none focus:outline-none focus:ring-white">
                                            <SelectValue placeholder="Select your proficiency" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent className="w-[230px]">
                                        {Language_levels.map((level) => {
                                            return (
                                                <SelectItem key={level} value={level}> {level} </SelectItem>
                                            )
                                        })}
                                    </SelectContent>
                                </Select>
                                <FormMessage  className='text-sm text-red-500' />
                                </FormItem>
                                )}
                                />
                        </div> 
                        }
                        {/* ADD NEW LANGUAGE BUTTON */}
                        {!hasReachedLimits && !showLan3 && lengthLimit !== 2 && <button type="button" className={`${hasReachedLimits ? "text-gray-300": "hover:text-primary"} mt-6 ml-3 flex items-center gap-1 cursor-pointer`} disabled = {hasReachedLimits} onClick={handleShowNext}>
                            <IoAdd />
                            <p className="text-sm font-palanquin"> Add New Language  </p>
                        </button>}
                        {/* SHOW LESS BUTTON */}
                        {showLan3 && <button onClick={handleShowLess} className=" mt-5 ml-4 text-base text-black hover:text-primary font-palanquin flex items-center space-x-2">
                            <FaMinus className= "w-3 h-3" />
                            <span> Show less </span>
                        </button>}
                        {/* ADD AND CANCEL BUTTONS */}
                        <div className="mt-10 ml-4 flex items-center gap-8">
                            <button type="button" className="px-10 py-2 border border-stone-800 bg-stone-800 text-slate-100 rounded-md" onClick={() => close(false)}> { hasReachedLimits ? "close" : "cancel" }</button>
                            {!hasReachedLimits && <button className="px-10 py-2 border border-primary bg-gradient-to-r from-primary to-secondary  text-slate-100  font-palanquin rounded-md"> 
                                {isPending ? (
                                    <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "center"}}>
                                        <CircularProgress size={20} color="inherit" />
                                    </Box>
                                ) : "Add"
                                }
                            </button>}
                        </div>
                    </form>
                </Form>
            }
            {user?.languages && <div className="mt-6">
                {!hasReachedLimits && user?.languages.length > 0 && <h4 className="mt-10 ml-10 text-lg text-black font-palanquin"> Your Languages </h4>}
                {!user?.languages ? null  :
                user.languages.map((element) => {
                    return (
                        <LanguageCard key={element.language} title={element.language} close={close} />
                    )
                })}
                {hasReachedLimits && 
                <button type="button" className="mt-14 ml-10 text-sm px-5 py-2 border border-stone-800 bg-stone-800 text-slate-100 rounded-md" onClick={() => close(false)}> cancel </button>
                }
            </div>}
        </section>
    )
}
