import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import appData from "@data/app.json";
import { LanguageProvider, useLanguage } from "@library/LanguageContext";

//import '../styles/scss/style-dark.scss';
import '../styles/scss/style-light.scss';

import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

const SITE_DESCRIPTIONS = {
    en: 'Tonghan Wang is a tenure-track Assistant Professor at Tsinghua University researching agentic AI, multi-agent systems, mechanism design, and AI for social impact.',
    zh: '王同翰，清华大学人工智能学院长聘教轨助理教授，研究方向包括智能体AI、多智能体系统、机制设计与社会影响力人工智能。',
};

function SiteMetadata() {
    const { lang } = useLanguage();
    const { asPath } = useRouter();
    const siteUrl = appData.settings.siteUrl;
    const path = asPath.split(/[?#]/)[0] || '/';
    const canonicalUrl = `${siteUrl}${path === '/' ? '' : path}`;
    const title = lang === 'zh'
        ? '王同翰 | 清华大学人工智能学院'
        : 'Tonghan Wang | Agentic AI, Multi-Agent Systems & Mechanism Design';
    const description = SITE_DESCRIPTIONS[lang] ?? SITE_DESCRIPTIONS.en;
    const imageUrl = `${siteUrl}/img/person/avatar5.jpg`;
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Tonghan Wang',
        alternateName: '王同翰',
        url: siteUrl,
        image: imageUrl,
        email: 'mailto:thw@mail.tsinghua.edu.cn',
        jobTitle: 'Tenure-Track Assistant Professor',
        worksFor: {
            '@type': 'CollegeOrUniversity',
            name: 'Tsinghua University',
            url: 'https://www.tsinghua.edu.cn/en/',
        },
        alumniOf: [
            { '@type': 'CollegeOrUniversity', name: 'Harvard University' },
            { '@type': 'CollegeOrUniversity', name: 'Tsinghua University' },
        ],
        knowsAbout: [
            'Agentic AI',
            'Multi-Agent Systems',
            'Mechanism Design',
            'Multi-Agent Reinforcement Learning',
            'AI for Social Impact',
        ],
        sameAs: appData.social
            .filter((item) => !item.link.startsWith('mailto:'))
            .map((item) => item.link),
    };

    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="robots" content="index, follow" />
            <meta name="theme-color" content="#2563eb" />
            <link rel="canonical" href={canonicalUrl} />

            <meta property="og:type" content="profile" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:image" content={imageUrl} />
            <meta property="og:image:alt" content="Portrait of Tonghan Wang" />
            <meta property="og:site_name" content={appData.settings.siteName} />
            <meta property="og:locale" content={lang === 'zh' ? 'zh_CN' : 'en_US'} />
            <meta property="profile:first_name" content="Tonghan" />
            <meta property="profile:last_name" content="Wang" />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={imageUrl} />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
                }}
            />
        </Head>
    );
}

function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider>
        <SiteMetadata />
        <Head>
            {/* seo begin */}
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <link rel="icon" type="image/svg+xml" href="/favicon.svg"/>
            {/* seo end */}
        </Head>
        <Component {...pageProps} />
    </LanguageProvider>
  );
}

export default MyApp;
