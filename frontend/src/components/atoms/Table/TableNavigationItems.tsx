import { useTranslation } from 'react-i18next';

interface NavigationItemCommonProps {
  currentPage: number;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>, pageNumber: number) => void;
}

interface NavigationItemProps extends NavigationItemCommonProps {
  page: number;
}

interface TableNavigationItemProps extends NavigationItemCommonProps {
  pages: number;
  isPrevious?: boolean;
}

export const TableNavigationNumber = ({
  page,
  currentPage,
  onClick,
}: NavigationItemProps) => (
  <li key={page}>
    <a
      onClick={(e) => onClick(e, page)}
      className={`flex items-center justify-center px-3 h-8 leading-tight border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer ${
        currentPage === page
          ? 'text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:bg-gray-700 dark:text-white'
          : 'text-gray-500 bg-white dark:bg-gray-800 dark:text-gray-400'
      }`}
    >
      {page}
    </a>
  </li>
);

export const TableNavigationItem = ({
  pages,
  currentPage,
  onClick,
  isPrevious = false,
}: TableNavigationItemProps) => {
  const { t } = useTranslation();
  const toPage = isPrevious
    ? currentPage - 1 || 1
    : Math.min(currentPage + 1, pages);

  return (
    <li>
      <a
        onClick={(e) => onClick(e, toPage)}
        className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
          isPrevious ? 'rounded-s-lg' : 'rounded-e-lg'
        }`}
      >
        {isPrevious
          ? t('recordsTable.tableNavigation.previous')
          : t('recordsTable.tableNavigation.next')}
      </a>
    </li>
  );
};

export const PageNumbers = ({
  pages,
  currentPage,
  onClick,
}: {
  pages: number;
  currentPage: number;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>, pageNumber: number) => void;
}) => {
  let start = 1;

  if (pages <= 5) {
    start = 1;
  } else if (currentPage >= pages - 2) {
    start = pages - 4;
  } else {
    start = Math.max(currentPage - 2, 1);
  }

  const pageNumbers = Array.from(
    { length: Math.min(5, pages - start + 1) },
    (_, i) => start + i,
  );

  return (
    <>
      {pageNumbers.map((page) => (
        <TableNavigationNumber
          page={page}
          currentPage={currentPage}
          onClick={onClick}
          key={page}
        />
      ))}
    </>
  );
};
