import { useState, useEffect } from "react";
import { useLanguage } from "../../contexts/LanguageContext.jsx";
import MediaModal from "./MediaModal.jsx";
import { locales } from "../../utils/locales/locales.js";

export default function Media({ isMobile }) {
    const { l } = useLanguage();
    const t = locales.media;
    const [selectedOccasion, setSelectedOccasion] = useState("all");
    const [selectedYear, setSelectedYear] = useState("all");
    const [selectedCaption, setSelectedCaption] = useState("all");
    const [modalImage, setModalImage] = useState(null);
    const [page, setPage] = useState(1);
    const imagesPerPage = 40;

    const allOccasions = t.gallery.flatMap(item =>
        item.occasions.map(o => o.occasion[l])
    );
    const allCaptions = t.gallery.map(item => item.caption[l]);

    const occasions = ["all", ...new Set(allOccasions)];
    const captions = ["all", ...new Set(allCaptions)];
    const years = [
        "all",
        ...[...new Set(t.gallery.map(img => img.year))].sort((a, b) => b - a)
    ];

    const filteredImages = t.gallery.flatMap(entry => {
        if (selectedYear !== "all" && entry.year !== selectedYear) return [];
        if (selectedCaption !== "all" && entry.caption[l] !== selectedCaption) return [];

        return entry.occasions.flatMap(o => {
            if (selectedOccasion !== "all" && o.occasion[l] !== selectedOccasion) return [];
            return o.urls.map((url, index) => ({
                url,
                caption: entry.caption[l],
                occasion: o.occasion[l],
                id: `${entry.id}-${o.occasion[l]}-${index}`,
            }));
        });
    });

    const paginatedImages = filteredImages.slice(0, page * imagesPerPage);

    const handleScroll = () => {
        if (
            window.innerHeight + window.scrollY >= document.body.offsetHeight - 300
        ) {
            setPage(prev => prev + 1);
        }
    };

    useEffect(() => {
        setPage(1);
    }, [selectedOccasion, selectedYear, selectedCaption]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="media">
            <h2 className="media__title">{t.title[l]}</h2>

            <div className="media__filters">
                <div className="media__tabs">
                    {captions.map((cap) => (
                        <button
                            key={cap}
                            className={`media__tab ${selectedCaption === cap ? "active" : ""}`}
                            onClick={() => setSelectedCaption(cap)}
                        >
                            {cap === "all" ? t.allCaptions[l] : cap}
                        </button>
                    ))}
                </div>

                {isMobile && <span className="media__separator" />}

                <div className="media__tabs">
                    {occasions.map((occ) => (
                        <button
                            key={occ}
                            className={`media__tab ${selectedOccasion === occ ? "active" : ""}`}
                            onClick={() => setSelectedOccasion(occ)}
                        >
                            {occ === "all" ? t.allOccasions[l] : occ}
                        </button>
                    ))}
                </div>

                {isMobile && <span className="media__separator" />}

                <div className="media__tabs">
                    {years.map((yr) => (
                        <button
                            key={yr}
                            className={`media__tab ${selectedYear === yr ? "active" : ""}`}
                            onClick={() => setSelectedYear(yr)}
                        >
                            {yr === "all" ? t.allYears[l] : yr}
                        </button>
                    ))}
                </div>

                <button
                    className="media__reset"
                    onClick={() => {
                        setSelectedOccasion("all");
                        setSelectedYear("all");
                        setSelectedCaption("all");
                        setPage(1);
                    }}
                >
                    {t.reset[l]}
                </button>
            </div>

            <div className="media__grid">
                {paginatedImages.map((img) => (
                    <div className="media__item" key={img.id}>
                        <img
                            src={img.url}
                            alt={img.caption}
                            className="media__image"
                            loading="lazy"
                            onClick={() => setModalImage(img)}
                        />
                    </div>
                ))}
            </div>

            {modalImage && (
                <MediaModal modalImage={modalImage} setModalImage={setModalImage} />
            )}
        </div>
    );
}