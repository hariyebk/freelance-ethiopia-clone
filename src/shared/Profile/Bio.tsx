import { useLocation } from "react-router-dom";
import TitleAndEdit from "../pieces/TitleAndEdit";

export default function Bio() {
    const {pathname} = useLocation()
    return (
        <section className="profile_container">
            <TitleAndEdit title="Bio" routeTo={`${pathname}/edit-bio`} />
            <div className="mt-5 pr-8">
                <p className="text-sm max-lg:text-justify font-palanquin font-medium leading-6">
                    I specialized in Next.js, React, and TypeScript, with a strong focus on building full-stack web applications. I bring seamless interactivity and efficient code to every project I undertake. Whether it’s creating dynamic user interfaces, implementing databases, or building and integrating APIs, I thrive in the world of JavaScript frameworks.
                </p>
            </div>
        </section>
    )
}
