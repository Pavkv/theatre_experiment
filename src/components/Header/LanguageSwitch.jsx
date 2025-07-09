import { useLanguage } from "../../contexts/LanguageContext";

export default function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="language-switcher">
            <button
                onClick={() => setLanguage("en")}
                className={
                    "language-switcher__button" +
                    (language === "en" ? " language-switcher__button_active" : "")
                }
            >
                EN
            </button>
            <button
                onClick={() => setLanguage("ru")}
                className={
                    "language-switcher__button" +
                    (language === "ru" ? " language-switcher__button_active" : "")
                }
            >
                RU
            </button>
        </div>
    );
}