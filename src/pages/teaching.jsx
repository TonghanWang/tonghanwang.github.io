import Layouts from "@layouts/Layouts";
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

const SectionHeader = ({ title, count }) => (
    <div className="mil-section-title mil-up mil-left mil-mb-90"
         style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div>
            <div className="mil-divider"></div>
            <h3 style={{ display: 'inline' }}>{title}</h3>
        </div>
        <span className="pub-section-count">{count}</span>
    </div>
);

const Teaching = () => {
    const { lang } = useLanguage();
    const t = translations.teaching;

    return (
        <Layouts fullWidth={true}>
            <PageBanner pageTitle={pick(t.banner, lang)} />

            <section style={{ paddingBottom: '60px' }} className={lang === 'zh' ? 'zh-kaiti' : ''}>
                <div className="row">
                    <div className="col-xl-12">

                        {/* Teaching */}
                        <SectionHeader
                            title={pick(t.sectionTeaching, lang)}
                            count={TeachingData.teaching.length}
                        />
                        <ul className="mil-mb-90" style={{ paddingLeft: '35px', listStyle: 'none' }}>
                            {TeachingData.teaching.map((item, i) => (
                                <li key={i} className="mil-up pub-paper-item">
                                    <div className="pub-year-group">
                                        {/* Course titles stay in English */}
                                        <p className="pub-title">{item.course}</p>
                                        <span className="pub-year-badge">{item.term}</span>
                                    </div>
                                    <p className="pub-authors">
                                        {pick(t.institutions[item.institution], lang) ?? item.institution}
                                    </p>
                                    <div style={{ marginTop: '4px' }}>
                                        <span className="role-badge">
                                            {pick(t.roles[item.role], lang) ?? item.role}
                                        </span>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        {/* Academic Service */}
                        <SectionHeader
                            title={pick(t.sectionService, lang)}
                            count={TeachingData.reviewing.length}
                        />
                        <ul className="mil-mb-90" style={{ paddingLeft: '35px', listStyle: 'none' }}>
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
        </Layouts>
    );
};

export default Teaching;

export async function getStaticProps() {
    return { props: {} };
}
