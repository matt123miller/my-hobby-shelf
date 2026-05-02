import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Paint } from "@typing";

const PaintSelectionKey = ["paint", "selection"];

const selection: Paint[] = [];

export const useLocalPaintSelection = () => {
  const queryClient = useQueryClient();

  const paintSelectionQuery = useQuery({
    queryKey: PaintSelectionKey,
    queryFn: () => Promise.resolve(selection),
  });

  const addPaintMutation = useMutation({
    mutationFn: (paint: Paint) => {
      selection.push(paint);
      return Promise.resolve(selection);
    },
    onSuccess: (data) => {
      queryClient.setQueryData(PaintSelectionKey, data);
      // This feels like it should be unnecessary and handled but setQueryData above??
      paintSelectionQuery.refetch();
    },
  });

  const removePaintMutation = useMutation({
    mutationFn: (paint: Paint) => {
      const index = selection.findIndex((p) => p.hexCode === paint.hexCode);
      selection.splice(index, 1);
      return Promise.resolve(selection);
    },
    onSuccess: (data) => {
      queryClient.setQueryData(PaintSelectionKey, data);
      paintSelectionQuery.refetch();
    },
  });

  return {
    paintSelectionQuery,
    addPaintMutation,
    removePaintMutation,
  } as const;
};
