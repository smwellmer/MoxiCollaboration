import { FaTwitterSquare, FaFacebookSquare, FaInstagram} from "react-icons/fa";

function Contact() {
    return <div className="contact">
        <p> You can find us on Facebook, Instagram, and Twitter!</p>
        <div className="contactIcons">
        <a href="https://www.facebook.com/moxicollaboration"><FaFacebookSquare/></a>
        <a href="https://www.instagram.com/moxicollaboration/"><FaInstagram/></a>
        <a href="https://twitter.com/moxicollab"><FaTwitterSquare/></a>
        </div>
        <p>To contact us directly, email us at moxicollaboration@gmail.com</p>

    </div>
}

export default Contact