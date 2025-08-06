import {useState, useRef, useEffect} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useLanguage} from "../../contexts/LanguageContext.jsx";
import DisplayText from "../../utils/functions.jsx";
import {locales} from "../../utils/locales/locales.js";

export default function Team({isMobile}) {
    const {l} = useLanguage();
    const location = useLocation();
    const navigate = useNavigate();
    const expandedRef = useRef(null);
    const t = locales.team;
    const params = new URLSearchParams(location.search);
    const memberSlug = params.get("member");
    const initialExpanded = t.members.find((m) => m.name[l] === memberSlug)?.id ?? null;
    const [expandedId, setExpandedId] = useState(initialExpanded);
    useEffect(() => {
        if (expandedRef.current) {
            expandedRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }, [expandedId]);

    const expandedMember = t.members.find((m) => m.id === expandedId);
    const toggleExpand = (id) => {
        if (expandedId === id) {
            setExpandedId(null);
            navigate("/team", { replace: true });
        } else {
            setExpandedId(id);
        }
    };

    const renderMemberCard = (member) => (
        <button
            key={member.id}
            className="team__card"
            onClick={() => toggleExpand(member.id)}
        >
            <img src={member.photo.small} alt={member.name.en} className="team__photo"/>
            <h3 className="team__name">{member.name[l]}</h3>
            <p className="team__role">{member.title[l]}</p>
        </button>
    );

    const renderExpanded = (member) => (
        <div
            key={member.id}
            ref={expandedRef}
            className="team__expanded"
            onClick={(e) => {
                if (
                    e.target.tagName === "A" ||
                    e.target.closest("a") ||
                    e.target.tagName === "BUTTON" ||
                    e.target.closest("button")
                ) return;
                toggleExpand(member.id);
            }}
        >
            <img src={member.photo.large} alt={member.name.en} className="team__photo team__photo--large"/>
            <div className="team__info">
                <h3 className="team__name">{member.name[l]}</h3>
                <p className="team__role">{member.title[l]}</p>
                {member.bio[l] && <DisplayText list={member.bio[l]} textClass="team__bio"/>}
                {member.participated && (
                    <>
                        <h4 className="team__subheader">{member.participated.subheader[l]}</h4>
                        <ul className="team__performances">
                            {member.participated.performances[l].map(({ role, title }) => (
                                <li key={title}>
                                    <strong className="team__role">{role}</strong> —{" "}
                                    <Link
                                        className="team__link"
                                        to={`/performances?performance=${title}`}
                                    >{title}</Link>
                                </li>
                            ))}
                        </ul>
                    </>
                )}
                <button onClick={() => toggleExpand(null)} className="team__close">×</button>
            </div>
        </div>
    );

    return (
        <div className="team">
            <h2 className="team__title">{t.title[l]}</h2>
            {isMobile ? (
                <div className="team__grid">
                    {t.members.map((member) =>
                        expandedId === member.id
                            ? renderExpanded(member)
                            : renderMemberCard(member)
                    )}
                </div>
            ) : (
                <div>
                    {expandedMember && renderExpanded(expandedMember)}
                    <div className="team__grid">
                        {t.members
                            .filter((member) => member.id !== expandedId)
                            .map(renderMemberCard)}
                    </div>
                </div>
            )}
        </div>
    );
}