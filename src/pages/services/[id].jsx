import Layouts from "@layouts/Layouts";
import PageBanner from "@/src/components/PageBanner";

import { useEffect } from "react";

import { accordion } from "../../common/utilits";

import { getAllServicesIds, getServiceData } from "@library/services";

const ServiceDetail = ( { postData } ) => {
  useEffect(() => {
    accordion();
  }, []);

  return (
    <Layouts fullWidth={true}>
      <PageBanner pageTitle={postData.title} align={"center"} />

      {/* about */}
      <div className="row justify-content-center">
          <div className="col-lg-10">
              <div className="mil-text-lg mil-dark mil-center mil-up mil-mb-90">
                <div dangerouslySetInnerHTML={{__html : postData.contentHtml}} />
              </div>
          </div>
      </div>
      {/* about end */}

      {postData.list != undefined &&
      <>
        <div className="mil-section-title mil-up mil-mb-90">
            <div className="mil-divider" />
            <h3>{postData.list.heading}</h3>
        </div>
        {/* service */}
        <div className="mil-p-0-60">
            <div className="row justify-content-center">
                <div className="col-lg-12">
                    {postData.list.items.map((item, key) => (
                    <div className="mil-accordion-group mil-up" key={`service-list-${key}`}>
                        <div className="mil-accordion-menu">
                            <p className="mil-accordion-head" style={{fontSize: "22px"}}>{item.label}</p>
                            <div className="mil-symbol mil-h3">
                                <div className="mil-plus">+</div>
                                <div className="mil-minus">-</div>
                            </div>
                        </div>
                        <div className="mil-accordion-content" dangerouslySetInnerHTML={{__html : item.value}} />
                    </div>
                    ))}
                </div>
            </div>
        </div>
        {/* service end */}
      </>
      }

    </Layouts>
  );
};
export default ServiceDetail;

export async function getStaticPaths() {
    const paths = getAllServicesIds()

    return {
      paths,
      fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getServiceData(params.id)

    return {
      props: {
        postData
      }
    }
}
