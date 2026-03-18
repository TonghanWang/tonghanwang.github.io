import Data from '@data/sliders/testimonial';

const ACCENT = '#2563eb';
const ACCENT_BG = 'rgba(37, 99, 235, 0.06)';

function highlightPhrase(text, phrase) {
    if (!phrase) return text;
    const parts = text.split(new RegExp(`(${phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'));
    return parts.map((part, i) =>
        part.toLowerCase() === phrase.toLowerCase()
            ? <span key={i} style={{color: ACCENT, fontWeight: '800'}}>{part}</span>
            : part
    );
}

const TrophyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"
         fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="8 21 12 17 16 21"/>
        <line x1="12" y1="17" x2="12" y2="11"/>
        <path d="M7 4H4a1 1 0 0 0-1 1v2a4 4 0 0 0 4 4h0"/>
        <path d="M17 4h3a1 1 0 0 1 1 1v2a4 4 0 0 1-4 4h0"/>
        <rect x="7" y="2" width="10" height="9" rx="1"/>
    </svg>
);

const PaperIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"
         fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
    </svg>
);

const styles = {
    section: {
        padding: '60px 0 80px',
    },
    sectionLabel: {
        fontSize: '13px',
        fontWeight: '600',
        letterSpacing: '2px',
        textTransform: 'uppercase',
        color: '#888',
        marginBottom: '32px',
    },
    feed: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
    },
    card: (type) => ({
        display: 'flex',
        alignItems: 'flex-start',
        gap: '20px',
        padding: type === 'award' ? '24px 28px' : '12px 0',
        borderRadius: type === 'award' ? '0 8px 8px 0' : '0',
        backgroundColor: type === 'award' ? '#fafafa' : 'transparent',
        borderLeft: type === 'award' ? `4px solid ${ACCENT}` : 'none',
        boxShadow: type === 'award' ? '0 2px 12px rgba(0,0,0,0.06)' : 'none',
        transition: 'box-shadow 0.2s ease, transform 0.2s ease',
    }),
    iconWrap: (type) => ({
        flexShrink: 0,
        width: '44px',
        height: '44px',
        borderRadius: '50%',
        backgroundColor: type === 'award' ? ACCENT_BG : 'transparent',
        color: type === 'award' ? ACCENT : '#aaa',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '2px',
    }),
    body: {
        flex: 1,
    },
    badge: (type) => ({
        display: 'inline-block',
        fontSize: '12px',
        fontWeight: '700',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        color: type === 'award' ? ACCENT : '#555',
        backgroundColor: type === 'award' ? ACCENT_BG : 'rgba(0,0,0,0.05)',
        borderRadius: '4px',
        padding: '2px 9px',
        marginBottom: '10px',
    }),
    headline: {
        fontSize: '18px',
        fontWeight: '700',
        color: '#1a1a1a',
        lineHeight: '1.4',
        margin: '0 0 8px',
    },
    description: {
        fontSize: '15px',
        color: '#555',
        lineHeight: '1.7',
        margin: '0 0 10px',
    },
    link: {
        fontSize: '14px',
        fontWeight: '600',
        color: ACCENT,
        textDecoration: 'none',
    },
};

const TestimonialSlider = () => {
    return (
        <section id="news" style={styles.section}>
            <p className="mil-upper mil-up" style={styles.sectionLabel}>News</p>
            <div style={styles.feed}>
                {Data.items.map((item, key) => (
                    <div
                        key={`news-item-${key}`}
                        style={styles.card(item.type)}
                        onMouseEnter={e => {
                            e.currentTarget.style.boxShadow = '0 6px 24px rgba(0,0,0,0.12)';
                            e.currentTarget.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.06)';
                            e.currentTarget.style.transform = 'translateY(0)';
                        }}
                    >
                        <div style={styles.iconWrap(item.type)}>
                            {item.type === 'award' ? <TrophyIcon /> : <PaperIcon />}
                        </div>
                        <div style={styles.body}>
                            <span style={styles.badge(item.type)}>{item.role}</span>
                            <p style={styles.headline}>{highlightPhrase(item.name, item.highlight)}</p>
                            <p style={styles.description}>{item.text}</p>
                            {item.link && (
                                <a href={item.link.href} target="_blank" rel="noopener noreferrer"
                                   style={styles.link}>
                                    {item.link.text}
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TestimonialSlider;
