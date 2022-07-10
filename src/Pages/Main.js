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
         “From my own personal experience, the most valued thing you need in that moment is comfort. 
         The ability to not only cleanse your body with products that give you a nostalgic sense of safety, 
         but to put on clothes that give you added comfort and support and security - it’s unmatched and an 
         indescribable gift.” - Catharina Collmann, Founder
        </p>

        <Link className='mainDonateButton' to="/donate"><Button className='mainDonateButton' text= "Donate Now" color = "#8ea487"/></Link>


    </div>
}

export default Main