
import { LiaInstagram } from "react-icons/lia";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function SocialMedia() {
    return (
        <div className="w-[500px] flex max-md:flex-col items-center gap-5 justify-between">
            <img src="/Images/footer-logo.png" alt="footer-logo" className="h-16 w-36 object-contain" />
            <div className="flex items-center gap-5">
                <Link to="https://www.instagram.com/freelanceethiopia/">
                    <LiaInstagram className = "w-8 h-8 text-white" />
                </Link>
                <Link to="https://twitter.com/FreelanceEthio1">
                    <BsTwitterX className = "w-6 h-6 text-white" />
                </Link>
                <Link to="https://m.facebook.com/freelance.ethio">
                    <FaFacebook className = "w-7 h-7 text-white" />
                </Link>
                <Link to="https://t.me/freelance_ethio">
                    <FaTelegramPlane className = "w-7 h-7 text-white" />
                </Link>
                <Link to="https://www.tiktok.com/@freelanceethiopia">
                    <FaTiktok className = "w-6 h-6 text-white" />
                </Link>
                <Link to="https://www.youtube.com/@freelanceEthiopia">
                    <FaYoutube className = "w-6 h-6 text-white" />
                </Link>
            </div>
        </div>
    )
}
