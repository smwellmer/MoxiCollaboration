import { FaTwitterSquare, FaFacebookSquare, FaInstagram} from "react-icons/fa";

function Contact() {
    return <div>
        <p> You can find us on Facebook, Instagram, and Twitter!</p>
        <a href="https://www.facebook.com/moxicollaboration"><FaFacebookSquare/></a>
        <a href="https://www.instagram.com/moxicollaboration/"><FaInstagram/></a>
        <a href="https://twitter.com/moxicollab"><FaTwitterSquare/></a>
        <p>To contact us directly, email us at moxicollaboration@gmail.com</p>

    </div>
}

export default Contact