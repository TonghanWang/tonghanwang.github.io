import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";
import { getPostData } from "@library/posts";
import { useLanguage } from "@library/LanguageContext";
import { translations, pick } from "@library/i18n";

const Contact = ({ recruitmentHtmlZh, recruitmentHtmlEn }) => {
  const { lang } = useLanguage();
  const t = translations.contact;
  const recruitmentHtml = lang === 'zh' ? recruitmentHtmlZh : recruitmentHtmlEn;

  return (
    <Layouts
      rightPanelBackground={"/img/person/avatar4.jpg"}
      rightPanelImg={"/img/person/avatar4.jpg"}
    >
        <PageBanner pageTitle={pick(t.banner, lang)} />

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
        <div className="mil-text mil-up mil-mb-90 academic-body-font"
             dangerouslySetInnerHTML={{ __html: recruitmentHtml }} />
        {/* recruitment end */}

        {/* map */}
        <div className="mil-map mil-mb-90">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.030296691655!2d-71.13217170940955!3d42.363193596915174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e379d8b38dcb63%3A0xeec84922bf2e0b45!2s150%20Western%20Ave%2C%20Boston%2C%20MA%2002134!5e0!3m2!1sen!2sus!4v1719194711546!5m2!1sen!2sus"
              style={{"border": "0"}}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
        {/* map end */}

    </Layouts>
  );
};
export default Contact;

export async function getStaticProps() {
    const postData = await getPostData('recruitment');
    const recruitmentHtmlZh = postData.contentHtml;

    const recruitmentHtmlEn = `
<p>Hi, I'm <a href="/story">Tonghan Wang</a>. I will be joining the Institute for AI at Tsinghua University as an Assistant Professor in 2026.</p>

<h2>Research Interests</h2>

<p>Current ongoing projects include:</p>

<ul>
  <li>Advertising and market design for generative models, grounded in economic theory</li>
  <li>AI game theory with an emphasis on safety</li>
  <li>Embodied learning with coordinated muscle-group control</li>
  <li>Multi-agent problems in generative models</li>
</ul>

<p>As the world moves toward human–agent coexistence, all questions about the relationship between humans and AI are within scope.</p>

<p>I am continuously looking for passionate PhD students and undergraduate research interns. I admit two PhD students per year; PhD admissions are currently open for students entering in 2027 or later (including the 2026 early-admission cycle). I encourage prospective students to first connect through a research internship or collaborative project — this also helps you assess whether my group is the right fit for you.</p>

<p><strong>Undergraduate interns:</strong> Students at any stage of undergraduate study are welcome. We can tailor a research plan to your background and future goals.</p>

<p>If you are excited about our research directions, please send your CV and transcripts to <strong>twang1@g.harvard.edu</strong>, along with a brief description (one or two sentences) of a research problem you have worked on and what specific questions you find most interesting.</p>

<h2>Mentoring Style</h2>

<ul>
  <li>Student development comes first. For students aiming for academic careers, I can facilitate collaborations or research visits with top institutions including Harvard, MIT, CMU, and Google.</li>
  <li>I encourage tackling hard and important problems, value originality and depth, and actively support collaboration across institutions and with industry.</li>
  <li>I have extensive personal experience navigating the complexities of U.S. visas 😂 and can offer detailed, practical advice.</li>
</ul>

<h2>About Me</h2>

<ul>
  <li>PhD from Harvard University, advised by Prof. David C. Parkes and Prof. Milind Tambe</li>
  <li>Master's from the Institute for Interdisciplinary Information Sciences (IIIS), Tsinghua University</li>
  <li>Best Paper Award at ACM EC 2024 (AI Track); multiple Spotlight/Oral recognitions at NeurIPS, ICLR, AAAI, and other top venues</li>
</ul>
    `.trim();

    return {
        props: { recruitmentHtmlZh, recruitmentHtmlEn }
    };
}
