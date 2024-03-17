import EmployerCard from "./EmployerCard";
import MsqCard from "./MsqCard";
import JobSeekerCard from "./JobSeekerCard";

interface HelpCardProps {
    isHorizontal: boolean
}

export default function HelpCards({isHorizontal}: HelpCardProps) {
    return (
        <section className={`-mt-14 max-lg:-mt-6 w-full ${isHorizontal ? "flex max-lg:flex-col gap-6" : "flex flex-1 flex-col gap-4"} items-center justify-center`}>
            <EmployerCard isHorizontal={isHorizontal} />
            <MsqCard isHorizontal={isHorizontal} />
            <JobSeekerCard isHorizontal={isHorizontal} />
        </section>
    )
}
