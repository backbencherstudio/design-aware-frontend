import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api, type InsertSubscriber } from "@shared/routes";

// Although the implementation notes say no forms, standard practice is to have the hook ready
// in case we need a "Notify Me" or similar functionality later.
// The route exists in the schema provided.

export function useCreateSubscriber() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (data: InsertSubscriber) => {
      const res = await fetch(api.subscribers.create.path, {
        method: api.subscribers.create.method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
        credentials: "include",
      });

      if (!res.ok) {
        if (res.status === 400) {
          const error = api.subscribers.create.responses[400].parse(await res.json());
          throw new Error(error.message);
        }
        throw new Error('Failed to subscribe');
      }

      return api.subscribers.create.responses[201].parse(await res.json());
    },
    // No list query to invalidate yet as this is a write-only operation for now
  });
}
