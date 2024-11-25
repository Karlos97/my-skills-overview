import { useTranslation } from 'react-i18next';

import Button from '@atoms/Button/Button';
import AccountingForm from '@organisms/AccountingForm/AccountingForm';
import Modal from '@organisms/Modal/Modal';
import RecordsTable from '@organisms/RecordsTable/RecordsTable';
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
        <p className="text-center text-sm sm:text-base text-gray-900 dark:text-white mb-8">
          {t('recordsTable.description-1')}
          <a
            href="https://atomicdesign.bradfrost.com/chapter-2/"
            className="text-blue-500 underline"
          >
            Atomic Design
          </a>
          {t('recordsTable.description-2')}
        </p>

        <RecordsTable />

        <div className="flex justify-end items-end mt-4">
          <Button
            className="px-8 py-2 rounded bg-blue-500 dark:bg-gray-600 text-white dark:text-white"
            onClick={openModal}
          >
            {t('recordsTable.addRecordButton')}
          </Button>
        </div>
      </div>
    </>
  );
};

export default RecordsPage;
