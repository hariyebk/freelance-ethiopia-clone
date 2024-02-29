import { Experience, Gender, jobSectors, jobTypes, location, salary } from "../../constants";
import Filter from "./Filter";

export default function FilterOptions() {
    return (
        <div className="flex flex-col items-start justify-between m-3">
            <h2 className="text-primary text-lg ml-5 font-palanquin"> Filter jobs </h2>
            <div className="mt-1 ml-5 flex flex-col items-start pt-4">
                <hr className="w-full mt-6 border-1 border-primary" />
                <Filter title="Job Types" param="type" lists={jobTypes} />
                <hr className="w-full mt-6 border-1 border-primary" />
                <Filter title="Experience level" param="level" lists={Experience} />
                <hr className="w-full mt-4 border-1 border-primary" />
                <Filter title="sectors" param="sector" lists={jobSectors} />
                <hr className="w-full mt-6 border-1 border-primary" />
                <Filter title="Gender" param="gender" lists={Gender} />
                <hr className="w-full mt-6 border-1 border-primary" />
                <Filter title="Location" param="location" lists={location} />
                <hr className="w-full mt-6 border-1 border-primary" />
                <Filter title="Salary" param="salary" lists={salary} />
            </div>
        </div>
    )
}
