import { Leva } from "leva";
import { type NextPage } from "next";
import Footer from "~/modules/footer";
import Hero from "~/modules/hero";
import Skills from "~/modules/skills/skills";
import Work from "~/modules/work";

const Home: NextPage = () => {
  return (
    <>
      <Leva hidden={true} />
      <Hero />
      <Work />
      <Skills />
      <Footer />
    </>
  );
};

export default Home;
