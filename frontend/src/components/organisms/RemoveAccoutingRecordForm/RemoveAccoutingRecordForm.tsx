import Button from '@atoms/Button/Button';
import useErrorNotification from '@hooks/useErrorNotification';
import ErrorNotification from '@atoms/ErrorNotification/ErrorNotification';
import { useDeleteRecord } from '@/helpers/hooks/useDeleteRecord';
import { useTranslation } from 'react-i18next';

interface RemoveAccoutingRecordFormProps {
  id: string | null;
  onClose?: () => void;
}

const RemoveAccoutingRecordForm = ({
  id,
  onClose,
}: RemoveAccoutingRecordFormProps) => {
  const { error, isErrorVisible, triggerError } = useErrorNotification();
  const { t } = useTranslation();

  const mutation = useDeleteRecord({
    queryKey: ['records'],
    triggerError,
    onSuccess: () => onClose?.(),
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
      <p className="mb-12 text-sm">
        {t('recordsTable.form.removeForm.confirmationHeader')}
      </p>
      <Button
        onClick={onClickHandler}
        className="bg-red-500 hover:bg-red-700 mt-auto"
      >
        {t('recordsTable.form.removeForm.button')}
      </Button>
      {isErrorVisible && error && <ErrorNotification error={error} />}
    </>
  );
};

export default RemoveAccoutingRecordForm;
