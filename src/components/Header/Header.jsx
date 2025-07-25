import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import Navigation from "../Navigation/Navigation.jsx";
import SocialLinks from "../SocialLinks/SocialLinks.jsx";
import LanguageSwitcher from "./LanguageSwitch.jsx";
import {useLanguage} from "../../contexts/LanguageContext";

export default function Header({isMobile, isMobileMenuOpen, toggleMobileMenu}) {
    const {t} = useLanguage();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 0);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.classList.add("menu-open");
        } else {
            document.body.classList.remove("menu-open");
        }

        return () => document.body.classList.remove("menu-open");
    }, [isMobileMenuOpen]);

    return (
        <header className={`header 
            ${scrolled ? "header--scrolled" : ""} 
            ${isMobileMenuOpen ? "header__mobile-open" : ""}
`       }>
            <div className="header__content">
                <Link to="/" className="header__link">
                    <p className="header__logo">{t.logo}</p>
                </Link>

                {isMobile ? (
                    <>
                        <button
                            className="header__hamburger"
                            onClick={toggleMobileMenu}
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? "×" : "☰"}
                        </button>
                        {isMobileMenuOpen && (
                            <nav className={`header__mobile-nav ${isMobileMenuOpen ? 'header__mobile-nav--open' : ''}`}>
                                <Navigation t={t} />
                                <div className="header__extras">
                                    <SocialLinks />
                                    <LanguageSwitcher />
                                </div>
                            </nav>
                        )}
                    </>
                ) : (
                    <>
                        <nav className="header__navigation">
                            <Navigation t={t}/>
                        </nav>
                        <div className="header__extras">
                            <SocialLinks/>
                            <LanguageSwitcher/>
                        </div>
                    </>
                )}
            </div>
        </header>
    );
}