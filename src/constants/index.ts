export const navlinks = [
    {
        path: "/job",
        label: "Explore jobs",
    },
    {
        path: "/faq",
        label: "FAQ",
    },
    {
        path: "/about",
        label: "About Us",
    },
    {
        path: "/help",
        label: "Help",
    }
]
export const footerLinks = [
    {
        Title: "For Clients",
        link: [
            {
                path: "/login",
                label: "Post a job"
            },
            {
                path: "/login",
                label: "Find Freelancers"
            }
        ] 
    },
    {
        Title: "For Freelancers",
        link: [
            {
                path: "/job",
                label: "Find a job"
            },
            {
                path: "/register",
                label: "Create Your Profile"
            }
        ] 
    },
    {
        Title: "Support",
        link: [
            {
                path: "/faq",
                label: "FAQ"
            },
            {
                path: "/help",
                label: "Help Center"
            }
        ] 
    },
]

export const contactInfo = [
    {
        Title: "Contact us",
        phone: "9423",
        email: "info@freelanceethiopia.com",
        location: "Mickey Leland StAddis Ababa, Ethiopia"
    }
]
export const brands = [
    "https://www.freelanceethiopia.com/images/free/unnamed.png",
    "https://www.freelanceethiopia.com/images/free/unnamed%20(1).png",
    "https://www.freelanceethiopia.com/images/free/unnamed%20(2).png",
    "https://www.freelanceethiopia.com/images/free/unnamed%20(3).png",
    "https://www.freelanceethiopia.com/images/free/unnamed%20(5).png",
    "https://www.freelanceethiopia.com/images/free/unnamed%20(6).png",
    "https://www.freelanceethiopia.com/images/free/unnamed%20(7).png",
    "https://www.freelanceethiopia.com/images/free/unnamed%20(8).png",
    "https://www.freelanceethiopia.com/images/free/unnamed%20(9).png"
]
export const packages = [
    {
        name: "silver",
        duration: "3 Months",
        price: "15,000 ETB",
        describtion: "Perfect for businesses who need help finding immediate hires or those looking to hire over a short period of time."
    },
    {
        name: "Gold",
        duration: "6 Months",
        price: "25,000 ETB",
        describtion: "Perfect for businesses who need help expanding their talent pool without making a long-term commitment."
    },
    {
        name: "Platinum",
        duration: "1 Year",
        price: "40,000 ETB",
        describtion: "Ideal for businesses who are looking for quality hires over a longer period to create a successful team."
    }
]
export const enterpriseOpr = [
    "Link Support",
    "Featured Post",
    "Social Media",
    "Filtration",
    "Interview",
    "Account Manager",
    "Dedicated Support Line"
]
export const clientTestimonials = [
    {
        name: "Dagi spa",
        comment: "We have been using freelance for over 2 years now. We have hired many employees through freelance."
    },
    {
        name: "Suntech holdings",
        comment: "We like how easy it is to use. We have hired over 18 employees through freelance. A lot of them are fresh graduates."
    },
    {
        name: "BeU delivery",
        comment: "Since we started our company we have been using freelance ethiopia. We have found over 60% of our employees from freelance ethiopia."
    }
]
export const faq = [
    {
        question: "Is there an app and when is it Launching?",
        answer: "Yes there are Mobile and Web applications which are currently under development and they will be launched soon with powerful features."
    },
    {
        question: "What platform does Freelance Ethiopia have?",
        answer: "For the user's convenience and simplicity of access, Freelance Ethiopia offers a number of platforms. Telegram channels: Using our telegram channels you can browse and apply for the jobs posted on our platform.",
        lists: [
            "elegram channels: Using our telegram channels you can browse and apply for the jobs posted on our platform. We currently have 2 telegram channels.",
            "Telegram Bot: Using our telegram bot (https://t.me/freelanceethbot) you can apply for a job, get custom job notifications, post a job, manage candidates and much more.",
            "Mobile App(coming soon): using our mobile app you can do everything you can do on the bot along with setting up a customizable profile, using escrow service and much more",
            "Web app(coming soon): using our web app you can do anything you can do on the mobile app along with filtering job posts, repost a job and much much more",
            "Call center(coming soon): using our call center you can build a profile, post a job and apply for a job using only a phone call and SMS notification."
        ]
    },
    {
        question: "How are the Apps better than the Bot?",
        answer: "Yes there are Mobile and Web applications which are currently under development and they will be launched soon with powerful features.",
        list: [
            "Powerful Profile creation for Job Seekers, Private Clients, Companies and Startups that track their performance and achievements on the platform.",
            "No CV upload needed when applying for a job on the mobile and web app",
            "Fully customizable job filtration for the job seekers",
            "Employers can set up several screening questions to make the pre screening process more seamless",
            "Employer can chat with the applicants directly through the mobile and web app",
            "The job applications will be more organized and categorized for the convenience of the employer",
            "Escrow service is provided on the mobile and web app which is available for contractual and freelance job types.",
            "You can have multiple accounts and create and switch between multiple Profiles under your account. One person can be an employer and a job seeker.",
            "You can allow multiple accounts from your team to gain access to your company/startup profiles.",
            "And many more features"
        ]
    },
    {
        question: "What is Escrow? and How does it work?",
        list: [
            "Escrow is a neutral holding place where you put funds until the project, or project milestone is completed. The funds stay in escrow until the freelancer fulfills their obligations and the employer, satisfied with the work, releases the fund.",
            "On Freelance Ethiopia, you deposit the funds for freelance and contract job types into escrow and release them as employers receive, review, and approve the agreed-upon work."
        ]
    },
    {
        question: "Is Freelance Ethiopia free for Employers?",
        answer: "For Private client's who want to post a job once or twice it is free. But for regular buisness we offer 3 packages, you check details on the home page.",

    },
    {
        question: "Is Freelance Ethiopia free for job seekers?",
        answer: "Freelance Ethiopia is a free job listing platform for job seekers. Including our advanced features such as setting up a profile, filtering job posts, applying for a job, chatting with employers who have either shortlisted them or hired them.",

    },
    
]
export enum userTypes {
    newuser = "newuser",
    olduser = "olduser",
    unknown = "unknown"
}
export enum bottomNavRoute {
    onboard = "onboard",
    register = "register",

} 
export const countries = [
    {
        value: "et",
        label: "Ethiopia"
    },
    {
        value: "ke",
        label: "Kenya"
    },
    {
        value: "ug",
        label: "Uganda"
    },
    {
        value: "tz",
        label: "Tanzania"
    }
]
export const cities = [
    {
        value: "aa",
        label: "Addis Ababa"
    },
    {
        value: "dd",
        label: "Dire Dawa"
    },
    {
        value: "hw",
        label: "Hawasa"
    },
    {
        value: "bd",
        label: "Bahirdar"
    },
    {
        value: "ad",
        label: "Adama"
    },
    {
        value: "go",
        label: "Gonder"
    },
    {
        value: "ji",
        label: "Jijiga"
    },
    {
        value: "hr",
        label: "Harar"
    }
]