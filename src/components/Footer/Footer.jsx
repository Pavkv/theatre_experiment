import {useLanguage} from "../../contexts/LanguageContext.jsx";
import {locales} from "../../utils/locales/locales.js";

export default function Footer() {
    const { l } = useLanguage();
    return (
        <footer className="footer">
            <p className="footer__text">{locales.footer[l]}</p>
        </footer>
    );
}