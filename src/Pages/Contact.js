import { FaTwitterSquare, FaFacebookSquare, FaInstagram} from "react-icons/fa";

function Contact() {
    return <div className="contact">
        <p> For more information and future Moxi events, you can find us on Facebook, Instagram, and Twitter!</p>
        <div className="contactIcons">

        <div className="fb">
        <img src="facebook.png" className="socialIcon"/>
        <a href="https://www.facebook.com/moxicollaboration">@moxicollaboration</a>
        </div>
        
        <div className="insta">
        <img src="instagram.png" className="socialIcon"/>
        <a href="https://www.instagram.com/moxicollaboration/">@moxicollaboration</a>
        </div>
        
        <div className="tw">
        <img src="twitter.png" className="socialIcon"/>
        <a href="https://twitter.com/moxicollab">@moxicollab</a>
        </div>

        </div>

        <p>To contact us directly, email us at:</p>
        <a href="mailto:moxicollaboration@gmail.com" className="email">moxicollaboration@gmail.com</a>

    </div>
}

export default Contact