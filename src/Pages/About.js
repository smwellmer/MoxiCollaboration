import Button from "../Components/Button"
import Download from "../Components/Download"

function About() {
    return <div className='aboutDiv'>
        <p>
        We are a 501(c)(3) accredited organization with a mission to supporting those affected by sexual assault. 
        Whether it be through donating tangible goods to local shelters, attending community rallies to increase awareness, 
        or emotionally empowering fellow survivors through their recovery journey, we’re here for it
        </p>

       <img src='https://i.imgur.com/cXsRKly.jpg' className="buniImage"></img>

        <p>
        “I wanted to give a level of unconditional support and positive affirmation to those directly affected by sexual abuse or violence associated with sexual assault.
        I think that the idea of sexual assault is widely misrepresented - especially in terms of the victim’s perspective and their level of emotional processing.
        If I can help just one person feel that they have a life worth living, that they’re not disposable, and that their worth holds so much more value than their abuse…that’s unmatched.
        From my own experience, the greatest gift you can have in that moment is giving someone a nostalgic sense of comfort and security. 
        And that sense of security will look different for different individuals. I think one will find some solace in our care 
        packages and my hope is that you know you are loved and you are enough. No matter what.”
        </p>
        <h3 className="buniSig">Catharina "Buni" Eisdorfer</h3>
        <h4>Founder</h4>


        <Download/>

        {/* <button><iframe src="https://drive.google.com/file/d/1ymZqV-xL8hlNjGr4QSbuReOMFjJKYrI3/preview" width="640" height="480" allow="autoplay"></iframe></button> */}

          {/* center button */}

    </div>
}

export default About