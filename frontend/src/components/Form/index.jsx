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

    return (<div className="first-div-form">
        <h1 className="form-title">Formulaire de Contact</h1>
        <div className="div-form">
            {erreur && <p >{erreur}</p>}
            {success && <p>Formulaire envoyé avec succès !</p>}

            <form onSubmit={handleSubmit} className="form">
                <div className="form-info">
                    <div className="form-name">
                        <label htmlFor="nom" >Nom </label>
                        <input
                            type="text"
                            id="nom"
                            name="nom"
                            value={formData.nom}
                            onChange={handleChange}
                            placeholder=""
                        />
                    </div>

                    <div className="form-email">
                        <label htmlFor="email" >Email </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="form-message">
                    <label htmlFor="message" >Message </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Laisser moi un petit message"
                    />
                </div>

                <button type="submit" className="form-button">Envoyer</button>
            </form>
        </div>
    </div>

    );
}

export default Form