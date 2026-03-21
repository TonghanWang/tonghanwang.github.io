import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext({ lang: 'en', setLang: () => {} });

export function LanguageProvider({ children }) {
    const [lang, setLangState] = useState('en');

    useEffect(() => {
        const saved = localStorage.getItem('site-lang');
        if (saved === 'zh') setLangState('zh');
    }, []);

    const setLang = (l) => {
        setLangState(l);
        localStorage.setItem('site-lang', l);
    };

    return (
        <LanguageContext.Provider value={{ lang, setLang }}>
            {children}
        </LanguageContext.Provider>
    );
}

export const useLanguage = () => useContext(LanguageContext);
