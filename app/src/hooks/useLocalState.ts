import { QueryClient } from "@tanstack/react-query";

/**
 * Do not import and use this directly.
 * Should be used in conjunction with QueryClientProvider from react-query.
 * Then when you want to use the localQueryClient, you can use the useQueryClient hook from react-query.
 * 
 * @example 
 * ```
 * // ComponentOne.tsx
  
  import { QueryClientProvider } from "@tanstack/react-query";
 
  export const ComponentOne = () => {
    const { localQueryClient } = useLocalState();
  
    return (
      <QueryClientProvider client={localQueryClient}>
        ... JSX
      </QueryClientProvider>
    )
  }

  // ComponentTwo.tsx

  import { useQueryClient } from "@tanstack/react-query";

  export const ComponentTwo = () => {
    // queryClient is the localQueryClient given to the provider in ComponentOne
    const queryClient = useQueryClient()

    return (
      ... JSX
    )
  }
 * ```
 **/
const localQueryClient = new QueryClient({
  // defaultOptions: {
  //   queries: {
  //     staleTime: 1000 * 60 * 5,
  //   },
  // },
});

export { localQueryClient };
