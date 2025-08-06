import React from "react";

export default function DisplayText({ list, textClass = "" }) {
    if (!list) return null;

    const lines = list.split("\n").map(line => line.trim()).filter(Boolean);
    const elements = [];

    const parseLinksAndHighlights = (text) => {
        const parts = text.split(/(\[\[.*?]]|\[.*?]\(.*?\))/g);

        return parts.map((part, idx) => {
            if (part.startsWith("[[") && part.endsWith("]]")) {
                return (
                    <span key={idx} className="highlight">
                        {part.slice(2, -2)}
                    </span>
                );
            }

            const linkMatch = part.match(/^\[(.*?)]\((.*?)\)$/);
            if (linkMatch) {
                const [, label, url] = linkMatch;
                return (
                    <a key={idx} href={url} target="_blank" rel="noopener noreferrer" className="inline-link">
                        {label}
                    </a>
                );
            }

            return <React.Fragment key={idx}>{part}</React.Fragment>;
        });
    };

    let i = 0;
    while (i < lines.length) {
        const line = lines[i];

        if (line.startsWith("•")) {
            const lastEl = elements[elements.length - 1];
            if (lastEl?.type === "p") {
                elements[elements.length - 1] = React.cloneElement(lastEl, {
                    className: `${lastEl.props.className} text-before-list`,
                });
            }

            const bullets = [];
            while (i < lines.length && lines[i].startsWith("•")) {
                bullets.push(lines[i].replace(/^•\s*/, ""));
                i++;
            }

            elements.push(
                <ul key={`ul-${i}`} className={`bullet-list ${textClass}`}>
                    {bullets.map((item, idx) => (
                        <li key={`li-${idx}`} className="bullet-list__item">
                            {parseLinksAndHighlights(item)}
                        </li>
                    ))}
                </ul>
            );
        } else {
            elements.push(
                <p key={`p-${i}`} className={textClass}>
                    {parseLinksAndHighlights(line)}
                </p>
            );
            i++;
        }
    }

    return <>{elements}</>;
}