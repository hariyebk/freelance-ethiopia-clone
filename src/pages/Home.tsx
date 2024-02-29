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
        <section className="max-container max-lg:mx-10 mx-56 mt-20">
            <Hero />
            <Marquee style={{zIndex: -10}}>
                <Brands />
            </Marquee>
            <Card id={1} Title="Free for Job Seekers" des="Freelance Ethiopia is FREE for job seekers and our platform offers job and gig opportunities 365 days a year. So Get Started now and discover opportunities that are meant for you." />
            <Pricing />
            <div className="-mt-9">
                <Card id={2} Title="Find the right candidates" des="You are in charge of every hiring step. From posting a job to hiring a candidate. Chat with applicants directly, Shortlist and Hire the right candidates." />
            </div>
            <div className="mb-40">
                <Testimonials subject="Clients" testimonial={clientTestimonials} />
                <Testimonials subject="Freelancers" testimonial={freelancersTestimonials} />
            </div>
        </section>
    )
}
