import { Textarea } from "../../../components/ui/textarea";
import Goback from "../../pieces/Goback";

export default function EditBio(){
    return (
        <section className="w-full mt-20 lg:mx-36 lg:mb-20 mb-28">
            <div className="max-lg:w-[400px] w-[450px] flex flex-col items-start lg:gap-8 max-lg:mr-5">
                <div className="max-lg:ml-10 max-lg:mb-6">
                    <Goback />
                </div>
                <Textarea className="h-[200px] max-lg:mx-10 lg:ml-20 mt-7 p-4 border border-gray-400 focus:border-none focus:ring-neutral-50 overflow-x-hidden overflow-scroll custom-scrollbar rounded-sm" />
                <div className="w-full flex items-start justify-center max-lg:ml-10 ml-20">
                    <button className="max-lg:mt-10 mt-5 w-full px-10 py-2 bg-gradient-to-r from-primary to-secondary text-white text-base rounded-full"> Update </button>
                </div>
            </div>
        </section>
    )
}