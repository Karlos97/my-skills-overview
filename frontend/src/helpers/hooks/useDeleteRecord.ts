import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteRecord } from '../removeBankRecords';

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
    mutationFn: (id: string) => deleteRecord(id),
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
