import { useDebounce } from "@uidotdev/usehooks";
import type { ChangeEvent } from "react";
import { useState } from "react";

import { LoadingIcon } from "@components/atoms";
import { PaintList } from "@components/molecules";
import type { SharedProps } from "@typing";

import { trpc } from "../../utils/trpc";

export type MainPageProps = SharedProps;

export const Main = ({ children, className }: MainPageProps) => {
  // Makes a shareable link if we use url parameters
  // const urlSearch = useRouter().query.search;

  const [searchTerm, setSearchTerm] = useState<string>("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const { isLoading, data, error } = trpc.paints.search.useQuery({
    name: debouncedSearchTerm,
    // sortDir: "desc",
    // sortField: "name",
  });

  console.log({ debouncedSearchTerm });

  if (error) {
    return (
      <h1 className="text-white">
        Error occured: <>{error.message}</>
      </h1>
    );
  }

  // if (isLoading) {
  //   return <LoadingIcon className="h-24 w-24 text-white" />;
  // }

  return (
    <>
      <p className="m-12 text-white">Main Page</p>
      <input
        type="text"
        name="paint-name"
        id="PaintName"
        defaultValue={""}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setSearchTerm(e.target.value);
        }}
      />
      {isLoading && <LoadingIcon className="h-24 w-24 text-white" />}
      {data ? (
        <PaintList paints={data.results}></PaintList>
      ) : (
        "Loading tRPC query..."
      )}
    </>
  );
};
