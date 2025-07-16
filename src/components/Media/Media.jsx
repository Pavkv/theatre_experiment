import { useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext.jsx";
import MediaModal from "./MediaModal.jsx";

export default function Media() {
    const { t } = useLanguage();
    const [selectedOccasion, setSelectedOccasion] = useState("all");
    const [selectedYear, setSelectedYear] = useState("all");
    const [modalImage, setModalImage] = useState(null);

    const occasions = [
        "all",
        ...new Set(t.media.gallery.map((img) => img.occasion + "s")),
    ];

    const years = [
        "all",
        ...[...new Set(t.media.gallery.map((img) => img.year))].sort((a, b) => b - a),
    ];

    const filteredGallery = t.media.gallery.filter((img) => {
        const normalizedOccasion = selectedOccasion.endsWith("s")
            ? selectedOccasion.slice(0, -1)
            : selectedOccasion;

        return (
            (selectedOccasion === "all" || img.occasion === normalizedOccasion) &&
            (selectedYear === "all" || img.year === selectedYear)
        );
    });

    return (
        <div className="media">
            <h2 className="media__title">{t.media.title}</h2>

            <div className="media__filters">
                <div className="media__tabs">
                    {occasions.map((occ) => (
                        <button
                            key={occ}
                            className={`media__tab ${selectedOccasion === occ ? "active" : ""}`}
                            onClick={() => setSelectedOccasion(occ)}
                        >
                            {occ === "all" ? t.media.allOccasions || "All Occasions" : occ}
                        </button>
                    ))}
                </div>
                <div className="media__tabs">
                    {years.map((yr) => (
                        <button
                            key={yr}
                            className={`media__tab ${selectedYear === yr ? "active" : ""}`}
                            onClick={() => setSelectedYear(yr)}
                        >
                            {yr === "all" ? t.media.allYears || "All Years" : yr}
                        </button>
                    ))}
                </div>
                <button
                    className="media__reset"
                    onClick={() => {
                        setSelectedOccasion("all");
                        setSelectedYear("all");
                    }}
                >
                    {t.media.reset || "Reset Filters"}
                </button>
            </div>

            <div className="media__grid">
                {filteredGallery.map((img) => (
                    <div className="media__item" key={img.id}>
                        <img
                            src={img.url}
                            alt={img.caption}
                            className="media__image"
                            onClick={() => setModalImage(img)}
                        />
                        <p className="media__caption">{img.caption}</p>
                    </div>
                ))}
            </div>

            {modalImage && (
                <MediaModal modalImage={modalImage} setModalImage={setModalImage} />
            )}
        </div>
    );
}