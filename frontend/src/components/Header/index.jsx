import './header.scss'

function Header () {
    return <header> 
                <h1 className='header-title'>.WELCOME</h1>
                <nav className='nav-header'>
                    <a href="/" className='nav-cat'>.Accueil</a>
                    <a href='/Projet' className='nav-cat'>.Projets</a>
                    {/* <a href="/Formation" className='nav-cat'>.Formation</a> */}
                    <a href="/Contact" className='nav-cat'>.Contact</a>
                </nav>
        </header>
    
}

export default Header