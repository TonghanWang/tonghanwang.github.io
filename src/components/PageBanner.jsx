import Head from 'next/head';
import appData from "@data/app.json";

const PageBanner = ({ pageTitle, breadTitle, align }) => {
  let clearBreadTitle;

  if ( breadTitle != undefined ) {
    clearBreadTitle = breadTitle;
  } else {
    const regex = /(<([^>]+)>)/gi;
    clearBreadTitle = pageTitle.replace(regex, "");
  }

  const headTitle = `${appData.settings.siteName} - ${clearBreadTitle}`;

  return (
    <>
      <Head>
        <title>{headTitle}</title>
      </Head>
      
      {/* banner */}
      <section className={`mil-banner-sm mil-${align}`}>
          <div className="mil-banner-title">
              <h1 className="mil-h1-sm mil-up mil-mb-60" dangerouslySetInnerHTML={{__html : pageTitle}} />
          </div>
      </section>
      {/* banner end */}
    </>
  );
};
export default PageBanner;
