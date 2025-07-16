import {useState} from "react";
import DisplayText from "../../utils/functions.jsx";

export default function DirectorsWords({t}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? t.directorsWords.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === t.directorsWords.length - 1 ? 0 : prev + 1));
    };

    return (
        <section className="director">
            <div className="director__card">
                <button className="director__arrow left" onClick={prevSlide}>&lt;</button>
                <button className="director__arrow right" onClick={nextSlide}>&gt;</button>

                {t.directorsWords[currentIndex].quote && (
                    <h3 className="director__quote">“{t.directorsWords[currentIndex].quote}”</h3>
                )}
                <div className="director__text">
                    {<DisplayText list={t.directorsWords[currentIndex].text} textClass={""} />}
                    {t.directorsWords[currentIndex].sign && (
                        <div className="director__sign">
                            {<DisplayText list={t.directorsWords[currentIndex].sign} textClass={"director__sign-text"} />}
                        </div>
                    )}
                </div>

                <div className="director__dots">
                    {t.directorsWords.map((_, i) => (
                        <span
                            key={i}
                            className={`dot ${i === currentIndex ? "active" : ""}`}
                            onClick={() => setCurrentIndex(i)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}