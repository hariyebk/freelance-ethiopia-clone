import { IoClose } from "react-icons/io5"
interface SidebarEditProps {
    children: React.ReactNode
    close : React.Dispatch<React.SetStateAction<boolean>>,
    title: string
}
export default function SidebarEditProfile({children, close, title}: SidebarEditProps) {
        return (
            <section className="fixed top-0 right-0 w-[400px] max-sm:pl-8 max-sm:pt-6 pl-3 h-full bg-white">
                <div className="w-full mt-6 px-4 py-3 flex items-center justify-between shadow-md">
                    <h2 className="text-base text-stone-500 font-palanquin font-bold"> {title} </h2>
                    <button className="mr-4" onClick={() => close(false)}>
                        <IoClose style = {{fontSize: "25px"}}  />
                    </button>
                </div>
                {children}
            </section>
        )
    }
