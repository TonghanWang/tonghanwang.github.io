import Data from "@data/sections/hero-1.json";
import AboutData from "@data/sections/about.json";

function highlightText(text, highlights) {
    // Join the highlights array into a regular expression that matches any of the words
    const regex = new RegExp(`(${highlights.join('|')})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, index) =>
        highlights.some(highlight => part.toLowerCase() === highlight.toLowerCase())
        ? <span key={index} style={{ color: 'cornflowerblue' }}>{part}</span>
        : part
    );
}


const HeroOne = () => {
    return (
        <>
            {/* banner */}
            <section className="mil-side-banner mil-center">
                {/*<div className="mil-banner-top mil-up"></div>*/}
                <div></div>
                <div className="mil-banner-title">
                    <div className="mil-upper mil-dark mil-up mil-mb-30">{Data.subtitle}</div>
                    <h1 className="mil-up mil-mb-30">
                        <span dangerouslySetInnerHTML={{__html: Data.title}}/>
                        <span className="tooltip">
                            <i className="fas fa-info-circle"></i>
                            <span className="tooltiptext">Pronunciation of Tonghan: the first syllable is pronounced like 'tongue,' and the second syllable sounds like 'hahn.' Feel free to use any close approximation that's comfortable for you!</span>
                        </span>
                    </h1>

                    <p className="mil-upper mil-dark mil-up">{Data.description}</p>
                    <p className="mil-up mil-mb-30">{}</p>
                    <p className="mil-up mil-mb-15" style={{fontSize: '22px'}}>{
                        highlightText(AboutData.description, ['Prof. David Parkes', 'Prof. Milind Tambe', 'machine learning for problems involving multiple agents'])}</p>
                    <p className="mil-up mil-mb-15" style={{fontSize: '22px'}}>{
                        highlightText(AboutData.description2, ['Prof. David Parkes', 'Prof. Milind Tambe', 'machine learning for problems involving multiple agents'])}</p>
                    <p className="mil-up mil-mb-15" style={{fontSize: '22px'}}>{
                        highlightText(AboutData.description3, ['Prof. David Parkes', 'Prof. Milind Tambe', 'machine learning for problems involving multiple agents'])}</p>
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