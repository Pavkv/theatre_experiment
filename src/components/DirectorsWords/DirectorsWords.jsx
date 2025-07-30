import {useState, useRef} from "react";
import DisplayText from "../../utils/functions.jsx";

export default function DirectorsWords({t, l, isMobile}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const touchStartX = useRef(null);
    const touchEndX = useRef(null);

    const handleTouchStart = (e) => {
        touchStartX.current = e.changedTouches[0].clientX;
    };

    const handleTouchMove = (e) => {
        touchEndX.current = e.changedTouches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (!touchStartX.current || !touchEndX.current) return;

        const distance = touchStartX.current - touchEndX.current;

        if (distance > 50) nextSlide();
        else if (distance < -50) prevSlide();

        touchStartX.current = null;
        touchEndX.current = null;
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? t.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === t.length - 1 ? 0 : prev + 1));
    };

    return (
        <section className="director">
            <div
                className="director__card"
                onTouchStart={isMobile ? handleTouchStart : undefined}
                onTouchMove={isMobile ? handleTouchMove : undefined}
                onTouchEnd={isMobile ? handleTouchEnd : undefined}
            >
                {!isMobile && (
                    <>
                        <button className="director__arrow left" onClick={prevSlide}>&lt;</button>
                        <button className="director__arrow right" onClick={nextSlide}>&gt;</button>
                    </>
                )}

                {t[currentIndex].quote && (
                    <h3 className="director__quote">“{t[currentIndex].quote[l]}”</h3>
                )}

                <div className="director__text">
                    <DisplayText list={t[currentIndex].text[l]} textClass={""} />
                    {t[currentIndex].sign && (
                        <div className="director__sign">
                            <DisplayText
                                list={t[currentIndex].sign[l]}
                                textClass={"director__sign-text"}
                            />
                        </div>
                    )}
                </div>

                <div className="director__dots">
                    {t.map((_, i) => (
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