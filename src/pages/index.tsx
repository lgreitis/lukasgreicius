import { type NextPage } from "next";
import Hero from "~/modules/hero";
import Work from "~/modules/work";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Work />
    </>
  );
};

export default Home;
