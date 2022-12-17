import { LoadingIcon } from "@components/atoms";
import { PaintCard, PaintList } from "@components/molecules";
import type { PaintRecord, SharedProps } from "@typing";

import { trpc } from "../../utils/trpc";

export type MainPageProps = SharedProps<{
  initialData: PaintRecord[];
}>;

export const Main = ({ children, className, initialData }: MainPageProps) => {
  const { isLoading, data, error } = trpc.paints.search.useQuery({
    name: "",
    sortDir: "desc",
    sortField: "name",
  });

  console.log(initialData);

  if (error) {
    return (
      <h1 className="text-white">
        Error occured: <>{error.message}</>
      </h1>
    );
  }

  if (isLoading) {
    return <LoadingIcon className="h-24 w-24 text-white" />;
  }

  return (
    <>
      <p className="m-12 text-white">Main Page</p>
      {data ? (
        <PaintList paints={data.results}></PaintList>
      ) : (
        "Loading tRPC query..."
      )}
    </>
  );
};
