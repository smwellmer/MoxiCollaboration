import Button from "../Components/Button"
import {Link} from 'react-router-dom'
import React from "react";

function Donate() {

    return <div className="donate">
        <p>Donating to Moxi Collaboration will allow our organization to assemble comfort kits for survivors of sexual assault.</p>

        <p>As of July 12, 2022 Moxi Collaboration is an official 501(c)(3) non-profit organization. </p>

        <p>If you wish to donate, the link below will take you to our current GoFundMe page.</p>

        <a href="https://www.gofundme.com/f/bggbg4?utm_campaign=p_cf+share-flow-1&utm_medium=email&utm_source=customer" target="_blank" rel="noreferrer noopener"><button className="donateButton">Donate Now</button></a>

    </div>
}

export default Donate