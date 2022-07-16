import {Link} from 'react-router-dom';

function Header() {
    return <header className='header'>
       <Link to='/'><img src="/MoxiLogo.png" path="/" className='logo'></img></Link>
       <div className='links'>
       <Link className = 'link' to='/'>Home</Link>
       <Link className = 'link' to="about">About</Link>
       <Link className = 'link' to="contact">Contact</Link>
       <Link className = 'link' to="donate">Donate</Link>
       </div>
    
        </header>
}

export default Header