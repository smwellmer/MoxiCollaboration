import Button from "../Components/Button"


function Donate() {
    return <div className="donate">
        <p>Donating to Moxi Collaboration will allow our organization to assemble comfort kits for survivors of sexual assault.</p>

        <p>While our 501(c)(3) status is pending, we are accepting donations via GoFundMe. 
        In the future, we are planning to move on to other platforms that will better support our organization's needs.</p>

        <Button className='donateButton' text= "GoFundMe" color = "#8ea487" />

         {/* center button */}

    </div>
}

export default Donate