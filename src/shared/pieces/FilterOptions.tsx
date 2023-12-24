import { Experience, Gender, jobSectors, jobTypes, location, salary } from "../../constants";
import Filter from "./Filter";

export default function FilterOptions() {
    return (
        <div className="flex flex-col items-start justify-between m-3">
            <h2 className="text-primary text-lg ml-5 font-palanquin"> Filter jobs </h2>
            <div className="mt-1 ml-5 flex flex-col items-start pt-4">
                <hr className="w-full mt-6 border-1 border-primary" />
                <Filter title="Job Types" lists={jobTypes} />
                <hr className="w-full mt-6 border-1 border-primary" />
                <Filter title="Experience level" lists={Experience} />
                <hr className="w-full mt-4 border-1 border-primary" />
                <Filter title="sectors" lists={jobSectors} />
                <hr className="w-full mt-6 border-1 border-primary" />
                <Filter title="Gender" lists={Gender} />
                <hr className="w-full mt-6 border-1 border-primary" />
                <Filter title="Location" lists={location} />
                <hr className="w-full mt-6 border-1 border-primary" />
                <Filter title="Salary" lists={salary} />
            </div>
        </div>
    )
}
