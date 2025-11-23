import Data from "@data/sections/hero-1.json";
import AboutData from "@data/sections/about.json";

// at the top if needed:
// import React from "react";

function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function highlightText(text, {links = {}, highlights = []} = {}) {
    const tokens = [...Object.keys(links), ...highlights];
    const ACCENT = "rgb(174, 49, 54)"; // #AE3136
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
                    style={{color: ACCENT}}
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
                        <span dangerouslySetInnerHTML={{__html: Data.title}} style={{fontSize: '55px'}}/>
                        <span className="tooltip">
                            <i className="fas fa-info-circle" style={{fontSize: '16px', verticalAlign: 'middle'}}></i>
                            <span className="tooltiptext">Pronunciation of Tonghan: the first syllable is pronounced like 'tongue,' and the second syllable sounds like 'hahn.' Feel free to use any close approximation that's comfortable for you!</span>
                        </span>
                    </h1>

                    <p className="mil-wide mil-dark mil-up">{Data.description}</p>
                    <p className="mil-up mil-mb-30">{}</p>

                    <p className="mil-up mil-mb-15 academic-font" style={{fontSize: '20px', textAlign: "left"}}>{
                        highlightText(AboutData.description, {links: AboutData.link1})}</p>
                    <p className="mil-up mil-mb-15 academic-font" style={{fontSize: '20px', textAlign: "left"}}>{
                        highlightText(AboutData.description2, {links: AboutData.link2})}</p>
                    <p className="mil-up mil-mb-15 academic-font" style={{fontSize: '20px', textAlign: "left"}}>{
                        highlightText(AboutData.description3, {links: AboutData.link3})}</p>

                    {Array.isArray(AboutData.problems) && AboutData.problems.length > 0 && (
                        <div id="problems-of-interest" className="mil-up mil-mt-20">
                            <h3
                                className="mil-mb-10 academic-font"
                                style={{fontSize: "22px", textAlign: "left"}}
                            >
                                {AboutData.problemsTitle || "Problems of interest"}
                            </h3>

                            <ol style={{paddingLeft: "1.25rem", listStyleType: "decimal"}}>
                                {AboutData.problems.map((item, idx) => (
                                    <li
                                        key={idx}
                                        className="mil-mb-5 academic-font"
                                        style={{fontSize: "20px", textAlign: "left"}}
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
                        <a href="#about" className="mil-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                 strokeLinejoin="round" className="feather feather-arrow-down">
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <polyline points="19 12 12 19 5 12"></polyline>
                            </svg>
                            {/*<img src={AboutData.avatar.image} alt={AboutData.avatar.alt}/>*/}
                            {/*<img src={AboutData.avatar.image} alt={AboutData.avatar.alt} className="mil-up mil-sign"/>*/}
                        </a>
                    </div>
                </div>
            </section>
            {/* banner end */}
        </>
    );
}
export default HeroOne;