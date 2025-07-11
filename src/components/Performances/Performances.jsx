import { useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext.jsx";

export default function Performances() {
    const { t } = useLanguage();
    const [expandedId, setExpandedId] = useState(null);

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    const expandedPerformance = t.performances.performances.find((p) => p.id === expandedId);

    return (
        <div className="performances">
            <h2 className="performances__title">{t.performances.title}</h2>

            {expandedPerformance && (
                <div className="performance__expanded">
                    <img
                        src={expandedPerformance.image}
                        alt={expandedPerformance.title}
                        className="performance__image performance__image--large"
                    />
                    <div className="performance__info">
                        <h3 className="performance__name">{expandedPerformance.title}</h3>
                        <p className="performance__author">{expandedPerformance.author}</p>
                        <p className="performance__date">{expandedPerformance.date}</p>
                        <p className="performance__description">{expandedPerformance.description}</p>
                        <button
                            onClick={() => toggleExpand(null)}
                            className="performance__close"
                        >×</button>
                    </div>
                </div>
            )}

            <div className="performances__grid">
                {t.performances.performances.filter((p) => p.id !== expandedId).map((performance) => (
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
                ))}
            </div>
        </div>
    );
}