import { LoadingIcon } from "@components/atoms";
import { PaintCard, PaintList } from "@components/molecules";
import { type NextPage } from "next";

import { Layout } from "components/templates";
import { Main } from "components/pages";

import { rawData } from "../server/trpc/data";
type Props = Awaited<ReturnType<typeof getServerSideProps>>["props"];

const Home: NextPage<Props> = (props: Props) => {
  return (
    <Layout>
      <Main initialData={props.initialData} />
    </Layout>
  );
};

export const getServerSideProps = async () => {
  return { props: { initialData: rawData } };
};

export default Home;
