import {Link} from 'react-router-dom';
import About from './About';


function Header() {
    return <header>
       <img src="/MoxiLogo.png" path="/"></img>
       <Link to="about" element={<About/>}>About</Link>
       <Link to="contact">Contact</Link>
       <Link to="donate">Donate</Link>
     
        </header>
}

export default Header