import PageBanner from "@components/PageBanner";
import TeachingData from "@data/sections/teaching.json";
import { useLanguage } from "@library/LanguageContext";
import { translations, pick } from "@library/i18n";

const StarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24"
         fill="currentColor" stroke="none">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
);

const ServiceSection = () => {
    const { lang } = useLanguage();
    const t = translations.teaching;

    return (
        <>
            <PageBanner pageTitle={pick(t.sectionService, lang)} setTitle={false} />

            <section style={{ paddingBottom: '60px' }}>
                <div className="row">
                    <div className="col-xl-12">
                        <ul className="mil-mb-90" style={{ paddingLeft: 0, listStyle: 'none' }}>
                            {TeachingData.reviewing.map((item, i) => (
                                <li key={i} className="mil-up pub-paper-item">
                                    <div className="pub-year-group">
                                        {/* Conference full names stay in English */}
                                        <p className="pub-title">{item.full}</p>
                                        <span className="pub-year-badge">{item.years}</span>
                                    </div>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginTop: '6px' }}>
                                        {/* Venue short names stay in English */}
                                        <span className="role-badge">{item.short}</span>
                                        <span className="role-badge">{pick(t.reviewer, lang)}</span>
                                        {item.areaChair && (
                                            <span className="area-chair-badge">
                                                {pick(t.areaChair, lang)}
                                            </span>
                                        )}
                                        {item.award && (
                                            <span className="pub-award-badge">
                                                <StarIcon />
                                                {/* Award titles stay in English */}
                                                {item.award}
                                            </span>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServiceSection;
