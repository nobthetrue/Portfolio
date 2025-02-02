import { useState } from "react";
import './index.scss'

function Form() {
    const [formData, setFormData] = useState({
        nom: "",
        email: "",
        message: "",
    });

    const [erreur, setErreur] = useState("");
    const [success, setSuccess] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!formData.nom || !formData.email || !formData.message) {
            setErreur("Tous les champs sont obligatoires.");
            setSuccess(false);
            return;
        }

        setErreur("");
        setSuccess(true);
        console.log("Données soumises :", formData);

        setFormData({
            nom: "",
            email: "",
            message: "",
        });
    };

    return (
        <div>
            <h1>Formulaire de Contact</h1>
            {erreur && <p >{erreur}</p>}
            {success && <p>Formulaire envoyé avec succès !</p>}

            <form onSubmit={handleSubmit} >
                <div>
                    <label htmlFor="nom" >Nom :</label>
                    <input
                        type="text"
                        id="nom"
                        name="nom"
                        value={formData.nom}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="email" >Email :</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="message" >Message :</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit" >Envoyer</button>
            </form>
        </div>
    );
}

export default Form