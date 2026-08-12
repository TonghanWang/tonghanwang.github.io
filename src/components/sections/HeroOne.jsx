import { useState, useRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
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
        return <span key={i}>{part}</span>;
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
    const tooltipId     = 'name-pronunciation-tooltip';

    /* ── Popover state ────────────────────────────────────────────────────── */
    const [popState, setPopState] = useState('closed'); // 'closed' | 'open' | 'closing'
    const [popPos,   setPopPos]   = useState({ top: 0, right: 0 });
    const iconRef  = useRef(null);
    const popupRef = useRef(null);
    const closeTimer = useRef(null);

    const calcPos = () => {
        if (iconRef.current) {
            const r = iconRef.current.getBoundingClientRect();
            setPopPos({ top: r.bottom + 10, right: window.innerWidth - r.right });
        }
    };

    const openPop = useCallback(() => {
        if (popState === 'open') {
            setPopState('closing');
            closeTimer.current = setTimeout(() => setPopState('closed'), 180);
            return;
        }
        calcPos();
        clearTimeout(closeTimer.current);
        setPopState('open');
    }, [popState]);

    // click-outside to dismiss
    useEffect(() => {
        if (popState !== 'open') return;
        const handleOutside = (e) => {
            if (
                popupRef.current && !popupRef.current.contains(e.target) &&
                iconRef.current  && !iconRef.current.contains(e.target)
            ) {
                setPopState('closing');
                closeTimer.current = setTimeout(() => setPopState('closed'), 180);
            }
        };
        document.addEventListener('mousedown', handleOutside);
        return () => document.removeEventListener('mousedown', handleOutside);
    }, [popState]);

    // Escape should dismiss the pronunciation popover and return focus.
    useEffect(() => {
        if (popState !== 'open') return;
        const handleEscape = (e) => {
            if (e.key !== 'Escape') return;
            setPopState('closed');
            iconRef.current?.focus();
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [popState]);

    // recalc on resize
    useEffect(() => {
        if (popState !== 'open') return;
        window.addEventListener('resize', calcPos);
        return () => window.removeEventListener('resize', calcPos);
    }, [popState]);

    return (
        <>
            {/* banner */}
            <section className="mil-side-banner mil-center">

                {/* ── Main text column ───────────────────────────────────── */}
                <div className="mil-banner-title left-align">

                    {/* Name */}
                    <h1 className="mil-up hero-name-row">
                        <span className="hero-name" style={lang === 'zh' ? { fontFamily: "'KaiTi', 'STKaiti', '楷体', serif" } : {}}>{title}</span>
                        <button
                            type="button"
                            ref={iconRef}
                            className={`name-info-btn${popState === 'open' ? ' is-open' : ''}`}
                            onClick={openPop}
                            aria-label={lang === 'zh' ? '姓名发音说明' : 'Name pronunciation guide'}
                            aria-expanded={popState === 'open'}
                            aria-controls={tooltipId}
                        >
                            <i className="fas fa-info-circle" style={{ fontSize: '9px', lineHeight: 1 }}></i>
                        </button>
                    </h1>
                    {/* Portal: rendered at body level — escapes all stacking contexts */}
                    {popState !== 'closed' && typeof document !== 'undefined' && createPortal(
                        <div
                            id={tooltipId}
                            ref={popupRef}
                            className={`name-tooltip-popup${popState === 'open' ? ' is-open' : ' is-closing'}`}
                            style={{ top: popPos.top, right: popPos.right }}
                            role="tooltip"
                        >
                            {tooltipText}
                        </div>,
                        document.body
                    )}

                    {/* Glassmorphism card wrapping bio + interests */}
                    <div className="mil-up hero-glass-panel">

                        {/* Short intro */}
                        <p className="mil-wide mil-dark hero-role">
                            {highlightText(description, { links: descLinks, linkColor: 'inherit' })}
                        </p>

                        <p className="academic-font hero-bio">
                            {highlightText(bio, { links: bioLinks, linkColor: 'inherit' })}
                        </p>

                        {showCNLink && (
                            <p className="academic-font hero-profile-link">
                                {highlightText(AboutData.description3, { links: AboutData.link3, linkColor: 'inherit' })}
                            </p>
                        )}

                        <div className="hero-actions" aria-label={lang === 'zh' ? '快速链接' : 'Quick links'}>
                            <a className="hero-action hero-action-primary" href="#publications">
                                {pick(t.actions.publications, lang)}
                            </a>
                            <a className="hero-action hero-action-secondary" href="#contact">
                                {pick(t.actions.join, lang)}
                            </a>
                        </div>

                        {/* Research interests block */}
                        {problems.length > 0 && (
                            <div className="hero-research">
                                <p className="academic-font hero-research-intro">
                                    {recruiting}
                                </p>
                                <ol className="hero-research-list">
                                    {problems.map((item, idx) => (
                                        <li
                                            key={idx}
                                            className="academic-font"
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        )}
                    </div>

                </div>

                {/* ── Photo square ────────────────────────────────────────── */}
                <figure className="hero-photo-wrap">
                    <img
                        src="/img/person/avatar5.jpg"
                        alt="Tonghan Wang"
                        className="hero-photo"
                    />
                    <span className="hero-photo-accent" aria-hidden="true" />
                </figure>

            </section>
            {/* banner end */}
        </>
    );
};
export default HeroOne;
