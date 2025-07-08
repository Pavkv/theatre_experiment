import {Link} from "react-router-dom";

export default function nav() {
    return (
        <ul className="nav">
            <li>
                <Link
                    to="/"
                    className="nav__link"
                >
                    Home
                </Link>
            </li>
            <li>
                <Link
                    to="/about"
                    className="nav__link"
                >
                    About Experiment
                </Link>
            </li>
            <li>
                <Link
                    to="/team"
                    className="nav__link"
                >
                    Our Team
                </Link>
            </li>
            <li>
                <Link
                    to="/performances"
                    className="nav__link"
                >
                    Performances
                </Link>
            </li>
            <li>
                <Link
                    to="/media"
                    className="nav__link"
                >
                    Media
                </Link>
            </li>
        </ul>
    );
}