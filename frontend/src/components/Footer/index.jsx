import './index.scss'

function Footer () {
    return <footer className='footer'>
        <nav className='nav-footer'>
            <a href="/DetailMessage.pdf" download="" className='cat-footer'>.télécharger mon CV</a>
            <a href="https://www.instagram.com/giannihc/?hl=fr" className='cat-footer'>.instagram</a>
            <a href="https://www.linkedin.com/in/gianni-cavanna" className='cat-footer'>.linkedIn</a>
        </nav>
    </footer>
}

export default Footer