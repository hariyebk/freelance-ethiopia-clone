import Brands from "../shared/pieces/Brands";
import Pricing from "../shared/pieces/Pricing";
import Hero from "../shared/Hero";
import Card from "../shared/Card";
import Testimonials from "../shared/Testimonials";
import Marquee from "react-fast-marquee";
import { clientTestimonials, freelancersTestimonials } from "../constants";
import { useEffect } from "react";

export default function Home(){

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return ( 
        <section className="max-container max-lg:mx-5 lg:mx-20 xl:mx-48 mt-20">
            <Hero />
            <Marquee style={{zIndex: -10}}>
                <Brands />
            </Marquee>
            <Card id={1} Title="Free for Job Seekers" des="Freelance Ethiopia is an empowering platform that puts job seekers at the forefront, providing them with a remarkable opportunity to explore a wide range of job and gig opportunities, all completely free of charge. Our platform operates tirelessly, ensuring that job and gig opportunities are available to you 365 days a year" />
            <Pricing />
            <div className="-mt-9">
                <Card id={2} Title="Find the right candidates" des="You are in charge of every hiring step, meticulously overseeing the entire process from start to finish. You begin by crafting compelling job postings that attract top-tier talent, leveraging your exceptional communication skills to engage with applicants." />
            </div>
            <div className="mb-40 mt-20">
                <Testimonials subject="Clients" testimonial={clientTestimonials} />
                <Testimonials subject="Freelancers" testimonial={freelancersTestimonials} />
            </div>
        </section>
    )
}
