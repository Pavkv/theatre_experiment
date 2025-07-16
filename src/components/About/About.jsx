import React from "react";
import { useLanguage } from "../../contexts/LanguageContext.jsx";
import DirectorsWords from "../DirectorsWords/DirectorsWords.jsx";
import DisplayText from "../../utils/functions.jsx";

export default function About() {
    const { t } = useLanguage();
    const translation = t.about;

    return (
        <div className="about">
            <h2 className="about__title">{translation.title}</h2>
            <p className="about__intro">{translation.description}</p>
            <div className="about__content">
                <img className="about__image" src={new URL("../../assets/actors.jpg", import.meta.url).href} alt="" />
                <DisplayText list={translation.goal} textClass={"about__text"} />

                <DisplayText list={translation.team} textClass={"about__text"} />
                <img className="about__image" src={new URL("../../assets/team.jpg", import.meta.url).href} alt="" />

                <img className="about__image" src={new URL("../../assets/director.jpg", import.meta.url).href} alt="" />
                <DisplayText list={translation.director} textClass={"about__text"} />
            </div>
            <DirectorsWords t={translation} />
        </div>
    );
}