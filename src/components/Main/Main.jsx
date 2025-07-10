import {useLanguage} from "../../contexts/LanguageContext.jsx";

export default function Main() {
    const {t} = useLanguage();
    return (
        <main className="main">
            <h1 className="main__title">{t.main.title}</h1>
            <p className="main__description">{t.main.description}</p>
            <img
                className="main__image"
                src={new URL('../../assets/title_image.jpg', import.meta.url).href}
                alt="Theather image"
            />
        </main>
    );
}