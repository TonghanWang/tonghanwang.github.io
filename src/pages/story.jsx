import { useState } from "react";
import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import PubData from "@data/sections/publications.json";

// ── Award badge icon ──────────────────────────────────────────────────────────
const StarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24"
         fill="currentColor" stroke="none">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
);

// ── Single paper row ──────────────────────────────────────────────────────────
const PaperItem = ({ paper, catId, idx }) => {
    const [showAbstract, setShowAbstract] = useState(false);

    return (
        <li className="mil-up pub-paper-item">

            {/* ── Title row ──────────────────────────────────────── */}
            <div className="pub-year-group">
                <p className="pub-title">{paper.title}</p>
                <span className="pub-year-badge">{paper.year}</span>
            </div>

            {/* ── Authors ─────────────────────────────────────────── */}
            <p className="pub-authors">{paper.authors}</p>

            {/* ── Venue + award badges ─────────────────────────────── */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: '6px' }}>
                <span
                    className="pub-venue-badge"
                    title={paper.venueFull}
                >
                    {paper.venueShort}
                </span>
                {paper.awards.map((award, i) => (
                    <span key={i} className="pub-award-badge">
                        <StarIcon />
                        {award}
                    </span>
                ))}
            </div>

            {/* ── Links ────────────────────────────────────────────── */}
            <div className="pub-links">
                {paper.links.map((l, i) => (
                    <a key={i} href={l.href} target="_blank" rel="noopener noreferrer" className="pub-link">
                        {l.text}
                    </a>
                ))}
            </div>

            {/* ── Toggle buttons ───────────────────────────────────── */}
            {paper.abstract && (
                <div>
                    <button
                        className={`pub-toggle-btn${showAbstract ? ' active' : ''}`}
                        onClick={() => setShowAbstract(v => !v)}
                    >
                        {showAbstract ? '− Abstract' : '+ Abstract'}
                    </button>
                </div>
            )}

            {/* ── Abstract panel ───────────────────────────────────── */}
            {showAbstract && paper.abstract && (
                <div className="pub-abstract-box">{paper.abstract}</div>
            )}
        </li>
    );
};

// ── Page ──────────────────────────────────────────────────────────────────────
const Story = () => (
    <Layouts fullWidth={true}>
        <PageBanner pageTitle="Publications" />

        <section style={{ paddingBottom: '60px' }}>
            <div className="row">
                <div className="col-xl-12">
                    {PubData.categories.map(cat => (
                        <div key={cat.id}>

                            {/* Section header */}
                            <div className="mil-section-title mil-up mil-left mil-mb-90"
                                 style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                <div>
                                    <div className="mil-divider"></div>
                                    <h3 style={{ display: 'inline' }}>{cat.title}</h3>
                                </div>
                                <span className="pub-section-count">{cat.papers.length}</span>
                            </div>

                            {/* Papers */}
                            <div className="mil-timeline mil-mb-90">
                                <div className="mil-timeline-track"></div>
                                <ul style={{ paddingLeft: 0 }}>
                                    {cat.papers.map((paper, idx) => (
                                        <PaperItem
                                            key={`${cat.id}-${idx}`}
                                            paper={paper}
                                            catId={cat.id}
                                            idx={idx}
                                        />
                                    ))}
                                </ul>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    </Layouts>
);

export default Story;

export async function getStaticProps() {
    return { props: {} };
}
