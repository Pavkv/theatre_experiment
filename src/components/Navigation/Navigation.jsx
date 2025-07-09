import {Link} from "react-router-dom";

export default function nav({t}) {
    return (
        <ul className="nav">
            <li>
                <Link
                    to="/about"
                    className="nav__link"
                >
                    {t.about_btn}
                </Link>
            </li>
            <li>
                <Link
                    to="/team"
                    className="nav__link"
                >
                    {t.team_btn}
                </Link>
            </li>
            <li>
                <Link
                    to="/performances"
                    className="nav__link"
                >
                    {t.performances_btn}
                </Link>
            </li>
            <li>
                <Link
                    to="/media"
                    className="nav__link"
                >
                    {t.media_btn}
                </Link>
            </li>
        </ul>
    );
}