import './index.scss'

function Footer () {
    return <div>
        <nav className='nav-footer'>
            <a href="/DetailMessage.pdf" download="DetailMessage.pdf" className='cat-footer'>Télécharger mon CV</a>
            <a href="https://www.instagram.com/giannihc/?hl=fr" className='cat-footer'>.instagram</a>
            <a href="https://www.linkedin.com/in/gianni-cavanna" className='cat-footer'>.linkedIn</a>
        </nav>
    </div>
}

export default Footer