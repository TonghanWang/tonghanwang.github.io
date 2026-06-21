import React from "react";
import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";
import { useLanguage } from "@library/LanguageContext";

import HeroOneSection from "@components/sections/HeroOne"
import PublicationsSection from "@components/sections/Publications"
import AwardsSection from "@components/sections/Awards"
import TeachingSection from "@components/sections/Teaching"
import ServiceSection from "@components/sections/Service"
import ContactSection from "@components/sections/Contact"

import { getSortedAwardsData, getPostData as getAwardPostData } from "@library/awards";
import { getPostData } from "@library/posts";

const TestimonialSlider = dynamic( () => import("@components/sliders/Testimonial"), { ssr: false } );

const Home1 = ({ posts, recruitmentHtmlZh, recruitmentHtmlEn }) => {
  const { lang } = useLanguage();
  return (
    <Layouts fullWidth={true} showProgressBar={true}>
      <div className={lang === 'zh' ? 'zh-kaiti' : ''}>
        <HeroOneSection />
        <TestimonialSlider />

        <div className="section-divider" />

        <section id="awards" className="section-alt">
          <AwardsSection posts={posts} />
        </section>

        <div className="section-divider" />

        <section id="publications">
          <PublicationsSection />
        </section>

        <div className="section-divider" />

        <section id="teaching" className="section-alt">
          <TeachingSection />
        </section>

        <div className="section-divider" />

        <section id="service">
          <ServiceSection />
        </section>

        <div className="section-divider" />

        <section id="contact" className="section-alt">
          <ContactSection recruitmentHtmlZh={recruitmentHtmlZh} recruitmentHtmlEn={recruitmentHtmlEn} />
        </section>
      </div>
    </Layouts>
  );
};
export default Home1;

export async function getStaticProps() {
  const meta = getSortedAwardsData();
  const posts = await Promise.all(meta.map((m) => getAwardPostData(m.id)));

  const recruitmentPostData = await getPostData('recruitment');
  const recruitmentHtmlZh = recruitmentPostData.contentHtml;

  const recruitmentHtmlEn = `
<p>Hi, I'm <a href="/#publications">Tonghan Wang</a>. I will be joining the Institute for AI at Tsinghua University as an Assistant Professor in 2026.</p>

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
  <li>Victor Lesser Distinguished Dissertation Award, 2025 — awarded annually to a <strong>single doctoral graduate worldwide</strong> for outstanding dissertation research in <strong>agent and multi-agent systems</strong></li>
  <li>Best Paper Award at ACM EC 2024 (AI Track); Oral at ACM EC 2026; multiple Spotlight/Oral recognitions at NeurIPS, ICLR, AAAI, and other top venues</li>
</ul>
  `.trim();

  return {
    props: { posts, recruitmentHtmlZh, recruitmentHtmlEn },
  };
}
