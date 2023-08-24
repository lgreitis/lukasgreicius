import { Leva } from "leva";
import { type NextPage } from "next";
import Hero from "~/modules/hero";
import Work from "~/modules/work";

const Home: NextPage = () => {
  return (
    <>
      <Leva hidden={true} />
      <Hero />
      <Work />
    </>
  );
};

export default Home;
