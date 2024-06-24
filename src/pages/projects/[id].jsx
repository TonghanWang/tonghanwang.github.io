import Layouts from "@layouts/Layouts";

import Link from "next/link";

import { getAllProjectsIds, getProjectData, getRelatedProjects } from "@library/projects";

import RelatedProjectsSection from "@components/sections/RelatedProjects";

const ProjectDetail = ( props ) => {
  
  const postData = props.data;

  return (
    <Layouts
      // fullWidth={postData.fullWidth}
      // rightPanelBackground={postData.image}
        fullWidth={true}
    >
    
      {/* banner */}
      <section className="mil-banner-sm mil-center">
          {/*<div className="mil-banner-top mil-up" />*/}
          <div className="mil-banner-title">
              <ul className="mil-puplication-details mil-up mil-mb-60">
                  {postData.details.map((item, key) => (
                  <li key={`project-details-item-${key}`}>
                    {item.label != "$category" &&
                    <>
                      <span className="mil-upper mil-dark">{item.label} </span>
                      &nbsp;&nbsp;
                      <span className="mil-upper">{item.value}</span>
                    </>
                    }
                    {item.label == "$category" &&
                    <>
                      <span className="mil-upper mil-accent">{postData.category}</span>
                    </>
                    }
                  </li>
                  ))}
              </ul>
              <h1 className="mil-h1-sm mil-up mil-mb-15" style={{fontSize: '28px'}}>{postData.title}</h1>
              {typeof postData.description != "undefined" &&
                <>
                  {postData.description.enabled == 1 &&
                    <div className="mil-text-xl mil-dark mil-up mil-center" dangerouslySetInnerHTML={{__html : postData.description.content}} />
                  }
                </>
              }
              {/*<ul className="mil-breadcrumbs mil-up">*/}
              {/*    <li><Link href="/">Homepage</Link></li>*/}
              {/*    <li><Link href="/projects">Projects</Link></li>*/}
              {/*    <li>Project</li>*/}
              {/*</ul>*/}
          </div>
      </section>
      {/* banner end */}
      
      {postData.fullWidth == true &&
      <img src={postData.image} alt={postData.title} style={{"width": "100%"}} className="mil-up mil-mb-90" />
      }

      {/* project */}
      <section className="mil-p-0-30">

          <div className="row justify-content-center">

              {typeof postData.gallery != "undefined" &&
                <>
                  {postData.gallery.enabled == 1 &&
                    <>
                    {postData.gallery.items.map((item, key) => (
                    <div key={`gallery-item-${key}`} className={key == 0 ? "col-lg-12" : "col-lg-6"} style={{ textAlign: 'center' }}>
                        <img src={item.image} alt={item.alt} style={{"width": "100%"}} className="mil-up mil-mb-30" />
                    </div>
                    ))}
                    </>
                  }
                </>
              }
              
              {typeof postData.description2 != "undefined" &&
                <>
                  {postData.description2.enabled == 1 &&
                  <>
                    <div className="col-lg-3">
                        <h3 className="mil-up mil-mb-30">{postData.description2.heading}</h3>
                    </div>
                      <div className="col-lg-9">
                          {postData.description2.button != undefined &&
                              <a href={postData.description2.button.link} target={postData.description2.button.target}
                                 className="mil-link mil-up mil-mb-15">
                                  <span>{postData.description2.button.label}</span>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                       fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                       strokeLinejoin="round" className="feather feather-arrow-right">
                                      <line x1="5" y1="12" x2="19" y2="12"/>
                                      <polyline points="12 5 19 12 12 19"/>
                                  </svg>
                              </a>
                          }
                          <div className="mil-up mil-mb-30"
                               dangerouslySetInnerHTML={{__html: postData.description2.content}}/>
                      </div>
                  </>
                  }
                </>
              }
              {typeof postData.gallery2 != "undefined" &&
                <>
                  {postData.gallery2.enabled == 1 &&
                    <>
                    {postData.gallery2.items.map((item, key) => (
                    <div key={`gallery-item-${key}`} className={key == 0 ? "col-lg-12" : "col-lg-12"}>
                        <img src={item.image} alt={item.alt} style={{"width": "100%"}} className="mil-up mil-mb-30" />
                    </div>
                    ))}
                    </>
                  }
                </>
              }

              {typeof postData.description3 != "undefined" &&
                <>
                  {postData.description3.enabled == 1 &&
                  <>
                    <div className="col-lg-3">
                        <h3 className="mil-up mil-mb-30">{postData.description3.heading}</h3>
                    </div>
                      <div className="col-lg-9">
                          {postData.description3.button != undefined &&
                              <a href={postData.description3.button.link} target={postData.description3.button.target}
                                 className="mil-link mil-up mil-mb-15">
                                  <span>{postData.description3.button.label}</span>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                       fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                       strokeLinejoin="round" className="feather feather-arrow-right">
                                      <line x1="5" y1="12" x2="19" y2="12"/>
                                      <polyline points="12 5 19 12 12 19"/>
                                  </svg>
                              </a>
                          }
                          <div className="mil-up mil-mb-30"
                               dangerouslySetInnerHTML={{__html: postData.description3.content}}/>
                      </div>
                  </>
                  }
                </>
              }
              {typeof postData.gallery3 != "undefined" &&
                <>
                  {postData.gallery3.enabled == 1 &&
                    <>
                    {postData.gallery3.items.map((item, key) => (
                    <div key={`gallery-item-${key}`} className={key == 0 ? "col-lg-12" : "col-lg-12"}>
                        <img src={item.image} alt={item.alt} style={{"width": "100%"}} className="mil-up mil-mb-30" />
                    </div>
                    ))}
                    </>
                  }
                </>
              }
              {typeof postData.description4 != "undefined" &&
                <>
                  {postData.description4.enabled == 1 &&
                  <>
                    <div className="col-lg-3">
                        <h3 className="mil-up mil-mb-30">{postData.description4.heading}</h3>
                    </div>
                      <div className="col-lg-9">
                          {postData.description4.button != undefined &&
                              <a href={postData.description4.button.link} target={postData.description4.button.target}
                                 className="mil-link mil-up mil-mb-15">
                                  <span>{postData.description4.button.label}</span>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                       fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                       strokeLinejoin="round" className="feather feather-arrow-right">
                                      <line x1="5" y1="12" x2="19" y2="12"/>
                                      <polyline points="12 5 19 12 12 19"/>
                                  </svg>
                              </a>
                          }
                          <div className="mil-up mil-mb-30"
                               dangerouslySetInnerHTML={{__html: postData.description4.content}}/>
                      </div>
                  </>
                  }
                </>
              }
              {typeof postData.gallery4 != "undefined" &&
                <>
                  {postData.gallery4.enabled == 1 &&
                    <>
                    {postData.gallery4.items.map((item, key) => (
                    <div key={`gallery-item-${key}`} className={key == 0 ? "col-lg-12" : "col-lg-12"}>
                        <img src={item.image} alt={item.alt} style={{"width": "100%"}} className="mil-up mil-mb-30" />
                    </div>
                    ))}
                    </>
                  }
                </>
              }
              {typeof postData.description5 != "undefined" &&
                <>
                  {postData.description5.enabled == 1 &&
                  <>
                    <div className="col-lg-3">
                        <h3 className="mil-up mil-mb-30">{postData.description5.heading}</h3>
                    </div>
                      <div className="col-lg-9">
                          {postData.description5.button != undefined &&
                              <a href={postData.description5.button.link} target={postData.description5.button.target}
                                 className="mil-link mil-up mil-mb-15">
                                  <span>{postData.description5.button.label}</span>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                       fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                       strokeLinejoin="round" className="feather feather-arrow-right">
                                      <line x1="5" y1="12" x2="19" y2="12"/>
                                      <polyline points="12 5 19 12 12 19"/>
                                  </svg>
                              </a>
                          }
                          <div className="mil-up mil-mb-30"
                               dangerouslySetInnerHTML={{__html: postData.description5.content}}/>
                      </div>
                  </>
                  }
                </>
              }
              {typeof postData.gallery5 != "undefined" &&
                <>
                  {postData.gallery5.enabled == 1 &&
                    <>
                    {postData.gallery5.items.map((item, key) => (
                    <div key={`gallery-item-${key}`} className={key == 0 ? "col-lg-12" : "col-lg-12"}>
                        <img src={item.image} alt={item.alt} style={{"width": "100%"}} className="mil-up mil-mb-30" />
                    </div>
                    ))}
                    </>
                  }
                </>
              }

              {typeof postData.description6 != "undefined" &&
                <>
                  {postData.description6.enabled == 1 &&
                  <>
                    <div className="col-lg-3">
                        <h3 className="mil-up mil-mb-30">{postData.description6.heading}</h3>
                    </div>
                      <div className="col-lg-9">
                          {postData.description6.button != undefined &&
                              <a href={postData.description6.button.link} target={postData.description6.button.target}
                                 className="mil-link mil-up mil-mb-15">
                                  <span>{postData.description6.button.label}</span>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                       fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                       strokeLinejoin="round" className="feather feather-arrow-right">
                                      <line x1="5" y1="12" x2="19" y2="12"/>
                                      <polyline points="12 5 19 12 12 19"/>
                                  </svg>
                              </a>
                          }
                          <div className="mil-up mil-mb-30"
                               dangerouslySetInnerHTML={{__html: postData.description6.content}}/>
                      </div>
                  </>
                  }
                </>
              }
              {typeof postData.gallery6 != "undefined" &&
                <>
                  {postData.gallery6.enabled == 1 &&
                    <>
                    {postData.gallery6.items.map((item, key) => (
                    <div key={`gallery-item-${key}`} className={key == 0 ? "col-lg-12" : "col-lg-12"}>
                        <img src={item.image} alt={item.alt} style={{"width": "100%"}} className="mil-up mil-mb-30" />
                    </div>
                    ))}
                    </>
                  }
                </>
              }

              {typeof postData.description7 != "undefined" &&
                <>
                  {postData.description7.enabled == 1 &&
                  <>
                    <div className="col-lg-3">
                        <h3 className="mil-up mil-mb-30">{postData.description7.heading}</h3>
                    </div>
                      <div className="col-lg-9">
                          {postData.description7.button != undefined &&
                              <a href={postData.description7.button.link} target={postData.description7.button.target}
                                 className="mil-link mil-up mil-mb-15">
                                  <span>{postData.description7.button.label}</span>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                       fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                       strokeLinejoin="round" className="feather feather-arrow-right">
                                      <line x1="5" y1="12" x2="19" y2="12"/>
                                      <polyline points="12 5 19 12 12 19"/>
                                  </svg>
                              </a>
                          }
                          <div className="mil-up mil-mb-30"
                               dangerouslySetInnerHTML={{__html: postData.description7.content}}/>
                      </div>
                  </>
                  }
                </>
              }
              {typeof postData.gallery7 != "undefined" &&
                <>
                  {postData.gallery7.enabled == 1 &&
                    <>
                    {postData.gallery7.items.map((item, key) => (
                    <div key={`gallery-item-${key}`} className={key == 0 ? "col-lg-12" : "col-lg-12"}>
                        <img src={item.image} alt={item.alt} style={{"width": "100%"}} className="mil-up mil-mb-30" />
                    </div>
                    ))}
                    </>
                  }
                </>
              }

              {typeof postData.description8 != "undefined" &&
                <>
                  {postData.description8.enabled == 1 &&
                  <>
                    <div className="col-lg-3">
                        <h3 className="mil-up mil-mb-30">{postData.description8.heading}</h3>
                    </div>
                      <div className="col-lg-9">
                          {postData.description8.button != undefined &&
                              <a href={postData.description8.button.link} target={postData.description8.button.target}
                                 className="mil-link mil-up mil-mb-15">
                                  <span>{postData.description8.button.label}</span>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                       fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                       strokeLinejoin="round" className="feather feather-arrow-right">
                                      <line x1="5" y1="12" x2="19" y2="12"/>
                                      <polyline points="12 5 19 12 12 19"/>
                                  </svg>
                              </a>
                          }
                          <div className="mil-up mil-mb-30"
                               dangerouslySetInnerHTML={{__html: postData.description8.content}}/>
                      </div>
                  </>
                  }
                </>
              }
              {typeof postData.gallery8 != "undefined" &&
                <>
                  {postData.gallery8.enabled == 1 &&
                    <>
                    {postData.gallery8.items.map((item, key) => (
                    <div key={`gallery-item-${key}`} className={key == 0 ? "col-lg-12" : "col-lg-12"}>
                        <img src={item.image} alt={item.alt} style={{"width": "100%"}} className="mil-up mil-mb-30" />
                    </div>
                    ))}
                    </>
                  }
                </>
              }

              {typeof postData.description9 != "undefined" &&
                <>
                  {postData.description9.enabled == 1 &&
                  <>
                    <div className="col-lg-3">
                        <h3 className="mil-up mil-mb-30">{postData.description9.heading}</h3>
                    </div>
                      <div className="col-lg-9">
                          {postData.description9.button != undefined &&
                              <a href={postData.description9.button.link} target={postData.description9.button.target}
                                 className="mil-link mil-up mil-mb-15">
                                  <span>{postData.description9.button.label}</span>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                       fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                       strokeLinejoin="round" className="feather feather-arrow-right">
                                      <line x1="5" y1="12" x2="19" y2="12"/>
                                      <polyline points="12 5 19 12 12 19"/>
                                  </svg>
                              </a>
                          }
                          <div className="mil-up mil-mb-30"
                               dangerouslySetInnerHTML={{__html: postData.description9.content}}/>
                      </div>
                  </>
                  }
                </>
              }
              {typeof postData.gallery9 != "undefined" &&
                <>
                  {postData.gallery9.enabled == 1 &&
                    <>
                    {postData.gallery9.items.map((item, key) => (
                    <div key={`gallery-item-${key}`} className={key == 0 ? "col-lg-12" : "col-lg-12"}>
                        <img src={item.image} alt={item.alt} style={{"width": "100%"}} className="mil-up mil-mb-30" />
                    </div>
                    ))}
                    </>
                  }
                </>
              }

              {typeof postData.description10 != "undefined" &&
                <>
                  {postData.description10.enabled == 1 &&
                  <>
                    <div className="col-lg-3">
                        <h3 className="mil-up mil-mb-30">{postData.description10.heading}</h3>
                    </div>
                      <div className="col-lg-9">
                          {postData.description10.button != undefined &&
                              <a href={postData.description10.button.link} target={postData.description10.button.target}
                                 className="mil-link mil-up mil-mb-15">
                                  <span>{postData.description10.button.label}</span>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                       fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                       strokeLinejoin="round" className="feather feather-arrow-right">
                                      <line x1="5" y1="12" x2="19" y2="12"/>
                                      <polyline points="12 5 19 12 12 19"/>
                                  </svg>
                              </a>
                          }
                          <div className="mil-up mil-mb-30"
                               dangerouslySetInnerHTML={{__html: postData.description10.content}}/>
                      </div>
                  </>
                  }
                </>
              }
              {typeof postData.gallery10 != "undefined" &&
                <>
                  {postData.gallery10.enabled == 1 &&
                    <>
                    {postData.gallery10.items.map((item, key) => (
                    <div key={`gallery-item-${key}`} className={key == 0 ? "col-lg-12" : "col-lg-12"}>
                        <img src={item.image} alt={item.alt} style={{"width": "100%"}} className="mil-up mil-mb-30" />
                    </div>
                    ))}
                    </>
                  }
                </>
              }
          </div>

      </section>
      {/* project end */}

      {/*<RelatedProjectsSection items={props.related} />*/}

    </Layouts>
  );
};
export default ProjectDetail;

export async function getStaticPaths() {
    const paths = getAllProjectsIds()

    return {
      paths,
      fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getProjectData(params.id)
    const relatedPosts = await getRelatedProjects(params.id)

    return {
      props: {
        data: postData,
        related: relatedPosts
      }
    }
}