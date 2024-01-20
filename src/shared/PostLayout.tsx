
interface PostLayout {
    title: string,
    children: React.ReactNode,
}

export default function PostLayout({title, children}: PostLayout) {
    return (
        <section className="w-full mt-40 mb-20">
        <div className="mx-auto max-lg:w-[450px] w-[800px] h-auto shadow-lg bg-slate-50 rounded-md pb-28 pt-10 max-lg:px-10 px-20">
            <h2 className="ml-2 text-2xl max-lg:text-xl text-stone-600 font-palanquin font-semibold"> {title} </h2>
            {children}
        </div>
    </section>
    )
}
