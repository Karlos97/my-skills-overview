import { useTranslation } from 'react-i18next';
import RecordsTable from '@organisms/RecordsTable/RecordsTable';
import Button from '@atoms/Button/Button';
import Modal from '@organisms/Modal/Modal';
import AccountingForm from '@organisms/AccountingForm/AccountingForm';
import useModal from '@hooks/useModal';

const RecordsPage = () => {
  const { isModalOpen, openModal, closeModal } = useModal();
  const { t } = useTranslation();

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Add record">
        <AccountingForm onClose={closeModal} />
      </Modal>
      <div className="h-full w-full mb-auto">
        <h1 className="mb-6 text-3xl text-gray-600 dark:text-white font-bold text-center">
          {t('recordsTable.header')}
        </h1>

        <RecordsTable />

        <div className="flex justify-end items-end">
          <Button
            className="px-8 py-2 rounded bg-blue-500 dark:bg-gray-600 text-white dark:text-white"
            onClick={openModal}
          >
            {t('footer.addRecordButton')}
          </Button>
        </div>
      </div>
    </>
  );
};

export default RecordsPage;
