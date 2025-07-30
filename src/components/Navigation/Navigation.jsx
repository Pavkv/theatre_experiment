import {Link} from "react-router-dom";

export default function nav({t, l}) {
    return (
        <ul className="nav">
            <li>
                <Link
                    to="/about"
                    className="nav__link"
                >
                    {t.about[l]}
                </Link>
            </li>
            <li>
                <Link
                    to="/team"
                    className="nav__link"
                >
                    {t.team[l]}
                </Link>
            </li>
            <li>
                <Link
                    to="/performances"
                    className="nav__link"
                >
                    {t.performances[l]}
                </Link>
            </li>
            <li>
                <Link
                    to="/media"
                    className="nav__link"
                >
                    {t.media[l]}
                </Link>
            </li>
        </ul>
    );
}