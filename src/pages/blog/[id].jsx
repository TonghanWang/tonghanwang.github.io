import Layouts from "@layouts/Layouts";
import {getAllPostsIds, getPostData, getRelatedPosts} from "@library/posts";
import Date from '@library/date';
import Link from "next/link";
import Head from 'next/head';
import RelatedPostsSection from "@components/sections/RelatedPosts";
import SubscribeSection from "@components/sections/Subscribe";

const PostsDetail = (props) => {

    const postData = props.data;
    const SITE_NAME = 'Tonghan Wang';
    const SITE_URL = 'https://tonghanwang.github.io/';
    const slug = props.slug; // we’ll pass this from getStaticProps
    const pageUrl = `${SITE_URL}/blog/${slug}`;
    const makeAbs = (u) => (u?.startsWith('http') ? u : `${SITE_URL}${u || ''}`);
    const isRecruitment = props.slug === 'recruitment';
    const title = `${postData.title} ${isRecruitment ? '|' : '–'} ${SITE_NAME}${isRecruitment ? '.' : ''}`;

    // const title = `${postData.title} – ${SITE_NAME}`;
    const description = postData.short || '';
    const ogImage = makeAbs(postData.image) || `${SITE_URL}/static/og/default.jpg`;

    return (
        <Layouts
            // fullWidth={postData.fullWidth}
            // rightPanelBackground={postData.image}
            fullWidth={true}
        >
            <Head>
                <title>{title}</title>
                <meta name="description" content={description}/>
                <meta property="og:title" content={title}/>
                <meta property="og:description" content={description}/>
                <meta property="og:url" content={pageUrl}/>
                <meta property="og:site_name" content={SITE_NAME}/>
                <meta property="og:type" content="article"/>
                <meta property="og:image" content={ogImage}/>
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:title" content={title}/>
                <meta name="twitter:description" content={description}/>
                <meta name="twitter:image" content={ogImage}/>
            </Head>

            {/* banner */}
            <section className="mil-banner-sm mil-center">
                <div className="mil-banner-top mil-up"/>
                <div className="mil-banner-title">
                    <ul className="mil-puplication-details mil-up mil-mb-60">
                        {/*<li className="mil-puplication-author">*/}
                        {/*  <img src={postData.author.avatar} alt={postData.author.name} />*/}
                        {/*  <span className="mil-upper mil-dark">{postData.author.name}</span>*/}
                        {/*</li>*/}
                        {!isRecruitment && (
                            <li><span className="mil-upper mil-dark">Date:</span>&nbsp;&nbsp;<span
                                className="mil-upper"><Date dateString={postData.date}/></span></li>
                        )}
                        {!isRecruitment && (
                            <li className="mil-upper mil-accent">{postData.category}</li>
                        )}
                    </ul>
                    <h1 className="mil-h1-sm mil-up mil-mb-60"
                        style={{fontSize: '40px', lineHeight: 1.1}}>{postData.title}</h1>
                    <ul className="mil-breadcrumbs mil-up">
                        <li><Link href="/">Homepage</Link></li>
                        <li><Link href="/blog">Recruitment</Link></li>
                        {/*<li>Publication</li>*/}
                    </ul>

                </div>
            </section>
            {/* banner end */}

            {/* publication */}
            <section className="mil-p-0-60">

                {postData.fullWidth == true &&
                    <img src={postData.image} alt={postData.title} style={{"width": "100%"}}
                         className="mil-up mil-mb-90"/>
                }

                <div className="mil-text mil-up mil-mb-30 academic-body-font"
                     dangerouslySetInnerHTML={{__html: postData.contentHtml}}/>

                {typeof postData.gallery != "undefined" &&
                    <>
                        {postData.gallery.enabled == 1 &&
                            <>
                                <div className="row">
                                    {postData.gallery.items.map((item, key) => (
                                        <div key={`gallery-item-${key}`} className="col-lg-6">
                                            <img src={item.image} alt={item.alt} style={{"width": "100%"}}
                                                 className="mil-up mil-mb-30"/>
                                        </div>
                                    ))}
                                </div>
                            </>
                        }
                    </>
                }

                {typeof postData.additional != "undefined" &&
                    <>
                        {postData.additional.enabled == 1 &&
                            <div className="mil-text mil-up"
                                 dangerouslySetInnerHTML={{__html: postData.additional.content}}/>
                        }
                    </>
                }

            </section>
            {/* publication end */}

            {/*<RelatedPostsSection items={props.related} />*/}

            {/*<SubscribeSection />*/}
        </Layouts>
    );
};
export default PostsDetail;

export async function getStaticPaths() {
    const paths = getAllPostsIds()

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}) {
    const postData = await getPostData(params.id)
    const relatedPosts = await getRelatedPosts(params.id)

    return {
        props: {
            data: postData,
            related: relatedPosts,
            slug: params.id
        }
    }
}