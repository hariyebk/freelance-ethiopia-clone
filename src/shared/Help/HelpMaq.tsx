import { useEffect } from "react";
import HelpDetailsLayout from "./HelpDetailsLayout";
import { msq } from "../../constants";

export default function HelpMaq() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section>
            <HelpDetailsLayout label="Mostly Asked Quetions" questions={msq} />
        </section>
    )
}
