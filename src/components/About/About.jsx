import React from "react";
import { useLanguage } from "../../contexts/LanguageContext.jsx";

export default function About() {
    const { t } = useLanguage();

    return (
        <div className="about">
            <h2 className="about__title">{t.about.title}</h2>
            <p className="about__intro">{t.about.description}</p>
            <div className="about__content">
                <img className="about__image" src={new URL("../../assets/actors.jpg", import.meta.url).href} alt="" />
                <p className="about__text">{t.about.goal}</p>

                <p className="about__text">{t.about.team}</p>
                <img className="about__image" src={new URL("../../assets/team.jpg", import.meta.url).href} alt="" />

                <img className="about__image" src={new URL("../../assets/director.jpg", import.meta.url).href} alt="" />
                <p className="about__text">{t.about.director}</p>
            </div>
        </div>
    );
}