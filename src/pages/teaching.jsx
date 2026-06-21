import { useEffect } from "react";
import { useRouter } from "next/router";

// Teaching & Service now lives on the home page as a section — keep this route
// alive as a redirect so old links and bookmarks still land in the right place.
const TeachingRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/#teaching");
  }, [router]);

  return null;
};

export default TeachingRedirect;

export async function getStaticProps() {
  return { props: {} };
}
