import { Link } from "react-router-dom"
import Button from "../Components/Button"

function Main() {
    return <div className='main'>
      
        <h1>Moxi</h1>
        <h1>Collaboration</h1>
        
        <p className="mission">
        <h2>Our mission:</h2>
        <h3>"To provide comfort, dignity, and empowerment for survivors of sexual assault."</h3>
        </p>

        <p>
        <h2>mox·ie</h2>
        <h2>/ˈmäksē/ </h2>
        <h2>force of character, determination, or nerve.</h2>
        </p>

       
       
        <p>
         “From my own personal experience, the most valued thing you need in that moment is comfort. 
         The ability to not only cleanse your body with products that give you a nostalgic sense of safety, 
         but to put on clothes that give you added comfort and support and security - it’s unmatched and an 
         indescribable gift.” - Catharina Collmann, Founder
        </p>

        <Button className='mainDonateButton' text= "Donate Now" color = "#8ea487" />


    </div>
}

export default Main