import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Input from '@atoms/Input/Input';
import Select from '@atoms/Select/Select';
import Button from '@atoms/Button/Button';
import useErrorNotification from '@hooks/useErrorNotification';
import ErrorNotification from '@atoms/ErrorNotification/ErrorNotification';
import useAddAccountingRecord from '@/helpers/hooks/useAddAccountingRecord';
import { useEffect } from 'react';
import { Record } from '../RecordsTable/RecordsTable';
import useEditAccountingRecord from '@/helpers/hooks/useEditAccountingRecord';
import { useTranslation } from 'react-i18next';
import { FormData, formSchema, TransactionType } from './formSchema';

interface AccountingFormProps {
  formData?: Record | null;
  onClose?: () => void;
}
const AccountingForm = (props: AccountingFormProps) => {
  const { error, isErrorVisible, triggerError } = useErrorNotification();
  const { t } = useTranslation();
  const { formData, onClose } = props;

  const addRecordMutation = useAddAccountingRecord({
    queryKey: ['records'],
    triggerError,
    onSuccess: () => onClose?.(),
  });

  const editRecordMutation = useEditAccountingRecord({
    queryKey: ['records'],
    triggerError,
    onSuccess: () => onClose?.(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    if (formData) {
      editRecordMutation.mutate({ ...data, id: formData.id });
      reset();
    } else {
      addRecordMutation.mutate(data);
      reset();
    }
    onClose?.();
  };

  const formatTransactionType = (type: string) => {
    return type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();
  };

  useEffect(() => {
    if (formData) {
      setValue('accountNumber', formData.accountNumber);
      setValue('accountName', formData.accountName);
      setValue('address', formData.address);
      setValue('amount', formData.amount);
      setValue('iban', formData.iban);
      setValue('type', formData.type);
    }
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <Input
        label={t('recordsTable.form.modalFields.accountNumber')}
        type="number"
        {...register('accountNumber')}
        error={errors.accountNumber}
      />
      <Input
        label={t('recordsTable.form.modalFields.accountName')}
        {...register('accountName')}
        error={errors.accountName}
      />
      <Input
        label={t('recordsTable.form.modalFields.iban')}
        {...register('iban')}
        error={errors.iban}
      />
      <Input
        label={t('recordsTable.form.modalFields.address')}
        {...register('address')}
        error={errors.address}
      />
      <Input
        label={t('recordsTable.form.modalFields.amount')}
        type="number"
        step="any"
        {...register('amount', { valueAsNumber: true })}
        error={errors.amount}
      />
      <Select
        label={t('recordsTable.form.modalFields.type')}
        options={[
          {
            value: t(TransactionType.SENDING),
            label: formatTransactionType(
              t('recordsTable.form.modalFields.validationSchema.typeSending'),
            ),
          },
          {
            value: t(TransactionType.RECEIVING),
            label: formatTransactionType(
              t('recordsTable.form.modalFields.validationSchema.typeReceiving'),
            ),
          },
        ]}
        {...register('type')}
        error={errors.type}
      />
      <Button type="submit">
        {formData
          ? t('recordsTable.form.editForm.button')
          : t('recordsTable.form.addForm.button')}
      </Button>
      {isErrorVisible && error && <ErrorNotification error={error} />}
    </form>
  );
};

export default AccountingForm;
