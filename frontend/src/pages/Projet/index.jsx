import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./index.scss";

const textArray = ["projet", "project", "progetto", "proyecto"];
const typingSpeed = 100;
const erasingSpeed = 50;
const newTextDelay = 2000;

function ProjectPage() {
  const { id } = useParams();
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
    <div>
      <h1 className="title-project">
        .<span className="typewriter">{text}</span>{id}
      </h1>
      <p>Détails du projet {id} ici...</p>
    </div>
  );
}

export default ProjectPage;

