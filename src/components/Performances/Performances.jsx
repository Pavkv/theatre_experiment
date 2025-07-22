import { useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext.jsx";
import DisplayText from "../../utils/functions.jsx";

export default function Performances({ isMobile }) {
    const { t } = useLanguage();
    const [expandedId, setExpandedId] = useState(null);

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
                alt={performance.title}
                className="performance__image"
            />
            <h3 className="performance__name">{performance.title}</h3>
            <p className="performance__author">{performance.author}</p>
            <p className="performance__date">{performance.date}</p>
        </button>
    );

    const renderExpanded = (performance) => (
        <div
            key={performance.id}
            className="performance__expanded"
            onClick={() => toggleExpand(performance.id)}
        >
            <img
                src={performance.image}
                alt={performance.title}
                className="performance__image performance__image--large"
            />
            <div className="performance__info">
                <h3 className="performance__name">{performance.title}</h3>
                <p className="performance__author">{performance.author}</p>
                <p className="performance__date">{performance.date}</p>
                <DisplayText list={performance.description} textClass="performance__description"/>
                <button
                    onClick={() => toggleExpand(null)}
                    className="performance__close"
                >×</button>
            </div>
        </div>
    );

    const performances = t.performances.performances;

    return (
        <div className="performances">
            <h2 className="performances__title">{t.performances.title}</h2>

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