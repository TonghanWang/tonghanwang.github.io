import Data from "@data/sections/hero-1.json";
import AboutData from "@data/sections/about.json";
import { useLanguage } from "@library/LanguageContext";
import { translations, pick } from "@library/i18n";

function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function highlightText(text, { links = {}, highlights = [], linkColor } = {}) {
    const tokens = [...Object.keys(links), ...highlights];
    const ACCENT = "#2563eb";
    if (!tokens.length) return text;

    const regex = new RegExp(`(${tokens.map(escapeRegExp).join("|")})`, "gi");

    return text.split(regex).map((part, i) => {
        const linkKey = Object.keys(links).find(k => part.toLowerCase() === k.toLowerCase());
        if (linkKey) {
            return (
                <a
                    key={i}
                    href={links[linkKey]}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: linkColor || ACCENT }}
                >
                    {part}
                </a>
            );
        }
        const isHighlight = highlights.some(h => part.toLowerCase() === h.toLowerCase());
        if (isHighlight) return <span key={i} style={{ color: ACCENT }}>{part}</span>;
        return <>{part}</>;
    });
}

const HeroOne = () => {
    const { lang } = useLanguage();
    const t = translations.hero;

    const title         = pick(t.title, lang);
    const description   = pick(t.description, lang);
    const descLinks     = t.descriptionLinks[lang] ?? t.descriptionLinks.en;
    const bio           = pick(t.bio, lang);
    const bioLinks      = t.bioLinks[lang] ?? t.bioLinks.en;
    const recruiting    = pick(t.recruiting, lang);
    const problems      = t.problems[lang] ?? t.problems.en;
    const tooltipText   = pick(t.tooltip, lang);
    const showCNLink    = t.showChineseProfileLink[lang] ?? true;

    return (
        <>
            {/* banner */}
            <section className="mil-side-banner mil-center">

                {/* ── Main text column ───────────────────────────────────── */}
                <div className="mil-banner-title left-align">

                    {/* Name */}
                    <h1 className="mil-up" style={{ marginBottom: '16px' }}>
                        <span style={{ fontSize: '45px', ...(lang === 'zh' && { fontFamily: "'KaiTi', 'STKaiti', '楷体', serif" }) }}>{title}</span>
                        <span className="tooltip">
                            <i className="fas fa-info-circle" style={{ fontSize: '9px', lineHeight: 1 }}></i>
                            <span className="tooltiptext">{tooltipText}</span>
                        </span>
                    </h1>

                    {/* Glassmorphism card wrapping bio + interests */}
                    <div className="mil-up hero-glass-panel">

                        {/* Short intro */}
                        <p className="mil-wide mil-dark" style={{ fontSize: '15px', marginBottom: '4px' }}>
                            {highlightText(description, { links: descLinks, linkColor: 'inherit' })}
                        </p>

                        <p className="academic-font" style={{ fontSize: '18px', textAlign: 'left', marginTop: '10px' }}>
                            {highlightText(bio, { links: bioLinks, linkColor: 'inherit' })}
                        </p>

                        {showCNLink && (
                            <p className="academic-font" style={{ fontSize: '18px', textAlign: 'left', marginTop: '6px' }}>
                                {highlightText(AboutData.description3, { links: AboutData.link3, linkColor: 'inherit' })}
                            </p>
                        )}

                        {/* Research interests block */}
                        {problems.length > 0 && (
                            <div style={{
                                borderLeft: '4px solid #2563eb',
                                borderRadius: '0 10px 10px 0',
                                padding: '12px 18px',
                                marginTop: '14px',
                                background: 'rgba(37, 99, 235, 0.04)',
                            }}>
                                <p className="academic-font" style={{ fontSize: '16px', textAlign: 'left', marginBottom: '8px', fontWeight: '600', color: '#1a1a1a' }}>
                                    {recruiting}
                                </p>
                                <ol style={{ paddingLeft: '1.25rem', listStyleType: 'decimal', display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: 0 }}>
                                    {problems.map((item, idx) => (
                                        <li
                                            key={idx}
                                            className="academic-font"
                                            style={{ fontSize: '16px', textAlign: 'left' }}
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        )}
                    </div>

                </div>

            </section>
            {/* banner end */}
        </>
    );
};
export default HeroOne;
