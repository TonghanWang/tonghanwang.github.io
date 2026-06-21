import PageBanner from "@components/PageBanner";
import { useLanguage } from "@library/LanguageContext";
import { translations, pick } from "@library/i18n";

const ContactSection = ({ recruitmentHtmlZh, recruitmentHtmlEn }) => {
  const { lang } = useLanguage();
  const t = translations.contact;
  const recruitmentHtml = lang === 'zh' ? recruitmentHtmlZh : recruitmentHtmlEn;

  return (
    <>
        <PageBanner pageTitle={pick(t.banner, lang)} setTitle={false} />

        <section style={{ paddingBottom: '60px' }}>
            <div className="row">
                <div className="col-xl-12">
                    {/* info */}
                    <div>
                        <ul className="mil-puplication-details mil-up mil-mb-90">
                            <li>
                                <span className="mil-upper mil-accent">{pick(t.write, lang)}</span>&nbsp;&nbsp;
                                <span className="mil-upper mil-dark">twang1@g.harvard.edu</span>
                            </li>
                            <li>
                                <span className="mil-upper mil-accent">{pick(t.dropIn, lang)}</span>&nbsp;&nbsp;
                                <span className="mil-upper mil-dark">{pick(t.address, lang)}</span>
                            </li>
                        </ul>
                    </div>

                    {/* recruitment */}
                    <div className="mil-text mil-text-lg mil-dark mil-up mil-mb-90"
                         dangerouslySetInnerHTML={{ __html: recruitmentHtml }} />
                    {/* recruitment end */}

                    {/* map */}
                    <div className="mil-map mil-mb-90">
                        <iframe
                          src="https://maps.google.com/maps?q=北京市海淀区中关村智造大街F座&t=m&z=16&ie=UTF8&output=embed"
                          style={{"border": "0"}}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                    {/* map end */}
                </div>
            </div>
        </section>

    </>
  );
};

export default ContactSection;
