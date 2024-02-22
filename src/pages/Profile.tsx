import useApi from "../context/hook";
import AcccountCard from "../shared/pieces/AcccountCard";
import ProfileType from "../shared/ProfileType";

export default function Profile(){
    const {user} = useApi()
    return (
        <section className="mb-20 mt-24 max-lg:mt-60 max-lg:mb-10">
            <ProfileType title="Choose your Profile" description="Here are a list of profiles you have created. You can chose the profile you want to post jobs to or look for work.">
                <AcccountCard user={user!} />
            </ProfileType>
        </section>
    )
}
