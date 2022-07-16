import Button from "../Components/Button"
import {Link} from 'react-router-dom'
import React from "react";

function Donate() {

    return <div className="donate">
        <p>Donating to Moxi Collaboration will allow our organization to assemble comfort kits for survivors of sexual assault.</p>

        <p>While our 501(c)(3) status is pending, we are accepting donations via GoFundMe. 
        In the future, we are planning to move on to other platforms that will better support our organization's needs.</p>

        <a href="https://www.gofundme.com/f/bggbg4?utm_campaign=p_cf+share-flow-1&utm_medium=email&utm_source=customer" target="_blank" rel="noreferrer noopener"><button className="donateButton">Donate Now</button></a>

    </div>
}

export default Donate