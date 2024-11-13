import { ReactNode } from 'react';

interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  isSmall?: boolean;
  children: ReactNode;
}

const Modal = ({ isOpen, onClose, title, isSmall, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`flex flex-col rounded-lg p-10 bg-white dark:bg-custom-dark-500 ${isSmall ? 'w-4/5 md:w-1/2 lg:w-1/3 h-2/5' : 'w-5/6 md:w-3/5 lg:w-2/4 h-5/6'}  overflow-y-auto text-black dark:text-white`}
      >
        <h2 className="text-xl mb-4">{title}</h2>
        <div className="flex flex-col flex-grow">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
