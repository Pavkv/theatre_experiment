import { useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext.jsx";
import MediaModal from "./MediaModal.jsx";
import {locales} from "../../utils/locales/locales.js";

export default function Media({isMobile}) {
    const { l } = useLanguage();
    const t = locales.media;
    const [selectedOccasion, setSelectedOccasion] = useState("all");
    const [selectedYear, setSelectedYear] = useState("all");
    const [modalImage, setModalImage] = useState(null);

    const occasions = [
        "all",
        ...new Set(t.gallery.map((img) => img.occasion + "s")),
    ];

    const years = [
        "all",
        ...[...new Set(t.gallery.map((img) => img.year))].sort((a, b) => b - a),
    ];

    const filteredGallery = t.gallery.filter((img) => {
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
            <h2 className="media__title">{t.title[l]}</h2>

            <div className="media__filters">
                <div className="media__tabs">
                    {occasions.map((occ) => (
                        <button
                            key={occ}
                            className={`media__tab ${selectedOccasion === occ ? "active" : ""}`}
                            onClick={() => setSelectedOccasion(occ)}
                        >
                            {occ === "all" ? t.allOccasions[l] || "All Occasions" : occ}
                        </button>
                    ))}
                </div>

                {isMobile && (<span className="media__separator" />)}

                <div className="media__tabs">
                    {years.map((yr) => (
                        <button
                            key={yr}
                            className={`media__tab ${selectedYear === yr ? "active" : ""}`}
                            onClick={() => setSelectedYear(yr)}
                        >
                            {yr === "all" ? t.allYears[l] || "All Years" : yr}
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
                    {t.reset[l]}
                </button>
            </div>

            <div className="media__grid">
                {filteredGallery.map((img) => (
                    <div className="media__item" key={img.id}>
                        <img
                            src={img.url}
                            alt={img.caption[l]}
                            className="media__image"
                            onClick={() => setModalImage(img)}
                        />
                        {/*<p className="media__caption">{img.caption}</p>*/}
                    </div>
                ))}
            </div>

            {modalImage && (
                <MediaModal modalImage={modalImage} setModalImage={setModalImage} />
            )}
        </div>
    );
}