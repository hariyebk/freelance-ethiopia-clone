import { IoClose } from "react-icons/io5"
interface SidebarEditProps {
    children: React.ReactNode
    close: (state: boolean) => void,
    title: string
}
export default function SidebarEditProfile({children, close, title}: SidebarEditProps) {
        return (
            <section className="fixed top-0 right-0 w-[400px] pl-3 h-full bg-white">
                <div className="w-full mt-6 px-4 py-3 flex items-center justify-between shadow-md">
                    <h2 className="text-base text-stone-500 font-palanquin font-bold"> {title} </h2>
                    <button className="mr-4" onClick={() => close(false)}>
                        <IoClose style = {{fontSize: "25px"}}  />
                    </button>
                </div>
                {children}
                <div className="mt-20 mx-10 flex items-center gap-8">
                    <button className="px-10 py-2 border border-stone-800 bg-stone-800 text-slate-100 rounded-md" onClick={() => close(false)}> cancel </button>
                    <button className="px-10 py-2 border border-primary bg-gradient-to-r from-primary to-secondary  text-slate-100 text-base font-palanquin rounded-md"> save </button>
                </div>
            </section>
        )
    }
