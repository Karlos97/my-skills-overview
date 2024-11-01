import { useTranslation } from 'react-i18next';
import RecordsTable from '@organisms/RecordsTable/RecordsTable';
import Page from '@templates/Page/Page';

const RecordsPage = () => {
  const { t } = useTranslation();

  return (
    <Page>
      <div className="h-full w-full mb-auto">
        <h1 className="mb-6 text-3xl text-gray-600 dark:text-white font-bold text-center">
          {t('recordsTable.header')}
        </h1>
        <RecordsTable />
      </div>
    </Page>
  );
};

export default RecordsPage;
