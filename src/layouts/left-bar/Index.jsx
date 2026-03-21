import appData from "@data/app.json";

const leftPanelModule = () => {
    return (
        <>
        {/* left bar */}
            <div className="mil-left-panel">

                <ul className="mil-social-icons">
                    <li key="lp-resume">
                        <a
                            href="/_Tonghan__Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon"
                            title="Resume"
                            aria-label="Resume"
                        >
                            <i className="fas fa-file-alt" />
                        </a>
                    </li>
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
