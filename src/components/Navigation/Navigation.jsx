import { Link, useLocation } from "react-router-dom";

export default function Nav({ t, l, onNavigate }) {
    const location = useLocation();

    const handleClick = (path) => {
        if (location.pathname === path) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        if (onNavigate) onNavigate();
    };

    return (
        <ul className="nav">
            <li>
                <Link to="/about" className="nav__link" onClick={() => handleClick("/about")}>
                    {t.about[l]}
                </Link>
            </li>
            <li>
                <Link to="/team" className="nav__link" onClick={() => handleClick("/team")}>
                    {t.team[l]}
                </Link>
            </li>
            <li>
                <Link to="/performances" className="nav__link" onClick={() => handleClick("/performances")}>
                    {t.performances[l]}
                </Link>
            </li>
            <li>
                <Link to="/media" className="nav__link" onClick={() => handleClick("/media")}>
                    {t.media[l]}
                </Link>
            </li>
        </ul>
    );
}