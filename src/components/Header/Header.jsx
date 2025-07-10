import Navigation from "../Navigation/Navigation.jsx";
import SocialLinks from "../SocialLinks/SocialLinks.jsx";
import LanguageSwitcher from "./LanguageSwitch.jsx";
import { useLanguage } from "../../contexts/LanguageContext";
import {Link} from "react-router-dom";

export default function Header() {
    const { t } = useLanguage();
    return (
        <header className="header">
            <div className="header__content">
                <Link
                    to="/"
                    className="header__link"
                >
                    <p className="header__logo">{t.logo}</p>
                    {/*<p className="header__tagline">All styles are good except the boring kind.</p>*/}
                </Link>
                <nav className="header__navigation">
                    <Navigation t={t} />
                </nav>
                <SocialLinks />
                <LanguageSwitcher />
            </div>
        </header>
    );
}