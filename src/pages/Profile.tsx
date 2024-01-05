
import AcccountCard from "../shared/pieces/AcccountCard";
import ProfileType from "../shared/ProfileType";

export default function Profile() {
    return (
        <section>
            <ProfileType title="Choose your Profile" description="Here are a list of profiles you have created. You can chose the profile you want to post jobs to or look for work.">
                <AcccountCard name="Harun Bekri" role="JobSeeker" />
            </ProfileType>
        </section>
    )
}
