import { useEffect } from "react"
import { informationWeCollect } from "../constants";

export default function PrivacyPolicy() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="w-full min-h-screen">
            <div className="mt-48 mb-32 flex flex-col items-center justify-center">
                <h1 className="max-lg:text-4xl text-5xl text-secondary font-palanquin"> PRIVACY POLICY </h1>
                <div className="mt-16 lg:w-[850px] container">
                    <h3 className="text-base text-black font-semibold">1. Information collection </h3>
                    <p className="mt-8 text-base text-justify text-zinc-700  leading-6 font-montserrat"> 
                    This Privacy Policy explains how and why Afriwork collects, uses, and shares personal information when you interact with or use our Site or Service. It also includes any information Afriwork collects offline in connection with the Service, which we may combine with information from the Site and Service. By reading this Privacy Policy, you will understand your privacy rights and choices. Users of the service may be Clients, Freelancers, Employers, or job seekers (as each is defined in the user agreement)
                    Users of the service may be Clients, Freelancers, Employers, or job seekers (as each is defined in the user agreement)
                    </p>
                    <h3 className="mt-10 text-base text-black font-palanquin font-semibold"> Information Collected Automatically </h3>
                    <p className="mt-8 text-base text-justify text-zinc-700  leading-6 font-montserrat"> 
                    Like other online companies, we receive technical information when you use our Services. We use these technologies to analyze how people use the Service, to improve how our Site functions, to save your log-in information for future sessions, and to serve you with advertisements that may interest you.
                    Afriwork uses cookies or similar technologies to analyze trends, administer the website, track users’ movements around the website, the desktop app, and the mobile app, and to gather demographic information about our user base as a whole. The technology used to collect information automatically from Afriwork Users may include cookies, web beacons, and embedded scripts. In addition, we and our marketing partners, affiliates, analytics, and service providers may use a variety of other technologies (such as tags) that collect similar information for security and fraud detection purposes and we may use third parties to perform these services on our behalf.
                    2 Use of information and analytics
                    </p>
                    <h3 className="mt-10 text-base text-black font-palanquin font-semibold"> 2.  Use of information and analytics </h3>
                    <p className="mt-8 text-base text-justify text-zinc-700  leading-6 font-montserrat"> We use information collected through the Service to provide and improve the Service, process your requests, prevent fraud, provide you with information and advertising that may interest you, comply with the law, and as otherwise permitted with your consent. We use information we collect </p>
                    <ul className="mt-10 list-disc">
                        {informationWeCollect.map((item) => {
                            return (
                                <li key={item} className="mt-4 text-base text-justify text-zinc-700  leading-6 font-montserrat"> {item} </li>
                            )
                        })}
                        
                    </ul>
                    <h3 className="mt-10 text-base text-black font-palanquin font-semibold">3. Data retention </h3>
                    <p className="mt-8 text-base text-justify text-zinc-700  leading-6 font-montserrat"> 
                    Unless you request that we delete certain information, we will only retain your personal information for as long as is necessary to fulfill the purposes for which it was collected, including for the purposes of satisfying any legal, regulatory, accounting, or reporting requirements, as well as ongoing fraud prevention, backup, and business continuity purposes.
                    </p>
                    <h3 className="mt-10 text-base text-black font-palanquin font-semibold"> 4. Information sharing and disclosure </h3>
                    <p className="mt-8 text-base text-justify text-zinc-700  leading-6 font-montserrat"> 
                    We do not “sell” your Personal Information as that term is traditionally defined, and we do not share your Personal Information with third parties for those third parties’ marketing purposes unless we first provide you with the opportunity to opt-in to or opt-out of such sharing. However, we may use third-party technologies on our Site for the purposes of advertising or marketing to you and understanding how you interact with our ads. This may be considered a “sale” or “sharing” of personal information for targeted advertising under applicable data protection laws.
                    </p>
                    <h3 className="mt-10 text-base text-black font-palanquin font-semibold"> 5. Security </h3>
                    <p className="mt-8 text-base text-justify text-zinc-700  leading-6 font-montserrat"> Afriwork takes reasonable steps to help protect and secure the information it collects and stores about the afriwork users. We maintain reasonable administrative and technical safeguards designed to protect personal information that we receive against accidental, unlawful, or unauthorized destruction, loss alteration, access, disclosure or use. </p>
                    <h3 className="mt-10 text-base text-black font-palanquin font-semibold"> 6. Link to other sites </h3>
                    <p className="mt-8 text-base text-justify text-zinc-700  leading-6 font-montserrat"> Our Service contains links to other websites. These links might be in the company profile information or an applicant's portfolio links in their profile either way we allow both. If you choose to click on a third-party link, you will be directed to that third party’s website. The fact that we link to a website is not an endorsement, authorization or representation of our affiliation with that third party, nor is it an endorsement of their privacy or information security policies or practices. We do not exercise control over third party websites. These other websites may place their own cookies or other files on your computer, collect data or solicit Personal Information from you. We encourage you to read the privacy policies or statements of the other websites you visit. </p>
                </div>
            </div>
        </section>
    )
}
