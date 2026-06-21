import PageBanner from "@components/PageBanner";
import TeachingData from "@data/sections/teaching.json";
import { useLanguage } from "@library/LanguageContext";
import { translations, pick } from "@library/i18n";

const TeachingSection = () => {
    const { lang } = useLanguage();
    const t = translations.teaching;

    return (
        <>
            <PageBanner pageTitle={pick(t.sectionTeaching, lang)} setTitle={false} />

            <section style={{ paddingBottom: '60px' }}>
                <div className="row">
                    <div className="col-xl-12">
                        <ul className="mil-mb-90" style={{ paddingLeft: 0, listStyle: 'none' }}>
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
                    </div>
                </div>
            </section>
        </>
    );
};

export default TeachingSection;
