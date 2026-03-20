import appData from "@data/app.json";

const leftPanelModule = () => {
    return (
        <>
        {/* left bar */}
            <div className="mil-left-panel">

                <div className="mil-page-name mil-upper mil-dark">
                    <a href="/_Tonghan__Resume.pdf" target="_blank" rel="noopener noreferrer"
                       style={{ textDecoration: 'none', color: 'inherit' }}>
                        Resume
                    </a>
                </div>

                <ul className="mil-social-icons">
                    {appData.social.map((item, key) => (
                        <li key={`lp-social-item-${key}`}>
                            <a
                                href={item.link}
                                target={item.link.startsWith('mailto') ? '_self' : '_blank'}
                                rel="noopener noreferrer"
                                className="social-icon"
                                title={item.title}
                                aria-label={item.title}
                            >
                                <i className={item.icon} />
                            </a>
                        </li>
                    ))}
                </ul>

            </div>
            {/* left bar end */}
        </>
    );
};
export default leftPanelModule;
