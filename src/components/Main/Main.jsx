import {useLanguage} from "../../contexts/LanguageContext.jsx";
import {locales} from "../../utils/locales/locales.js";

export default function Main() {
    const {l} = useLanguage();
    return (
        <main className="main">
            <h1 className="main__title">{locales.main.title[l]}</h1>
            <p className="main__description">{locales.main.description[l]}</p>
            <img
                className="main__image"
                src={new URL("../../assets/title_image.avif", import.meta.url).href}
                alt="Theather image"
            />
        </main>
    );
}