import { ReactNode } from 'react';
import AccountingForm from '@organisms/AccountingForm/AccountingForm';
import Header from '@organisms/Header/Header';
import Footer from '@organisms/Footer/Footer';
import Modal from '@organisms/Modal/Modal';
import Button from '@atoms/Button/Button';
import useModal from '@/helpers/hooks/useModal';
import { useTranslation } from 'react-i18next';

const Page = ({ children }: { children: ReactNode }) => {
  const { isModalOpen, openModal, closeModal } = useModal();
  const { t } = useTranslation();

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Add record">
        <AccountingForm />
      </Modal>
      <div className="h-full w-full flex flex-col bg-gray-50 dark:bg-gray-800 px-4 md:px-16 lg:-x-32">
        <Header />
        {children}
        <Footer>
          <Button
            className="px-8 py-2 rounded bg-blue-500 dark:bg-gray-600 text-white dark:text-white"
            onClick={openModal}
          >
            {t('footer.addRecordButton')}
          </Button>
        </Footer>
      </div>
    </>
  );
};

export default Page;
