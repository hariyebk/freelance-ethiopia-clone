interface ProfilePageProps {
    MainProfile: React.ReactNode,
    SidebarLinks?: React.ReactNode
}

export default function ProfileLayout({MainProfile, SidebarLinks}: ProfilePageProps) {
    return (
        <section className="w-full mt-36">
            <div className="md:container flex justify-center gap-20 mt-20">
                <div className="max-lg:w-full h-full mb-48 shadow-lg">
                    {MainProfile}
                </div>
                <div className="max-xl:hidden">
                    {SidebarLinks}
                </div>
            </div>
        </section>
    )
}
