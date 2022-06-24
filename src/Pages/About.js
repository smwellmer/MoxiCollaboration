import Button from "../Components/Button"

function About() {
    return <div className='aboutDiv'>
        <p>
        We are a non-profit organization that is dedicated to helping individuals that have recently been affected by sexual assault. We assemble kits including essential toiletries and comfortable 
        loungewear to help those affected feel safe, secure, and clean. Our focus is to mitigate the the physical, emotional, and psychological burden of this type of abuse. We firmly believe 
        that with the right support, one can heal from such abuse and can not only survive, but thrive - with courage, strength, and of course, Moxi.
        </p>

       <img src='buni.JPG' className="buniImage"></img>

        <p>
        “I wanted to give a level of unconditional support and positive affirmation to those directly affected by sexual abuse or violence associated with sexual assault.
        I think that the idea of sexual assault is widely misrepresented - especially in terms of the victim’s perspective and their level of emotional processing.
        If I can help just one person feel that they have a life worth living, that they’re not disposable, and that their worth holds so much more value than their abuse…that’s unmatched.
        From my own experience, the greatest gift you can have in that moment is giving someone a nostalgic sense of comfort and security. 
        And that sense of security will look different for different individuals. Whether that be cleansing your body with meaningful fragrances, or just feeling clean in general, 
        or slipping on a pair of cozy sweatpants, totally encapsulating your body with warmth and regard for your safety and well-being - I think one will find some solace in our care 
        packages and my hope is that you know you are loved and you are enough. No matter what.”
        </p>
        <h3 className="buniSig">Catharina "Buni" Collmann</h3>

        <Button className='buniStoryButton' text= "Read Buni's Full Story Here" color = "#8ea487"><a href='bunistory.pdf'/></Button>

    </div>
}

export default About