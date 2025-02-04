import { Link } from 'react-router-dom';
import './header.scss';

function Header() {
    return (
        <header> 
            <h1 className='header-title'>.WELCOME</h1>
            <nav className='nav-header'>
                <Link to="/" className='nav-cat'>.Accueil</Link>
                <Link to="/projet" className='nav-cat'>.Projets</Link>
                {/* <Link to="/formation" className='nav-cat'>.Formation</Link> */}
                <Link to="/contact" className='nav-cat'>.Contact</Link>
            </nav>
        </header>
    );
}

export default Header;
