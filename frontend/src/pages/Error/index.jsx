import './index.scss'

function Error () {
    return <div className='error-page'>
            <h1 className='error-title'>Error 404</h1>
            <p>Cette page n'existe pas</p>
            <a href='/' className='error-link'>Revenir à l'accueil</a>
        </div>
}

export default Error