import { useEffect } from "react";
import { useRouter } from "next/router";

// Awards now lives on the home page as a section — keep this route alive
// as a redirect so old links and bookmarks still land in the right place.
const AwardsRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/#awards");
  }, [router]);

  return null;
};

export default AwardsRedirect;

export async function getStaticProps() {
  return { props: {} };
}
