import { useEffect } from "react";
import { useRouter } from "next/router";

// Publications now lives on the home page as a section — keep this route alive
// as a redirect so old links and bookmarks still land in the right place.
const StoryRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/#publications");
  }, [router]);

  return null;
};

export default StoryRedirect;

export async function getStaticProps() {
  return { props: {} };
}
