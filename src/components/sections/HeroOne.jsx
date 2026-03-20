import Data from "@data/sections/hero-1.json";
import AboutData from "@data/sections/about.json";

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
    return (
        <>
            {/* banner */}
            <section className="mil-side-banner mil-center">

                {/* ── Main text column ───────────────────────────────────── */}
                <div className="mil-banner-title left-align">

                    {/* Name */}
                    <h1 className="mil-up mil-mb-30">
                        <span dangerouslySetInnerHTML={{ __html: Data.title }} style={{ fontSize: '45px' }} />
                        <span className="tooltip">
                            <i className="fas fa-info-circle" style={{ fontSize: '10px', verticalAlign: 'middle' }}></i>
                            <span className="tooltiptext">
                                Pronunciation of Tonghan: the two syllables sound like 'tongue' and 'hahn.'
                                Feel free to use any close approximation!
                            </span>
                        </span>
                    </h1>

                    {/* Glassmorphism card wrapping bio + interests */}
                    <div className="mil-up hero-glass-panel">

                        {/* Short intro */}
                        <p className="mil-wide mil-dark" style={{ fontSize: '15px', marginBottom: '4px' }}>
                            {highlightText(Data.description, { links: AboutData.link1, linkColor: 'inherit' })}
                        </p>

                        <p className="academic-font" style={{ fontSize: '18px', textAlign: 'left', marginTop: '14px' }}>
                            {highlightText(AboutData.description, { links: AboutData.link1, linkColor: 'inherit' })}
                        </p>
                        <p className="academic-font" style={{ fontSize: '18px', textAlign: 'left', marginTop: '8px' }}>
                            {highlightText(AboutData.description3, { links: AboutData.link3, linkColor: 'inherit' })}
                        </p>

                        {/* Research interests block */}
                        {Array.isArray(AboutData.problems) && AboutData.problems.length > 0 && (
                            <div style={{
                                borderLeft: '4px solid #2563eb',
                                borderRadius: '0 10px 10px 0',
                                padding: '16px 20px',
                                marginTop: '20px',
                                background: 'rgba(37, 99, 235, 0.04)',
                            }}>
                                <p className="academic-font" style={{ fontSize: '16px', textAlign: 'left', marginBottom: '10px', fontWeight: '600', color: '#1a1a1a' }}>
                                    {highlightText(AboutData.description2, { links: AboutData.link2 })}
                                </p>
                                <ol style={{ paddingLeft: '1.25rem', listStyleType: 'decimal', display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: 0 }}>
                                    {AboutData.problems.map((item, idx) => (
                                        <li
                                            key={idx}
                                            className="academic-font"
                                            style={{ fontSize: '17px', textAlign: 'left' }}
                                        >
                                            {typeof item === 'string'
                                                ? item
                                                : highlightText(item.text || '', {
                                                    links: item.links || {},
                                                    highlights: item.highlights || [],
                                                })}
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
