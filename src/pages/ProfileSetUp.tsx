import useApi from "../context/hook";
import ProfileType from "../shared/ProfileType";
import NewProfile from "../shared/pieces/NewProfile";


export default function ProfileSetUp() {
    const {user} = useApi()
    return (
        <section className="mb-20 mt-14 max-lg:mt-60 max-lg:mb-10">
            <ProfileType title={`Set up your ${user ? "" : "first"} profile`} description="You can have multiple profiles by adding new profiles and switching between them easily.">
                <NewProfile />
            </ProfileType>
        </section>
    )
}
