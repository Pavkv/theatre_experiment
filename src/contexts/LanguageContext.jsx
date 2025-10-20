import React, { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const getInitialLanguage = () => {
        try {
            const saved = localStorage.getItem("language");
            return saved ? saved : "en";
            // eslint-disable-next-line no-unused-vars
        } catch (err) {
            console.warn("LocalStorage unavailable, using default language.");
            return "en";
        }
    };

    const [language, setLanguage] = useState(getInitialLanguage);

    useEffect(() => {
        try {
            localStorage.setItem("language", language);
        } catch (err) {
            console.error("Failed to save language:", err);
        }
    }, [language]);

    useEffect(() => {
        const handleStorageChange = (event) => {
            if (event.key === "language" && event.newValue) {
                setLanguage(event.newValue);
            }
        };
        window.addEventListener("storage", handleStorageChange);
        return () => window.removeEventListener("storage", handleStorageChange);
    }, []);

    const value = { language, setLanguage, l: language };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
    return useContext(LanguageContext);
}