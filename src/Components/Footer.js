import { FaTwitterSquare, FaFacebookSquare, FaInstagram} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Footer() {
    return <footer className="footer">

    <a><FaTwitterSquare/></a>
    <a><FaFacebookSquare/></a>
    <a><FaInstagram/></a>
    <a><SiGmail/></a>


    </footer>
}

export default Footer