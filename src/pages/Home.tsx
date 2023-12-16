import Brands from "../shared/Brands";
import Pricing from "../shared/Pricing";
import Hero from "../shared/Hero";
import Card from "../shared/Card";
import Testimonials from "../shared/Testimonials";
import Marquee from "react-fast-marquee";

export default function Home() {
    return ( 
        <section className="max-container min-h-screen mx-56">
            <Hero />
            <Marquee pauseOnHover = {true}>
                <Brands />
            </Marquee>
            <Card Title="Free for Job Seekers" des="Freelance Ethiopia is FREE for job seekers and our platform offers job and gig opportunities 365 days a year. So Get Started now and discover opportunities that are meant for you." />
            <Pricing />
            <div className="-mt-9">
                <Card Title="Find the right candidates" des="You are in charge of every hiring step. From posting a job to hiring a candidate. Chat with applicants directly, Shortlist and Hire the right candidates." />
            </div>
            <Testimonials subject="Clients" />
            <Testimonials subject="Freelancers" />
        </section>
    )
}
