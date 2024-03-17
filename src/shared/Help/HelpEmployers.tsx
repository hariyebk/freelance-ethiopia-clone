import { useEffect } from "react";
import { helpEmployer } from "../../constants";
import HelpDetailsLayout from "./HelpDetailsLayout";

export default function HelpEmployers(){

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <section className="min-h-screen">
            <HelpDetailsLayout label="Employers" questions={helpEmployer}/>
        </section>
    )
}
