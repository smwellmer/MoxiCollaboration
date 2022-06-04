import { FaTwitterSquare, FaFacebookSquare, FaInstagram} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Footer() {
    return <footer className="footer">

    <a href="https://twitter.com/moxicollab"><FaTwitterSquare/></a>
    <a href="https://www.facebook.com/moxicollaboration"><FaFacebookSquare/></a>
    <a href="https://www.instagram.com/moxicollaboration/"><FaInstagram/></a>
    <a href="mailto:moxicollaboration@gmail.com"><SiGmail/></a>


    </footer>
}

export default Footer