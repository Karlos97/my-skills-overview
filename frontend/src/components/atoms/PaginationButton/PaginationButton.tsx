import React from 'react';
import Button from '../Button/Button';

interface PaginationButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  isActive?: boolean;
  isIcon?: boolean;
}

const PaginationButton = ({
  children,
  onClick,
  disabled,
  isActive,
  isIcon,
}: PaginationButtonProps) => (
  <li
    className={`  ${
      isActive
        ? 'block size-8 rounded border-blue-600 bg-blue-600 dark:border-gray-500 dark:bg-gray-500 text-center leading-8 text-white'
        : ''
    } ${
      isIcon
        ? 'inline-flex size-8 items-center justify-center rounded bg-white text-gray-900 rtl:rotate-180'
        : ''
    } `}
  >
    {isActive ? (
      children
    ) : (
      <Button
        className={`text-lg fill-gray-700 w-full h-full ${disabled ? '' : 'cursor-pointer'} ${
          isIcon
            ? 'flex justify-center items-center flex-col block size-8 rounded border border-gray-100 bg-white dark:bg-gray-100 dark:border-gray-400 hover:bg-white'
            : ''
        }`}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </Button>
    )}
  </li>
);

export default PaginationButton;
