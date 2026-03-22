import Data from '@data/sliders/testimonial';
import { useLanguage } from "@library/LanguageContext";
import { translations, pick } from "@library/i18n";

const ACCENT      = '#2563eb';
const ACCENT_BG   = 'rgba(37, 99, 235, 0.07)';
const TEAL        = '#0d9488';
const TEAL_BG     = 'rgba(13, 148, 136, 0.07)';

// ── Icons ─────────────────────────────────────────────────────────────────────
const TrophyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
         fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="8 21 12 17 16 21"/>
        <line x1="12" y1="17" x2="12" y2="11"/>
        <path d="M7 4H4a1 1 0 0 0-1 1v2a4 4 0 0 0 4 4h0"/>
        <path d="M17 4h3a1 1 0 0 1 1 1v2a4 4 0 0 1-4 4h0"/>
        <rect x="7" y="2" width="10" height="9" rx="1"/>
    </svg>
);

const PaperIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
         fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
    </svg>
);

// ── Highlight helper ──────────────────────────────────────────────────────────
function highlightPhrase(text, phrase) {
    if (!phrase) return text;
    const parts = text.split(new RegExp(`(${phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'));
    return parts.map((part, i) =>
        part.toLowerCase() === phrase.toLowerCase()
            ? <span key={i} style={{ color: ACCENT, fontWeight: '800' }}>{part}</span>
            : part
    );
}

// ── Card ──────────────────────────────────────────────────────────────────────
const NewsCard = ({ item, index, i18nItem, lang }) => {
    const isAward = item.type === 'award';
    const color   = isAward ? ACCENT : TEAL;
    const colorBg = isAward ? ACCENT_BG : TEAL_BG;

    const cardStyle = isAward ? {
        display: 'flex',
        alignItems: 'flex-start',
        gap: '20px',
        padding: '14px 20px',
        borderRadius: '0 12px 12px 0',
        borderLeft: `4px solid ${color}`,
        background: 'rgba(255, 255, 255, 0.12)',
        backdropFilter: 'blur(4px) saturate(1.4)',
        WebkitBackdropFilter: 'blur(4px) saturate(1.4)',
        border: `1px solid rgba(255, 255, 255, 0.55)`,
        borderLeft: `4px solid ${color}`,
        boxShadow: '0 4px 24px rgba(37,99,235,0.08), inset 0 1px 0 rgba(255,255,255,0.7)',
        transition: 'box-shadow 0.2s ease, transform 0.2s ease',
        animationDelay: `${index * 0.1}s`,
    } : {
        display: 'flex',
        alignItems: 'flex-start',
        gap: '20px',
        padding: '14px 20px',
        borderRadius: '0 12px 12px 0',
        borderLeft: `4px solid ${color}`,
        background: 'rgba(255, 255, 255, 0.10)',
        backdropFilter: 'blur(4px) saturate(1.4)',
        WebkitBackdropFilter: 'blur(4px) saturate(1.4)',
        border: `1px solid rgba(255, 255, 255, 0.50)`,
        borderLeft: `4px solid ${color}`,
        boxShadow: '0 4px 24px rgba(13,148,136,0.08), inset 0 1px 0 rgba(255,255,255,0.65)',
        transition: 'box-shadow 0.2s ease, transform 0.2s ease',
        animationDelay: `${index * 0.1}s`,
    };

    // Use translated strings when available, fall back to raw data
    const displayName      = i18nItem ? pick(i18nItem.name, lang) : item.name;
    const displayHighlight = i18nItem?.highlight ? pick(i18nItem.highlight, lang) : item.highlight;
    const displayText = i18nItem ? pick(i18nItem.text, lang) : item.text;
    const displayDate = i18nItem ? pick(i18nItem.date, lang) : item.date;
    const displayLinkText = (i18nItem?.link && item.link)
        ? pick(i18nItem.link, lang)
        : item.link?.text;

    return (
        <div
            className="news-card"
            style={cardStyle}
            onMouseEnter={e => {
                e.currentTarget.style.boxShadow = isAward
                    ? '0 8px 32px rgba(37,99,235,0.13), inset 0 1px 0 rgba(255,255,255,0.9)'
                    : '0 8px 32px rgba(13,148,136,0.10), inset 0 1px 0 rgba(255,255,255,0.9)';
                e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
                e.currentTarget.style.boxShadow = isAward
                    ? '0 2px 16px rgba(37,99,235,0.06), inset 0 1px 0 rgba(255,255,255,0.85)'
                    : '0 2px 16px rgba(13,148,136,0.06), inset 0 1px 0 rgba(255,255,255,0.85)';
                e.currentTarget.style.transform = 'translateY(0)';
            }}
        >
            {/* Icon */}
            <div style={{
                flexShrink: 0,
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: colorBg,
                color: color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '2px',
            }}>
                {isAward ? <TrophyIcon /> : <PaperIcon />}
            </div>

            {/* Body */}
            <div style={{ flex: 1 }}>
                {/* Badge row — role and venue names stay in English */}
                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '4px', marginBottom: '6px' }}>
                    <span className="news-badge" style={{
                        color: '#374151',
                        background: 'rgba(0, 0, 0, 0.05)',
                    }}>
                        {item.role}
                    </span>
                    {displayDate && (
                        <span className="news-date-chip">{displayDate}</span>
                    )}
                </div>

                <p style={{ fontSize: '16px', fontWeight: '700', color: '#1a1a1a', lineHeight: '1.4', margin: '0 0 6px' }}>
                    {highlightPhrase(displayName, displayHighlight)}
                </p>
                <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.6', margin: '0 0 6px' }}>
                    {displayText}
                </p>
                {item.link && (
                    <a href={item.link.href} target="_blank" rel="noopener noreferrer"
                       style={{ fontSize: '13px', fontWeight: '600', color: color, textDecoration: 'none',
                                borderBottom: '1px solid transparent', transition: 'border-color 0.15s' }}
                       onMouseEnter={e => e.currentTarget.style.borderBottomColor = color}
                       onMouseLeave={e => e.currentTarget.style.borderBottomColor = 'transparent'}>
                        {displayLinkText} →
                    </a>
                )}
            </div>
        </div>
    );
};

// ── Section ───────────────────────────────────────────────────────────────────
const TestimonialSlider = () => {
    const { lang } = useLanguage();
    const i18nItems = translations.news.items;

    return (
    <section id="news" style={{ padding: '36px 0 60px' }}>
        <div className="mil-up" style={{ marginBottom: '10px' }}>
            <span className="hero-tagline">
                <span className="hero-tagline-dot" />
                {pick(translations.news.heading, lang)}
            </span>
        </div>

        <div className="news-bg-wrap">

            {/* ── Abstract SVG illustration ───────────────────────────────── */}
            <svg className="news-bg-svg" viewBox="0 0 900 520" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">

                {/* Concentric radar rings — top-right focal point */}
                <circle cx="820" cy="60"  r="260" fill="none" stroke="#eff6ff" strokeWidth="2.5"/>
                <circle cx="820" cy="60"  r="190" fill="none" stroke="#dbeafe" strokeWidth="2.5"/>
                <circle cx="820" cy="60"  r="130" fill="none" stroke="#bfdbfe" strokeWidth="2.5"/>
                <circle cx="820" cy="60"  r="75"  fill="none" stroke="#dbeafe" strokeWidth="2.5"/>
                <circle cx="820" cy="60"  r="28"  fill="rgba(59,130,246,0.06)"/>
                <circle cx="820" cy="60"  r="5"   fill="#93c5fd" opacity="0.4"/>

                {/* Concentric arcs — bottom-left focal point */}
                <path d="M -60 380 A 220 220 0 0 1 220 200" fill="none" stroke="#eff6ff" strokeWidth="2.5"/>
                <path d="M -60 430 A 280 280 0 0 1 270 190" fill="none" stroke="#e0e7ff" strokeWidth="2.5"/>
                <path d="M -60 480 A 340 340 0 0 1 320 180" fill="none" stroke="#e0e7ff" strokeWidth="2.5"/>
                <circle cx="0"   cy="340" r="5"   fill="#a5b4fc" opacity="0.35"/>

                {/* Flowing connector curves between the two focal points */}
                <path d="M 60 310 C 200 240, 380 310, 520 220 S 700 120, 820 60"
                      fill="none" stroke="#dbeafe" strokeWidth="2.5" strokeDasharray="7 5"/>
                <path d="M 30 370 C 180 290, 360 360, 530 260 S 710 150, 820 60"
                      fill="none" stroke="#eff6ff" strokeWidth="2.5"/>

                {/* Intersection dots along curves */}
                <circle cx="220" cy="265" r="3" fill="#bfdbfe" opacity="0.5"/>
                <circle cx="390" cy="295" r="3" fill="#c7d2fe" opacity="0.45"/>
                <circle cx="530" cy="230" r="3" fill="#bfdbfe" opacity="0.5"/>
                <circle cx="665" cy="155" r="3" fill="#93c5fd" opacity="0.4"/>

                {/* Subtle cross-hair at bottom-right */}
                <line x1="760" y1="450" x2="760" y2="510" stroke="#eff6ff" strokeWidth="1"/>
                <line x1="730" y1="480" x2="790" y2="480" stroke="#eff6ff" strokeWidth="1"/>
                <circle cx="760" cy="480" r="2.5" fill="#bfdbfe" opacity="0.4"/>

                {/* Scattered accent dots */}
                <circle cx="180" cy="80"  r="2" fill="#c7d2fe" opacity="0.3"/>
                <circle cx="440" cy="130" r="2" fill="#bfdbfe" opacity="0.3"/>
                <circle cx="600" cy="410" r="2" fill="#dbeafe" opacity="0.4"/>
                <circle cx="300" cy="470" r="2" fill="#c7d2fe" opacity="0.3"/>

            </svg>

            <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {Data.items.map((item, key) => (
                    <NewsCard
                        key={`news-item-${key}`}
                        item={item}
                        index={key}
                        i18nItem={i18nItems[key]}
                        lang={lang}
                    />
                ))}
            </div>
        </div>
    </section>
    );
};

export default TestimonialSlider;
