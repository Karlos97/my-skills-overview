import { useMutation, useQueryClient } from '@tanstack/react-query';
import { backendLink } from '../constans';

interface UseFetchAccountingRecords {
  queryKey: string[];
  triggerError: (message: string) => void;
}

export const useDeleteRecord = ({
  queryKey,
  triggerError,
}: UseFetchAccountingRecords) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      const response = await fetch(`${backendLink}/api/accounting`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });
      const jsonResponse = await response.json();

      if (!response.ok) {
        const error = jsonResponse.error || '';

        triggerError(
          `Failed to send data with message: ${error}. Please try again.`,
        );
        throw new Error(error);
      }

      return jsonResponse;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey });
    },
    onError: (error: Error) => {
      triggerError(
        `Failed to send data with message: ${error?.message}. Please try again.`,
      );
    },
  });
};
