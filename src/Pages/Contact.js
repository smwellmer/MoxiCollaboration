import { FaTwitterSquare, FaFacebookSquare, FaInstagram} from "react-icons/fa";

function Contact() {
    return <div className="contact">
        <p> For more information and future Moxi events, you can find us on Facebook, Instagram, and Twitter!</p>
        <div className="contactIcons">
        <a href="https://www.facebook.com/moxicollaboration">@moxicollaboration</a>
        <a href="https://www.instagram.com/moxicollaboration/">@moxicollaboration</a>
        <a href="https://twitter.com/moxicollab">@moxicollab</a>

       
       {/* insert photos of socials above links */}
       


        </div>
        <p>To contact us directly, email us at:</p>
        <a href="mailto:moxicollaboration@gmail.com" className="email">moxicollaboration@gmail.com</a>

    </div>
}

export default Contact