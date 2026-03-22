import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import { getAllProjectsIds, getProjectData } from "@library/projects";

// Renders one content+gallery block
const Section = ({ section, gallery }) => {
  if (!section || section.enabled != 1) return null;
  return (
    <div className="proj-detail-section mil-up">
      {(section.heading || section.button) && (
        <div className="proj-detail-header">
          {section.heading && (
            <h3 className="proj-detail-heading">{section.heading}</h3>
          )}
          {section.button && (
            <a href={section.button.link} target={section.button.target}
               rel="noopener noreferrer" className="pub-link">
              {section.button.label}
            </a>
          )}
        </div>
      )}
      <div className="mil-text proj-detail-body"
           dangerouslySetInnerHTML={{__html: section.content}} />
      {gallery?.enabled == 1 && gallery.items.map((item, key) => (
        <img key={key} src={item.image} alt={item.alt}
             className="proj-detail-img mil-up" />
      ))}
    </div>
  );
};

const ProjectDetail = ({ data: postData }) => {
  const sectionPairs = [
    [postData.description2,  postData.gallery2],
    [postData.description3,  postData.gallery3],
    [postData.description4,  postData.gallery4],
    [postData.description5,  postData.gallery5],
    [postData.description6,  postData.gallery6],
    [postData.description7,  postData.gallery7],
    [postData.description8,  postData.gallery8],
    [postData.description9,  postData.gallery9],
    [postData.description10, postData.gallery10],
    [postData.description11, null],
    [postData.description12, null],
  ];

  return (
    <Layouts fullWidth={true}>
      <PageBanner pageTitle={postData.title} />

      <section style={{ paddingBottom: '80px' }}>

        {/* Category chip */}
        {postData.category && (
          <p className="proj-card-category mil-up" style={{ marginBottom: '24px' }}>
            {postData.category}
          </p>
        )}

        {/* Intro description */}
        {postData.description?.enabled == 1 && (
          <div className="mil-text proj-detail-intro mil-up mil-mb-60"
               dangerouslySetInnerHTML={{__html: postData.description.content}} />
        )}

        {/* Cover image */}
        {postData.fullWidth == true && (
          <img src={postData.image} alt={postData.title}
               className="proj-detail-img mil-up mil-mb-60" />
        )}

        {/* First gallery (no heading) */}
        {postData.gallery?.enabled == 1 && postData.gallery.items.map((item, key) => (
          <img key={key} src={item.image} alt={item.alt}
               className="proj-detail-img mil-up mil-mb-30" />
        ))}

        {/* Numbered sections */}
        {sectionPairs.map(([section, gallery], i) => (
          <Section key={i} section={section} gallery={gallery} />
        ))}

      </section>
    </Layouts>
  );
};
export default ProjectDetail;

export async function getStaticPaths() {
  const paths = getAllProjectsIds();
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const postData = await getProjectData(params.id);
  return { props: { data: postData } };
}
