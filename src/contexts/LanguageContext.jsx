import React, { createContext, useContext, useState } from "react";
import { locales } from "../utils/locales";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState("en");
    const value = {
        language,
        setLanguage,
        t: locales[language],
    };
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