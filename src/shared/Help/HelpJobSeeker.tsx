import { useEffect } from "react";
import { helpJobSeeker } from "../../constants";
import HelpDetailsLayout from "./HelpDetailsLayout";

export default function HelpJobSeeker() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <section className="min-h-screen">
            <HelpDetailsLayout label="Job Seekers" questions={helpJobSeeker} />
        </section>
    )
}
