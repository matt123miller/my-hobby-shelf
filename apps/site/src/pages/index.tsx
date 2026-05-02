import { type NextPage } from "next";

import { Layout } from "components/templates";
import { Main } from "components/pages";

const Home: NextPage = () => {
  return (
    <Layout>
      <Main />
    </Layout>
  );
};

export default Home;
