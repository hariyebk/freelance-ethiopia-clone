
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
        <div className="flex flex-col w-full mb-20">
            <div className="flex flex-col items-start gap-3">
                <p className="text-xl font-montserrat text-stone-800"> Hear form our happy </p>
                <h1 className="max-lg:text-4xl text-6xl font-bold text-primary font-palanquin"> {subject} </h1>
            </div>
            <Carousel
                opts={{
                    align: "center",
                }}
                className="mt-20 lg:w-[800px] max-md:w-[350px] md:w-[600px] mx-auto"
                >
                    <CarouselContent>
                        {testimonial.map((client) => {
                            return (
                                <CarouselItem key={client.name} className="md:basis-1/2 lg:basis-1/2" >
                                    <Card className="max-sm:w-[290px] w-[300px] xl:w-[350px] max-sm:mx-4  border border-primary lg:ml-8">
                                        <CardContent className="bg-white rounded-lg h-[200px] flex flex-col items-center text-justify mt-5 shadow-lg px-4">
                                            <h2 className="mt-5 max-sm:mt-3 text-center text-base font-palanquin font-semibold"> {client.name} </h2>
                                            <p className="text-sm font-palanquin mt-5"> {client.comment} </p>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            )
                        })}
                    </CarouselContent>
                    <div className="max-sm:hidden">
                        <CarouselPrevious/>
                        <CarouselNext />
                    </div>
                </Carousel>
            </div>
    )
}
