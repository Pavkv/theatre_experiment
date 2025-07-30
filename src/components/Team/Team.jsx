import {useState} from "react";
import {useLanguage} from "../../contexts/LanguageContext.jsx";
import DisplayText from "../../utils/functions.jsx";
import {locales} from "../../utils/locales/locales.js";

export default function Team({isMobile}) {
    const {l} = useLanguage();
    const t = locales.team;
    const [expandedId, setExpandedId] = useState(null);

    const toggleExpand = (id) => setExpandedId(expandedId === id ? null : id);
    const expandedMember = t.members.find((m) => m.id === expandedId);

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
        <div key={member.id} className="team__expanded" onClick={() => toggleExpand(member.id)}>
            <img src={member.photo.large} alt={member.name.en} className="team__photo team__photo--large"/>
            <div className="team__info">
                <h3 className="team__name">{member.name[l]}</h3>
                <p className="team__role">{member.title[l]}</p>
                <DisplayText list={member.bio[l]} textClass="team__bio"/>
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