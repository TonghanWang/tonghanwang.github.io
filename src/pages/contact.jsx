import { useEffect } from "react";
import { useRouter } from "next/router";

// Contact ("Join Us") now lives on the home page as a section — keep this route
// alive as a redirect so old links and bookmarks still land in the right place.
const ContactRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/#contact");
  }, [router]);

  return null;
};

export default ContactRedirect;

export async function getStaticProps() {
  return { props: {} };
}
