import { Link } from "react-router-dom"
import Button from "../Components/Button"

function Main() {
    return <div className='main'>
      
        <h1 className="title">Moxi Collaboration</h1>
        
        <div className="mission">
        Our mission: "To provide comfort, dignity, and empowerment for survivors of sexual assault."
        </div>

        <div className="definitions">
        <img src="MoxieDefinition-removebg-preview.png"className="moxieDefinition"/>
        <img src="transparent.unconditionallove.png"className="unconditionalLove"/>
        </div>
        

        <p className="statement">
        "From my own personal experience, the most valued and needed thing in that moment is comfort. 
        We hope our kits will provide those affected with a sense of familiarity and cleanliness, blanketed 
        with safety and security, and thus allowing for some grace and healing to take place. Comfort, however it may take shape, 
        is an indescribable gift.” - Catharina Collmann, Founder
        </p>

        <Link className='mainDonateButton' to="/donate"><Button className='mainDonateButton' text= "Donate Now" color = "#8ea487"/></Link>


    </div>
}

export default Main