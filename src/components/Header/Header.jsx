import { useState, useEffect } from "react";
import Navigation from "../Navigation/Navigation.jsx";
import SocialLinks from "../SocialLinks/SocialLinks.jsx";
import LanguageSwitcher from "./LanguageSwitch.jsx";
import { useLanguage } from "../../contexts/LanguageContext";
import { Link } from "react-router-dom";

export default function Header() {
    const { t } = useLanguage();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
            <div className="header__content">
                <Link to="/" className="header__link">
                    <p className="header__logo">{t.logo}</p>
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