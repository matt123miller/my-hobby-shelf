import type { ChangeEvent } from "react";
import { useState } from "react";

import { LoadingIcon } from "@components/atoms";
import { PaintCard, PaintList } from "@components/molecules";
import type { PaintRecord, SharedProps } from "@typing";

import { trpc } from "../../utils/trpc";

export type MainPageProps = SharedProps;

export const Main = ({ children, className }: MainPageProps) => {
  const [inputText, debouncedInputText, handleInputChange] =
    useDebouncedInput("");

  const { isLoading, data, error } = trpc.paints.search.useQuery({
    name: debouncedInputText,
    // sortDir: "desc",
    // sortField: "name",
  });

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
        defaultValue={inputText}
        onChange={handleInputChange}
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

// has a problem where it will set debouncedInoutText to the last value of inputText, not the most recent one
// it will be missing the last character typed
const useDebouncedInput = (
  initialText: string
): [string, string, (e: ChangeEvent) => void] => {
  const [inputText, setInputText] = useState<string>(initialText);
  const [debouncedInputText, setDebouncedInputText] =
    useState<string>(initialText);
  const [debounceTimeout, setDebounceTimeout] = useState<number | null>(null);

  const handleInputChange = (e: ChangeEvent) => {
    setInputText((e.target as HTMLInputElement).value);
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }
    setDebounceTimeout(
      window.setTimeout(() => {
        setDebouncedInputText(inputText);
      }, 500)
    );
  };

  return [inputText, debouncedInputText, handleInputChange];
};
