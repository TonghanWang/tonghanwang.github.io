import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";
import { Formik } from 'formik';
import appData from "@data/app.json";

const Contact = () => {
  return (
    <Layouts
      rightPanelBackground={"/img/person/avatar1.jpg"}
      rightPanelImg={"/img/person/avatar1.png"}
    >
        <PageBanner pageTitle={"Get in touch!"} align={"center"} />
      
        {/* info */}
        <div>
            <ul className="mil-puplication-details mil-up mil-mb-90">
                <li>
                    <span className="mil-upper mil-accent">Write: </span>&nbsp;&nbsp;
                    <span className="mil-upper mil-dark">twang1@g.harvard.edu</span>
                </li>
                <li>
                    <span className="mil-upper mil-accent">Drop in: </span>&nbsp;&nbsp;
                    <span className="mil-upper mil-dark">Office 5.421, 150 Western Ave, Allston</span>
                </li>
            </ul>
        </div>

        {/* map */}
        <div className="mil-map mil-mb-90">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.030296691655!2d-71.13217170940955!3d42.363193596915174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e379d8b38dcb63%3A0xeec84922bf2e0b45!2s150%20Western%20Ave%2C%20Boston%2C%20MA%2002134!5e0!3m2!1sen!2sus!4v1719194711546!5m2!1sen!2sus"
              style={{"border": "0"}}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

        </div>
        {/* map end */}

        {/*<div className="mil-section-title mil-up">*/}
        {/*    <div className="mil-divider" />*/}
        {/*    <h3>Let's Talk</h3>*/}
        {/*</div>*/}


    
    </Layouts>
  );
};
export default Contact;
