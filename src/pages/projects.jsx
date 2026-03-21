import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import { getSortedProjectsData } from "@library/projects";
import Link from "next/link";
import { useLanguage } from "@library/LanguageContext";
import { translations, pick } from "@library/i18n";

const Projects = (props) => {
  const { lang } = useLanguage();
  const t = translations.projects;

  return (
    <Layouts fullWidth={true}>
      <PageBanner pageTitle={pick(t.banner, lang)} />

      <section style={{ paddingBottom: '80px' }}>
        <div className="proj-list">
          {props.projects.map((item, key) => (
            <Link href={`/projects/${item.id}`} className="proj-card mil-up" key={key}>
              <div className="proj-card-img">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="proj-card-body">
                <p className="proj-card-category">{item.category}</p>
                <h4 className="proj-card-title">{item.title}</h4>
                <span className="proj-card-link">{pick(t.explore, lang)}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </Layouts>
  );
};
export default Projects;

export async function getStaticProps() {
  const allProjects = getSortedProjectsData();

  return {
    props: {
      projects: allProjects
    }
  }
}