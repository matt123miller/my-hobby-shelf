import { type NextPage } from "next";

import { Inventory } from "components/pages/inventory";
import { Layout } from "components/templates";

const Home: NextPage = () => {
  return (
    <Layout>
      <Inventory />
    </Layout>
  );
};

export default Home;
