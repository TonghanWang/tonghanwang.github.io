import Link from "next/link";
import appData from "@data/app.json";
import { useLanguage } from "@library/LanguageContext";
import { translations, pick } from "@library/i18n";

const DefaultFooter = ( { extraClass } ) => {
  const { lang } = useLanguage();

  return (
    <>
    {/* footer */}
    <footer className="mil-fw">
      <p className="mil-light-soft">{pick(translations.footer.copy, lang)}</p>
      <p className="mil-light-soft" dangerouslySetInnerHTML={{__html : appData.footer.dev}} />
    </footer>
    {/* footer end */}
    </>
  );
};
export default DefaultFooter;
