// pages/awards.jsx
import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import CallToActionSection from "@components/sections/CallToAction";
import { useEffect } from "react";
import { accordion } from "@/src/common/utilits";
import { getSortedAwardsData, getPostData } from "@library/awards";

export default function Awards({ posts }) {
  useEffect(() => {
    accordion();
  }, []);

  return (
    <Layouts fullWidth>
      <PageBanner pageTitle="Awards & Honors" align="center" />

      <div className="mil-p-0-60">
        {posts.map((post) => (
          <section key={post.id} className="mil-up mil-mb-120">
            {/* Award title */}
            <h2 className="mil-text-xl mil-center mil-mb-30">{post.title}</h2>

            {/* Main content */}
            <div
              className="mil-text-lg mil-dark mil-center mil-mb-60"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />

            {/* If there’s a list block, render an accordion of its items */}
            {post.list && (
              <>
                <div className="mil-section-title mil-up mil-mb-60">
                  <div className="mil-divider" />
                  <h3>{post.list.heading}</h3>
                </div>
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
                                    style={{fontSize: "22px"}}
                                >
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
                                dangerouslySetInnerHTML={{__html: item.value}}
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
