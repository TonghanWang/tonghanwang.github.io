import Data from "@data/sections/hero-1.json";
import AboutData from "@data/sections/about.json";

// at the top if needed:
// import React from "react";

function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function highlightText(text, {links = {}, highlights = [], linkColor} = {}) {
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
                    style={{color: linkColor || ACCENT}}
                >
                    {part}
                </a>
            );
        }

        const isHighlight = highlights.some(h => part.toLowerCase() === h.toLowerCase());
        // if (isHighlight) return <span key={i} style={{color: "cornflowerblue"}}>{part}</span>;
        if (isHighlight) return <span key={i} style={{color: ACCENT}}>{part}</span>;

        // was <React.Fragment key={i}>{part}</React.Fragment>
        return <>{part}</>;
    });
}


const HeroOne = () => {
    return (
        <>
            {/* banner */}
            <section className="mil-side-banner mil-center">
                {/*<div className="mil-banner-top mil-up"></div>*/}
                <div></div>
                <div className="mil-banner-title left-align">
                    <div className="mil-upper mil-dark mil-up mil-mb-10">{Data.subtitle}</div>
                    <h1 className="mil-up mil-mb-30">
                        <span dangerouslySetInnerHTML={{__html: Data.title}} style={{fontSize: '45px'}}/>
                        <span className="tooltip">
                            <i className="fas fa-info-circle" style={{fontSize: '10px', verticalAlign: 'low'}}></i>
                            <span className="tooltiptext">Pronunciation of Tonghan: the two syllables sound like 'tongue' and 'hahn.' Feel free to use any close approximation!</span>
                        </span>
                    </h1>

                    <p className="mil-wide mil-dark mil-up">{highlightText(Data.description, {links: AboutData.link1, linkColor: 'inherit'})}</p>
                    <p className="mil-up mil-mb-30">{}</p>

                    <p className="mil-up mil-mb-15 academic-font" style={{fontSize: '20px', textAlign: "left"}}>{highlightText(AboutData.description, {links: AboutData.link1, linkColor: 'inherit'})}</p>
                    <p className="mil-up mil-mb-15 academic-font" style={{fontSize: '20px', textAlign: "left"}}>{highlightText(AboutData.description3, {links: AboutData.link3, linkColor: 'inherit'})}</p>
                    {Array.isArray(AboutData.problems) && AboutData.problems.length > 0 && (
                        <div className="mil-up mil-mt-20" style={{
                            borderLeft: "4px solid #9ca3af",
                            borderRadius: "0 8px 8px 0",
                            padding: "16px 20px",
                        }}>
                            <p className="academic-font" style={{fontSize: '18px', textAlign: "left", marginBottom: "10px"}}>
                                {highlightText(AboutData.description2, {links: AboutData.link2})}
                            </p>
                            <ol style={{paddingLeft: "1.25rem", listStyleType: "decimal", display: "flex", flexDirection: "column", gap: "6px", marginBottom: 0}}>
                                {AboutData.problems.map((item, idx) => (
                                    <li
                                        key={idx}
                                        className="academic-font"
                                        style={{fontSize: "18px", textAlign: "left"}}
                                    >
                                        {typeof item === "string"
                                            ? item
                                            : highlightText(item.text || "", {
                                                links: item.links || {},
                                                highlights: item.highlights || []
                                            })}
                                    </li>
                                ))}
                            </ol>
                        </div>
                    )}


                </div>
                <div className="mil-up mil-oval-frame">
                    <div className="mil-circle-text">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                             x="0px" y="0px" viewBox="0 0 300 300" enableBackground="new 0 0 300 300"
                             xmlSpace="preserve" className="mil-ct-svg mil-rotate" data-value="360">
                            <defs>
                                <path id="circlePath"
                                      d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "/>
                            </defs>
                            <circle cx="150" cy="100" r="75" fill="none"/>
                            <g>
                                <use xlinkHref="#circlePath" fill="none"/>
                                <text style={{"letterSpacing": "6.5px"}}>
                                    {/* circle text */}
                                    <textPath xlinkHref="#circlePath">See News - See News - News -</textPath>
                                </text>
                            </g>
                        </svg>
                        <a href="#news" className="mil-button">
                            <img src={AboutData.avatar.image} alt={AboutData.avatar.alt}
                                 style={{width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%"}}/>
                        </a>
                    </div>
                </div>
            </section>
            {/* banner end */}
        </>
    );
}
export default HeroOne;