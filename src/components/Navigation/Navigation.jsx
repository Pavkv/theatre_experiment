import {Link} from "react-router-dom";

export default function nav({t}) {
    return (
        <ul className="nav">
            <li>
                <Link
                    to="/about"
                    className="nav__link"
                >
                    {t.nav.about}
                </Link>
            </li>
            <li>
                <Link
                    to="/team"
                    className="nav__link"
                >
                    {t.nav.team}
                </Link>
            </li>
            <li>
                <Link
                    to="/performances"
                    className="nav__link"
                >
                    {t.nav.performances}
                </Link>
            </li>
            <li>
                <Link
                    to="/media"
                    className="nav__link"
                >
                    {t.nav.media}
                </Link>
            </li>
        </ul>
    );
}