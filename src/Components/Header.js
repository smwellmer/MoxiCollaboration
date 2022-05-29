import {Link} from 'react-router-dom';

function Header() {
    return <header className='header'>
       <Link to='/'><img src="/MoxiLogo.png" path="/" className='logo'></img></Link>
       <div className='links'>
       <Link to="about">About</Link>
       <Link to="contact">Contact</Link>
       <Link to="donate">Donate</Link>
       </div>
    
        </header>
}

export default Header