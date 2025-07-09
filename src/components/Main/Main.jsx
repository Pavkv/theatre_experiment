import {useLanguage} from "../../contexts/LanguageContext.jsx";

export default function Main() {
    const { t } = useLanguage();
    return (
        <main className="main">
            <div className="main__content">
                <h1 className="main__title">{t.title}</h1>
                <p className="main__description">{t.title_description}</p>
                <img
                    className="main__image"
                    src={new URL('../../assets/title_image.jpg', import.meta.url).href}
                    alt="Theather image"
                />
            </div>
        </main>
    );
}