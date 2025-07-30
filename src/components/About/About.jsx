import React from "react";
import { useLanguage } from "../../contexts/LanguageContext.jsx";
import DirectorsWords from "../DirectorsWords/DirectorsWords.jsx";
import DisplayText from "../../utils/functions.jsx";
import {locales} from "../../utils/locales/locales.js";

export default function About({isMobile, isTablet}) {
    const { l } = useLanguage();
    const t = locales.about;

    return (
        <div className="about">
            <h2 className="about__title">{t.title[l]}</h2>
            <p className="about__intro">{t.description[l]}</p>
            <div className="about__content">
                {isMobile || isTablet ? (
                    <>
                        <img className="about__image" src={new URL("../../assets/actors.jpg", import.meta.url).href} alt="" />
                        <DisplayText list={t.goal[l]} textClass={"about__text"} />

                        <img className="about__image" src={new URL("../../assets/team.jpg", import.meta.url).href} alt="" />
                        <DisplayText list={t.team[l]} textClass={"about__text"} />

                        <img className="about__image" src={new URL("../../assets/director.jpg", import.meta.url).href} alt="" />
                        <DisplayText list={t.director[l]} textClass={"about__text"} />
                    </>
                ) : (
                    <>
                        <img className="about__image" src={new URL("../../assets/actors.jpg", import.meta.url).href} alt="" />
                        <DisplayText list={t.goal[l]} textClass={"about__text"} />

                        <DisplayText list={t.team[l]} textClass={"about__text"} />
                        <img className="about__image" src={new URL("../../assets/team.jpg", import.meta.url).href} alt="" />

                        <img className="about__image" src={new URL("../../assets/director.jpg", import.meta.url).href} alt="" />
                        <DisplayText list={t.director[l]} textClass={"about__text"} />
                    </>
                )}
            </div>
            <DirectorsWords t={t.directorsWords} l={l} isMobile={isMobile}/>
        </div>
    );
}