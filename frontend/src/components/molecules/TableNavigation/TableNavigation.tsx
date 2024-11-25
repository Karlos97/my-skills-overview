import {
  PageNumbers,
  TableNavigationItem,
} from '@/components/atoms/Table/TableNavigationItems';
import { useTranslation } from 'react-i18next';

interface TableNavigationProps {
  className?: string;
  pages: number;
  currentPage: number;
  items: number;
  totalItems: number;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>, pageNumber: number) => void;
}

export const TableNavigation = ({
  pages,
  currentPage,
  items,
  totalItems,
  onClick,
}: TableNavigationProps) => {
  const { t } = useTranslation();
  return (
    <nav
      className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
      aria-label="Table navigation"
    >
      <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
        {t('recordsTable.tableNavigation.showing')}
        <span className="font-semibold text-gray-900 dark:text-white">
          {` ${currentPage * items - items + 1} - ${currentPage * items} `}
        </span>
        {t('recordsTable.tableNavigation.of')}
        <span className="font-semibold text-gray-900 dark:text-white">
          {` ${totalItems}`}
        </span>
      </span>
      <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
        <TableNavigationItem
          pages={pages}
          currentPage={currentPage}
          onClick={onClick}
          isPrevious
        />
        <PageNumbers
          pages={pages}
          currentPage={currentPage}
          onClick={onClick}
        />
        <TableNavigationItem
          pages={pages}
          currentPage={currentPage}
          onClick={onClick}
        />
      </ul>
    </nav>
  );
};
