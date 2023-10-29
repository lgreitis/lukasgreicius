import { Leva } from "leva";
import { type NextPage } from "next";
import Footer from "~/modules/footer";
import Hero from "~/modules/hero";
import Work from "~/modules/work";

const Home: NextPage = () => {
  return (
    <>
      <Leva hidden={true} />
      <Hero />
      <Work />
      <Footer />
    </>
  );
};

export default Home;
