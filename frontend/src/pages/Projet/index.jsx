import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import "./index.scss";

const textArray = ["projet", "project", "progetto", "proyecto"];
const typingSpeed = 150;
const erasingSpeed = 75;
const newTextDelay = 2000;

function ProjectPage() {
  // const { id } = useParams();
  const [text, setText] = useState("");
  const [textArrayIndex, setTextArrayIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting && charIndex < textArray[textArrayIndex].length) {
        setText((prev) => prev + textArray[textArrayIndex].charAt(charIndex));
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === textArray[textArrayIndex].length) {
        setTimeout(() => setIsDeleting(true), newTextDelay);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextArrayIndex((prev) => (prev + 1) % textArray.length);
      }
    };

    const timeout = setTimeout(handleTyping, isDeleting ? erasingSpeed : typingSpeed);
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textArrayIndex]);

  return (
    <div className="projet-page">
      <div className="first-project">

        <h1 className="title-project">
          .<span className="typewriter">{text}</span>React
        </h1>

        <div className="kasa-all">
          <div className="text-kasa">
            <p>C'est un site de location immobililère que je devais organiser selon la maquette. La priorité était de créer des composants
              réutilisatibles et surtout de les identifier pour avoir un code propre. Cela m'a permis d'apprendre aussi la récupération des
              données sur des fichiers JSON, ce qui a été très utile pour créer des pages facilement pour chaque location. 
            </p>
            <p>Il n'a pas été évident de comprendre comment fonctionne la réutilisation des composant, notamment avec les props qui sont très importants mais à force de pratiquer cela est devenu naturel</p>
            <p>Grâce à ce projet je sais désormais utiliser React, je comprends le nombre de possibilités avec les nombreuses dépendances qui lui sont attachées
              et qui facilitent la création des liens entre toutes les pages.</p>
          </div>

          <div className="kasa-repo-img" >
            <img src="./Kasa.png" className="kasa" alt="Kasa" />
            <a href="https://github.com/nobthetrue/OC_Projet5" className="kasa-lien-repo" >Repo Github de Kasa !</a>
          </div>
        </div>

      </div>

      <div className="second-project">

        <h1 className="title-project">
          .<span className="typewriter">{text}</span>Agile
        </h1>
      <div className="menu-maker-all">
        <div className="text-menu-maker">
          <p>Lors de la création d'un projet, il est primordial de savoir comment il va être conçu et par qui. Qwenta voulait rajouter un créateur de 
            menu personnalisable donc je me suis chargé de gérer la répartition des tâches ainsi que la création d'une veille technologique pour créer un
            document comportant les spécifications techniques.</p>
          <p>C'était un tout nouveau défi pour moi étant donner que j'ai dû utiliser des outils, comme le tableau Kanban, Feedly (pour la veille technologique)
            ou encore la méthode Agile, que je n'avais encore jamais vu</p>  
          <p>Néanmoins je sais maintenant comment se déroule la gestion d'un projet Agile, et comment appréhender la validation des tâches pour la finalisation d'un projet</p>
        </div>

        <div className="menu-maker-repo-img">
          <img src="./Menu-maker.png" className="menu-maker" alt="Menu Maker"/>
          <a href="https://github.com/nobthetrue/OC_Projet7" className="menu-maker-lien-repo">Repo Github pour Menu Maker</a>
        </div>
      </div>


      </div>
    </div>
  );
}

export default ProjectPage;

