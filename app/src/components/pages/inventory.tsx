import { QueryClientProvider } from "@tanstack/react-query";

import { LoadingIcon } from "@components/atoms";
import type { SharedProps } from "@typing";

import { localQueryClient } from "hooks/useLocalState";
import { trpc } from "../../utils/trpc";

export type InventoryPageProps = SharedProps;

export const Inventory = ({ children, className }: InventoryPageProps) => {
  const { isLoading, data, error } = trpc.paints.search.useQuery({
    // how do I know the current user?
    // name:
    // sortDir: "desc",
    // sortField: "name",
  });

  if (error) {
    return (
      <QueryClientProvider client={localQueryClient}>
        <h1 className="text-white">
          Error occured: <>{error.message}</>
        </h1>
      </QueryClientProvider>
    );
  }

  if (isLoading) {
    return (
      <QueryClientProvider client={localQueryClient}>
        <LoadingIcon className="h-24 w-24 text-white" />
      </QueryClientProvider>
    );
  }

  return (
    <QueryClientProvider client={localQueryClient}>
      <p className="m-12 text-white">Inventory Page</p>
    </QueryClientProvider>
  );
};
