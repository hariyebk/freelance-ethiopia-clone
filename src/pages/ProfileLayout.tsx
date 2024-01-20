interface ProfilePageProps {
    MainProfile: React.ReactNode,
    SidebarLinks?: React.ReactNode
}

export default function ProfileLayout({MainProfile, SidebarLinks}: ProfilePageProps) {
    return (
        <section className="w-full mt-36">
            <div className="flex gap-20 mt-20 max-lg:mx-5 mx-40">
                <div className="max-lg:w-full w-[85%] h-full mb-48 shadow-lg">
                    {MainProfile}
                </div>
                <div className="hidden lg:flex flex-col items-center">
                    {SidebarLinks}
                </div>
            </div>
        </section>
    )
}
