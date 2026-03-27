// pages/awards.jsx
import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import CallToActionSection from "@components/sections/CallToAction";
import { useEffect } from "react";
import { accordion } from "@/src/common/utilits";
import { getSortedAwardsData, getPostData } from "@library/awards";
import { useLanguage } from "@library/LanguageContext";
import { translations, pick } from "@library/i18n";

const TrophyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
         fill="#b45309" style={{ display: 'inline', verticalAlign: 'middle', marginRight: '7px', flexShrink: 0 }}>
        <path d="M6 2h12v6a6 6 0 0 1-12 0V2zm-2 2H2a2 2 0 0 0-2 2v1a4 4 0 0 0 4 4v-1A2 2 0 0 1 2 8V6h2V4zm16 0h2v2a2 2 0 0 1-2 2v1a4 4 0 0 0 4-4V6a2 2 0 0 0-2-2h-2v2zM11 14.93V17H8v2h8v-2h-3v-2.07A6.02 6.02 0 0 0 18 9H6a6.02 6.02 0 0 0 5 5.93z"/>
    </svg>
);

export default function Awards({ posts }) {
  const { lang } = useLanguage();
  const t = translations.awards;

  useEffect(() => {
    accordion();
  }, []);

  return (
    <Layouts fullWidth>
      <PageBanner pageTitle={pick(t.banner, lang)} />

      <div className="mil-p-0-60">
        {posts.map((post) => (
          <section key={post.id} className="mil-up mil-mb-120">
            {/* Award title */}
            {post.title && <h2 className="mil-text-xl mil-center mil-mb-30">{post.title}</h2>}

            {/* Main content */}
            {post.contentHtml && (
              <div
                className="mil-text-lg mil-dark mil-center mil-mb-60"
                dangerouslySetInnerHTML={{ __html: post.contentHtml }}
              />
            )}

            {/* If there’s a list block, render an accordion of its items */}
            {post.list && (
              <>
                {post.list.heading && (
                  <div className="mil-section-title mil-up mil-left mil-mb-30">
                    <div className="mil-divider" />
                    <h3>{post.list.heading}</h3>
                  </div>
                )}
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    {post.list.items.map((item, idx) => (
                        <div
                            className="mil-accordion-group mil-up"
                            key={`${post.id}-item-${idx}`}
                        >
                            <div className="mil-accordion-menu">
                                <p
                                    className="mil-wide mil-dark mil-up"
                                    style={{ fontSize: "22px", display: 'flex', alignItems: 'center' }}
                                >
                                    {item.trophy && <TrophyIcon />}
                                    {item.label}
                                </p>
                                <div className="mil-symbol mil-h3">
                                    <div className="mil-plus">+</div>
                                    <div className="mil-minus">-</div>
                                </div>
                            </div>
                            <div
                                className="mil-accordion-content"
                                style={{fontSize: '20px'}}
                                dangerouslySetInnerHTML={{
                                    __html: pick(t.values[item.label], lang) ?? item.value
                                }}
                            />
                        </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </section>
        ))}
      </div>

      <CallToActionSection />
    </Layouts>
  );
}

export async function getStaticProps() {
  // 1. grab your metadata (sorted by date)
  const meta = getSortedAwardsData();

  // 2. for each item, pull in its HTML content
  const posts = await Promise.all(
    meta.map((m) => getPostData(m.id))
  );

  return {
    props: { posts },
  };
}
