import {useEffect, useRef, useState} from "react";
import {useLocation, useNavigate, Link} from "react-router-dom";
import {useLanguage} from "../../contexts/LanguageContext.jsx";
import DisplayText from "../../utils/functions.jsx";
import {locales} from "../../utils/locales/locales.js";

export default function Performances({isMobile}) {
    const location = useLocation();
    const navigate = useNavigate();
    const {l} = useLanguage();
    const t = locales.performances;
    const expandedRef = useRef(null);
    const params = new URLSearchParams(location.search);
    const performanceSlug = params.get("performance");

    const initialExpanded = t.performances.find(
        (p) => p && p.title && p.title.en && p.title[l] === performanceSlug
    )?.id ?? null;

    const [expandedId, setExpandedId] = useState(initialExpanded);

    useEffect(() => {
        if (expandedRef.current) {
            expandedRef.current.scrollIntoView({behavior: "smooth", block: "start"});
        }
    }, [expandedId]);

    const toggleExpand = (id) => {
        if (expandedId === id) {
            setExpandedId(null);
            navigate("/performances", {replace: true});
        } else {
            setExpandedId(id);
        }
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
            onClick={(e) => {
                if (
                    e.target.tagName === "A" ||
                    e.target.closest("a") ||
                    e.target.tagName === "BUTTON" ||
                    e.target.closest("button")
                ) return;
                toggleExpand(performance.id);
            }}
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
                            <DisplayText list={performance.data.description[l]}
                                         textClass="performance__description performances__description_justified"/>
                        </div>
                    )}
                    <div className="performance__description-columns">
                        {performance.data.actors?.[l] && (
                            <div className="performance__column">
                                <h4 className="performance__subheader performances__subheader_list">{performance.actors[l]}</h4>
                                <div className="performance__description">
                                    {performance.data.actors[l].map(({role, names}) => (
                                        <div key={role}>
                                            <strong className="performances__role">{role}</strong> —{" "}
                                            {names.map((name, index) => (
                                                <span key={name}>
                                                    <Link
                                                        className="performances__link"
                                                        to={`/team?member=${name}`}
                                                    >{name}</Link>
                                                    {index < names.length - 1 ? ", " : ""}
                                                </span>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {performance.data.crew?.[l] && (
                            <div className="performance__column">
                                <h4 className="performance__subheader performances__subheader_list">{performance.crew[l]}</h4>
                                <div className="performance__description">
                                    {performance.data.crew[l].map(({role, names}) => (
                                        <div key={role}>
                                            <strong className="performances__role">{role}</strong> —{" "}
                                            {names.map((name, index) => (
                                                <span key={name}>
                                                    <Link to={`/team?member=${name}`}
                                                          className="performances__link">{name}</Link>
                                                    {index < names.length - 1 ? ", " : ""}
                                                </span>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <Link
                    to={`/media?caption=${encodeURIComponent(performance.title[l])}`}
                    className="performance__media-btn"
                    onClick={(e) => e.stopPropagation()}
                >
                    {t.viewPhotos?.[l]}
                </Link>
                {performance.video && (
                    <a
                        className="performance__media-btn"
                        href={performance.video}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {t.viewPerformance?.[l]}
                    </a>
                )}
                <button
                    onClick={() => toggleExpand(null)}
                    className="performance__close"
                >×
                </button>
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