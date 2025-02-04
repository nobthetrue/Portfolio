import { useNavigate } from "react-router-dom"
import './index.scss'

function Accueil () {
  const navigate = useNavigate();


  return (<div className='body-accueil'>
    <div className='intro-accueil'>
      <h1>.portfolio</h1>

      <div className='first-p'>

        <img className='img-clavier' src='./Photoclavier.jpg' alt='Clavier'/>

        <div className='first-p-text'> 
          <p>Bienvenue sur mon portfolio je m'appelle Gianni Cavanna. Je suis actuellement en fin de formation sur <a href="https://openclassrooms.com/fr/" >OpenClassrooms</a> et je recherche activement du travail 
          en tant que développeur web. </p>
          <p>Le secteur de l'informatique est pour moi passionnant et en perpétuel évolution, c'est avant tout ce squi me motive le plus car j'aime
          me dépasser et obtenir de nouvelles compétences.</p>
        </div>

      </div>

      <div className='second-p'>
        <p className='second-p-text'>Le travail de mes rêves serait d'être dans les IA, qui sont pour moi l'avenir de tout ce qui nous entour. Cependant j'aimerais me faire 
          de l'expérience en tant que développeur frontend car j'adore mettre en forme le visuel pour avoir un résultat moderne et fonctionnel.
        </p>
        <img src='./Ordinateur.jpg' className='img-pc' alt='PC' />
      </div>



    </div>
    <div className='achievments-div'>
        <div className='achievments'>
          <p className='achievments-text'>Au cours de ma formation j'ai réalisé des projets très intéressants qui m'ont permis d'acquérir de nombreuses
             compétences. Grâce à celle-ci, je possède maintenant les bases du développement web (HTML, CSS, javascript, React, Node.js,...) mais 
             je sais aussi m'organiser et m'adapter à différentes méthodes de travail (Pomodoro, Agile, Scrum,...)<br/>
             A travers tout cela, je suis fier de ce que j'ai accompli si vous voulez en apprendre plus sur mes projets je vous invite à clique sur
             le bouton juste à côté </p>  
             <button type='button' className="button-accueil" onClick={() => navigate("/Projet")}>Mes projets juste ici !</button>
        </div>
    </div>
  </div>

  );
}

 export default Accueil
