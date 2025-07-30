import {useEffect, useRef, useState} from "react";
import { useLanguage } from "../../contexts/LanguageContext.jsx";
import DisplayText from "../../utils/functions.jsx";
import {locales} from "../../utils/locales/locales.js";

export default function Performances({ isMobile }) {
    const { l } = useLanguage();
    const t = locales.performances;
    const [expandedId, setExpandedId] = useState(null);
    const expandedRef = useRef(null);

    useEffect(() => {
        if (expandedRef.current) {
            expandedRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }, [expandedId]);

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    const renderCard = (performance) => (
        <button
            key={performance.id}
            className="performance__card"
            onClick={() => toggleExpand(performance.id)}
        >
            <img
                src={performance.image}
                alt={performance.title[l]}
                className="performance__image"
            />
            <h3 className="performance__name">{performance.title[l]}</h3>
            <p className="performance__author">{performance.author[l]}</p>
            <p className="performance__date">{performance.date[l]}</p>
        </button>
    );

    const renderExpanded = (performance) => (
        <div
            key={performance.id}
            className="performance__expanded"
            ref={expandedRef}
            onClick={() => toggleExpand(performance.id)}
        >
            <img
                src={performance.image}
                alt={performance.title[l]}
                className="performance__image performance__image--large"
            />
            <div className="performance__info">
                <h3 className="performance__name">{performance.title[l]}</h3>
                <p className="performance__author">{performance.author[l]}</p>
                <p className="performance__date">{performance.date[l]}</p>
                <div className="performance__description-block">
                    {performance.data.description[l] && (
                        <div className="performance__description-full">
                            <h4 className="performance__subheader">{performance.description[l]}</h4>
                            <DisplayText list={performance.data.description[l]} textClass="performance__description performances__description_justified" />
                        </div>
                    )}
                    <div className="performance__description-columns">
                        {performance.data.actors[l] && (
                            <div className="performance__column">
                                <h4 className="performance__subheader performances__subheader_list">{performance.actors[l]}</h4>
                                <DisplayText list={performance.data.actors[l]} textClass="performance__description" />
                            </div>
                        )}
                        {performance.data.crew[l] && (
                            <div className="performance__column">
                                <h4 className="performance__subheader performances__subheader_list">{performance.crew[l]}</h4>
                                <DisplayText list={performance.data.crew[l]} textClass="performance__description" />
                            </div>
                        )}
                    </div>
                </div>
                <button
                    onClick={() => toggleExpand(null)}
                    className="performance__close"
                >×</button>
            </div>
        </div>
    );

    const performances = t.performances;

    return (
        <div className="performances">
            <h2 className="performances__title">{t.title[l]}</h2>

            {isMobile ? (
                <div className="performances__grid">
                    {performances.map((p) =>
                        p.id === expandedId ? renderExpanded(p) : renderCard(p)
                    )}
                </div>
            ) : (
                <div>
                    {expandedId != null &&
                        renderExpanded(
                            performances.find((p) => p.id === expandedId)
                        )}
                    <div className="performances__grid">
                        {performances
                            .filter((p) => p.id !== expandedId)
                            .map(renderCard)}
                    </div>
                </div>
            )}
        </div>
    );
}