
import { Card, CardContent } from "../components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "../components/ui/carousel";

interface TestimonialsProps {
    subject: string,
    testimonial: {
        name: string,
        comment: string
    }[]
}
export default function Testimonials({subject, testimonial}: TestimonialsProps) {
    return (
        <div className="flex flex-col w-full mb-20 ">
            <div className="flex flex-col items-start gap-3">
                <p className="text-xl font-montserrat text-stone-800"> Hear form our happy </p>
                <h1 className="text-6xl font-bold text-primary font-palanquin -z-30"> {subject} </h1>
            </div>
            <div className="-z-10">
                <div>
                <Carousel
                    opts={{
                        align: "center",
                        
                    }}
                    className="mt-20 w-full max-lg:w-[300px] max-lg:mx-auto"
                    >
                        <CarouselContent>
                            {testimonial.map((client) => {
                                return (
                                    <CarouselItem key={client.name} className="md:basis-1/2 lg:basis-1/3" >
                                        <Card>
                                            <CardContent className="z-10 bg-stone-700 rounded-lg text-slate-100 h-[270px] flex flex-col items-center justify-center py-5">
                                                <h2 className="mt-5 text-center text-base font-palanquin font-semibold"> {client.name} </h2>
                                                <p className="text-sm font-sans mt-5"> {client.comment} </p>
                                            </CardContent>
                                        </Card>
                                    </CarouselItem>
                                )
                            })}
                        </CarouselContent>
                        <CarouselPrevious/>
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>
        </div>
    )
}
