import {useLanguage} from "../../contexts/LanguageContext.jsx";

export default function Footer() {
    const { t } = useLanguage();
    return (
        <footer className="footer">
            <p className="footer__text">{t.footer}</p>
        </footer>
    );
}