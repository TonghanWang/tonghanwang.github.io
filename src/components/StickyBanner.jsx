import { useState, useEffect } from 'react';
import { useLanguage } from '@library/LanguageContext';

const StickyBanner = () => {
    const [title, setTitle] = useState(null);
    const { lang } = useLanguage();

    useEffect(() => {
        const update = () => {
            const banners = Array.from(document.querySelectorAll('.mil-banner-sm'));
            let current = null;
            for (const banner of banners) {
                if (banner.getBoundingClientRect().bottom < 0) {
                    current = banner.querySelector('h1')?.innerHTML ?? null;
                }
            }
            setTitle(current);
        };

        window.addEventListener('scroll', update, { passive: true });
        update();
        return () => window.removeEventListener('scroll', update);
    }, [lang]);

    if (!title) return null;

    return (
        <div
            className={`sticky-section-banner${lang === 'zh' ? ' zh-kaiti' : ''}`}
            dangerouslySetInnerHTML={{ __html: title }}
        />
    );
};

export default StickyBanner;
