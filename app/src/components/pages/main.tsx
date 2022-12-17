import { LoadingIcon } from "@components/atoms";
import { PaintCard, PaintList } from "@components/molecules";
import { SharedProps } from "@typing";

import Head from "next/head";

import { trpc } from "../../utils/trpc";

export type MainPageProps = SharedProps<unknown>;

export const Main = ({ children, className }: MainPageProps) => {
  const { isLoading, data, error } = trpc.paints.search.useQuery({
    name: "",
    sortDir: "desc",
    sortField: "name",
  });

  if (error) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <h1>
          Error occured: <>{error.message}</>
        </h1>
      </main>
    );
  }

  if (isLoading) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <LoadingIcon className="h-24 w-24 text-white" />
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <p className="m-12 text-white">Main Page</p>
      {data ? (
        <PaintList paints={data.results}></PaintList>
      ) : (
        "Loading tRPC query..."
      )}
    </main>
  );
};
