import ProfileType from "../shared/ProfileType";
import NewProfile from "../shared/pieces/NewProfile";


export default function ProfileSetUp() {
    return (
        <section className="mb-20 mt-24 max-lg:mt-60 max-lg:mb-10">
            <ProfileType title="Set up your first profile" description="You can have multiple profiles by adding new profiles and switching between them easily.">
                <NewProfile />
            </ProfileType>
        </section>
    )
}
