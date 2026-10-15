import { useState, useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import PageBanner from "@components/PageBanner";
import PubData from "@data/sections/publications.json";
import { useLanguage } from "@library/LanguageContext";
import { translations, pick } from "@library/i18n";

// ── Award badge icon ──────────────────────────────────────────────────────────
const StarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24"
         fill="currentColor" stroke="none">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
);

// ── Topic accent colors (keyed by category id) ───────────────────────────────
const TOPIC_COLORS = {
    "recent-highlights":     "245, 158, 11",   // amber
    "foundation-models":     "220, 38, 38",    // red
    "agents":                "14, 165, 233",   // sky
    "game-theory-economics": "139, 92, 246",   // violet
};

// ── Single paper row ──────────────────────────────────────────────────────────
const PaperItem = ({ paper, idx, lang }) => {
    const [showAbstract, setShowAbstract] = useState(false);
    const t = translations.publications;

    const fieldRgb = TOPIC_COLORS[paper.topics[0]] || '107, 114, 128';
    const abstractId = `paper-abstract-${idx}`;

    return (
        <li
            className="mil-up pub-paper-item pub-paper-item--fielded"
            style={{ '--field-rgb': fieldRgb }}
        >
            {/* ── Field bar — positioned below the timeline bullet ─────── */}
            <div className="pub-field-bar" />

            {/* ── Title row — paper titles stay in English ────────────── */}
            <div className="pub-year-group">
                <p className="pub-title">{paper.title}</p>
                <span className="pub-topic-tags">
                    {paper.topics.filter(id => id !== 'recent-highlights').map(id => (
                        <span key={id} className="pub-field-corner"
                              style={{ '--field-rgb': TOPIC_COLORS[id] }}>
                            {pick(t.categories[id], lang)}
                        </span>
                    ))}
                </span>
                <span className="pub-year-badge">{paper.year}</span>
            </div>

            {/* ── Authors stay in English ──────────────────────────────── */}
            <p className="pub-authors">{paper.authors}</p>

            {/* ── Venue + award badges + links — all stay in English ────── */}
            <div className="pub-links" style={{ flexWrap: 'wrap', gap: '6px' }}>
                <span className="pub-venue-badge" title={paper.venueFull}>
                    {paper.venueShort}
                </span>
                {paper.awards.map((award, i) => (
                    <span key={i} className="pub-award-badge">
                        <StarIcon />
                        {award}
                    </span>
                ))}
                {paper.links.map((l, i) => (
                    <a key={i} href={l.href} target="_blank" rel="noopener noreferrer" className="pub-link">
                        {l.text}
                    </a>
                ))}
            </div>

            {/* ── Toggle buttons ───────────────────────────────────────── */}
            {paper.abstract && (
                <div>
                    <button
                        type="button"
                        className={`pub-toggle-btn${showAbstract ? ' active' : ''}`}
                        onClick={() => setShowAbstract(v => !v)}
                        aria-expanded={showAbstract}
                        aria-controls={abstractId}
                    >
                        {showAbstract ? pick(t.abstractClose, lang) : pick(t.abstractOpen, lang)}
                    </button>
                </div>
            )}

            {/* ── Abstract panel ───────────────────────────────────────── */}
            {showAbstract && paper.abstract && (
                <div id={abstractId} className="pub-abstract-box" role="region">{paper.abstract}</div>
            )}
        </li>
    );
};

const TYPE_ORDER = ['preprint', 'conference', 'journal', 'workshop'];

// ── Section ───────────────────────────────────────────────────────────────────
const PublicationsSection = () => {
    const { lang } = useLanguage();
    const t = translations.publications;
    const [active, setActive] = useState(PubData.topics[0].id);

    // The list height changes per tab; re-measure scroll triggers so the
    // sections below (Teaching, Service, ...) are revealed at the right position.
    useEffect(() => {
        const id = requestAnimationFrame(() => ScrollTrigger.refresh());
        return () => cancelAnimationFrame(id);
    }, [active]);

    const papers = active === 'all'
        ? PubData.papers
        : PubData.papers.filter(p => p.topics.includes(active));
    const tabs = [
        ...PubData.topics.map(tp => ({
            id: tp.id,
            label: pick(t.categories[tp.id], lang) ?? tp.title,
        })),
        { id: 'all', label: pick(t.all, lang) },
    ];
    // "All" tab: group by publication type (preprint / conference / ...)
    const groups = active === 'all'
        ? TYPE_ORDER.map(id => ({ id, papers: papers.filter(p => p.type === id) }))
                    .filter(g => g.papers.length)
        : [{ id: null, papers }];

    return (
        <>
            <PageBanner pageTitle={pick(t.banner, lang)} setTitle={false} />

            <section style={{ paddingBottom: '60px' }}>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="pub-tabs" role="tablist">
                            {tabs.map(tab => (
                                <button
                                    key={tab.id}
                                    type="button"
                                    role="tab"
                                    aria-selected={active === tab.id}
                                    className={`pub-tab${active === tab.id ? ' active' : ''}`}
                                    onClick={() => setActive(tab.id)}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        {groups.map(group => (
                            <div key={group.id || 'topic'}>
                                {group.id && (
                                    <div className="mil-section-title mil-up mil-left mil-mb-90"
                                         style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                        <div>
                                            <div className="mil-divider"></div>
                                            <h3 style={{ display: 'inline' }}>
                                                {pick(t.types[group.id], lang)}
                                            </h3>
                                        </div>
                                    </div>
                                )}
                                <div className="mil-timeline mil-mb-90" style={{ marginBottom: '40px' }}>
                                    <div className="mil-timeline-track"></div>
                                    <ul style={{ paddingLeft: 0 }}>
                                        {group.papers.map((paper, idx) => (
                                            <PaperItem
                                                key={`${paper.title}-${paper.venueShort}-${paper.year}`}
                                                paper={paper}
                                                idx={idx}
                                                lang={lang}
                                            />
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default PublicationsSection;
