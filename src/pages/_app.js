import React from "react";
import Head from "next/head";
import appData from "@data/app.json";
import { LanguageProvider } from "@library/LanguageContext";

//import '../styles/scss/style-dark.scss';
import '../styles/scss/style-light.scss';

import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider>
        <Head>
            {/* seo begin */}
            <title>{appData.settings.siteName}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <link rel="icon" type="image/svg+xml" href="/favicon.svg"/>
            <link rel="icon" href="/img/person/favicon.png"/>
            {/* seo end */}
        </Head>
        <Component {...pageProps} />
    </LanguageProvider>
  );
}

export default MyApp;
