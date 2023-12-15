
interface TestimonialsProps {
    subject: string,
}
export default function Testimonials({subject}: TestimonialsProps) {
    return (
        <div className="flex flex-col w-full min-h-screen">
            <div className="flex flex-col items-start gap-3">
                <p className="text-lg font-montserrat text-stone-800"> Hear form our happy </p>
                <h1 className="text-6xl font-bold text-orange-500 opacity-80 font-palanquin"> {subject} </h1>
            </div>
        </div>
    )
}
