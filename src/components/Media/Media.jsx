import { useState, useEffect, useMemo } from "react";
import {useLocation, useNavigate} from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext.jsx";
import MediaModal from "./MediaModal.jsx";
import { locales } from "../../utils/locales/locales.js";

export default function Media({ isMobile }) {
    const { l } = useLanguage();
    const t = locales.media;
    const location = useLocation();
    const navigate = useNavigate();

    const [selectedYear, setSelectedYear] = useState("all");
    const [selectedCaption, setSelectedCaption] = useState("all");
    const [selectedOccasion, setSelectedOccasion] = useState("all");
    const [modalImage, setModalImage] = useState(null);
    const [page, setPage] = useState(1);
    const imagesPerPage = 40;

    const captions = useMemo(
        () => ["all", ...new Set(t.gallery.map(g => g.caption?.[l]).filter(Boolean))],
        [t.gallery, l]
    );

    const globalYears = useMemo(() => {
        const set = new Set();
        t.gallery.forEach(entry => {
            if (entry.year) {
                set.add(entry.year);
            } else if (Array.isArray(entry.occasions)) {
                entry.occasions.forEach(o => {
                    if (o.year) set.add(o.year);
                });
            }
        });
        return ["all", ...[...set].sort((a, b) => String(b).localeCompare(String(a)))];
    }, [t.gallery]);

    const yearsForCaption = useMemo(() => {
        if (selectedCaption === "all") return [];
        const entry = t.gallery.find(g => g.caption?.[l] === selectedCaption);
        if (!entry) return [];

        const set = new Set();
        if (entry.year) {
            set.add(entry.year);
        } else if (Array.isArray(entry.occasions)) {
            entry.occasions.forEach(o => {
                const oy = o.year ?? entry.year;
                if (oy) set.add(oy);
            });
        }
        return ["all", ...[...set].sort((a, b) => String(b).localeCompare(String(a)))];
    }, [t.gallery, l, selectedCaption]);

    const occasionsForCaption = useMemo(() => {
        if (selectedCaption === "all") return [];
        const entry = t.gallery.find(g => g.caption?.[l] === selectedCaption);
        if (!entry) return [];
        const occs = (entry.occasions || [])
            .map(o => o.occasion?.[l])
            .filter(Boolean);
        return ["all", ...new Set(occs)];
    }, [t.gallery, l, selectedCaption]);

    const filteredImages = useMemo(() => {
        return t.gallery.flatMap(entry => {
            if (selectedCaption !== "all" && entry.caption?.[l] !== selectedCaption) return [];

            return (entry.occasions || []).flatMap(o => {
                const occLabel = o.occasion?.[l];
                const occYear = o.year ?? entry.year;

                if (selectedYear !== "all" && occYear !== selectedYear) return [];

                if (selectedCaption !== "all" && selectedOccasion !== "all" && occLabel !== selectedOccasion) {
                    return [];
                }

                return (o.urls || []).map((url, index) => ({
                    url,
                    id: `${entry.id}-${occLabel}-${index}`,
                    caption: entry.caption?.[l],
                    occasion: occLabel,
                    year: occYear
                }));
            });
        });
    }, [t.gallery, l, selectedYear, selectedCaption, selectedOccasion]);

    const paginatedImages = useMemo(
        () => filteredImages.slice(0, page * imagesPerPage),
        [filteredImages, page]
    );

    useEffect(() => {
        const onScroll = () => {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 300) {
                setPage(prev => prev + 1);
            }
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        setPage(1);
    }, [selectedYear, selectedCaption, selectedOccasion]);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const capFromUrl = params.get("caption");
        if (capFromUrl && captions.includes(capFromUrl)) {
            setSelectedCaption(capFromUrl);
            setSelectedOccasion("all");
            setSelectedYear("all");
            setPage(1);
        } else if (capFromUrl && !captions.includes(capFromUrl)) {
            params.delete("caption");
            navigate({ search: params.toString() }, { replace: true });
        }
    }, [location.search, captions]);

    const handleCaptionClick = (cap) => {
        setSelectedCaption(cap);
        setSelectedOccasion("all");
        setSelectedYear("all");
        setPage(1);

        const params = new URLSearchParams(location.search);
        if (cap === "all") {
            params.delete("caption");
        } else {
            params.set("caption", cap);
        }
        navigate({ search: params.toString() }, { replace: true });
    };

    const yearsToShow = selectedCaption === "all" ? globalYears : yearsForCaption;

    return (
        <div className="media">
            <h2 className="media__title">{t.title[l]}</h2>

            <div className="media__filters">
                {/* Caption / performance filter */}
                <div className="media__tabs">
                    {captions.map((cap) => (
                        <button
                            key={cap}
                            className={`media__tab ${selectedCaption === cap ? "active" : ""}`}
                            onClick={() => handleCaptionClick(cap)}
                        >
                            {cap === "all" ? t.allCaptions[l] : cap}
                        </button>
                    ))}
                </div>

                {isMobile && <span className="media__separator" />}

                {/* Occasion filter (only after a caption is chosen) */}
                {selectedCaption !== "all" && (
                    <>
                        {isMobile && <span className="media__separator" />}
                        <div className="media__tabs">
                            {occasionsForCaption.map((occ) => (
                                <button
                                    key={occ}
                                    className={`media__tab ${selectedOccasion === occ ? "active" : ""}`}
                                    onClick={() => setSelectedOccasion(occ)}
                                >
                                    {occ === "all" ? t.allOccasions[l] : occ}
                                </button>
                            ))}
                        </div>
                    </>
                )}

                {isMobile && <span className="media__separator" />}

                <div className="media__tabs">
                    {yearsToShow.map((yr) => (
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
                        setSelectedYear("all");
                        setSelectedCaption("all");
                        setSelectedOccasion("all");
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