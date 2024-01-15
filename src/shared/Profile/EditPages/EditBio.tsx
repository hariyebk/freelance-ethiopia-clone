import { Textarea } from "../../../components/ui/textarea";
import Goback from "../../pieces/Goback";

export default function EditBio(){
    return (
        <section className="w-full mt-20 lg:mb-20 mb-28">
            <div className="lg:mx-24 max-lg:w-[400px] w-[450px] flex flex-col items-start lg:gap-8 max-lg:mr-5">
                <div className="max-lg:ml-10 max-lg:mb-6">
                    <Goback />
                </div>
                <Textarea className="h-[200px] max-lg:mx-10 lg:ml-20 mt-7 p-4 border border-gray-400 focus:border-none focus:ring-neutral-50 overflow-x-hidden overflow-scroll custom-scrollbar rounded-sm" />
                <div className="w-full flex items-start justify-center max-lg:ml-10 ml-20">
                    <button className="btn"> Update </button>
                </div>
            </div>
        </section>
    )
}