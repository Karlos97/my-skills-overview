import Button from '@atoms/Button/Button';
import useErrorNotification from '@hooks/useErrorNotification';
import ErrorNotification from '@atoms/ErrorNotification/ErrorNotification';
import { useDeleteRecord } from '@/helpers/hooks/useDeleteRecord';

const RemoveAccoutingRecordForm = ({ id }: { id: string | null }) => {
  const { error, isErrorVisible, triggerError } = useErrorNotification();

  const mutation = useDeleteRecord({
    queryKey: ['records'],
    triggerError,
  });

  const onClickHandler = async () => {
    if (id === null) {
      triggerError(`Error: removing item id cannot be null.`);
      return;
    }

    mutation.mutate(id);
  };

  return (
    <>
      <p className="mb-12 text-sm">Are you sure you want to delete record?</p>
      <Button
        onClick={onClickHandler}
        className="bg-red-500 hover:bg-red-700 mt-auto"
      >
        Remove Record
      </Button>
      {isErrorVisible && error && <ErrorNotification error={error} />}
    </>
  );
};

export default RemoveAccoutingRecordForm;
